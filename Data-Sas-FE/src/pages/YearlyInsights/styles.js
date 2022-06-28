import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme)=> ({
    insightsMain:{
        margin:"0 10px"
    },
    paper:{
        display: 'flex',
        flexDirection: 'column',
        marginTop:"10px"
    },
    donutHeading:{ 
        margin:'15px !important',
        fontSize: "26px !important",
        fontWeight:'bold !important' 
        // fontWidth: 'bold !important' 
    },
    bar:{
        // width:'400px'
    },
    mapItem:{
        display: 'flex',
        justifyContent: 'center'
    },
filterButton:{
    background: "#FFFFFF !important",
    color: "#000000 !important",
    marginRight: "10px !important",
    fontFamily: "Poppins !important",
    padding: "0px 10px !important",
    fontWeight: "600",
    fontSize: "26px !important",
    lineHeight: "39px !important",
},
    mapContainer: {
        border: "1px solid #DCD9D9",
    borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        width: "96%"
    }, 
    segmentWrapper: {
        display: "flex",
    flexDirection: "column",
    padding: "10px 15px",
    width: "100%"
    },
    filterDropdown:{
        position: "relative",
        zIndex:"999"
       },
       filterinner:{
         background: "white",
         position: "absolute",
         right: "280px",
         top: "51px",
         border: "1px solid #F4F3F3",
         boxShadow: "0px 0px 15px rgb(0 0 0 / 6%)",
         borderRadius: "10px",
         padding: "15px",
       },
       filtertitle:{
         padding: "0!important",
         '& h2':{
           fontFamily: "Poppins",
           fontSize: "18px",
           fontWeight: "600",
           lineHeight: "23px",
           color: "#000",
         }
       },
       filterContent:{
         padding: "0!important",
         '& h2':{
           fontFamily: "Poppins",
           fontSize: "18px",
           fontWeight: "600",
           lineHeight: "23px",
           color: "#000",
         },
         '& span':{
           fontFamily: "Poppins",
           fontSize: "15px",
           fontWeight: "normal",
           lineHeight: "44px",
           color: "#727272",
         }
       },
       radioBtn:{
         padding: "0 5px 0 10px!important",
       },
       applyButton:{
         background: "rgb(64, 172, 251)",
         '& span' :{
           color: "#fff!important"
         }
       },
       menu:{
        padding:"4px",
        width:'330px'
       },
       select:{
        height:'30px',
        borderRadius: "5px"
       },
       inputMinMax:{
        height:"30px",
        borderRadius: "5px",
        borderWidth: "1px",
        width:'120px'
       },
       containerMinMax:{
        display:"flex",
        justifyContent:'space-around',

       }
}))