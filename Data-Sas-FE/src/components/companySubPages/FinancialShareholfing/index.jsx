// import React from 'react'
// import { useStyles } from "./styles";
// import {
//     Grid, Typography, Button, InputAdornment, TextField, IconButton, Dialog, DialogTitle, DialogActions, DialogContent, RadioGroup, Radio
//     , FormControlLabel
// } from "@material-ui/core";
// import Table from "./Table";
// import SearchIcon from "@material-ui/icons/Search";

// const Shareholding = () => {
//     const classess = useStyles();
//     const data = React.useMemo(
//         () => [
//             {
//                 sharecount: "1",
//                 totalcount: "100",
//                 nominal: "1",
//             },
//             {
//                 sharecount: "1",
//                 totalcount: "100",
//                 nominal: "1",
//             },
//             {
//                 sharecount: "1",
//                 totalcount: "100",
//                 nominal: "1",
//             },
//             {
//                 sharecount: "1",
//                 totalcount: "100",
//                 nominal: "1",
//             },
//             {
//                 sharecount: "1",
//                 totalcount: "100",
//                 nominal: "1",
//             },
//             {
//                 sharecount: "1",
//                 totalcount: "100",
//                 nominal: "1",
//             },

//         ],
//         []
//     );
//     const [tabledata, settableData] = React.useState([]);
//     const [loading, setLoading] = React.useState(false);
//     const [pageCount, setPageCount] = React.useState(0);
//     const compSumfetchIdRef = React.useRef(0);

//     const [open, setOpen] = React.useState(false);
//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };
 
//     const columns = React.useMemo(
//         () => [
//             {
//                 Header: "Share Count",
//                 accessor: "sharecount",
//             },
//             {
//                 Header: "% Of Total Share Count",
//                 accessor: "totalcount",
//             },
//             {
//                 Header: "Nominal Value",
//                 accessor: "nominal",
//             },
//         ],
//         []
//     );

//     const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
//         const fetchId = ++compSumfetchIdRef.current;
//         setLoading(true);

//         setTimeout(() => {
//             if (fetchId === compSumfetchIdRef.current) {
//                 const startRow = pageSize * pageIndex;
//                 const endRow = startRow + pageSize;
//                 settableData(data.slice(startRow, endRow));
//                 setPageCount(Math.ceil(data.length / pageSize));
//                 setLoading(false);
//             }
//         }, 1000);
//     }, []);
//     return (

//         <>
//             <div className={classess.filterDrop}>
//                 <Dialog open={open} onClose={handleClose}  >
//                 <Grid>
//                     <DialogTitle>Currenty</DialogTitle>
//                     <DialogContent>
//                         <RadioGroup row  name="controlled-radio-buttons-group"   >
//                             <FormControlLabel value="Euro" control={<Radio />} label="Euro" />
//                             <FormControlLabel value="Dollor" control={<Radio />} label="Dollor" />
//                         </RadioGroup>
//                         <RadioGroup  name="controlled-radio-buttons-group"   >
//                             <FormControlLabel value="Pound" control={<Radio />} label="Pound" />
//                         </RadioGroup>
                      
//                         <DialogTitle>Status</DialogTitle>
//                     <RadioGroup row  name="controlled-radio-buttons-group"   >
//                             <FormControlLabel value="Euro" control={<Radio />} label="Live" />
//                             <FormControlLabel value="Dollor" control={<Radio />} label="InActive" />
//                         </RadioGroup>
                  
                    
//                     <DialogActions>
//                         <Button variant="contained" style={{ background: "green", color: "#000000",}} className={classess.Button} onClick={handleClose}>Apply</Button>
//                         <Button variant="contained" style={{ background: "#FFFFFF", color: "#000000", }} className={classess.Button} onClick={handleClose}>Reset</Button>
//                     </DialogActions>
//                     </DialogContent>
//                     </Grid>
//                 </Dialog>
//                 <Grid container style={{ marginBottom: "10px" }} >
//                     <Grid item xs={12} sm={6}>
//                         <Typography variant="h5" style={{ fontWeight: 600 ,fontSize: "26px" , color: "#000" , lineHeight: "39px" , fontFamily: "Poppins" }}>Shareholding</Typography>
//                     </Grid>
//                     <Grid item xs={12} sm={6} className={classess.searchcontainer}>
//                         <Grid>
//                         <Button
//                             className={classess.Button}
//                             style={{ background: "#FFFFFF", color: "#000000", marginRight: "10px" , padding: "8px 10px" }}
//                             variant="contained"
//                             size="small"
//                             startIcon={<img src={"/images/Filter.png"} alt="company-note-list" />}
//                             onClick={handleClickOpen}
//                         >

//                             Filter
//                         </Button>
//                         <Grid className={classess.filterDropdown}>
//                             <Grid className={classess.filterinner}>
//                             <Grid>
//                     <DialogTitle>Currenty</DialogTitle>
//                     <DialogContent>
//                         <RadioGroup row  name="controlled-radio-buttons-group"   >
//                             <FormControlLabel value="Euro" control={<Radio />} label="Euro" />
//                             <FormControlLabel value="Dollor" control={<Radio />} label="Dollor" />
//                         </RadioGroup>
//                         <RadioGroup  name="controlled-radio-buttons-group"   >
//                             <FormControlLabel value="Pound" control={<Radio />} label="Pound" />
//                         </RadioGroup>
                      
//                         <DialogTitle>Status</DialogTitle>
//                     <RadioGroup row  name="controlled-radio-buttons-group"   >
//                             <FormControlLabel value="Euro" control={<Radio />} label="Live" />
//                             <FormControlLabel value="Dollor" control={<Radio />} label="InActive" />
//                         </RadioGroup>
                  
                    
//                     <DialogActions>
//                         <Button variant="contained" style={{ background: "green", color: "#000000",}} className={classess.Button} onClick={handleClose}>Apply</Button>
//                         <Button variant="contained" style={{ background: "#FFFFFF", color: "#000000", }} className={classess.Button} onClick={handleClose}>Reset</Button>
//                     </DialogActions>
//                     </DialogContent>
//                     </Grid>
//                             </Grid>
//                             </Grid>
//                         </Grid>
//                         <TextField style={{ background: "#FFFFFF", border: "1px solid #DCD9D9" , textTransform: "capitalize" , borderRadius: "6px" }}
//                             variant="outlined"
//                             size="small"
//                             placeholder="Search"
//                             InputProps={{
//                                 endAdornment: (
//                                     <InputAdornment >
//                                         <IconButton>
//                                             <SearchIcon />
//                                         </IconButton>
//                                     </InputAdornment>
//                                 )
//                             }} />

//                     </Grid>
//                 </Grid>

//                 <Table
//                     columns={columns}
//                     data={tabledata}
//                     fetchData={fetchData}
//                     loading={loading}
//                     pageCount={pageCount}
//                 />

//             </div>

//         </>

//     )
// }
// export default Shareholding;

import React, { useState } from 'react'
import { useStyles } from "./styles";
import {
    Grid, Typography, Button, InputAdornment, TextField, IconButton, Dialog, DialogTitle, DialogActions, DialogContent, RadioGroup, Radio
    , FormControlLabel
} from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";
const Shareholding = () => {
    const classess = useStyles();
    const [showmodel, setshowmodel] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showchangePassword, setShowChangePassword] = useState(false);
    const data = React.useMemo(
        () => [
            {
                sharecount: "1",
                totalcount: "100",
                nominal: "1",
            },
            {
                sharecount: "1",
                totalcount: "100",
                nominal: "1",
            },
            {
                sharecount: "1",
                totalcount: "100",
                nominal: "1",
            },
            {
                sharecount: "1",
                totalcount: "100",
                nominal: "1",
            },
            {
                sharecount: "1",
                totalcount: "100",
                nominal: "1",
            },
            {
                sharecount: "1",
                totalcount: "100",
                nominal: "1",
            },

        ],
        []
    );
    const [tabledata, settableData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);
    const compSumfetchIdRef = React.useRef(0);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        setshowmodel(true)
    };

    const handleClose = () => {
        setOpen(false);
        setshowmodel(false)
    };

    const columns = React.useMemo(
        () => [
            {
                Header: "Share Count",
                accessor: "sharecount",
            },
            {
                Header: "% Of Total Share Count",
                accessor: "totalcount",
            },
            {
                Header: "Nominal Value",
                accessor: "nominal",
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
            <div className={classess.filterDrop}>
           {open === true ?<Grid>
                    <Grid className={classess.filterDropdown}>
                        <Grid className={classess.filterinner}>
                            <Grid>
                                <DialogTitle className={classess.filtertitle}>Currenty</DialogTitle>
                                <DialogContent className={classess.filterContent}>
                                    <RadioGroup row name="controlled-radio-buttons-group"   >
                                        <FormControlLabel value="Euro" control={<Radio className={classess.radioBtn}/>} label="Euro" />
                                        <FormControlLabel value="Dollor" control={<Radio className={classess.radioBtn}/>} label="Dollor" />
                                    </RadioGroup>
                                    <RadioGroup name="controlled-radio-buttons-group"   >
                                        <FormControlLabel value="Pound" control={<Radio className={classess.radioBtn}/>} label="Pound" />
                                    </RadioGroup>
                                    <DialogTitle className={classess.filtertitle}>Status</DialogTitle>
                                    <RadioGroup row name="controlled-radio-buttons-group"   >
                                        <FormControlLabel value="Euro" control={<Radio className={classess.radioBtn}/>} label="Live" />
                                        <FormControlLabel value="Dollor" control={<Radio className={classess.radioBtn}/>} label="InActive" />
                                    </RadioGroup>
                                    <DialogActions>
                                        <Button variant="contained" style={{ background: "#40ACFB", color: "#fff!important", fontFamily: "Poppins" , fontWeight: "500" , fontSize: "18px" , lineHeight: "44px"}} className={classess.applyButton} onClick={handleClose}>Apply</Button>
                                        <Button variant="contained" style={{ background: "#FFFFFF", color: "#000000!important", fontFamily: "Poppins" , fontWeight: "500" , fontSize: "18px" , lineHeight: "44px"}} className={classess.Button} onClick={handleClose}>Reset</Button>
                                </DialogActions>
                                </DialogContent>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>:""} 
                
                {/* < Filter  open={showmodel} handleClose={handleClose}/> */}

                {/* <Dialog open={open} onClose={handleClose} >
                    <div className={classess.popup}>
                    <DialogTitle>Currenty</DialogTitle>
                    <DialogContent>
                        <RadioGroup row  name="controlled-radio-buttons-group"   >
                            <FormControlLabel value="Euro" control={<Radio />} label="Euro" />
                            <FormControlLabel value="Dollor" control={<Radio />} label="Dollor" />
                        </RadioGroup>
                        <RadioGroup  name="controlled-radio-buttons-group"   >
                            <FormControlLabel value="Pound" control={<Radio />} label="Pound" />
                        </RadioGroup>

                        <DialogTitle>Status</DialogTitle>
                   
                    <RadioGroup row  name="controlled-radio-buttons-group"   >
                            <FormControlLabel value="Euro" control={<Radio />} label="Live" />
                            <FormControlLabel value="Dollor" control={<Radio />} label="InActive" />
                        </RadioGroup>
                    
                    <DialogActions>
                        <Button variant="contained" style={{ background: "green", color: "#000000",}} className={classess.Button} onClick={handleClose}>Apply</Button>
                        <Button variant="contained" style={{ background: "#FFFFFF", color: "#000000", }} className={classess.Button} onClick={handleClose}>Reset</Button>
                    </DialogActions>
                      
                    </DialogContent>
                    </div>
                </Dialog> */}
                <Grid container style={{ marginBottom: "10px" }} >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600, fontSize: "26px", color: "#000", lineHeight: "39px", fontFamily: "Poppins" }}>Shareholding</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classess.searchcontainer}>
                        <Button
                            className={classess.Button}
                            style={{ background: "#FFFFFF", color: "#000000", marginRight: "10px", padding: "8px 10px" }}
                            variant="contained"
                            size="small"
                            startIcon={<img src={"/images/Filter.png"} alt="company-note-list" />}
                            onClick={handleClickOpen}
                        >

                            Filter
                        </Button>
                        <TextField style={{ background: "#FFFFFF", border: "1px solid #DCD9D9", textTransform: "capitalize", borderRadius: "6px" }}
                            variant="outlined"
                            size="small"
                            placeholder="Search"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment >
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
export default Shareholding;