import React from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";
import { styled } from "styled-components";
import { ReactComponent as IconFilter } from "../../assets/icons/iconFilter2.svg";

const data = [
  [{ name: "Current Customers", value: 85, fill: "#5F27CD" }],
  [{ name: "New Customers", value: 66, fill: "#6C6C6C" }],
  [{ name: "Target Customers", value: 90, fill: "#FF8918" }],
  [{ name: "Retarget Customers", value: 30, fill: "#FF6F61" }],
];
const StyledBox = styled.div`
  box-shadow: 2px 4px 24px 0px rgba(185, 184, 184, 0.7);
  border-radius: 20px;
  width: 30%;
  background-color: #ffffff;
  h4 {
    font-family: "Roboto";
    font-size: 30px;
    font-weight: 700;
    margin-top: 34px;
    margin-bottom: 0;
    color: #535353;
  }
  p {
    margin-bottom: 0;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 600;
    color: #a7a7a7;
  }
  .titCircula {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 116px;
    svg {
      margin-top: 34px;
    }
  }
  .p {
    margin-top: 0;
  }
  .circula {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-column-gap: 50px;
    grid-row-gap: 36px;
    margin-top: 30px;
  }
  .perCircula {
    text-align: center;
  }
`;
const Box = ({ children }) => {
  return (
    <StyledBox>
      <div className="titCircula">
        <div>
          <h4>Customers</h4>
          <p className="p">Infomation about your customers</p>
        </div>
        <IconFilter />
      </div>
      <div className="circula">{children}</div>
    </StyledBox>
  );
};
const FourPieChart = () => {
  const circleSize = 157;
  return (
    <Box>
      {data.map((e) => {
        console.log(e);
        return (
          <div className="perCircula">
            <RadialBarChart
              width={circleSize}
              height={150}
              cx={circleSize / 2}
              cy={circleSize / 2}
              innerRadius="85%"
              outerRadius="100%"
              barSize={20}
              data={e}
              startAngle={90}
              endAngle={450}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                clockWise
                dataKey="value"
                fill={e[0].fill}
              />
              <text
                x={circleSize / 2.2}
                y={circleSize / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="progress-label"
                fill={e[0].fill}
                fontSize={36}
                fontFamily="Roboto"
                fontWeight={700}
              >
                {e[0].value}
              </text>
              <text
                x={circleSize / 1.7}
                y={circleSize / 1.9}
                textAnchor="start"
                dominantBaseline="start"
                fontSize={18}
                fontWeight={700}
              >
                %
              </text>
            </RadialBarChart>
            <p>{e[0].name}</p>
          </div>
        );
      })}
    </Box>
  );
};
export default FourPieChart;
