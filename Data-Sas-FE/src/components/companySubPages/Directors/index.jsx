import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import {
    Grid,
    Typography,
    Button,
    InputAdornment,
    TextField,
    IconButton,
} from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";
import Checkbox from "@mui/material/Checkbox";
import DirectorCard from "../../common/DirectorCard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { useSelector, useDispatch } from "react-redux";
import { getCompanySpecificDirectorList } from "../../../redux/actions/watchAction";
import { useParams } from "react-router-dom";
const Directors = () => {
    const classess = useStyles();
    const [monitor, setMonitor] = useState(false);
    const dispatch = useDispatch();
    const { directorList, companyDetail } = useSelector((state) => state.watch);
    const [data, setData] = useState([]);
    useEffect(() => {
        // dispatch(getCompanySpecificDirectorList(companyDetail.id)); // Get current company ID here
        // if (directorList.length > 0) setData(directorList);
        // console.log("UE2", directorList);
        // console.log("UE1", companyDetail.id);
        const temp = directorList.filter((data) => {
            return data.company_id === companyDetail.id;
        });
        console.log("temp array", temp);
        setData(temp);
    }, [directorList]);
    // Counters
    let counterTotal = data.length;
    let counterResigned = 0;
    data.map((item, index) => (counterResigned += item.resigned_on !== null));
    let counterActive = 0;
    data.map(
        (item, index) =>
            (counterActive +=
                item.resigned_on === null && item.appointed_on !== null)
    );
    let counterInactive = 0;
    data.map(
        (item, index) =>
            (counterInactive +=
                item.appointed_on !== null && item.resigned_on !== null)
    );
    let counterSecretory = 0;
    const [tabledata, settableData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);
    const compSumfetchIdRef = React.useRef(0);
    const columns = React.useMemo(
        () => [
            {
                Header: "Name",
                accessor: "name",
                Cell: ({ value }) => {
                    return (
                        <Grid container alignItems="center">
                            <Grid item>
                                <Checkbox size="small" />
                            </Grid>
                            <Grid item>{value}</Grid>
                        </Grid>
                    );
                },
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ value }) => {
                    return (
                        <div
                            className={classess.chip}
                            style={{
                                backgroundColor: "#ccecd7",
                                color: "#03A339",
                            }}
                        >
                            {value}
                        </div>
                    );
                },
            },
            {
                Header: "Appointe On",
                accessor: "appointed_on",
            },
            // {
            //     Header: "Email",
            //     accessor: "email",
            //     Cell: ({ value }) => {
            //         return <div style={{ color: "#40ACFB" }}>{value}</div>;
            //     },
            // },
            {
                Header: "Job Title",
                accessor: "officer_role",
            },
            {
                Header: "Occupation",
                accessor: "occupation",
            },
            // {
            //     Header: "Role",
            //     accessor: "role",
            // },
            {
                Header: "Nationality",
                accessor: "nationality",
            },
            {
                Header: "Country",
                accessor: "country",
            },
            {
                Header: "Address Line 1",
                accessor: "address_line_1",
            },
            {
                Header: "Address Line 2",
                accessor: "address_line_2",
            },
            {
                Header: "DOB",
                accessor: "dob",
            },
            {
                Header: "Age",
                accessor: "age",
            },
            {
                Header: "Resigned On",
                accessor: "resignedON",
            },
            {
                Header: "Deleted On",
                accessor: "deletedOn",
            },
            {
                Header: "Exceptions",
                accessor: "exceptions",
            },
            // {
            //     Header: "PEP & Sections",
            //     accessor: "",
            // },
            {
                Header: "Disqualification ",
                accessor: "disqualification",
            },
            {
                Header: "Qualification",
                accessor: "qualification",
            },
        ],
        []
    );
    const fetchData = React.useCallback(
        ({ pageSize, pageIndex }) => {
            const fetchId = ++compSumfetchIdRef.current;
            setLoading(true);
            setTimeout(() => {
                if (fetchId === compSumfetchIdRef.current) {
                    const startRow = pageSize * pageIndex;
                    const endRow = startRow + pageSize;
                    settableData(data.slice(startRow, endRow));
                    setPageCount(Math.ceil(data.length / pageSize));
                    setLoading(false);
                }
            }, 1000);
        },
        [data]
    );
    const [searchKey, setSearchKey] = useState("");
    useEffect(() => {
        if (searchKey) {
            let re = new RegExp(`${searchKey}`, "gi");
            let results = data.filter((director) => director.name.match(re));
            settableData(results);
        } else {
            settableData([]);
        }
    }, [searchKey]);
    return (
        <>
            <div>
                <Typography
                    variant="h5"
                    style={{ fontWeight: 600 }}
                    className={classess.directorsHeading}
                >
                    Directors
                </Typography>
                <Grid container className={classess.directorCard}>
                    <Grid item className={classess.mainCard}>
                        <DirectorCard
                            count={counterTotal}
                            message="Total"
                            imgsrc="/images/DWIcon.png"
                        />
                    </Grid>
                    <Grid item className={classess.mainCard}>
                        <DirectorCard
                            count={counterActive}
                            message="Active"
                            imgsrc="/images/DWIcon.png"
                        />
                    </Grid>
                    <Grid item className={classess.mainCard}>
                        <DirectorCard
                            count={counterSecretory}
                            message="Secretory"
                            imgsrc="/images/DWIcon.png"
                        />
                    </Grid>
                    <Grid item className={classess.mainCard}>
                        <DirectorCard
                            count={counterInactive}
                            message="inactive"
                            imgsrc="/images/DWIcon.png"
                        />
                    </Grid>
                    <Grid item className={classess.mainCard}>
                        <DirectorCard
                            count={counterResigned}
                            message="Resigned"
                            imgsrc="/images/DWIcon.png"
                        />
                    </Grid>
                </Grid>
                <Grid container className={classess.actionHeader}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        className={classess.actioncontainer}
                    >
                        <Button
                            className={classess.Button}
                            style={{
                                background: "green",
                                color: "white",
                                fontFamily: "Arial, Helvetica, sans-serif",
                            }}
                            variant="contained"
                            size="small"
                            onClick={() => setMonitor(!monitor)}
                            startIcon={
                                monitor ? (
                                    <NotificationsOffIcon />
                                ) : (
                                    <NotificationsIcon />
                                )
                            }
                        >
                            {monitor ? "un Monitor" : "Monitor"}
                        </Button>
                        <Button
                            className={classess.Button}
                            style={{
                                background: "#f1f1f1",
                                color: "#A2A3A2",
                                fontFamily: "Arial, Helvetica, sans-serif",
                                marginLeft: "10px",
                            }}
                            variant="contained"
                            size="small"
                        >
                            Report
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        className={classess.searchcontainer}
                    >
                        <Button
                            className={classess.Button}
                            style={{
                                background: "#FFFFFF",
                                color: "#000000",
                                marginRight: "10px",
                                fontFamily: "Poppins",
                                padding: "0px 10px",
                                fontWeight: "600",
                                fontSize: "26px",
                                lineHeight: "39px",
                                color: "#000000",
                            }}
                            variant="contained"
                            size="small"
                            startIcon={
                                <img
                                    src={"/images/Filter.png"}
                                    alt="company-note-list"
                                />
                            }
                        >
                            Filter
                        </Button>
                        <TextField
                            style={{
                                background: "#FFFFFF",
                                border: "1px solid #DCD9D9",
                                textTransform: "capitalize",
                                borderRadius: "6px",
                            }}
                            variant="outlined"
                            size="small"
                            placeholder="search"
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
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
                {tabledata.length > 0 || searchKey === "" ? (
                    <Table
                        columns={columns}
                        data={tabledata}
                        fetchData={fetchData}
                        loading={loading}
                        pageCount={pageCount}
                    />
                ) : (
                    <Typography variant="h6">No results found</Typography>
                )}
            </div>
        </>
    );
};
export default Directors;