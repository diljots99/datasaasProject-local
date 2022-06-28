import { Grid, Paper, Typography, Button,  Menu,
  MenuItem,  DialogTitle } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import Donut from "./pieChart";
import BarChart from "./barChart";
import { useSelector } from "react-redux";
import DonutChart from "./Donut";
import FilterDropdown from './Filters/FilterDropdown'


export default function Activites() {
    const classess = useStyles();
    const { Insights , InsightsFilterList} = useSelector((state) => state.company);

    const [byExport, setByExport] = useState([]);
    const [byImport, setByImport] = useState([]);
    const [bySISSection, setBySISSection] = useState([]);
    const [bySector, setBySector] = useState([]);
    const [bySICDivision, setBySICDivision] = useState([]);
    const [byBySICCode, setBySICCode] = useState([]);

    const [filterBySisSection, setFilterBySisSection] = useState('');
    const [ bySisSectionFilterValue  , setBySisSectionFilterValue] = useState(null)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() =>{
      if(InsightsFilterList){
        const bySisSection = InsightsFilterList.filter(({name})=> name === "sic section")[0].suggestions
        // const byType = InsightsFilterList.filter(({name})=> name === "type")[0].suggestions
        // const byTurnover = InsightsFilterList.filter(({name})=> name === "turnover")[0].suggestions
     
        setBySisSectionFilterValue(bySisSection)
      
      }
    },[InsightsFilterList])

    useEffect(() => {
      if (Insights.companiesByExporter) {
        handleByExporter(Insights.companiesByExporter);
      }
      if (Insights.companiesByImporter) {
        handleByImporters(Insights.companiesByImporter);
      }
      if (Insights.companiesBySICSection) {
        handleBySISSection(Insights.companiesBySICSection);
      }
      if (Insights.companiesBySector) {
        handleBySector(Insights.companiesBySector);
      }
      if (Insights.companiesBySICDivision) {
        handleBySICDivision(Insights.companiesBySICDivision);
      }
      if (Insights.companiesBySICCode) {
        handleBySICCode(Insights.companiesBySICCode);
      }
    },[Insights])

    const handleByExporter =(value)=>{
      let data = [];
      let total = value.reduce((total, val) => total + val.exporterCount, 0);
      // console.log("total,", total);
      value.forEach((val) => {
        let per = (val.exporterCount / total) * 100;
        data.push({
          name: val.exporter,
          y: per,
        });
      });
      console.log("Exports", data);
      setByExport(data);
    }

    const handleByImporters =(value)=>{
      let data = [];
      let total = value.reduce((total, val) => total + val.importerCount, 0);
      // console.log("total,", total);
      value.forEach((val) => {
        let per = (val.importerCount / total) * 100;
        data.push({
          name: val.importer,
          y: per,
        });
      });
      // console.log("Importers", data);
      setByImport(data);
    }

    const  handleBySISSection = (value) =>{
      let data = [];

      value.forEach((val) => {
        if(val.sic_section !== null)      
        data.push({
          x: val.sic_section === null ? "null" : val.sic_section ,
          y: val.sectorCount,  
        });
      });
      // console.log("BySISSection", data);
      setBySISSection(data);
    }

    const  handleBySector = (value) =>{
      let data = [];

      value.forEach((val) => { 
        if(val.main_sector !== null)     
        data.push({
          x: val.main_sector === null ? "null" : val.main_sector ,
          y: val.sectorCount,  
        });
      });
      // console.log("BySISSection", data);
      setBySector(data);
    }

    const handleBySICDivision  = (value) =>{
      let data = [];

      value.forEach((val) => { 
        if(val.sic_division !== null)    
        data.push({
          x: val.sic_division === null ? "null" : val.sic_division ,
          y: val.sectorCount ,  
        });
      });
      // console.log("BySISSection", data);
      setBySICDivision(data);
    }

    
    const handleBySICCode  = (value) =>{
      let data = [];

      value.forEach((val) => { 
        if(val.sic_division !== null)    
        data.push({
          x: val.sic_division === null ? "null" : val.sic_division ,
          y: val.sectorCount ,  
        });
      });
      // console.log("BySISSection", data);
      setBySICCode(data);
    }

  return (
    <>
    <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        margin="0 0 10px 0"
      >
        <Grid item>
          <Typography variant="h5" className={classess.donutHeading}>
            Activites
          </Typography>
        </Grid>
        <Grid item>
          <Button
             id="basic-button"
             aria-controls={open ? "basic-menu" : undefined}
             aria-haspopup="true"
             aria-expanded={open ? "true" : undefined}
            className={classess.filterButton}
            variant="contained"
            size="small"
            startIcon={
              <img
                src={"/images/Filter.png"}
                alt="company-note-list"
                width="30px"
              />
            }
            onClick={handleClick}
          >
            Filter
          </Button>
          <Menu
          components='div'
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div className={classess.menu}>
              <MenuItem>
              <DialogTitle className={classess.filtertitle}>Type</DialogTitle>
              </MenuItem>
            
              <MenuItem>
              <FilterDropdown title="By SisSection"  value={filterBySisSection} onChange={setFilterBySisSection} filterValue={bySisSectionFilterValue} />
              </MenuItem>                    
            </div>
          </Menu>
        </Grid>
      </Grid>

      <div className={classess.segmentWrapper}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by SIC Section
              </Typography>
              <BarChart barColor={'#601484'} data={bySISSection} />
            </Paper>
          </Grid>

          {/* <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by SIC Division
              </Typography>
              <BarChart barColor={'#601484'}  data={bySICDivision} horizontal={true}/>
            </Paper>
          </Grid> */}

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Sector
              </Typography>
              <BarChart barColor={'#601484'} data={bySector} />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by SIC Code
              </Typography>
              <BarChart barColor={'#601484'}  data={byBySICCode} horizontal={true} />
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by SIC Division
              </Typography>
              <BarChart barColor={'#601484'}  data={bySICDivision} horizontal={true}/>
            </Paper>
          </Grid>

        <Grid container spacing={2} justifyContent="space-around" margin="10px 0">
          <Grid item xs={4}>
            <Paper className={classess.paper} style={{width:"390px"}} >
              {/* <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Expoter
              </Typography>
              <Donut /> */}

              <DonutChart data={byExport} title="No. of Companies by Expoter" />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classess.paper} style={{width:"390px"}} >
              {/* <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Importer
              </Typography>
              <Donut /> */}
              <DonutChart data={byImport} title="No. of Companies by Importer" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
