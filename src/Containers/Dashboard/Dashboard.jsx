import Layout from "../../Components/Layout/Layout";
import FirstBarChart from "../../Components/BarChart/BarChart";
import FourPieChart from "../../Components/PieChart/PieChart";
import Achievement from "../../Components/Achievements/Achievement";
import Stats from "../../Components/Stats/Stats";
import { styled } from "styled-components";

const StyledDashboard = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    width: 100%;
`
const Dashboard = () => {
    return(
        <Layout>
            <StyledDashboard>
                <FirstBarChart/>
                <FourPieChart/>
                <Achievement/>
                <Stats/>
            </StyledDashboard>
        </Layout>
    )
}
export default Dashboard;