import Spinner from "../../ui/Spinner";
import ProductRow from "./ProductRow";
import { useProducts } from "./useProducts";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function ProductTable() {
  const { isLoading, products, error } = useProducts();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (error) return <div>Errors...</div>;

  const filterValue = searchParams.get("discount") || "all";

  let filteredProducts;
  if (filterValue === "all") filteredProducts = products.data.data;
  if (filterValue === "no-discount")
    filteredProducts = products.data.data.filter(
      (product) => product.discount === 0
    );
  if (filterValue === "with-discount")
    filteredProducts = products.data.data.filter(
      (product) => product.discount > 0
    );

  const sortBy = searchParams.get("sortBy") || "createdAt-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedProducts = filteredProducts.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Image</div>
          <div>Category</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedProducts}
          render={(product) => (
            <ProductRow product={product} key={product._id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ProductTable;
