import React,{useEffect} from "react";
import { useStyles} from "./styles";
import { Grid, Typography, TextField, IconButton, InputAdornment, Button } from "@material-ui/core";
import BussinessWatch from "./bussiness";
import DirectorWatch from "./directorWatch";
import { getDirectorList,getCompanyList } from "../../redux/actions/watchAction";
import { useDispatch } from "react-redux";
const Watch = () => {
    const classess = useStyles();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getDirectorList());
    //     dispatch(getCompanyList());
    //   }, [])

        return (
        <div className={classess.main}>

            {/* Table component */}
            {/* <Table columns={columns} data={data} /> */}
            <BussinessWatch  />
            <DirectorWatch  />
        </div>

    );
 
}
export default Watch;
