import React from "react";
import { Grid, Typography, IconButton, Button, FormControl, Select, MenuItem, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { useStyles } from "./styles";
import { confirm } from "react-confirm-box";
import Checkbox from '@mui/material/Checkbox';
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useTable } from 'react-table'
import { Pagination } from "@mui/material";
import { useState } from "react";


const UserSavedList = () => {
    const classess = useStyles();
    const [pages, setPages] = useState(10);
    const [check, setCheck] = useState(false)
    const handleChange = (e) => {
        setPages(() => e.target.value)
    }
    const options = {
        labels: {
          confirmable: "Delete",
          cancellable: "Cancel"
        }
      }
      const handleCheckChange=()=>{
        setCheck(!check)
        console.log(check)
      }
    const checkAll=()=>{
        setCheck(!check);
        console.log(check);
    }  

      const deleteItem = async () => {
         const result = await confirm("Are you sure you want to delete the selected records?", options);
         if (result) {
           console.log("You click yes!");
           return;
         }
         console.log("You click No!");
       };
    

    const columns = React.useMemo(
        () => [
            {
                Header: 'List Name',
                accessor: 'Name',
                Cell: ({ value }) => {
                    return (
                        <Grid container alignItems="center" >
                            <Grid item >
                                <Checkbox size="small" checked={check} onchange={handleCheckChange} />
                            </Grid>
                            <Grid item >
                                {value}
                            </Grid>
                        </Grid>
                    )
                },
                width: 300

            },
            {
                Header: 'Number of Records',
                accessor: 'Records',

            },
            {
                Header: 'created on',
                accessor: 'createdOn',

            },
            {
                Header: 'Actions',
                accessor: 'id',
                Cell: (value) => {
                   
                    
                    return (<Grid container >
                        <Grid item >
                            <IconButton>
                                <DeleteOutlinedIcon onClick={deleteItem} color="Error" />
                            </IconButton>
                        </Grid>
                    </Grid>)
                }

            }
        ],
        []
    )

    const data = [{ id: 1, Name: "Mark Wood", Records: 1234, createdOn: "24/02/2022" },
    { id: 2, Name: "Gorge d'souza", Records: 1534, createdOn: "24/02/2022" },
    { id: 3, Name: "adam", Records: 5434, createdOn: "24/02/2022" },
    { id: 4, Name: "Shane", Records: 1364, createdOn: "24/02/2022" },
    { id: 5, Name: "ricky", Records: 5664, createdOn: "24/02/2022" },
    { id: 6, Name: "roman", Records: 1884, createdOn: "24/02/2022" },
    { id: 7, Name: "andrew", Records: 2264, createdOn: "24/02/2022" },
    { id: 8, Name: "mike", Records: 1864, createdOn: "24/02/2022" },
    { id: 9, Name: "Paul", Records: 1368, createdOn: "24/02/2022" },
    { id: 10, Name: "Shaun", Records: 1364, createdOn: "24/02/2022" }
    ]


     function Table({ columns, data }) {
        // Use the state and functions returned from useTable to build your UI
        const { getTableProps, headerGroups, rows, prepareRow } = useTable({
            columns,
            data,
        })

        // Render the UI for your table
        return (
            <MaUTable {...getTableProps()} className={classess.companyNotes}>

                <TableHead className={classess.tableheader}>
                    {headerGroups.map(headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => {
                                return (
                                    <TableCell {...column.getHeaderProps()} className={classess.companynoteheader}>
                                        {column.render('Header')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHead>

                <TableBody>

                    {/* action container   */}
                    <TableRow>
                        <TableCell>
                            <div className={classess.checkBox} >
                                <Checkbox size="small" onChange={checkAll} /><Typography variant="h6">Select all </Typography>
                            </div>
                        </TableCell>
                        <TableCell>

                        </TableCell>
                        <TableCell>

                        </TableCell>
                        <TableCell style={{ textAlign: "right" }}>
                            <div>
                                <Button
                                    className={classess.deleteButton}
                                    color="primary"
                                    size="small"
                                    variant="contained"
                                    onClick={deleteItem} >
                                    Delete
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>


                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <TableCell {...cell.getCellProps()} className={classess.comLast}>
                                            {cell.render('Cell')}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </MaUTable>
        )
    }

    return (
        <div className={classess.main}>

            <Grid container style={{ marginBottom: "10px" }} >

                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" style={{ fontSize: "26px", fontFamily: "Poppins", lineHeight: "39px", fontWeight: "600", color: "#000000" }}>User Saved List</Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={classess.searchcontainer}>
                    <TextField style={{ background: "#FFFFFF", border: "1px solid #DCD9D9" , textTransform: "capitalize" , borderRadius: "6px" }}
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
                            )
                        }} />
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
                </FormControl><Pagination count={3} variant="outlined" shape="rounded" />
            </div>
        </div>

    );
}

export default UserSavedList
