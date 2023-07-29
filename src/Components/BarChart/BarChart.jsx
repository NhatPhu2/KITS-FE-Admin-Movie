import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
import { styled } from "styled-components";
import { ReactComponent as DownArrow } from "../../assets/icons/downArrow.svg";
const data = [
  {
    name: "Jan",
    uv: 4000,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
  },
];

const StyledBarChart = styled.div`
  box-shadow: 2px 4px 24px 0px rgba(185, 184, 184, 0.7);
  background-color: #ffffff;
  border-radius: 20px;
  width: 68%;
  height: 585px;
  .topBarChart {
    display: flex;
    justify-content: space-around;
    gap: 560px;
    align-items: center;
    .left {
      padding-left: 10%;
    }
    h4 {
      font-family: "Roboto";
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
      color: #a7a7a7;
      margin-top: 34px;
      margin-bottom: 8px;
    }
    p {
      font-family: "Roboto";
      font-size: 36px;
      font-weight: 500px;
      line-height: 42px;
      margin-top: 0;
    }
    .right {
      cursor: pointer;
      font-family: "Roboto";
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      width: 76px;
      height: 14px;
      background-color: #fff8e5;
      padding: 11px 8px;
      border-radius: 7px;
      box-shadow: 0px 4px 4px 0px #00000040;
    }
    span {
      padding-right: 4px;
    }
  }
`;
const FirstBarChart = () => {
  return (
    <StyledBarChart>
      <div className="topBarChart">
        <div className="Left">
          <h4>Total Revenue</h4>
          <p>$980,273.00</p>
        </div>
        <div className="right">
          <div className="menuRight">
            <span>THIS YEAR</span> <DownArrow />
          </div>
        </div>
      </div>
      <ResponsiveContainer
        width="100%"
        height="60%"
        minWidth="500px"
        minHeight="400px"
      >
        <BarChart
          barGap={0}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis tickLine={false} axisLine={false} dataKey="name" />
          <Bar radius={[13, 13, 0, 0]} dataKey="pv" fill="#AEAEAE" />
          <Bar radius={[13, 13, 0, 0]} dataKey="uv" fill="#FF6F61" />
        </BarChart>
      </ResponsiveContainer>
    </StyledBarChart>
  );
};
export default FirstBarChart;
