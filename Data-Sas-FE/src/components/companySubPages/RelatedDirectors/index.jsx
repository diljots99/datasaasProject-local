import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";

const RelatedDirectors = () => {
    const classess = useStyles();
    const data = React.useMemo(
        () => [
            {
                id: 1,
                directorName:"David Moule",
                status:"Active",
                appointedOn:"12/03/2020",
                linkedDirectors:"David Charles Moule",
                companyName: "Exampled Ltd.",
                role:"Director",
                Nationality:"British",
                address1:"28 Frier gate, Derdy,DE118k, UK",
                address2:"28 Frier gate, Derdy,DE118k, UK"
               
            },
            {
                id: 2,
                directorName:"David Moule",
                status:"Active",
                appointedOn:"12/03/2020",
                linkedDirectors:"David Charles Moule",
                companyName: "Exampled Ltd.",
                role:"Director",
                Nationality:"British",
                address1:"28 Frier gate, Derdy,DE118k, UK",
                address2:"28 Frier gate, Derdy,DE118k, UK"
            },
            {
                id: 3,
                directorName:"David Moule",
                status:"Active",
                appointedOn:"12/03/2020",
                linkedDirectors:"David Charles Moule",
                companyName: "Exampled Ltd.",
                role:"Director",
                Nationality:"British",
                address1:"28 Frier gate, Derdy,DE118k, UK",
                address2:"28 Frier gate, Derdy,DE118k, UK"
            },
            {
                id: 4,
                directorName:"David Moule",
                status:"Active",
                appointedOn:"12/03/2020",
                linkedDirectors:"David Charles Moule",
                companyName: "Exampled Ltd.",
                role:"Director",
                Nationality:"British",
                address1:"28 Frier gate, Derdy,DE118k, UK",
                address2:"28 Frier gate, Derdy,DE118k, UK"
            },
            {
                id: 5,
                directorName:"David Moule",
                status:"Active",
                appointedOn:"12/03/2020",
                linkedDirectors:"David Charles Moule",
                companyName: "Exampled Ltd.",
                role:"Director",
                Nationality:"British",
                address1:"28 Frier gate, Derdy,DE118k, UK",
                address2:"28 Frier gate, Derdy,DE118k, UK"
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
                Header: "Director Name",
                accessor: "directorName",
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
                Header: "Appointed On",
                accessor: "appointedOn",
            },
            {
                Header: "Linked Directors",
                accessor: "linkedDirectors",
            },
            {
                Header: "Company Name",
                accessor: "companyName",
            },
            {
                Header: "Role",
                accessor: "role",
            },
            {
                Header: "Nationality",
                accessor: "Nationality",
            },
            {
                Header: "Address Line 1",
                accessor: "address1",
            },
            {
                Header: "Address Line 2",
                accessor: "address2",
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
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.relateddsHeading}>Related Directors</Typography>
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
export default RelatedDirectors;