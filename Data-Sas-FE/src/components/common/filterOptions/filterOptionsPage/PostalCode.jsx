import React, { useState , useEffect} from "react";
import "./searchBar.css";
import MuiSearchBar from "material-ui-search-bar";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import { SetselectedFilterValues } from "../../../../redux/actions/filterAction";
import UpdatePlan from './UpdatePlan'

export default function PostalCode() {
  const dispatch = useDispatch();
  const { selectedFilterValues, filterTypeDetail } = useSelector(state => state.filter)
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [data, setData] = useState([]);
  const [isEnabled , setIsEnabled] = useState(true)
  useEffect(() => {getAllPostCode()},[])

  const getAllPostCode = ()=>{
    let postCode = []

      let filtervalue = filterTypeDetail.filter(value => value.name ===  "Post Code" &&  value.category === "Location")
      if(filtervalue[0].suggestions){
        filtervalue[0].suggestions.map(val=>{
          postCode.push({ id: val, title: val })
        })
      }
      console.log("post data",filtervalue)
      setIsEnabled(filtervalue[0].featureEnabled)
      setData(postCode)
   
   }

  // console.log("post data",data)
  const [checked, setChecked] = useState([]);

  useEffect(() => {
      if(selectedFilterValues["Postal Code"]){
        setChecked(selectedFilterValues["Postal Code"])
      }else{
        setChecked([])
      }
  },[selectedFilterValues])

  const handleFilter = (value) => {
    const searchWord = value;
    setWordEntered(searchWord);
    const newFilter = data.filter((item) => {
      return item.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const applyFilter = () => {
    if (checked.length > 0) {
      dispatch(SetselectedFilterValues("Postal Code", checked));
    }
  };
  
  return (
    <div className="subFiltersContainerPage">
     {isEnabled? <>
      <div className="searchContainer">
        <MuiSearchBar
          className="search"
          placeholder="Company PostalCode"
          value={wordEntered}
          onChange={handleFilter}
          onCancelSearch={() => {
            setFilteredData([]);
            setWordEntered("");
          }}
        ></MuiSearchBar>
      </div>
      <div className="choosenResultsContainer">
        {filteredData.length != 0 ? (
          <div className="dataResult">
            {filteredData.map((item, key) => {
              return (
                <div
                  className="dataResultItems"
                  onClick={() => {
                    if (checked.includes(item.title)) {
                      const temp = checked.filter((val) => val !== item.title);
                      setChecked(temp);
                    } else {
                      const temp = [...checked, item.title];
                      setChecked(temp);
                    }
                  }}
                >
                  <Checkbox checked={checked.includes(item.title)} />
                  <Typography variant="subtitle2" className="title">
                    {item.title}
                  </Typography>
                </div>
              );
            })}
          </div>
        ) : wordEntered != "" ? (
          <div className="dataResult">
            <a className="dataItem">No results found</a>
          </div>
        ) : data.length > 0 ? (
          <div className="dataResult">
            {data.map((item, key) => {
              return (
                <div
                  className="dataResultItems"
                  onClick={() => {
                    if (checked.includes(item.title)) {
                      const temp = checked.filter((val) => val !== item.title);
                      setChecked(temp);
                    } else {
                      const temp = [...checked, item.title];
                      setChecked(temp);
                    }
                  }}
                >
                  <Checkbox checked={checked.includes(item.title)} />
                  <Typography variant="subtitle2" className="title">
                    {item.title}
                  </Typography>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="subFiltersContainerButton">
        <button className="subFilterApply" onClick={applyFilter}>
          Apply
        </button>
      </div></>:<UpdatePlan />}
    </div>
  );
}
