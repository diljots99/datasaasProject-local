import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button ,Grid ,  TextField ,  Divider, Typography} from "@mui/material/";
import Modal from "@mui/material/Modal";
import "./filterBox.css";
import { filtersData } from "./filterData";
import styled from "styled-components";
import { SubFilter } from "./subFilter";
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import { setFilter , clearAllFilter , saveFilterList} from '../../../redux/actions/filterAction'
import { makeStyles } from "@material-ui/core";

import CloseIcon from '@mui/icons-material/Close';
import AppliedFilters from './AppliedFilters'

const useStyles = makeStyles((theme) => ({
    model: {
      top: `50%`,
      left: `50%`,
      transform: `translate(-${50}%, -${50}%)`,
      position: "absolute",
      width: 430,
      backgroundColor: theme.palette.background.paper,
      // height: "500px",
      borderRadius: "30px",
      boxShadow: theme.shadows[5],
      padding: "16px 0 35px",
    },
    modelHead: {
      fontWeight: "bold",
      padding: "0 32px",
      fontSize: "36px",
      lineHeight: "54px",
      fontFamily: "Poppins",
    },
    modelPara: {
      margin: "20px 0px",
      fontSize: "20px",
      color: "#8a8fa7",
    },
    modelForm: {
      width: "100%",
      padding: "10px 32px",
    },
    modelFormItem: {
      width: "100%",
      margin: "10px 0",
    },
    inputError: {
      color: "red",
    },
    modelFormInput: {
      width: "100%",
      border: "1px solid #DCD9D9",
      borderRadius: "5px",
    },
    inputItem: {
      marginTop: "10px",
    },
    lable: {
      color: "#727272",
      fontWeight: 400,
      marginBottom: "5px",
      fontFamily: "Poppins",
      fontSize: "20px",
      lineHeight: "44px",
    },
    conformButton: {
      backgroundColor: "#03a339 !important",
      borderRadius: "5px",
      fontFamily: "Poppins",
      fontSize: "22px",
      lineHeight: "44px",
      fontWeight: "500",
    },
    cancelButton: {
      background: "#6C757D",
      borderRadius: "5px",
      fontFamily: "Poppins",
      fontSize: "22px",
      lineHeight: "44px",
      fontWeight: "500",
    },
    buttonMain: {
      padding: "0 0 0 32px",
    },
  }));

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 850,
     height:"80%",
    overflowY: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const FiltersWrap = styled.div`
    margin: 0px;
    background-color: #f8f8f8;
    width: 200px;
    padding-bottom: 0px;
`;

export const FilterBox = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();    
    const { isopen , selectedFilterValues ,  filterTypeDetail} = useSelector(state => state.filter)
    // Open / Close filters
console.log("filterTypeDetail}", filterTypeDetail)
    const [ showSave , setShowSave] = useState()
    const [listName , setListName] = useState("")

    const handleOpen = () => dispatch(setFilter(true));
    const handleClose = () => dispatch(setFilter(false));

    // Sub-Filter Secion
    const [subFilterOptionsHeading, setSubFilterOptionsHeading] =
        useState("Options");
    const [SubFilterOptions, setSubFilterOptions] = useState();

    // const [AppliedFilters, setAppliedFilters] = useState();

    // useState(()=>{
    //   console.log("selectedFilterValues",selectedFilterValues)
    //   setAppliedFilters( JSON.stringify(selectedFilterValues))},[selectedFilterValues])

    const handleSaveFilter = () =>{

if(!listName){
  return 
}

      let chip_data = []

      Object.keys(selectedFilterValues).map(key=>{
        let group_values = []
       
        selectedFilterValues[`${key}`].map(val=>  {
          group_values.push({"chip_value": val}) 
        })

        chip_data.push( {
          "chip_group": key,
          "chip_values": group_values
        })  
      })

      let req = {
        "fliter_name": listName.trim(),
        "search_type": "Business Search",
        "chip_data": chip_data
      }
if(chip_data.length == 0){
  return
}

      console.log(" req for save list ", req)

      dispatch(saveFilterList(req, handleClose, history))
      // setShowSave(false)
    }

    return (
        <div>
            <Button
                onClick={handleOpen}
                sx={{
                    padding: 0.3,
                    paddingRight: 1,
                }}
            >
               <BiIcons.BiMenuAltRight
                    className="FilterMenuIcon"
                    size={"40px"}
                /> 
                <h4 className="filterButtonText">Filter</h4>
            </Button>
            <Modal open={isopen} onClose={handleClose}>
                <Box sx={style}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <h1 className="filterOptionsBoxHeading">
                         <BiIcons.BiMenuAltRight
                            className="FilterMenuIcon"
                            size={"25px"}
                        />
                        Filter Options
                    </h1>

                    <Button variant="text" style={{marginBottom: "10px", color:"gray"}} onClick={handleClose}><CloseIcon /></Button>
                    </div>
                    <div className="filtersBox">
                        <div className="filtersListContainer">
                            <FiltersWrap>
                                {filtersData.map((item, index) => {
                                    return (
                                        <SubFilter
                                            item={item}
                                            setSubFilterOptionsHeading={
                                                setSubFilterOptionsHeading
                                            }
                                            setSubFilterOptions={
                                                setSubFilterOptions
                                            }
                                            key={index}
                                            subFilterOptionsHeading={subFilterOptionsHeading}
                                        />
                                    );
                                })}
                            </FiltersWrap>
                        </div>
                        <div className="subFiltersContainer">
                            <div className="subFiltersContainerHeading">
                                {subFilterOptionsHeading}                             
                            </div>
                            <div className="subFilterOptionsContainer">
                                    {SubFilterOptions}
                            </div>
                            {/* <div className="subFiltersContainerButton">
                                <button className="subFilterApply">
                                    Apply
                                </button>
                            </div> */}
                        </div>
                        <div className="clearFiltersContainer">
                            <div className="clearFiltersContainerText" onClick={()=> dispatch(clearAllFilter())}>
                                Clear Filters
                            </div>
                            <div className="appliedFilters">
                                <AppliedFilters  values={selectedFilterValues} />
                            </div>
                            <div className="clearFiltersContainerButtons">
                                <button className="clearFilterSave" onClick={()=>setShowSave(true)}>
                                    Save
                                </button>
                                <button className="clearFilterSearch">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </Box>             
            </Modal>

            <Modal
      open={showSave}
      onClose={() => setShowSave(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.model}>
        <Typography variant="h5" className={classes.modelHead}>
          Save List as
        </Typography>
        <Divider />
        {/* Model fields */}
        <Grid container className={classes.modelForm}>
          <Grid item className={classes.modelFormItem}>
            <TextField
            style={{border: '1px solid', borderRadius: '10px'}}
             fullWidth
              placeholder="Enter List name"
              variant="outlined"
         
              value={listName}
              onChange={(e) => setListName(e.target.value)}
           
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item className={classes.buttonMain}>
            <Button
              className={classes.conformButton}
              variant="contained"
              size="large"
              style={{ marginTop: "10px" }}
              onClick={() => {
                handleSaveFilter()
              }}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.cancelButton}
              variant="contained"
              size="large"
              style={{
                marginTop: "10px",
                backgroundColor: "#91979d",
                marginLeft: "10px",
              }}
              color="primary"
              onClick={() => {
                setShowSave(false);
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>


        </div>
    );
};

export default FilterBox;
