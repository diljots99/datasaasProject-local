import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Modal,
  Select,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./styles";
import "./deleteConfirm.css";
import { CSVLink, CSVDownload } from "react-csv";
import moment from "moment";

import Checkbox from "@mui/material/Checkbox";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTable, usePagination } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanyNotes,
  deleteCompanyNotes,
} from "../../redux/actions/watchAction";

function Table({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  allSelected,
  setAllSelected,
  checked,
  setMultiDelete,
  setPostDeleteRenderHelper,
}) {
  const classess = useStyles();
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    pageCount,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 , pageSize:5},
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const renderPageButton = () => {
    let buttons = [];
    for (let i = 0; i < pageCount; i++) {
      if (pageIndex === 0) {
        if (
          i == pageIndex ||
          i == pageIndex + 1 ||
          i == pageIndex + 2 ||
          i == pageIndex + 3 ||
          i == pageIndex + 4
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      } else if (pageIndex === 1) {
        if (
          i == pageIndex - 1 ||
          i == pageIndex ||
          i == pageIndex + 1 ||
          i == pageIndex + 2 ||
          i == pageIndex + 3
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      } else if (pageIndex === pageCount - 1) {
        if (
          i == pageIndex - 4 ||
          i == pageIndex - 3 ||
          i == pageIndex - 2 ||
          i == pageIndex - 1 ||
          i == pageIndex
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      } else if (pageIndex === pageCount - 2) {
        if (
          i == pageIndex - 3 ||
          i == pageIndex - 2 ||
          i == pageIndex - 1 ||
          i == pageIndex ||
          i == pageIndex + 1
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      } else {
        if (
          i == pageIndex - 2 ||
          i == pageIndex - 1 ||
          i == pageIndex ||
          i == pageIndex + 1 ||
          i == pageIndex + 2
        ) {
          buttons.push(
            <button
              className="pagination-button"
              onClick={() => gotoPage(i)}
              style={{ backgroundColor: pageIndex == i ? "#40ACFB" : null }}
            >
              {i + 1}
            </button>
          );
        }
      }
    }
    return buttons;
  };

  // Render the UI for your table
  return (
    <>
      <MaUTable {...getTableProps()} className={classess.companyNotes}>
        <TableHead className={classess.tableheader}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <TableCell
                    {...column.getHeaderProps()}
                    className={classess.companynoteheader}
                  >
                    {column.render("Header")}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableHead>

        <TableBody>
          {/* action container   */}
          <TableRow>
            <TableCell>
              <div className={classess.checkBox}>
                <Checkbox
                  size="small"
                  checked={allSelected}
                  onChange={() => {
                    setAllSelected(!allSelected);
                  }}
                />
                <Typography variant="h6">Select all</Typography>
              </div>
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              {checked.length > 0 && (
                <CSVLink
                  style={{ textDecoration: "none" }}
                  data={data.filter((value) => checked.includes(value.id))}
                  target="_blank"
                  filename="DataSaas company notes "
                  disabled={true}
                >
                  <Button
                    className={classess.downloadButton}
                    color="primary"
                    size="small"
                    variant="contained"
                  >
                    Download Selected
                  </Button>
                </CSVLink>
              )}
            </TableCell>
            <TableCell style={{ textAlign: "right" }}>
              <Button
                className={classess.deleteButton}
                color="primary"
                size="small"
                variant="contained"
                onClick={() => {
                  setMultiDelete(true);
                  setPostDeleteRenderHelper(true);
                }}
                disabled={checked.length === 0}
              >
                Delete Selected
              </Button>
            </TableCell>
          </TableRow>

          {loading && <div>Loading ...</div>}

          {!loading &&
            rows.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell
                        {...cell.getCellProps()}
                        className={classess.comLast}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </MaUTable>
      {/* for Pagination */}
      <div className="pagination" style={{ justifyContent: "flex-end" }}>
        {/* <select
  className="select"
  val ue={pageSize}
  onChange={(e) => {
    setPageSize(Number(e.target.value));
  }}
> */}

        <Select
          className="select"
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          // open={open}
          // onClose={handleClose}
          // onOpen={handleOpen}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <MenuItem key={pageSize} value={pageSize}>
              {pageSize}
            </MenuItem>
            // <option className="select" key={pageSize} value={pageSize}>
            //   {pageSize}
            // </option>
          ))}
        </Select>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              className="page-item"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <span
                aria-hidden="true"
                style={{ position: "relative", top: "-3px" }}
              >
                &laquo;
              </span>
            </li>
            {renderPageButton()}
            <li
              className="page-item"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <span
                aria-hidden="true"
                style={{ position: "relative", top: "-3px" }}
              >
                &raquo;
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

const CompanyNoteList = () => {
  const classess = useStyles();
  let dataToken = JSON.parse(sessionStorage.getItem("userData"));
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const companyNotesIdRef = React.useRef(0);
  const [tabledata, settableData] = React.useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [checked, setChecked] = useState([]);
  const [postDeleteRenderHelper, setPostDeleteRenderHelper] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState("");
  const [multiDelete, setMultiDelete] = useState(false);

  useEffect(() => {
    if (!allSelected) {
      setChecked([]);
    } else {
      const temp = data.map((item, index) => {
        return item.id;
      });
      setChecked(temp);
    }
  }, [allSelected]);

  const dispatch = useDispatch();
  const { companyNotes } = useSelector((state) => state.watch);

  useEffect(() => {
    dispatch(getCompanyNotes());
  }, [postDeleteRenderHelper]);

  const data = companyNotes.map((company) => {
    return {
      id: company.id,
      user_id: company.user_id,
      companyName: company.n_company_name,
      createdOn: company.createdAt,
      text: company.n_text,
    };
  });

  const deleteItemSingle = async () => {
    const temp2 = {
      notes_id: itemIdToDelete,
      user_id: dataToken.id,
    };
    deleteData(temp2);
    setPostDeleteRenderHelper(!postDeleteRenderHelper);
    setMultiDelete(false);
  };

  const deleteItemMultiple = async () => {
    const dataToBeDeleted = {
      notes_id: checked,
      user_id: dataToken.id,
    };
    deleteData(dataToBeDeleted);
    setPostDeleteRenderHelper(false);
    setMultiDelete(false);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "companyName",
        Cell: ({ value, row }) => {
          return (
            <Grid container alignItems="center">
              <Grid item>
                <Checkbox
                  size="small"
                  checked={checked.includes(row.original.id)}
                  onChange={() => {
                    if (checked.includes(row.original.id)) {
                      const temp = checked.filter(
                        (item) => item !== row.original.id
                      );
                      setChecked(temp);
                    } else {
                      const temp = [...checked, row.original.id];
                      setChecked(temp);
                    }
                  }}
                />
              </Grid>

              <Grid item>
                <Typography variant="h6">{value}</Typography>{" "}
              </Grid>
            </Grid>
          );
        },
        width: 200,
      },
      {
        Header: "created on",
        accessor: "createdOn",
        Cell: ({ value }) => {
          return moment(value).format("YYYY/MM/DD");
        },
      },
      {
        Header: "Text",
        accessor: "text",
        Cell: ({ value, row }) => {
          return (
            <Grid container>
              <Grid item>
                <div dangerouslySetInnerHTML={{ __html: value }} />
                {/* <Typography variant="h6">{value}</Typography> */}
              </Grid>
              {/* {console.log("lmoa", row)} */}
            </Grid>
          );
        },
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: ({ value, row }) => {
          console.log("bdj row", row);
          return (
            <Grid container style={{ alignItems: "center" }}>
              <Grid item>
                <IconButton>
                  <CSVLink
                    data={[row.values]}
                    filename={`Notes ${row.values.companyName}`}
                  >
                    {" "}
                    <DownloadIcon />
                  </CSVLink>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton>
                  <DeleteIcon
                    onClick={() => {
                      setItemIdToDelete(value);
                      setPostDeleteRenderHelper(true);
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          );
        },
      },
    ],
    [checked, data, allSelected]
  );

  const deleteData = (toBeDeleted) => {
    dispatch(deleteCompanyNotes(toBeDeleted));
  };

  const fetchData = React.useCallback(
    ({ pageSize, pageIndex }) => {
      const fetchId = ++companyNotesIdRef.current;
      setLoading(true);

      setTimeout(() => {
        if (fetchId === companyNotesIdRef.current) {
          const startRow = pageSize * pageIndex;
          const endRow = startRow + pageSize;
          settableData(
            companyNotes
              .map((company) => {
                return {
                  id: company.id,
                  user_id: company.user_id,
                  companyName: company.n_company_name,
                  createdOn: company.createdAt,
                  text: company.n_text,
                };
              })
              .slice(startRow, endRow)
          );
          setPageCount(Math.ceil(companyNotes.length / pageSize));
          setLoading(false);
        }
      }, 2000);
    },
    [companyNotes]
  );

  return (
    <div className={classess.main}>
      <Grid container style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            style={{
              fontSize: "26px",
              fontFamily: "Poppins",
              lineHeight: "39px",
              fontWeight: "600",
              color: "#000000",
            }}
          >
            Company Note List
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classess.searchcontainer}>
          <TextField
            style={{
              background: "#FFFFFF",
              border: "1px solid #DCD9D9",
              textTransform: "capitalize",
              borderRadius: "6px",
            }}
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* Table component */}
      <Table
        columns={columns}
        data={tabledata}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
        pagination={true}
        allSelected={allSelected}
        setAllSelected={setAllSelected}
        checked={checked}
        setMultiDelete={setMultiDelete}
        setPostDeleteRenderHelper={setPostDeleteRenderHelper}
      />

      <Modal
        open={postDeleteRenderHelper}
        onClose={() => {
          setPostDeleteRenderHelper(false);
          multiDelete && setMultiDelete(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classess.model}>
          <h2 id="simple-modal-title" className={classess.modelHead}>
            Delete {multiDelete ? "Note's" : "Note"}
          </h2>
          {/* <Divider /> */}
          <p id="simple-modal-description" className={classess.modelPara}>
            Are you sure you want to delete{" "}
            {multiDelete ? "these Note's ?" : "this Note?"}
          </p>
          <Grid container className={classess.buttonMain}>
            <Grid item>
              <Button
                className={classess.buttonyes}
                variant="contained"
                size="large"
                color="primary"
                onClick={() => {
                  multiDelete ? deleteItemMultiple() : deleteItemSingle();
                }}
              >
                YES
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classess.buttonNo}
                variant="contained"
                size="large"
                style={{ backgroundColor: "#6c757d", width: "100px" }}
                color="primary"
                onClick={() => {
                  setPostDeleteRenderHelper(false);
                  multiDelete && setMultiDelete(false);
                }}
              >
                NO
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
};
export default CompanyNoteList;
