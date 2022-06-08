import React , { Suspense, lazy }from "react";
import { useStyles } from "./styles";

import Type from './Type'
import Geography from './Geography'
import Activites from "./Activites";
import Financials from "./Financials";

// const Type = lazy(() => import("./Type"));
// const Activites = lazy(() => import("./Activites"));
// const Geography = lazy(() => import("./Geography"));
// const Financials= lazy(() => import("./Financials"));

export default function YearlyInsights() {
  const classess = useStyles();
  return (
   
    <div className={classess.insightsMain}>
       {/* <Suspense
    fallback={
      <div>
        <h1>LOADING Insights .... </h1>
      </div>
    }
  >  */}
        {/* Types charts */}
      <Type />

      {/* Geography map  */}

      <Geography />

      {/* Activites charts */}

      <Activites />

      {/* Financials charts */}

     <Financials />
     {/* </Suspense> */}
    </div>
  
  );
}
