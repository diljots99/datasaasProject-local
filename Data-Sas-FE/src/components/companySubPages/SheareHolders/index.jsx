import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";

const SheareHolders = () => {
    const classess = useStyles();
    const data = React.useMemo(
        () => [
            {
                id: 1,
                name:"David Moule",
                status:"Active",
                sheareType:"Ordinary A",
                currency:"GBP",
              shearCount:"1,334,234",
              sheareCountPer:"1,334,234",
              nominalValue:"0"
            },
            {
                id: 2,
                name:"David Moule",
                status:"Active",
                sheareType:"Ordinary A",
                currency:"GBP",
                shearCount:"1,334,234",
                sheareCountPer:"1,334,234",
              nominalValue:"0"
            },
            {
                id: 3,
                name:"David Moule",
                status:"Active",
                sheareType:"Ordinary A",
                currency:"GBP",
                shearCount:"1,334,234",
                sheareCountPer:"1,334,234",
                nominalValue:"0"
            },
            {
                id: 4,
                name:"David Moule",
                status:"Active",
                sheareType:"Ordinary A",
                currency:"GBP",
                shearCount:"1,334,234",
                sheareCountPer:"1,334,234",
                nominalValue:"0"
            },
            {
                id: 5,
                name:"David Moule",
                status:"Active",
                sheareType:"Ordinary A",
                currency:"GBP",
                shearCount:"1,334,234",
                sheareCountPer:"1,334,234",
                nominalValue:"0"
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
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Status",
                accessor: "status",
                Cell:({value})=>{
                    return  <div className={classess.chip} style={{backgroundColor:"#ccecd7",color:"#03A339" }}>
                      {value}
                      </div>
                  }
            },
            {
                Header: "Sheare Type",
                accessor: "sheareType",
            },
            {
                Header: "Currency",
                accessor: "currency",
            },
            {
                Header: "Sheare Count",
                accessor: "shearCount",
            },
            {
                Header: "% of Total Sheare Count",
                accessor: "sheareCountPer",
            },
            {
                Header: "Nominal Value",
                accessor: "nominalValue",
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
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.shareholdersHeading}>SheareHolders</Typography>
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
export default SheareHolders;