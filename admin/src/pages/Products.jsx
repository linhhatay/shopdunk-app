import { useState } from "react";
import ProductTable from "../features/products/ProductTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateProductForm from "../features/products/CreateProductForm";

function Products() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All products</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <ProductTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new product
        </Button>
        {showForm && <CreateProductForm />}
      </Row>
    </>
  );
}

export default Products;
