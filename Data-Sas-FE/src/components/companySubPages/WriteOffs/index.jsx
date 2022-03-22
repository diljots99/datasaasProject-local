import React, { useState } from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";
import Checkbox from '@mui/material/Checkbox';
import DirectorCard from '../../common/DirectorCard'
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';

const WriteOffs = () => {
    const classess = useStyles();
    const [monitor, setMonitor] = useState(false)
    const data = React.useMemo(
        () => [
            {
                id: 1,
                companyNumber: "-",
                companyName: "-",
                amount: "-",
                date: "-"
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
                Header: "Company Number",
                accessor: "companyNumber",
            },

            {
                Header: "Company Name",
                accessor: "companyName",
            },
            {
                Header: "Amount",
                accessor: " amount",
            },
            {
                Header: "Date",
                accessor: "date",
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
                <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.writeHeading}>Write Offs</Typography>

                <Grid container className={classess.directorCard} >
                    <Grid item>

                        <DirectorCard count="$0" message="Total Amount" imgsrc="/images/money-bag.png" />
                    </Grid>
                    <Grid item style={{ marginLeft: "20px" }}>
                        <DirectorCard count="$0" message="Write Offs Count" imgsrc="/images/money-bag.png" />
                    </Grid>
                </Grid>


                <div item xs={12} sm={6} className={classess.searchcontainer}>
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
                        placeholder="search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }} />

                </div>


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
export default WriteOffs;