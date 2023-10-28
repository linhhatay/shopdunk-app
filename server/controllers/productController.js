const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadProductImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 6 },
]);

exports.resizeImages = catchAsync(async (req, res, next) => {
  if (!req.files?.imageCover) return next();

  // 1) Cover image
  req.body.imageCover = `product-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(640, 640)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/products/${req.body.imageCover}`);

  // 2) Images
  if (!req.files?.images) return next();
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `product-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(640, 640)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/img/products/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});

exports.aliasTopProducts = (req, res, next) => {
  req.query.limit = "7";
  req.query.sort = "-rating,price";
  next();
};

exports.searchProduct = catchAsync(async (req, res) => {
  const products = await Product.find({ name: { $regex: req.query.name } })
    .limit(10)
    .select("name imageCover");

  if (!products) {
    return next(new AppError("No document found with that name", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: products,
    },
  });
});

exports.createProduct = factory.createOne(Product);
exports.getAllProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product);
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
