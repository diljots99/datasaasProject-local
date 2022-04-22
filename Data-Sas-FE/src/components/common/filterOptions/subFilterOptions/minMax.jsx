import React from "react";
import { TextField } from "@material-ui/core";

const textFieldStyle = {
    width: "45%",
    color: "#000",
    background: "#FFFFFF",
    border: "1px solid #DCD9D9",
    borderRadius: "6px",
};

const MinMax = () => {
    return (
        <>
            <TextField
                style={textFieldStyle}
                variant="outlined"
                placeholder="Min"
                size="small"
            />
            <TextField
                style={textFieldStyle}
                variant="outlined"
                placeholder="Max"
                size="small"
            />
        </>
    );
};

export default MinMax;
