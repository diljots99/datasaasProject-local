import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";

const SafeAlert = () => {
    const classess = useStyles();
    const data = React.useMemo(
        () => [
            {
                alertCodes:"5C",
                alertCodesTitle:"Director Failure",
                alertDate:"12/03/2020",
                description:`Detail1:9876575656`,    
            },
            {
                alertCodes:"5C",
                alertCodesTitle:"Director Failure",
                alertDate:"12/03/2020",
                description:`Detail1:9876575656`,    
            },
            {
                alertCodes:"5C",
                alertCodesTitle:"Director Failure",
                alertDate:"12/03/2020",
                description:`Detail1:9876575656`,    
            },
            {
                alertCodes:"5C",
                alertCodesTitle:"Director Failure",
                alertDate:"12/03/2020",
                description:`Detail1:9876575656`,    
            },
        ],
        []
    );
    const [tabledata, settableData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);
    const compSumfetchIdRef = React.useRef(0);
    const columns = React.useMemo(
        () => [
            {
                Header: "Alert Codes",
                accessor: "alertCodes",
            },
            {
                Header: "Alert Codes Title",
                accessor: "alertCodesTitle",
            },
            {
                Header: "Alert Date",
                accessor: "alertDate",
            },
            {
                Header: "Description",
                accessor: "description",
            },
        ],
        []
    );

    const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
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
    }, []);
    return (

        <>
            <div>

                <Grid container style={{ marginBottom: "10px" }} >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.safealertsHeading}>Trading Address</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classess.searchcontainer}>
                        <Button
                            className={classess.Button}
                            style={{background: "#FFFFFF", color: "#000000", marginRight: "10px" , fontFamily: "Poppins" , padding: "0px 10px" , fontWeight: "600" , fontSize: "26px" , lineHeight: "39px" , color: "#000000"}}
                            variant="contained"
                            size="small"
                            startIcon={<img src={"/images/Filter.png"} alt="company-note-list" />}
                        >

                            Filter
                        </Button>
                        <TextField style={{ background: "#FFFFFF", border: "1px solid #DCD9D9", textTransform: "capitalize", borderRadius: "6px" }}
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

                <Table
                    columns={columns}
                    data={tabledata}
                    fetchData={fetchData}
                    loading={loading}
                    pageCount={pageCount}
                />

            </div>

        </>

    )
}
export default SafeAlert;