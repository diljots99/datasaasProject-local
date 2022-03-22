import React from "react";
import { Grid, Typography, IconButton, Button, FormControl, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "./styles";

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

const SavedSearches = () => {
    const classess = useStyles();
    const [pages, setPages] = useState(10);
    const [check, setCheck] = useState(false)
    const handleChange = (e) => {
        console.log("fcghbjnm")
        setPages(() => e.target.value)
        console.log("handle change function");
    }
    const handleCheckChange = () => {

        setCheck(true);
        console.log(check)
    }

    const columns = React.useMemo(
        () => [
            {
                Header: 'Filter Name',
                accessor: 'Name',
                Cell: ({ value }) => {
                    return (
                        <Grid container alignItems="center" >
                            <Grid item >
                                <Checkbox size="small" onChange={handleCheckChange} />
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
                Header: 'Filter applied',
                accessor: 'filter',
                Cell: ({ value }) => {
                    return (
                        <>
                            <Grid item>
                                {value.map((ele) => {
                                    if (ele.locationPostalCode !== undefined)
                                        return (
                                            <div className={classess.filter}><Typography> Location Postal Code </Typography>
                                                <Button color="primary"
                                                    size="small"
                                                    variant="contained">{ele.locationPostalCode}</Button>
                                            </div>)
                                    else
                                        return null
                                })}

                            </Grid>
                            <Grid item>
                                {value.map((ele) => {
                                    if (ele.CompanyName !== undefined)
                                        return (
                                            <div className={classess.filter}><Typography> Company Name </Typography>
                                                <Button color="primary"
                                                    size="small"
                                                    variant="contained">{ele.CompanyName}</Button>
                                            </div>)
                                    else
                                        return null
                                })}
                            </Grid>
                        </>)
                }

            },
            {
                Header: 'created on',
                accessor: 'createdOn',

            },
            {
                Header: 'Actions',
                accessor: 'id',
                Cell: (value) => {
                    const deleteItem = () => {
                        console.log(value);
                    }
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

    const data = [{ id: 1, Name: "Mark Wood", filter: [{ locationPostalCode: "213434" }], createdOn: "24/02/2022" },
    { id: 2, Name: "Gorge d'souza", filter: [{ locationPostalCode: "21343454" }, { CompanyName: "ashs pvt ltd." }], createdOn: "24/02/2022" },
    { id: 3, Name: "adam", filter: [{ locationPostalCode: "21343454" }, { CompanyName: "Mechlin Tech" }], createdOn: "24/02/2022" },
    { id: 4, Name: "Shane", filter: [{ CompanyName: "abc infotech" }], createdOn: "24/02/2022" },

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
                                console.log("col ,", column)
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
                                <Checkbox size="small" /><Typography variant="h6">Select all </Typography>
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
                                    variant="contained" >
                                    Delete Selected
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>


                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    console.log("row ", cell)
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
                    <Typography variant="h5" style={{ fontSize: "26px", fontFamily: "Poppins", lineHeight: "39px", fontWeight: "600", color: "#000000" }}>Saved Searches</Typography>
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
export default SavedSearches
