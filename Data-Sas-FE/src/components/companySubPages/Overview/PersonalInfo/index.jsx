import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import {
    Grid,
    Typography,
    Button,
    InputAdornment,
    TextField,
    IconButton,
    Checkbox,
} from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSelector, useDispatch } from "react-redux";
import { getContactInfo } from "../../../../redux/actions/watchAction";

const Directors = () => {
    const classess = useStyles();

    const dispatch = useDispatch();
    const { companyContactDetail, companyDetail } = useSelector(
        (state) => state.watch
    );

    console.log("companyDetail.id", companyDetail.id, companyContactDetail);

    useEffect(() => {
        dispatch(getContactInfo(companyDetail.id));
    }, [companyDetail.id]);

    const [tabledata, settableData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);
    const compSumfetchIdRef = React.useRef(0);
    const columns = React.useMemo(
        () => [
            {
                Header: "Person Name",
                accessor: "full_name",
                Cell: ({ value }) => {
                    return (
                        <Grid container alignItems="center">
                            <Grid item>
                                <IconButton>
                                    <LinkedInIcon color="primary" />
                                </IconButton>
                            </Grid>

                            <Grid item>{value}</Grid>
                        </Grid>
                    );
                },
            },
            {
                Header: "Company Name",
                accessor: "company_name",
            },
            {
                Header: "Phone Number",
                accessor: "phone_number",
                Cell: () => {
                    return (
                        <Grid container alignItems="center">
                            <Grid item> 9999999999 </Grid>
                        </Grid>
                    );
                },
            },
            {
                Header: "Created Date",
                accessor: "createdAt",
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
                    settableData(companyContactDetail.slice(startRow, endRow));
                    setPageCount(
                        Math.ceil(companyContactDetail.length / pageSize)
                    );
                    setLoading(false);
                }
            }, 1000);
        },
        [companyContactDetail]
    );

    const [searchKey, setSearchKey] = useState("");
    useEffect(() => {
        if (searchKey) {
            let re = new RegExp(`${searchKey}`, "gi");
            let results = companyContactDetail.filter((detail) => {
                return (
                    (detail.full_name !== null
                        ? detail.full_name.match(re)
                        : false) ||
                    (detail.company_name !== null
                        ? detail.company_name.match(re)
                        : false)
                );
            });

            settableData(results);
        } else {
            console.log("else", companyContactDetail);
            settableData(companyContactDetail);
        }
    }, [searchKey]);

    return (
        <>
            <div>
                {/* <Typography
                    variant="h5"
                    style={{ fontWeight: 600 }}
                    className={classess.directorsHeading}
                >
                    Trading Address
                </Typography> */}

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
                        >
                            Personal Contact Information
                        </Typography>
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
