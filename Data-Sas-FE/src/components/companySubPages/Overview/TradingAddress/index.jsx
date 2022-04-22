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
import DirectorCard from "../../../common/DirectorCard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { useSelector, useDispatch } from "react-redux";
import {
    getCompanySpecificDirectorList,
    getTradingDetail,
} from "../../../../redux/actions/watchAction";
import { useParams } from "react-router-dom";

const Directors = () => {
    const classess = useStyles();
    const [monitor, setMonitor] = useState(false);

    const dispatch = useDispatch();
    const { directorList, tradingDetail, companyDetail } = useSelector(
        (state) => state.watch
    );

    console.log("companyDetail.id", companyDetail.id);
    console.log("tradingDetails here 1", tradingDetail);

    useEffect(() => {
        dispatch(getTradingDetail(companyDetail.id));
    }, [companyDetail.id]);

    const [tabledata, settableData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);
    const compSumfetchIdRef = React.useRef(0);
    const columns = React.useMemo(
        () => [
            {
                Header: "Address",
                accessor: "address_line",
            },
            {
                Header: "Town/City",
                accessor: "address_town",
            },
            {
                Header: "Country",
                accessor: "company_address_country",
            },
            {
                Header: "Region",
                accessor: "address_region",
            },
            // {
            //     Header: "Secondary Name",
            //     accessor: "secondary_name",
            //     Cell: () => {
            //         return (
            //             <Grid container alignItems="center">
            //                 <Grid item> - </Grid>
            //             </Grid>
            //         );
            //     },
            // },
            {
                Header: "Post Code",
                accessor: "address_post_code",
            },
            {
                Header: "Phone Number",
                accessor: "phone_number",
                Cell: () => {
                    return (
                        <Grid container alignItems="center">
                            <Grid item> N/A </Grid>
                        </Grid>
                    );
                },
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
                    settableData(tradingDetail.slice(startRow, endRow));
                    setPageCount(Math.ceil(tradingDetail.length / pageSize));
                    setLoading(false);
                }
            }, 1000);
        },
        [tradingDetail]
    );

    const [searchKey, setSearchKey] = useState("");
    useEffect(() => {
        if (searchKey) {
            let re = new RegExp(`${searchKey}`, "gi");
            let results = tradingDetail.filter((detail) => {
                return (
                    (detail.address_line !== null
                        ? detail.address_line.match(re)
                        : false) ||
                    (detail.address_town !== null
                        ? detail.address_town.match(re)
                        : false) ||
                    (detail.company_address_country !== null
                        ? detail.company_address_country.match(re)
                        : false) ||
                    (detail.address_region !== null
                        ? detail.address_region.match(re)
                        : false)
                );
            });

            settableData(results);
        } else {
            settableData(tradingDetail);
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
                    Trading Address
                </Typography>

                <Grid container className={classess.actionHeader}>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        className={classess.actioncontainer}
                    >
                        <Typography
                            variant="h5"
                            style={{ fontWeight: 600 }}
                            className={classess.directorsHeading}
                        ></Typography>
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
