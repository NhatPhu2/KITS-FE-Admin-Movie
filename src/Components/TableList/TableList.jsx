import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

import { useEffect } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import ModalFormAddEposide from "../Modal/ModalFormAddEposide";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ModalDelete from "../Modal/ModalDelete";
import ModalFormUpdate from "../Modal/ModalFormUpdate";

const StyledTableList = styled.div`
  img {
    width: 6em;
  }
  .description {
    text-align: left;
  }
  .actionBtn {
    width: 14%;
    text-align: center;
  }
  .flexAction{
    /* width: 60%; */
    display: flex;
    align-items: center;
    gap: 1em;
  }
`;

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "id",
  },
  {
    id: "movieName",
    numeric: true,
    disablePadding: false,
    label: "Movie Name",
  },
  {
    id: "video",
    numeric: true,
    disablePadding: false,
    label: "Video",
  },
  {
    id: "mainPoster",
    numeric: true,
    disablePadding: false,
    label: "Main Poster",
  },
  {
    id: "billingPlan_billingPlanName",
    numeric: true,
    disablePadding: false,
    label: "Billing Plan Name",
  },
  {
    id: "releasedDate",
    numeric: true,
    disablePadding: false,
    label: "Released Date",
  },
  {
    id: "description",
    numeric: true,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Movie List
      </Typography>
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const TableList = () => {

  const movies = useSelector((prop) => prop.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies(0)
    //đây
  }, []);
  const getMovies = async (page) => {
    await dispatch.movie.getAllMovie(page);
  }
  const handlePageClick = (event, i) => {
    getMovies(i - 1)
  }
  return (
    <StyledTableList>
      <Box sx={{ width: "100%" }}>
        {
          movies.listMovie &&
          (
            <Paper sx={{ width: "100%", mb: 2 }}>
              <EnhancedTableToolbar />
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={"medium"}
                >
                  <EnhancedTableHead
                    rowCount={movies.listMovie && movies.listMovie.length}
                  />
                  <TableBody>
                    {movies.listMovie.data.map((el, i) => (
                      <TableRow
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        key={i}
                      >
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="center">{el.id}</TableCell>
                        <TableCell align="center">{el.movieName}</TableCell>
                        <TableCell align="center">{el.video}</TableCell>
                        <TableCell align="center">
                          <img
                            src={
                              process.env.REACT_APP_IMG_URL + "/" + el.mainPoster
                            }
                            alt=""
                          />{" "}
                        </TableCell>
                        <TableCell align="center">
                          {el.billingPlan_billingPlanName}
                        </TableCell>
                        <TableCell align="center">{el.releasedDate}</TableCell>
                        <TableCell className="description" align="center">
                          {el.description}
                        </TableCell>
                        <TableCell className="actionBtn" align="center">
                          {el.series === true ? (
                            <div className="flexAction">
                              <ModalFormAddEposide id={el.id}>
                                New Eposide
                              </ModalFormAddEposide>
                              <ModalFormUpdate id={el.id}>Edit</ModalFormUpdate>
                              <ModalDelete id={el.id} />
                            </div>
                          ) : (
                            <div className="flexAction">
                              <ModalFormUpdate id={el.id}>Edit</ModalFormUpdate>
                              <ModalDelete id={el.id} />
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>{/* <TableCell colSpan={6} /> */}</TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Stack alignItems={"center"}>
                <Pagination onChange={handlePageClick} count={movies.listMovie.totalPage} variant="outlined" color="primary" />
              </Stack>
            </Paper>
          )
        }

      </Box>
    </StyledTableList>
  );
};
export default TableList;
