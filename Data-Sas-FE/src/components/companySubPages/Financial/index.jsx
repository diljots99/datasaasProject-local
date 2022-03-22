import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Table from "./Table";
import SmoothLine from './chart';

const Financial = () => {
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

    const databal = React.useMemo(
        () => [
            {
                heading: "Tangible Assets",
                year1:"$0",
                percent:"25",
                year2:"$0",
                percent2:"25",
            },
            {
                heading: "Tangible Assets",
                year1:"$0",
                percent:"25",
                year2:"$0",
                percent2:"25",
            },
            {
                heading: "Tangible Assets",
                year1:"$0",
                percent:"25",
                year2:"$0",
                percent2:"25",
            },
            {
                heading: "Tangible Assets",
                year1:"$350",
                percent:"25",
                year2:"$0",
                percent2:"25",
            },

        ],
        []
    );

    const [tabledata, settableData] = React.useState([]);
    const [tabledatabal, setBaltableData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);
    const compSumfetchIdRef = React.useRef(0);
    const compSumfetchIdBalRef = React.useRef(0);
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

    const columnsBalance = React.useMemo(
        () => [
            {
                Header: "Heading",
                accessor: "heading",
            },
            {
                Header: "2021",
                accessor: "year1",
            },
            {
                Header: "%",
                accessor: "percent",
                Cell:({value})=>{
                    return  <div>
                      <img src={"/images/arrowIcon.png"} alt="upGraph" />{" "}{value}
                      </div>
                  }
           
            },
            {
                Header: "2020",
                accessor: "year2",
                Cell:({value})=>{
                    return  <div>
                      <img src={"/images/arrowIcon.png"} alt="upGraph" />{" "}{value}
                      </div>
                  }
            },
            {
                Header: "%",
                accessor: "percent2",
                Cell:({value})=>{
                    return  <div>
                      <img src={"/images/arrowIcon.png"} alt="upGraph" />{" "}{value}
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

    const fetchDatabal = React.useCallback(({ pageSize, pageIndex }) => {
        const fetchId = ++compSumfetchIdBalRef.current;
        setLoading(true);

        setTimeout(() => {
            if (fetchId === compSumfetchIdBalRef.current) {
                const startRow = pageSize * pageIndex;
                const endRow = startRow + pageSize;
                setBaltableData(databal.slice(startRow, endRow));
                setPageCount(Math.ceil(databal.length / pageSize));
                setLoading(false);
            }
        }, 1000);
    }, []);
    return (

        <>
            <div>

                <Grid container style={{ marginBottom: "10px" }}  >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.financialHeading}>Financial</Typography>
                    </Grid>
                </Grid>
                <Grid style={{marginTop:"20px"}} className={classess.financialMain}>
                <Grid item xs={12} sm={6}>
                <SmoothLine/>
                </Grid>
                <Grid item xs={12} sm={6}>
                <SmoothLine/>
                </Grid>
                </Grid>

                <Grid>
                <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.financialHeading}>Balance Sheet</Typography>
                    </Grid>

                <Table
                    columns={columnsBalance}
                    data={tabledatabal}
                    fetchData={fetchDatabal}
                    loading={loading}
                    pageCount={pageCount}
                />
               </Grid>

                <Grid>
                <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.financialHeading}>Profit and Loss</Typography>
                    </Grid>
                <Table
                    columns={columns}
                    data={tabledata}
                    fetchData={fetchData}
                    loading={loading}
                    pageCount={pageCount}
                />
               </Grid>

               <Grid>
                <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.financialHeading}>Capital and Reserve</Typography>
                    </Grid>
                <Table
                    columns={columns}
                    data={tabledata}
                    fetchData={fetchData}
                    loading={loading}
                    pageCount={pageCount}
                />
               </Grid>
            
               <Grid>
                <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.financialHeading}>Cash Flow</Typography>
                    </Grid>

                <Table
                    columns={columnsBalance}
                    data={tabledatabal}
                    fetchData={fetchDatabal}
                    loading={loading}
                    pageCount={pageCount}
                />
               </Grid>

               <Grid>
                <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.financialHeading}>Miscellaneous</Typography>
                    </Grid>

                <Table
                    columns={columnsBalance}
                    data={tabledatabal}
                    fetchData={fetchDatabal}
                    loading={loading}
                    pageCount={pageCount}
                />
               </Grid>
               <Grid>
                <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600 }} className={classess.financialHeading}>Other Financial Items</Typography>
                    </Grid>

                <Table
                    columns={columnsBalance}
                    data={tabledatabal}
                    fetchData={fetchDatabal}
                    loading={loading}
                    pageCount={pageCount}
                />
               </Grid>
            </div>

        </>

    )
}
export default Financial;