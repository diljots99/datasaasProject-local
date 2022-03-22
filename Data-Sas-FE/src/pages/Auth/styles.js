import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "100%",
    },
    formheader: {
        margin: "30px 0",
    },
    Container: {
        padding: " 50px 50px",
        background: "#fff",
    },
    formContainer: {
        padding: " 30px 10px",
    },
    para: {
        color: "#717171",
        fontSize: "22px",
        marginBottom: "0",
        lineHeight: "44px",
        fontFamily: "Poppins",
        fontWeight: "400",
    },
    parasignup : {
        color: "#717171",
        fontSize: "22px",
        marginTop: "30px",
        lineHeight: "44px",
        fontFamily: "Poppins",
        fontWeight: "400",
    },
    para2: {
        color: "#717171",
        fontSize: "28px",
        marginLeft: "20px",
        lineHeight: "44px",
        fontFamily: "Poppins",
        fontWeight: "400",
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "100%",
    },
    input: {
        width: "100%",
        textAlign:"center"
    },
    inputError:{
        color: "red",
    },
    Outlined: {
        fontSize: "20px",
        background: "#FFFFFF",
        border: "1px solid #DCD9D9",
        bordeRadius: "5px",
        padding: "0",
        '& input':{
         borderRadius: "0!important",
        },
    },
    textpara: {
        fontSize: "40px",
        marginLeft: "20px",
        color: "#000000",
        lineHeight: "60px",
        fontFamily: "Poppins",
    },
    positionStart:{
     background: "#FCF6F6",
     minHeight: "61px",
     margin: "0",
     
     '& svg':{
         fill: "#c1bdbd",
         margin: "15px",
     },
    },
    lock:{
        margin: "0",
    },
    lockMain:{
        margin: "0",
    },
    button:{
        background: "#FB404C", 
        bordeRadius: "5px",
        fontSize: "22px",
        color: "#FFFFFF",
        lineHeight: "60px",
        fontFamily: "Poppins",
        fontWeight: "500",
        marginLeft: "10px",
    },
}));