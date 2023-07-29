import { styled } from "styled-components";
import { ReactComponent as IconFilter } from "../../assets/icons/iconFilter2.svg";

const data = [
  {
    title: "women",
    percent: 63,
  },
  {
    title: "men",
    percent: 88,
  },
  {
    title: "kids",
    percent: 38,
  },
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
    width: 96%;
    flex-wrap: wrap;
    justify-content: center;
    grid-row-gap: 16px;
    margin-top: 20px;
  }
  .titStat {
    margin-bottom: 8px;
    color: #535353;
    line-height: 16px;
  }
  .Stats {
    margin: 0 auto;
    width: 315px;
    height: 8px;
    background-color: #eeeeee;
    border-radius: 4px;
  }
  .womenStat {
    height: 8px;
    border-radius: 4px;
    background-color: #6c6c6c;
  }
  .menStat {
    height: 8px;
    border-radius: 4px;
    background-color: #ff6b6b;
  }
  .kidsStat {
    height: 8px;
    border-radius: 4px;
    background-color: #5f27cd;
  }
  .percent {
    margin-top: 4px;
    text-align: right;
    color: #535353;
    line-height: 16px;
  }
`;
const Box = ({ children }) => {
  return (
    <StyledBox>
      <div className="titCircula">
        <div>
          <h4>Stats Overview</h4>
          <p className="p">Infomation about store visits</p>
        </div>
        <IconFilter />
      </div>
      <div className="circula">{children}</div>
    </StyledBox>
  );
};
const Stats = () => {
  return (
    <Box>
      {data.map((e) => {
        return (
          <div>
            <p className="titStat">{e.title}</p>
            <div className="Stats">
              <div
                className={e.title + "Stat"}
                style={{ width: (315 * e.percent) / 100 }}
              ></div>
            </div>
            <p className="percent">{e.percent}%</p>
          </div>
        );
      })}
    </Box>
  );
};
export default Stats;
