import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Table from "./Table";
import SmoothLine from './chart';

const IndustryWise = () => {
    const classess = useStyles();
    const data = React.useMemo(
        () => [
            {
                heading: "Europian Enterprise",
                year1:"455",
                year2:"25",
                year3:"18",
                year4:"15",
            },
            {
                heading: "Europian Enterprise",
                year1:"455",
                year2:"25",
                year3:"18",
                year4:"15",
            },
            {
                heading: "Europian Enterprise",
                year1:"455",
                year2:"25",
                year3:"18",
                year4:"15",
            },
            {
                heading: "Europian Enterprise",
                year1:"455",
                year2:"25",
                year3:"18",
                year4:"15",
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
                Header: "Heading",
                accessor: "heading",
            },
            {
                Header: "2021",
                accessor: "year1",
                Cell:({value})=>{
                    return  <div>
                      <img src={"/images/upIcon.png"} alt="upGraph" />{" "}{value}
                      </div>
                  }
            },
            {
                Header: "2019",
                accessor: "year2",
                Cell:({value})=>{
                    return  <div>
                      <img src={"/images/arrowIcon.png"} alt="upGraph" />{" "}{value}
                      </div>
                  }
           
            },
            {
                Header: "2018",
                accessor: "year3",
                Cell:({value})=>{
                    return  <div>
                      <img src={"/images/downIcon.png"} alt="upGraph" />{" "}{value}
                      </div>
                  }
            },
            {
                Header: "2017",
                accessor: "year4",
                Cell:({value})=>{
                    return  <div>
                      <img src={"/images/downIcon.png"} alt="upGraph" />{" "}{value}
                      </div>
                  }
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
                        <Typography variant="h5" style={{ fontWeight: 600 , fontFamily: "Poppins" , fontSize: "26px" , lineHeight: "39px" , color: "#000000" }}>Industry Wise Analysis</Typography>
                    </Grid>
                </Grid>

                <Table
                    columns={columns}
                    data={tabledata}
                    fetchData={fetchData}
                    loading={loading}
                    pageCount={pageCount}
                />
                <Grid style={{marginTop:"20px"}} className={classess.graphic}>
                <SmoothLine/>
                </Grid>
            
            </div>

        </>

    )
}
export default IndustryWise;