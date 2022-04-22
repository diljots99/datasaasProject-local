import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Modal,
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
import { useTable } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanyNotes,
  deleteCompanyNotes,
} from "../../redux/actions/watchAction";

const CompanyNoteList = () => {
  const classess = useStyles();
  let dataToken = JSON.parse(sessionStorage.getItem("userData"));
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

              <Grid item><Typography variant="h6">{value}</Typography> </Grid>
            </Grid>
          );
        },
        width: 200,
      },
      {
        Header: "created on",
        accessor: "createdOn",
        Cell:({ value }) =>{
          return moment(value).format('YYYY/MM/DD')
        }
      },
      {
        Header: "Text",
        accessor: "text",
        Cell: ({ value, row }) => {
          return (
            <Grid container>
              <Grid item><Typography variant="h6">{value}</Typography></Grid>
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
            <Grid container style={{alignItems: "center"}}>
              <Grid item >
                <IconButton>
                  <CSVLink data={[row.values]} filename={`Notes ${row.values.companyName}`}>
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

  function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
      columns,
      data,
    });

    // Render the UI for your table
    return (
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
            {checked.length > 0 && <CSVLink style={{textDecoration: "none"}} data={data.filter( value => checked.includes(value.id))} target="_blank" filename="DataSaas company notes "  disabled={true}>
                <Button
                  className={classess.downloadButton}
                  color="primary"
                  size="small"
                  variant="contained"
                >
                  Download Selected
                </Button>
            </CSVLink >}
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

          {rows.map((row, i) => {
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
    );
  }

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
      <Table columns={columns} data={data} />

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
            Delete {multiDelete  ? "Note's" : "Note" }
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
