
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    filterButton: {
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "green"
    },
    buttonToken: {
        fontSize: "8px",
        fontWeight: "bold",
        width: "121px",
    },
    lable: {
        color: "#727272",
        fontSize: "1rem",
        fontWeight: 500,
        marginBottom: "5px"
    },
    editHeader:{
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: "#efefef"
    },
    extention:{
        color: "#40acfb",
        display: "flex",
        alignItems: "center",
        cursor:"pointer",
        margin:"20px"
    },
    extText:{
       textDecoration: "underline",
       margin:'0'
    },
    paper: {
        height: 300,
        width: 250,
        border: "1px solid",
        borderRadius: "5px",
    },
    profileinput: { width: "90%" },
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
        padding: theme.spacing(2, 4, 3),
    },
    modelHead: {
        margin: " 20px 0",
        fontWeight: "bold",
    },
    modelPara: {
        margin: "20px 0px",
        fontSize: "20px",
        color: "#8a8fa7",
    },
    modelForm: {
        width: "100%"
    },
    modelFormItem: {
        width: "100%",
        margin: "10px 0"
    },
    modelFormInput: {
        width: '100%'
    },
    inputItem: {
        marginTop: "10px"
    },
    inputError:{
        color: "red",
    },
    editProfile:{
        padding: "0",
        '& input':{
            background: "#fff",
            borderRadius: "4px",
            minHeight: "25px",
            border: "1px solid #DCD9D9",
            margin: "0 20px",
        },
        '& h6':{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "44px",
            color: "#727272",
            margin: "0 20px",
        },
    },
    profileMain:{
        margin: "40px 60px 120px",
    },
    profileinput:{
        width: "100%",
    },
    filterButton:{
    background: "#40ACFB",
    borderRadius: "5px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "22px",
    lineHeight: "44px",
    color: "#FFFFFF",
    textTransform: "capitalize",
    },
    saveButton:{
        background: "#03A339",
        borderRadius: "5px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "22px",
        lineHeight: "44px",
        color: "#FFFFFF",
        textTransform: "capitalize",
        },
    editHeader:{
        background: "#EFEFEF",
        borderRadius: "5px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "22px",
        lineHeight: "44px",
        textTransform: "capitalize",
        },
}));