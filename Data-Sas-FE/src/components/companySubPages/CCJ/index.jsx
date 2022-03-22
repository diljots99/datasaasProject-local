import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";

const CCJSection = () => {
    const classess = useStyles();
    const data = React.useMemo(
        () => [
            {
                date:"12/03/2020",
                eventRegisteredData:"County court money claim Center", 
                amount:"$65",
                status:"New Judgement",
                caseNumber:"FF7273AB",
                datePaid: "15/03/2020", 
                plantiffForeName:"-",
                plantiffSureName:"-",
                plantiffName:"-",
                plantiffTelephone:"-",
                plantiffAddressLine1:"-",
                plantiffAddressLine2:"-",
                plantiffAddressLine3:"-",
                plantiffAddressLine4:"-",
                plantiffAddressLine5:"-",
                plantiffPostalCode:"-",
            },
            {
                date:"12/03/2020",
                eventRegisteredData:"County court money claim Center", 
                amount:"$65",
                status:"New Judgement",
                caseNumber:"FF7273AB",
                datePaid: "15/03/2020", 
                plantiffForeName:"-",
                plantiffSureName:"-",
                plantiffName:"-",
                plantiffTelephone:"-",
                plantiffAddressLine1:"-",
                plantiffAddressLine2:"-",
                plantiffAddressLine3:"-",
                plantiffAddressLine4:"-",
                plantiffAddressLine5:"-",
                plantiffPostalCode:"-",
            },
            {
                date:"12/03/2020",
                eventRegisteredData:"County court money claim Center", 
                amount:"$65",
                status:"New Judgement",
                caseNumber:"FF7273AB",
                datePaid: "15/03/2020", 
                plantiffForeName:"-",
                plantiffSureName:"-",
                plantiffName:"-",
                plantiffTelephone:"-",
                plantiffAddressLine1:"-",
                plantiffAddressLine2:"-",
                plantiffAddressLine3:"-",
                plantiffAddressLine4:"-",
                plantiffAddressLine5:"-",
                plantiffPostalCode:"-",
            },
            {
                date:"12/03/2020",
                eventRegisteredData:"County court money claim Center", 
                amount:"$65",
                status:"New Judgement",
                caseNumber:"FF7273AB",
                datePaid: "15/03/2020", 
                plantiffForeName:"-",
                plantiffSureName:"-",
                plantiffName:"-",
                plantiffTelephone:"-",
                plantiffAddressLine1:"-",
                plantiffAddressLine2:"-",
                plantiffAddressLine3:"-",
                plantiffAddressLine4:"-",
                plantiffAddressLine5:"-",
                plantiffPostalCode:"-",
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
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Event Registered Data",
                accessor: "eventRegisteredData",
            },
            {
                Header: "Amount",
                accessor: "amount",
            },
            {
                Header: "Status",
                accessor: "status",
            },
            {
                Header: "Case Number",
                accessor: "caseNumber",
            },
            {
                Header: "Date Paid",
                accessor: "datePaid",
            },
            {
                Header: "Plantiff ForeName",
                accessor: "plantiffForeName",
            },
            {
                Header: "Plantiff SureName",
                accessor: "plantiffSureName",
            },
            {
                Header: "Plantiff Name",
                accessor: "plantiffName",
            },
            {
                Header: "Plantiff Telephone",
                accessor: "plantiffTelephone",
            },
            {
                Header: "Plantiff Address Line1",
                accessor: "plantiffAddressLine1",
            },
            {
                Header: "Plantiff Address Line2",
                accessor: "plantiffAddressLine2",
            },
            {
                Header: "Plantiff Address Line3",
                accessor: "plantiffAddressLine3",
            },
            {
                Header: "Plantiff Address Line4",
                accessor: "plantiffAddressLine4",
            },
            {
                Header: "Plantiff Address Line5",
                accessor: "plantiffAddressLine5",
            },
            {
                Header: "Plantiff Postal Code",
                accessor: "plantiffPostalCode",
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
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.ccjsHeading}>CCJ'S</Typography>
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
export default CCJSection;