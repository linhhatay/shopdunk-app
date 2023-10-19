import styled from "styled-components";
import { format } from "date-fns";
import Table from "../../ui/Table";

// import { box } from "../../styles/styles";
import { formatDistanceFromNow } from "../../utils/helpers";
import { isToday } from "date-fns/esm";
import { formatCurrency } from "../../utils/helpers";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

const StyledOrderDataBox = styled.section`
  overflow: hidden;
`;

const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.4fr 2.4fr 1fr 3.2rem;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  /* padding: 2.4rem 4rem; */
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  /* font-size: 1.8rem; */
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

function OrderDataBox({ order }) {
  const {
    _id,
    orderNumber,
    customer,
    orderDate,
    paymentMethod,
    paymentStatus,
    products,
    shippingAddress,
    totalAmount,
    status,
  } = order.data.data;

  return (
    <StyledOrderDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>iPhone </p>
        </div>

        <p>{format(new Date(orderDate), "EEE, MMM dd yyyy")} </p>
      </Header>

      <Section>
        <Guest>
          <p>Linh Nguyễn</p>
          <span>&bull;</span>
          <p>ln14092@gmail.com</p>
          <span>&bull;</span>
          <p>Test</p>
        </Guest>
        <Table columns="2fr 1.4fr 2.4fr 1fr 3.2rem">
          <Table.Header>
            <div>Items</div>
            <div>Quantity</div>
            <div>Price</div>
            <div>Total Price</div>
            <div></div>
          </Table.Header>
          <Table.Body
            data={products}
            render={(product) => (
              <ProductRow>
                <div>
                  <span>{product.productItem}</span>
                  {"--"}
                  <span>{product?.color}</span>
                </div>
                <div>{product.quantity}</div>
                <div>{formatCurrency(product.unitPrice)}</div>
                <div>
                  {formatCurrency(product.quantity * product.unitPrice)}
                </div>
              </ProductRow>
            )}
          />
        </Table>

        <Price isPaid={paymentStatus === "Paid"}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalAmount)}
          </DataItem>

          <p>{paymentStatus === "Paid" ? "Paid" : "Will pay "}</p>
        </Price>
      </Section>

      <Footer>
        <p>Order {format(new Date(orderDate), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledOrderDataBox>
  );
}

export default OrderDataBox;
