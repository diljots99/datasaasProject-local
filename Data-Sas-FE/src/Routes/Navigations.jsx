import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Profile = lazy(() => import("../pages/Profile/"));
const Subscription = lazy(() => import("../pages/Subscription/"));
const Dashboard = lazy(() => import("../pages/Dashboard/"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ExportList = lazy(() => import("../pages/ExportList/"));
const BusinessWatch = lazy(() => import("../pages/BusinessWatch/"));
const BusinessSearch = lazy(() => import("../pages/BusinessSearch/"));
const YearlyInsights = lazy(() => import("../pages/YearlyInsights/"));
const CompanyNoteList = lazy(() => import("../pages/CompanyNotes/"));
const Watch = lazy(() => import("../pages/Watch/index"));
const Director = lazy(() => import("../pages/Director/"));
const Company = lazy(() => import("../pages/Company/"));
const SavedSearches = lazy(() => import("../pages/SavedSearches/"));
const UserSavedList = lazy(() => import("../pages/UserSavedList/"));

export default function Navigations() {
  return (
    <Suspense
      fallback={
        <div>
          <h1>LOADING ....</h1>
        </div>
      }
    >
      <Switch>
        <Route path="/business-search/" component={Watch} />
        <Route path="/business-watch/" component={BusinessWatch} />
        <Route path="/export-list/" component={ExportList} />
        <Route path="/subscription/" component={Subscription} />
        <Route path="/yearly-insights/" component={YearlyInsights} />
        <Route path="/saved-searches/" component={SavedSearches} />
        <Route path="/profile/" component={Profile} />
        <Route path="/company-note-list/" component={CompanyNoteList} />
        <Route path="/watch/" component={BusinessSearch} />
        <Route path="/director/:ID" component={Director} />
        <Route path="/company/:ID" component={Company} />
        <Route path="/user-saved-list" component={UserSavedList} />
        <Route exact path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
