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
    }
}))