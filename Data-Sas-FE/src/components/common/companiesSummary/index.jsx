import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Select,
} from "@material-ui/core";
import Table from "./Table";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";

export default function CompaniesSummary() {
  const [getData, setData] = useState([]);
  let checkStorageValue = JSON.parse(sessionStorage.getItem("userData"));
  const classess = useStyles();
  const [tabledata, settableData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [filterInput, setFilterInput] = useState("");
  const [pageCount, setPageCount] = React.useState(0);
  const compSumfetchIdRef = React.useRef(0);
  const { directorDetail } = useSelector((state) => state.watch);

  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  // Update the state when input changes
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilterInput(value);
  };
  let test = [];
  useEffect(() => {
    test.push(directorDetail?.compines_offical);
    // console.log("😀😀😀😂😂😂😂😂", directorDetail?.compines_offical);
    setData(test);
  }, [directorDetail]);

  useEffect(() => {
    if (searchKey) {
      let re = new RegExp(`${searchKey}`, "gi");
      let results = test.filter((company) => {
        console.log("------------", company);
        company.company_name.match(re);
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchKey]);

  // const DirectorDet = () => {
  //   return (
  //     <div>
  //       <Typography variant="h6" className={classess.headtext}>
  //         Director Details
  //       </Typography>

  //       <Card className={classess.root} variant="outlined">
  //         <div className={classess.gridContainer}>
  //           <Grid container className={classess.grid}>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography
  //                 display="inline"
  //                 variant="h7"
  //                 style={{ color: "#727272" }}
  //               >
  //                 Company Name
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <Typography variant="h7">
  //                 {directorDetail.occupation}
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography variant="h7" style={{ color: "#727272" }}>
  //                 Company Number
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <Typography variant="h7">{directorDetail.chn}</Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography variant="h7" style={{ color: "#727272" }}>
  //                 Social Profile
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <img
  //                 className={classess.image}
  //                 src={"/images/facebook.png"}
  //                 alt="company-note-list"
  //               />
  //               <img
  //                 className={classess.image}
  //                 src={"/images/linkedIn.png"}
  //                 alt="company-note-list"
  //               />
  //               <img
  //                 className={classess.image}
  //                 src={"/images/twitter.png"}
  //                 alt="company-note-list"
  //               />
  //             </Grid>
  //           </Grid>
  //         </div>

  //         <div className={classess.gridContainer}>
  //           <Typography variant="h7" className={classess.header}>
  //             Director Data
  //           </Typography>
  //           <Grid container className={classess.grid}>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography
  //                 display="inline"
  //                 variant="h7"
  //                 style={{ color: "#727272" }}
  //               >
  //                 Status
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <div
  //                 style={{
  //                   backgroundColor: "#ccecd7",
  //                   width: "80px",
  //                   textAlign: "center",
  //                   color: "#03A339",
  //                 }}
  //               >
  //                 Active
  //               </div>
  //             </Grid>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography variant="h7" style={{ color: "#727272" }}>
  //                 Appointed On
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <Typography variant="h7">
  //                 {directorDetail.appointed_on}
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography variant="h7" style={{ color: "#727272" }}>
  //                 Address
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <Typography variant="h7">993 Rue Leavy</Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography variant="h7" style={{ color: "#727272" }}>
  //                 Social Profile
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <img
  //                 className={classess.image}
  //                 src={"/images/facebook.png"}
  //                 alt="company-note-list"
  //               />
  //               <img
  //                 className={classess.image}
  //                 src={"/images/linkedIn.png"}
  //                 alt="company-note-list"
  //               />
  //               <img
  //                 className={classess.image}
  //                 src={"/images/twitter.png"}
  //                 alt="company-note-list"
  //               />
  //             </Grid>
  //           </Grid>
  //         </div>

  //         <div className={classess.gridContainer}>
  //           <Typography variant="h7" className={classess.header}>
  //             Company Data
  //           </Typography>
  //           <Grid container className={classess.grid}>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography
  //                 display="inline"
  //                 variant="h7"
  //                 style={{ color: "#727272" }}
  //               >
  //                 Status
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <div
  //                 style={{
  //                   backgroundColor: "#ccecd7",
  //                   width: "80px",
  //                   textAlign: "center",
  //                   color: "#03A339",
  //                 }}
  //               >
  //                 Active
  //               </div>
  //             </Grid>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography variant="h7" style={{ color: "#727272" }}>
  //                 Company Number
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <Typography variant="h7">{directorDetail.chn}</Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography variant="h7" style={{ color: "#727272" }}>
  //                 Appointed On
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <Typography variant="h7">
  //                 {directorDetail.appointed_on}
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={2} className={classess.gridItem}>
  //               <Typography variant="h7" style={{ color: "#727272" }}>
  //                 Social Profile
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={1} sm={1} className={classess.gridItem}>
  //               <Typography display="inline" variant="h7">
  //                 :
  //               </Typography>
  //             </Grid>
  //             <Grid item xs={6} sm={3} className={classess.gridItem}>
  //               <img
  //                 className={classess.image}
  //                 src={"/images/facebook.png"}
  //                 alt="company-note-list"
  //               />
  //               <img
  //                 className={classess.image}
  //                 src={"/images/linkedIn.png"}
  //                 alt="company-note-list"
  //               />
  //               <img
  //                 className={classess.image}
  //                 src={"/images/twitter.png"}
  //                 alt="company-note-list"
  //               />
  //             </Grid>
  //           </Grid>
  //         </div>
  //       </Card>
  //     </div>
  //   );
  // };

  const columns = React.useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "company_name",
        Cell: ({ value }) => {
          return (
            <Grid container alignItems="center">
              <Grid item>
                <Checkbox size="small" />
              </Grid>

              <Grid item>{value}</Grid>
            </Grid>
          );
        },
        width: 200,
      },
      {
        Header: "Company Number",
        accessor: "company_number",
        width: 200,
      },
      {
        Header: "Company Status",
        accessor: "company_status",
        width: 200,
      },
      {
        Header: "Postal Code",
        accessor: "regaddress_postcode",
        width: 200,
      },
      {
        Header: "Incorporation Date",
        accessor: "incorporation_date",
        width: 200,
      },
      {
        Header: "SIC Code",
        accessor: "siccode_1",
        width: 200,
      },
    ],
    []
  );

  const fetchData = React.useCallback(
    ({ pageSize, pageIndex }) => {
      const fetchId = ++compSumfetchIdRef.current;
      setLoading(true);
      setTimeout(() => {
        //  console.log(getData.length, "=======", getData);
        if (fetchId === compSumfetchIdRef.current) {
          const startRow = pageSize * pageIndex;
          const endRow = startRow + pageSize;
          settableData(getData.slice(startRow, endRow));
          setPageCount(Math.ceil(getData.length / pageSize));
          setLoading(false);
        }
      }, 3000);
    },
    [getData]
  );

  return (
    <>
      <div>
        <Grid container style={{ marginBottom: "10px" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" className={classess.headtext}>
              Companies Summary
            </Typography>
          </Grid>
          {/* <Grid item xs={12} sm={6} className={classess.searchcontainer}>
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
                ),
              }}
            />
          </Grid> */}
          <Grid item xs={12} sm={6} className={classess.searchcontainer}>
            <TextField
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCD9D9",
                textTransform: "capitalize",
                borderRadius: "6px",
              }}
              variant="outlined"
              size="small"
              placeholder="Search"
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
{ tabledata.length > 0 && <Table
          columns={columns}
          //data={tabledata}
          data={searchResults.length > 0 ? searchResults : tabledata}
          fetchData={fetchData}
          loading={loading}
          pageCount={pageCount}
          // defaultFilterMethod={(filter, row) =>{ return row[filter.id].toLowerCase().includes(filter.value.toLowerCase()) }}
        />}
      
      </div>
      <div>{/* <DirectorDet /> */}</div>
    </>
  );
}
