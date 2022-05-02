import React from "react";
import { useStyles } from "./styles";


import Type from './Type'
import Geography from './Geography'
import Activites from "./Activites";
import Financials from "./Financials";

export default function YearlyInsights() {
  const classess = useStyles();
  return (
    <div className={classess.insightsMain}>
        {/* Types charts */}
      <Type />

      {/* Geography map  */}

      <Geography />

      {/* Activites charts */}

      <Activites />

      {/* Financials charts */}

     <Financials />
    </div>
  );
}
