import { ReactComponent as Visit } from "../../assets/icons/User-visit.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import { ReactComponent as HandBag } from "../../assets/icons/handBag.svg";
import { ReactComponent as Printer } from "../../assets/icons/printer.svg";
import Product1 from "../../assets/products/product1.svg";
import Product2 from "../../assets/products/product2.svg";
import { styled } from "styled-components";

const StyledAchievement = styled.div`
  box-shadow: 2px 4px 24px 0px rgba(185, 184, 184, 0.7);
  font-family: "Roboto";
  background-color: #ffffff;
  width: 68%;
  border-radius: 20px;
  padding-bottom: 20px;
  .Achie {
    width: 90%;
    margin: 0 auto;
    margin-top: 29px;
    display: flex;
    justify-content: space-between;
  }
  .title {
    margin: 0 52px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }
  .contents {
    margin: 0 52px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const StyledTotalCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  width: 130px;
  height: 80px;
  border-radius: 10px;
  background-color: #eeeeee;
  p:first-child {
    font-family: "Roboto";
    font-size: ${(props) => (props.fontSize ? props.fontSize : "13px")};
    font-weight: 600;
    color: #7b7878;
    margin: 0;
  }
  p {
    font-family: "Roboto";
    font-size: 13px;
    font-weight: 600;
    color: #7b7878;
    margin: 0;
  }
`;

const StyledInfoProduct = styled.div`
  width: 100%;
  background-color: #eeeeee;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 68px;
  p {
    margin: 0;
  }
  .name {
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }
  span {
    font-size: 14px;
    font-family: "Roboto";
    font-weight: 500;
    line-height: 16px;
  }
  .ProductItem {
    width: 36%;
    display: flex;
    align-items: center;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }
  .imgItem {
    img {
      width: 100%;
    }
  }
  .propper {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #7b7878;
  }
  .valu {
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
  }
  .center {
    text-align: center;
  }
`;
const TotalCard = ({ title, fontSize, number, children }) => {
  return (
    <StyledTotalCard fontSize={fontSize}>
      {children}
      <div>
        <p>{title}</p>
        <p>{number}</p>
      </div>
    </StyledTotalCard>
  );
};

const InforProduct = ({
  product,
  name,
  color,
  orders,
  inventory,
  sale,
  price,
  today,
}) => {
  return (
    <StyledInfoProduct>
      <div className="ProductItem">
        <div className="imgItem">
          <img src={product} alt="product" />
        </div>
        <div>
          <p className="name">{name}</p>
          <span>
            {color}-{orders}orders
          </span>
        </div>
      </div>
      <div className="center">
        <p className="propper">Inventory</p>
        <p className="valu">{inventory}</p>
      </div>
      <div className="center">
        <p className="propper">Sale</p>
        <p className="valu">${sale}</p>
      </div>
      <div className="center">
        <p className="propper">Price</p>
        <p className="valu">${price}</p>
      </div>
      <div className="center">
        <p className="propper">Today</p>
        <p className="valu">${today}</p>
      </div>
    </StyledInfoProduct>
  );
};
const Achievement = () => {
  return (
    <StyledAchievement>
      <div className="Achie">
        <TotalCard title={"Total Visits"} number={"10.8m"}>
          <Visit />
        </TotalCard>
        <TotalCard title={"Total Sales"} number={"100,345"}>
          <Cart />
        </TotalCard>
        <TotalCard title={"Total Made"} number={"$200k"}>
          <HandBag />
        </TotalCard>
        <TotalCard
          title={"Orders Completed"}
          fontSize={"10px"}
          number={"98,771"}
        >
          <Printer />
        </TotalCard>
      </div>
      <div className="title">
        <h4>Top Products</h4>
      </div>
      <div className="contents">
        <InforProduct
          product={Product1}
          color={"Pink"}
          orders={50}
          name={"Nike Sportswear Futura Luxe"}
          inventory={700}
          sale={"1,000.60"}
          price={"1,300.92"}
          today={"17,000.92"}
        />
        <InforProduct
          product={Product2}
          color={"Green"}
          orders={25}
          name={"Basic Dress"}
          inventory={200}
          sale={"1,200.60"}
          price={"1,500.92"}
          today={"12,000.82"}
        />
      </div>
    </StyledAchievement>
  );
};
export default Achievement;
