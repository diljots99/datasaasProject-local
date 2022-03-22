import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";

const RelatedPersonalInfo = () => {
    const classess = useStyles();
    const data = React.useMemo(
        () => [
            {
                id: 1,
                name:"Exampals Holding Ltd.",
                natureOfControl:"Ownership of shares 75-100%",
                status:"Active",
                kind:"Corporate entity person with significant role",
                nationality:"--",
                dob:"--",     
                residencialCountry:"--",
                address:"--"    
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
                Cell:({value})=>{
                    return  <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <img  src={"/images/in.png"} alt="in" />
                      {value}
                      </div>
                  }
            },
            {
                Header: "Nature of Control",
                accessor: "natureOfControl",
            },
            {
                Header: "Status",
                accessor: "status",
                Cell:({value})=>{
                    return  <div  className={classess.chip} style={{backgroundColor:"#ccecd7",color:"#03A339" }}>
                      {value}
                      </div>
                  }
            },
            {
                Header: "kind",
                accessor: "kind",
           
            },
            {
                Header: "Nationality",
                accessor: "nationality",
            },
            {
                Header: "DOB",
                accessor: "dob",
            },
            {
                Header: "Residence Country",
                accessor: "residencialCountry",
            },
            {
                Header: "Address",
                accessor: "address",
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
                        <Typography variant="h5" style={{ fontWeight: 600 }}>Control</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classess.searchcontainer}>
                        <Button
                            className={classess.Button}
                            style={{ background: "#FFFFFF", color: "#000000", marginRight: "10px" }}
                            variant="contained"
                            size="small"
                            startIcon={<img src={"/images/Filter.png"} alt="company-note-list" />}
                        >

                            Filter
                        </Button>
                        <TextField
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
export default RelatedPersonalInfo;