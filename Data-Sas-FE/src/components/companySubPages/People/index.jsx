import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import {
  Grid,
  Typography,
  Button,
  InputAdornment,
  TextField,
  IconButton,
} from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";
import PeoplerCard from "../../common/PeopleCard";
import { useSelector, useDispatch } from "react-redux";
import { getProple } from '../../../redux/actions/companyActions'

const People = () => {
  const classess = useStyles();
  const dispatch = useDispatch()
  const { companyDetail } = useSelector((state) => state.watch);
  const { People } = useSelector((state) => state.company);
  const [getData, setData] = useState([]);
  
  const [tabledata, settableData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const compSumfetchIdRef = React.useRef(0);
 

  useEffect(()=>{
    dispatch( getProple(companyDetail.uuid))
  },
  [companyDetail])

  useEffect(() => {
    if(People.result?.length > 0){
      setData(People.result);
    }else{
      setData([]);
    }
    
  }, [People]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "firstname",
      },
      {
        Header: "Surname",
        accessor: "lastname",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Role",
        accessor: "officer_role",
      },
    ],
    []
  );


  const fetchData = React.useCallback(
    ({ pageSize, pageIndex }) => {
     //console.log("p iii",  pageIndex )
      const fetchId = ++compSumfetchIdRef.current;
      setLoading(true);
      setTimeout(() => {
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
        <Typography
          variant="h5"
          style={{
            fontWeight: 600,
            fontFamily: "Poppins",
            fontSize: "26px",
            lineHeight: "39px",
            color: "#000",
          }}
        >
          People
        </Typography>

        <Grid container className={classess.peopleCard}>
          <Grid item>
            <PeoplerCard
              count={ People.no_of_directors ? People.no_of_directors : 0 }
              message="No of Director"
              imgsrc="/images/DWIcon.png"
            />
          </Grid>
          <Grid item className={classess.noEmply}>
            <PeoplerCard
              count={ People.no_of_employess ? People.no_of_employess : 0 }
              message="No of Employee"
              imgsrc="/images/DouIcon.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classess.searchcontainer}>
            <Button
              className={classess.Button}
              style={{
                background: "transparent",
                boxShadow: "none",
                color: "#000000",
                marginRight: "10px",
              }}
              variant="contained"
              size="small"
              startIcon={
                <img src={"/images/Filter.png"} alt="company-note-list" />
              }
            >
              Filter
            </Button>
            {/* <TextField
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCD9D9",
                textTransform: "capitalize",
                borderRadius: "6px",
              }}
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
                ),
              }}
            /> */}
          </Grid>
        </Grid>
        {getData.length > 0 ? (
          <Table
            columns={columns}
            data={tabledata}
            fetchData={fetchData}
            loading={loading}
            pageCount={pageCount}
          />
        ) : (
          <Typography variant="h6"> No results found</Typography>
        )}
      </div>
    </>
  );
};

export default People;
