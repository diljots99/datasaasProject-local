import React, { Suspense, lazy } from "react";
import { useStyles } from "./styles";

const Type = lazy(() => import("./Type"));
const Activites = lazy(() => import("./Activites"));
const Geography = lazy(() => import("./Geography"));
const Financials = lazy(() => import("./Financials"));

export default function YearlyInsights() {
  const classess = useStyles();
  return (
    <div className={classess.insightsMain}>
       {/* Types charts */}
      <Suspense
        fallback={
          <div>
            <h1>LOADING Types .... </h1>
          </div>
        }
      > 
        <Type />
      </Suspense>
      {/* Geography map  */}
      <Suspense
        fallback={
          <div>
            <h1>LOADING Maps .... </h1>
          </div>
        }
      >
        <Geography />
      </Suspense>
      {/* Activites charts */}

      <Suspense
        fallback={
          <div>
            <h1>LOADING Activites.... </h1>
          </div>
        }
      >
        <Activites />
      </Suspense>
      {/* Financials charts */}

      <Suspense
        fallback={
          <div>
            <h1>LOADING Financials .... </h1>
          </div>
        }
      >
        <Financials />
      </Suspense>
    </div>
  );
}
