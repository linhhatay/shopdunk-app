const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router
  .route("/top-products")
  .get(productController.aliasTopProducts, productController.getAllProducts);

router
  .route("/")
  .get(productController.getAllProducts)
  .post(
    productController.uploadProductImages,
    productController.resizeImages,
    productController.createProduct
  );

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
