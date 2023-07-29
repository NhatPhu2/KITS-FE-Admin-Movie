import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
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

import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "@mui/material";
import ModalFormAddEposide from '../Modal/ModalFormAddEposide';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const StyledTableList = styled.div`
  img {
    width: 100%;
  }
  .description {
    text-align: left;
  }
  .actionBtn {
    width: 14%;
    text-align: center;
  }
`;

const headCells = [
  {
    id: "username",
    numeric: false,
    disablePadding: true,
    label: "Username",
  },
  {
    id: "isActive",
    numeric: true,
    disablePadding: false,
    label: "Is Active",
  },
  {
    id: "fullName",
    numeric: true,
    disablePadding: false,
    label: "Full Name",
  },
  {
    id: "address",
    numeric: true,
    disablePadding: false,
    label: "Address",
  },
  {
    id: "avatar",
    numeric: true,
    disablePadding: false,
    label: "Avatar",
  },
  {
    id: "dateOfBirth",
    numeric: true,
    disablePadding: false,
    label: "Date Of Birth",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email",
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
        Account List
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

const TableListAccount = () => {

  const accounts = useSelector((prop) => prop.account);
  const dispatch = useDispatch();
  useEffect(() => {
    getAccounts(0)
  }, []);
  const [totalPages, setTotalPages] = useState(2);
  const getAccounts = async (page) => {
    { accounts.listAccount && setTotalPages(accounts.listAccount.totalPage) }
    dispatch.account.getAllAccount(page);
  }
  const handlePageClick = (event, i) => {
    getAccounts(i - 1)
  }
  // const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = 5;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = movies.listMovie.data.slice(firstIndex, lastIndex);
  // const nPage = Math.ceil(movies.listMovie.data.length / recordsPerPage);
  // const numbers = [...Array(nPage + 1).keys()].slice(1);

  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <StyledTableList>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <EnhancedTableHead
                rowCount={accounts.listAccount && accounts.listAccount.length}
              />
              <TableBody>
                {accounts.listAccount &&
                  accounts.listAccount.data.map((el, i) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }} key={i}
                    >
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="center">{el.username}</TableCell>
                      <TableCell align="center">{el.isActive == 1 ? <p>true</p> : <p>false</p>}</TableCell>
                      <TableCell align="center">{el.fullName}</TableCell>
                      <TableCell align="center">{el.address}</TableCell>
                      <TableCell align="center">{el.avatar}</TableCell>
                      <TableCell align="center">{el.dateOfBirth}</TableCell>
                      <TableCell align="center">{el.email}</TableCell>
                      <TableCell className="actionBtn" align="center">
                        <Button variant="outlined" color="secondary">
                          Edit
                        </Button>
                        <Button variant="outlined" color="error">
                          Delete
                        </Button>

                      </TableCell>
                    </TableRow>
                  ))}
                <TableRow
                  style={{
                    height: 33,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
          <Stack alignItems={"center"}>
            <Pagination onChange={handlePageClick} count={totalPages} variant="outlined" color="primary" />
          </Stack>
        </Paper>
      </Box>
    </StyledTableList>
  );
};
export default TableListAccount;
