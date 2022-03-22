import { makeStyles } from '@material-ui/core'



export const useStyles = makeStyles(() => ({ 
main:{
    border: "1px solid #DCD9D9",
    borderRadius: "5px",
    padding: "10px",
    marginLeft: "10px",
},
    popupContainer:{
        alignItems: "center",
        width: "220px",
        height: "60px",
        justifyContent: "space-around",
    },
    address:{
        fontWeight: "bold",
        fontSize: "19px"
    },
    postalCode:{
        color:"#727272"
    }
})
)
