import React, { useEffect, useState } from "react";
import {
    Grid,
    Typography,
    TextField,
    IconButton,
    InputAdornment,
    Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./styles";

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
        };
    });

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
                                        // console.log(
                                        //     "hehe",
                                        //     row,
                                        //     checked,
                                        //     checked.includes(row.original.id)
                                        // );
                                        if (checked.includes(row.original.id)) {
                                            const temp = checked.filter(
                                                (item) =>
                                                    item !== row.original.id
                                            );
                                            setChecked(temp);
                                        } else {
                                            const temp = [
                                                ...checked,
                                                row.original.id,
                                            ];
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
                width: 200,
            },
           
            {
                Header: "created on",
                accessor: "createdOn",
            },
            {
                Header: "Actions",
                accessor: "id",
                Cell: ({ row }) => {
                    return (
                        <Grid container>
                            <Grid item>
                                <IconButton>
                                    <DownloadIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <DeleteIcon
                                        onClick={() => {
                                            const temp = checked.filter(
                                                (item) =>
                                                    item !== row.original.id
                                            );
                                            setChecked(temp);
                                            const temp2 = {
                                                notes_id: [row.original.id],
                                                user_id: dataToken.id,
                                            };
                                            deleteData(temp2);
                                            setPostDeleteRenderHelper(
                                                !postDeleteRenderHelper
                                            );
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
                                console.log("col ,", column);
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
                        <TableCell style={{ textAlign: "right" }}>
                            <div>
                                <Button
                                    className={classess.downloadButton}
                                    color="primary"
                                    size="small"
                                    variant="contained"
                                >
                                    Download Selected
                                </Button>

                                <Button
                                    className={classess.deleteButton}
                                    color="primary"
                                    size="small"
                                    variant="contained"
                                    onClick={() => {
                                        const dataToBeDeleted = {
                                            notes_id: checked,
                                            user_id: dataToken.id,
                                        };
                                        deleteData(dataToBeDeleted);
                                        setPostDeleteRenderHelper(
                                            !postDeleteRenderHelper
                                        );
                                    }}
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
                                    console.log("row hue", cell);
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
        </div>
    );
};
export default CompanyNoteList;
