import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import ProductRow from "./ProductRow";
import { useProducts } from "./useProducts";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function ProductTable() {
  const { isLoading, products, error } = useProducts();

  if (isLoading) return <Spinner />;
  if (error) return <div>Errors...</div>;

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
          data={products.data.data}
          render={(product) => (
            <ProductRow product={product} key={product._id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ProductTable;
