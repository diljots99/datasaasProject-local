import React, { useEffect } from "react";
import { useStyles } from "./styles";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
} from "@material-ui/core";
import BussinessWatchMonitor from "./bussinessMonitor";
import DirectorWatchMonitor from "./directorMonitor";
import { getDirectorMonitorList, getCompanyMonitorList } from "../../redux/actions/watchAction";
import { useDispatch } from "react-redux";
const Watch = () => {
  const classess = useStyles();
  const dispatch = useDispatch();
  let checkStorageValue = JSON.parse(sessionStorage.getItem("userData"));

  useEffect(() => {
    dispatch(getDirectorMonitorList(checkStorageValue.id));
    dispatch(getCompanyMonitorList(checkStorageValue.id));
  }, []);

  // const data = React.useMemo(()=> [
  //     { id: 1, directorName: "Mechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 2, directorName: "RTechlin",address:"LiverPool", updatedOn: "1/7/2014"},
  //      { id: 3, directorName: "Cechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 4, directorName: "Bechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 5, directorName: "Nechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 6, directorName: "Pechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 7, directorName: "Sechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 8, directorName: "Qechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 9, directorName: "Gechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 10, directorName: "FSechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 11, directorName: "LHNEechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 12, directorName: "MWFWechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 13, directorName: "ZZechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 14, directorName: "MSechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 15, directorName: "IOEechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //      { id: 16, directorName: "Mechlin",address:"LiverPool", updatedOn: "1/7/2014" },
  //     ],
  //     [])

  const data = [];

  return (
    <div className={classess.main}>
      {/* Table component */}
      {/* <Table columns={columns} data={data} /> */}
      <BussinessWatchMonitor />
      <DirectorWatchMonitor  />
    </div>
  );
};
export default Watch;
