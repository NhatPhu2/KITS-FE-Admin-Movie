import { styled } from "styled-components";
import Layout from "../../Components/Layout/Layout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ModalFormAdd from "../../Components/Modal/ModalFormAdd";
import TableListDirector from "../../Components/TableList/TableListDirector";
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

const Director = () => {
  return (
    <Layout>
      <StyledMovie>
        <div className="presentation">
          <div className="breadcrumbsLeft">
            <h1>Director List</h1>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Dashboard
              </Link>
              <Link underline="hover" color="inherit" href="/movie">
                Director
              </Link>
              <Typography color="text.primary">List</Typography>
            </Breadcrumbs>
          </div>
          <div className="btnAdd">
            <ModalFormAdd>
                New Director
            </ModalFormAdd>
          </div>
        </div>
        <TableListDirector />
      </StyledMovie>
    </Layout>
  );
};
export default Director;
