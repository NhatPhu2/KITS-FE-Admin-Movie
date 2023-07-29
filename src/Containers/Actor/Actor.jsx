import { styled } from "styled-components";
import Layout from "../../Components/Layout/Layout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import TableListActor from "../../Components/TableList/TableListActor";
import ModalFormAdd from "../../Components/Modal/ModalFormAdd";
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

const Actor = () => {
  return (
    <Layout>
      <StyledMovie>
        <div className="presentation">
          <div className="breadcrumbsLeft">
            <h1>Actor List</h1>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Dashboard
              </Link>
              <Link underline="hover" color="inherit" href="/movie">
                Actor
              </Link>
              <Typography color="text.primary">List</Typography>
            </Breadcrumbs>
          </div>
          <div className="btnAdd">
            <ModalFormAdd>
                New Actor
            </ModalFormAdd>
          </div>
        </div>
        <TableListActor />
      </StyledMovie>
    </Layout>
  );
};
export default Actor;
