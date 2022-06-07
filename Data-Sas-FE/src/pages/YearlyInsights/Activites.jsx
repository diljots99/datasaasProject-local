import { Grid, Paper, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import Donut from "./pieChart";
import BarChart from "./barChart";
import { useSelector } from "react-redux";
import DonutChart from "./Donut";

export default function Activites() {
    const classess = useStyles();
    const { Insights } = useSelector((state) => state.company);

    const [byExport, setByExport] = useState([]);
    const [byImport, setByImport] = useState([]);
    const [bySISSection, setBySISSection] = useState([]);
    const [bySector, setBySector] = useState([]);

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
    },[Insights])

    const handleByExporter =(value)=>{
      let data = [];
      let total = value.reduce((total, val) => total + val.exporterCount, 0);
      console.log("total,", total);
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
      console.log("total,", total);
      value.forEach((val) => {
        let per = (val.importerCount / total) * 100;
        data.push({
          name: val.importer,
          y: per,
        });
      });
      console.log("Importers", data);
      setByImport(data);
    }

    const  handleBySISSection = (value) =>{
      let data = [];

      value.forEach((val) => {     
        data.push({
          x: val.sic_section === null ? "null" : val.sic_section ,
          y: val.sectorCount,  
        });
      });
      console.log("BySISSection", data);
      setBySISSection(data);
    }

    const  handleBySector = (value) =>{
      let data = [];

      value.forEach((val) => {     
        data.push({
          x: val.main_sector === null ? "null" : val.main_sector ,
          y: val.sectorCount,  
        });
      });
      console.log("BySISSection", data);
      setBySector(data);
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
            onClick={() => {}}
          >
            Filter
          </Button>
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

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by SIC Division
              </Typography>
              <BarChart barColor={'#601484'} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Sector
              </Typography>
              <BarChart barColor={'#601484'} data={bySector} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by SIC Code
              </Typography>
              <BarChart barColor={'#601484'} />
            </Paper>
          </Grid>
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
