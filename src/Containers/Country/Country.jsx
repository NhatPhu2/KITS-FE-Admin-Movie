import { styled } from "styled-components";
import Layout from "../../Components/Layout/Layout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ModalFormAdd from "../../Components/Modal/ModalFormAdd";
import TableListCountry from "../../Components/TableList/TableListCountry";
const StyledMovie = styled.div`
  width: 100%;
  .presentation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      height: 3em;
    }
    .btnAdd {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Country = () => {
  return (
    <Layout>
      <StyledMovie>
        <div className="presentation">
          <div className="breadcrumbsLeft">
            <h1>Country List</h1>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Dashboard
              </Link>
              <Link underline="hover" color="inherit" href="/movie">
                Country
              </Link>
              <Typography color="text.primary">List</Typography>
            </Breadcrumbs>
          </div>
          <div className="btnAdd">
            <ModalFormAdd>
                New Country
            </ModalFormAdd>
          </div>
        </div>
        <TableListCountry />
      </StyledMovie>
    </Layout>
  );
};
export default Country;
