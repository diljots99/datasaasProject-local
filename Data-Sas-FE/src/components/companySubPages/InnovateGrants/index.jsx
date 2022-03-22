import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button, InputAdornment, TextField, IconButton } from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";

const InnovateGrants = () => {
    const classess = useStyles();
    const data = React.useMemo(
        () => [
            {
                id: 1,
                competitionRefference: "Europian",
                compatativeTitle: "Europian Activity",
                programeTitle: "Ean Sage",
                sector: "Connect",
                applicationNumber: "==",
                projectNumber: "640064",
                projectTitle: "Eien",
                competetionYear: "20/12/2021",
                productType: "Europian Enterprise",
                participentName: "Exampes",
                isLeadParticipant: "NO",
                cnr: "029284833",
                startDate: "20/12/12",
                endDate: "20/12/22",
                grantOffered: "$588858",
                totalCost: "$58888",
                actualSpendData: "--",
                participantWithdrawnProject: "Active",
                projectStatus: "live",
                enterpriceSize: "RTO",
                postalCode: "AL12345",
                addressRegion: "East of England",
                addressLEP: "Heartfordshire",
                multipleLEP: "NO",
                industrialStrategyChallangeFunds: "NO",
                publicDescription: "Data has send"
            },
            {
                id: 2,
                competitionRefference: "Assia",
                compatativeTitle: "Assia Activity",
                programeTitle: "Ean Sage",
                sector: "Connect",
                applicationNumber: "==",
                projectNumber: "640064",
                projectTitle: "Eien",
                competetionYear: "20/12/2021",
                productType: "Europian Enterprise",
                participentName: "Exampes",
                isLeadParticipant: "NO",
                cnr: "029284833",
                startDate: "20/12/12",
                endDate: "20/12/22",
                grantOffered: "$588858",
                totalCost: "$58888",
                actualSpendData: "--",
                participantWithdrawnProject: "Active",
                projectStatus: "live",
                enterpriceSize: "RTO",
                postalCode: "AL12345",
                addressRegion: "East of England",
                addressLEP: "Heartfordshire",
                multipleLEP: "NO",
                industrialStrategyChallangeFunds: "NO",
                publicDescription: "Data has send"
            },
            {
                id: 3,
                competitionRefference: "Assia",
                compatativeTitle: "Assia Activity",
                programeTitle: "Ean Sage",
                sector: "Connect",
                applicationNumber: "==",
                projectNumber: "640064",
                projectTitle: "Eien",
                competetionYear: "20/12/2021",
                productType: "Europian Enterprise",
                participentName: "Exampes",
                isLeadParticipant: "NO",
                cnr: "029284833",
                startDate: "20/12/12",
                endDate: "20/12/22",
                grantOffered: "$588858",
                totalCost: "$58888",
                actualSpendData: "--",
                participantWithdrawnProject: "Active",
                projectStatus: "live",
                enterpriceSize: "RTO",
                postalCode: "AL12345",
                addressRegion: "East of England",
                addressLEP: "Heartfordshire",
                multipleLEP: "NO",
                industrialStrategyChallangeFunds: "NO",
                publicDescription: "Data has send"

            },
            {
                id: 4,
                competitionRefference: "Europe",
                compatativeTitle: "Assia Activity",
                programeTitle: "Ean Sage",
                sector: "Connect",
                applicationNumber: "==",
                projectNumber: "640064",
                projectTitle: "Eien",
                competetionYear: "20/12/2021",
                productType: "Europian Enterprise",
                participentName: "Exampes",
                isLeadParticipant: "NO",
                cnr: "029284833",
                startDate: "20/12/12",
                endDate: "20/12/22",
                grantOffered: "$588858",
                totalCost: "$58888",
                actualSpendData: "--",
                participantWithdrawnProject: "Active",
                projectStatus: "live",
                enterpriceSize: "RTO",
                postalCode: "AL12345",
                addressRegion: "East of England",
                addressLEP: "Heartfordshire",
                multipleLEP: "NO",
                industrialStrategyChallangeFunds: "NO",
                publicDescription: "Data has send"
            },

        ],
        []
    );
    const [tabledata, settableData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);
    const compSumfetchIdRef = React.useRef(0);
    const columns = React.useMemo(
        () => [
            {
                Header: "Competition Refference",
                accessor: "competitionRefference",
            },
            {
                Header: "Compatative Title",
                accessor: "compatativeTitle",
            },
            {
                Header: "Programme Title",
                accessor: "programeTitle",
            },
            {
                Header: "Sector",
                accessor: "sector",
            },
            {
                Header: "Application Number",
                accessor: "applicationNumber",
            },
            {
                Header: "Project Number",
                accessor: "projectNumber",
            },
            {
                Header: "Project Title",
                accessor: "projectTitle",
            },
            {
                Header: "Product Type",
                accessor: "productType",
            },
            {
                Header: "Participent Name",
                accessor: "participentName",
            },
            {
                Header: "Is Lead Participant",
                accessor: "isLeadParticipant",
            },
            {
                Header: "CNR",
                accessor: "cnr",
            },
            {
                Header: "Start Date",
                accessor: "startDate",
            },
            {
                Header: "End Date",
                accessor: "endDate",
            },
            {
                Header: "Grant Offered",
                accessor: "grantOffered",
            },
            {
                Header: "Total Cost",
                accessor: "totalCost",
            },
            {
                Header: "Actual Spend to Date ",
                accessor: "actualSpendData",
            },
            {
                Header: "Participant Withdrawn Project",
                accessor: "participantWithdrawnProject",
                Cell:({value})=>{
                  return  <div className={classess.chip} style={{backgroundColor:"#ccecd7",color:"#03A339" }}>
                    {value}
                    </div>
                }
            },
            {
                Header: "Project Status",
                accessor: "projectStatus",
                Cell:({value})=>{
                    return  <div className={classess.chip} style={{backgroundColor:"rgba(64, 172, 251, 0.6)",color:"#0B71BB" }}>
                      {value}
                      </div>
                  }
            },
            {
                Header: "Enterprice Size",
                accessor: "enterpriceSize",
            },
            {
                Header: "Postal Code",
                accessor: "postalCode",
            },
            {
                Header: "Address Reagion",
                accessor: "addressRegion",
            },
            {
                Header: "Address LEPs",
                accessor: "addressLEP",
            },
            {
                Header: "Multiple LEPs",
                accessor: "multipleLEP",
            },
            {
                Header: "industrial Strategy Challange Funds",
                accessor: "industrialStrategyChallangeFunds",
            },
            {
                Header: "Public Description",
                accessor: "publicDescription",
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
            <div>

                <Grid container style={{ marginBottom: "10px" }} >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: 600 , fontFamily: "Poppins" , fontSize: "26px" , lineHeight: "39px" , color: "#000000" }}>Innovate Grants</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classess.searchcontainer}>
                        <Button
                            className={classess.Button}
                            style={{ background: "#FFFFFF", color: "#000000", marginRight: "10px" , padding: "2px 10px" , fontWeight: 600 , fontFamily: "Poppins" , fontSize: "26px" , lineHeight: "39px" , color: "#000000"}}
                            variant="contained"
                            size="small"
                            startIcon={<img src={"/images/Filter.png"} alt="company-note-list" />}
                        >

                            Filter
                        </Button>
                        <TextField style={{ background: "#fff" , borderRadius: "5px" , border: "1px solid #DCD9D9"}}
                            variant="outlined"
                            size="small"
                            placeholder="Search"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
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
export default InnovateGrants;