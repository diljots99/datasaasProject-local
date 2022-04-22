import React, {useEffect} from "react";
import {
  Grid,
  Typography,
  IconButton,
  Button,
  FormControl,
  Modal,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useStyles } from "./styles";

import Checkbox from "@mui/material/Checkbox";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useTable } from "react-table";
import { Pagination } from "@mui/material";
import { useState } from "react";

const SavedSearches = () => {
  const classess = useStyles();
  const [pages, setPages] = useState(10);
  const [checked, setChecked] = useState([]);
  const [allSelected, setAllSelected] = useState(false);

  const [itemIdToDelete, setItemIdToDelete] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [multiDelete, setMultiDelete] = useState(false);

  const handleChange = (e) => {
    console.log("fcghbjnm");
    setPages(() => e.target.value);
    console.log("handle change function");
  };

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

  const deleteItem = () => {
    console.log("item to be deleted ", itemIdToDelete);
    setOpenDeleteModal(false);
  };

  console.log("checkeeeeeeeeeds ", checked)
  const columns = React.useMemo(
    () => [
      {
        Header: "Filter Name",
        accessor: "Name",
        Cell: ({ value, row }) => {
            console.log("ch ", row ,checked.includes(row.original.id))
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
                      // console.log(temp);
                    }
                    // console.log(checked);
                  }}
                />
              </Grid>
              <Grid item>{value}</Grid>
            </Grid>
          );
        },
        width: 300,
      },
      {
        Header: "Filter applied",
        accessor: "filter",
        Cell: ({ value }) => {
          return (
            <>
              <Grid item>
                {value.map((ele) => {
                  if (ele.locationPostalCode !== undefined)
                    return (
                      <div className={classess.filter}>
                        <Typography> Location Postal Code </Typography>
                        <Button
                          color="primary"
                          size="small"
                          variant="contained"
                        >
                          {ele.locationPostalCode}
                        </Button>
                      </div>
                    );
                  else return null;
                })}
              </Grid>
              <Grid item>
                {value.map((ele) => {
                  if (ele.CompanyName !== undefined)
                    return (
                      <div className={classess.filter}>
                        <Typography> Company Name </Typography>
                        <Button
                          color="primary"
                          size="small"
                          variant="contained"
                        >
                          {ele.CompanyName}
                        </Button>
                      </div>
                    );
                  else return null;
                })}
              </Grid>
            </>
          );
        },
      },
      {
        Header: "created on",
        accessor: "createdOn",
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: (value) => {
          return (
            <Grid container>
              <Grid item>
                <IconButton>
                  <DeleteOutlinedIcon
                    onClick={() => {
                      setItemIdToDelete(value);
                      setOpenDeleteModal(true);
                    }}
                    color="Error"
                  />
                </IconButton>
              </Grid>
            </Grid>
          );
        },
      },
    ],
    [checked]
  );

  const data = [
    {
      id: 1,
      Name: "Mark Wood",
      filter: [{ locationPostalCode: "213434" }],
      createdOn: "24/02/2022",
    },
    {
      id: 2,
      Name: "Gorge d'souza",
      filter: [
        { locationPostalCode: "21343454" },
        { CompanyName: "ashs pvt ltd." },
      ],
      createdOn: "24/02/2022",
    },
    {
      id: 3,
      Name: "adam",
      filter: [
        { locationPostalCode: "21343454" },
        { CompanyName: "Mechlin Tech" },
      ],
      createdOn: "24/02/2022",
    },
    {
      id: 4,
      Name: "Shane",
      filter: [{ CompanyName: "abc infotech" }],
      createdOn: "24/02/2022",
    },
  ];

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
                // console.log("col ,", column);
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
                <Typography variant="h6">Select all </Typography>
              </div>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell style={{ textAlign: "right" }}>
              <div>
                <Button
                  className={classess.deleteButton}
                  color="primary"
                  size="small"
                  variant="contained"
                  onClick={() => {
                    setMultiDelete(true);
                    setOpenDeleteModal(true);
                  }}
                  disabled={checked.length === 0}
                >
                  Delete Selected
                </Button>
              </div>
            </TableCell>
          </TableRow>

          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                //   console.log("row ", cell);
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
            Saved Searches
          </Typography>
        </Grid>
      </Grid>

      {/* Table component */}
      <Table columns={columns} data={data} />
      <div className={classess.pagination}>
        <FormControl>
          <Select
            id="RowsPerPage"
            value={pages}
            name="RowsPerPage"
            onChange={handleChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
        <Pagination count={3} variant="outlined" shape="rounded" />
      </div>

      <Modal
        open={openDeleteModal}
        onClose={() => {
          setOpenDeleteModal(false);
          multiDelete && setMultiDelete(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classess.model}>
          <h2 id="simple-modal-title" className={classess.modelHead}>
            Delete Saved {multiDelete ? "Searches ?" : "Search"}
          </h2>
          {/* <Divider /> */}
          <p id="simple-modal-description" className={classess.modelPara}>
            Are you sure you want to delete{" "}
            {multiDelete ? "these resord's ?" : "this record?"}
          </p>
          <Grid container className={classess.buttonMain}>
            <Grid item>
              <Button
                className={classess.buttonyes}
                variant="contained"
                size="large"
                color="primary"
                onClick={() => {
                  deleteItem();
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
                  setOpenDeleteModal(false);
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
export default SavedSearches;
