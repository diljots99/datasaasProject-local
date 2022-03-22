import React, { useState, useEffect, Suspense, lazy } from "react";
import { useRouteMatch, Route } from "react-router-dom";
import Shareholding from "../../components/companySubPages/FinancialShareholfing";
import Ratio from "../../components/companySubPages/Ratio";

const BusinessValuation = lazy(() =>
  import("../../components/companySubPages/BusinessValuation/")
);
const InnovateGrants = lazy(() =>
  import("../../components/companySubPages/InnovateGrants")
);
const KeyData = lazy(() => import("../../components/companySubPages/KeyData"));
const Profile = lazy(() => import("../../components/companySubPages/Profile"));
const Trade = lazy(() => import("../../components/companySubPages/Trade"));
const Documents = lazy(() =>
  import("../../components/companySubPages/Documents")
);
const SheareHolders = lazy(() =>
  import("../../components/companySubPages/SheareHolders")
);
const RelatedDirectors = lazy(() =>
  import("../../components/companySubPages/RelatedDirectors")
);
const RelatedCompanies = lazy(() =>
  import("../../components/companySubPages/RelatedCompanies")
);
const RelatedPersonalInfo = lazy(() =>
  import("../../components/companySubPages/RelatedPersonalInfo")
);
const Control = lazy(() => import("../../components/companySubPages/Control"));
const Directors = lazy(() =>
  import("../../components/companySubPages/Directors")
);
const WriteOffs = lazy(() =>
  import("../../components/companySubPages/WriteOffs")
);
const BadDebts = lazy(() =>
  import("../../components/companySubPages/BadDebts")
);
const Charges = lazy(() => import("../../components/companySubPages/Charges"));
const People = lazy(() => import("../../components/companySubPages/People"));
const Creditors = lazy(() =>
  import("../../components/companySubPages/Creditors")
);
const CompanyEvent = lazy(() =>
  import("../../components/companySubPages/CompanyEvent")
);
const ImpactedCreditors = lazy(() =>
  import("../../components/companySubPages/ImpactedCreditors")
);
const SafeAlert = lazy(() =>
  import("../../components/companySubPages/SafeAlert")
);
const CCJSection = lazy(() => import("../../components/companySubPages/CCJ"));
const IndustryWise = lazy(() =>
  import("../../components/companySubPages/IndustryWise")
);
const Financial = lazy(() =>
  import("../../components/companySubPages/Financial")
);
const Commantry = lazy(() =>
  import("../../components/companySubPages/Commantry")
);
const About = lazy(() =>
  import("../../components/companySubPages/Overview/About")
);
const GroupStructure = lazy(() =>
  import("../../components/companySubPages/Overview/GroupStructure")
);
const Lifeline = lazy(() =>
  import("../../components/companySubPages/Overview/LifeLine")
);
const Notes = lazy(() =>
  import("../../components/companySubPages/Overview/Notes")
);
const PersonalInfo = lazy(() =>
  import("../../components/companySubPages/Overview/PersonalInfo")
);
const TradingAddress = lazy(() =>
  import("../../components/companySubPages/Overview/TradingAddress")
);
const NewsFeed = lazy(() =>
  import("../../components/companySubPages/NewsFeed")
);
const RiskSummary = lazy(() => import("../../components/companySubPages/RiskSummary"));
export default function MainComponent() {
  const { url, path } = useRouteMatch();

  const PATHS = [
    {
      path: `${path}/Key-Data`,
      component: <KeyData />,
    },
    {
      path: `${path}/Profile`,
      component: <Profile />,
    },
    {
      path: `${path}/Business-Valuation`,
      component: <BusinessValuation />,
    },
    {
      path: `${path}/Innovative-Grants`,
      component: <InnovateGrants />,
    },
    {
      path: `${path}/Trade`,
      component: <Trade />,
    },
    {
      path: `${path}/Documents`,
      component: <Documents />,
    },
    {
      path: `${path}/Shareholders`,
      component: <SheareHolders />,
    },
    {
      path: `${path}/Related-Directors`,
      component: <RelatedDirectors />,
    },
    {
      path: `${path}/Related-Comapnies`,
      component: <RelatedCompanies />,
    },
    {
      path: `${path}/Related-Person-Info`,
      component: <RelatedPersonalInfo />,
    },
    {
      path: `${path}/Control`,
      component: <Control />,
    },
    {
      path: `${path}/Directors`,
      component: <Directors />,
    },
    {
      path: `${path}/Write-Offs`,
      component: <WriteOffs />,
    },
    {
      path: `${path}/Charges`,
      component: <Charges />,
    },
    {
      path: `${path}/Bad-Debts`,
      component: <BadDebts />,
    },
    {
      path: `${path}/People`,
      component: <People />,
    },
    {
      path: `${path}/Shareholding`,
      component: <Shareholding />,
    },
    {
      path: `${path}/Creditors`,
      component: <Creditors />,
    },
    {
      path: `${path}/Company-Event`,
      component: <CompanyEvent />,
    },
    {
      path: `${path}/Impacted-Creditors`,
      component: <ImpactedCreditors />,
    },
    {
      path: `${path}/Safe-Alert`,
      component: <SafeAlert />,
    },
    {
      path: `${path}/CCJ`,
      component: <CCJSection />,
    },
    {
      path: `${path}/Industry-Wise`,
      component: <IndustryWise />,
    },
    {
      path: `${path}/Financial`,
      component: <Financial />,
    },
    {
      path: `${path}/Ratio`,
      component: <Ratio />,
    },
    {
      path: `${path}/Commentary`,
      component: <Commantry />,
    },
    {
      path: `${path}/About`,
      component: <About />,
    },
    {
      path: `${path}/Group-Structure`,
      component: <GroupStructure />,
    },
    {
      path: `${path}/Notes`,
      component: <Notes />,
    },
    {
      path: `${path}/Lifeline`,
      component: <Lifeline />,
    },
    {
      path: `${path}/Trading-Address`,
      component: <TradingAddress />,
    },
    {
      path: `${path}/Personal-Contact-Info`,
      component: <PersonalInfo />,
    },
    {
      path: `${path}/News-Feed`,
      component: <NewsFeed />,
    },
    {
      path: `${path}/Risk-Summary`,
      component: <RiskSummary />,
    },
  ];

  return (
    <div>
      <Suspense
        fallback={
          <div>
            <h1> LOADING ....</h1>
          </div>
        }
      >
        {PATHS.map((val) => (
          <Route path={val.path}>{val.component}</Route>
        ))}
      </Suspense>
    </div>
  );
}
