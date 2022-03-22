import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default function NestedList() {
  const [KD, setKD] = useState(false);
  const [Pro, setPro] = useState(false);
  const [Fin, setFin] = useState(false);
  const [Con, setCon] = useState(false);
  const [Peo, setPeo] = useState(false);
  const [Trade, setTrade] = useState(false);
  const [OV, setOv] = useState(false);
  const [RP, setRP] = useState(false);
  const [DS, setDS] = useState(false);
  const [Doc, setDoc] = useState(false);
  const [NF, setNF] = useState(false);
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const history = useHistory();

  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, paddingTop: "0", paddingBottom: "0" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        onClick={() => history.push(`${url}/Key-Data`)}
        style={{
          backgroundColor: isActive("/Key-Data") ? "#EBE9E9" : "",
          padding: "10px 35px",
        }}
      >
        <ListItemText primary="Key Data" />
      </ListItemButton>

      <ListItemButton
        onClick={() => history.push(`${url}/Profile`)}
        style={{
          backgroundColor: isActive("/Profile") ? "#EBE9E9" : "",
          padding: "10px 35px",
        }}
      >
        <ListItemText primary="Profile" />
      </ListItemButton>

      <ListItemButton
        onClick={() => setFin(!Fin)}
        style={{ backgroundColor: Fin ? "#EBE9E9" : "", padding: "10px 35px" }}
      >
        <ListItemText primary="Financials" />
        {Fin ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={Fin}
        timeout="auto"
        unmountOnExit
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Financial`)}
            style={{
              fontStyle: isActive("/Financial") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Financials</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Ratio`)}
            style={{
              fontStyle: isActive("/Ratio") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Ratios</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Shareholding`)}
            style={{
              fontStyle: isActive("/Shareholding") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Shareholding</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Innovative-Grants`)}
            style={{
              fontWeight: isActive("/Innovative-Grants") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Innovative Grants</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Business-Valuation`)}
            style={{
              fontWeight: isActive("/Business-Valuation") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Business Valuation</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Industry-Wise`)}
            style={{
              fontWeight: isActive("/Industry-Wise") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Industry wise Analysis</Typography>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => history.push(`${url}/People`)}
        style={{
          backgroundColor: isActive("/People") ? "#EBE9E9" : "",
          padding: "10px 35px",
        }}
      >
        <ListItemText primary="People" />
      </ListItemButton>

      <ListItemButton
        onClick={() => history.push(`${url}/Trade`)}
        style={{
          backgroundColor: isActive("/Trade") ? "#EBE9E9" : "",
          padding: "10px 35px",
        }}
      >
        <ListItemText primary="Trade" />
      </ListItemButton>

      <ListItemButton
        onClick={() => setOv(!OV)}
        style={{ backgroundColor: OV ? "#EBE9E9" : "", padding: "10px 35px" }}
      >
        <ListItemText primary="Overview" />
        {OV ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={OV}
        timeout="auto"
        unmountOnExit
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/About`)}
            style={{
              fontWeight: isActive("/About") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">About</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Trading-Address`)}
            style={{
              fontWeight: isActive("/Trading-Addres") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Trading Address</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Lifeline`)}
            style={{
              fontWeight: isActive("/Lifeline") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Lifeline</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Group-Structure`)}
            style={{
              fontWeight: isActive("/Group-Structure") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Group Structure</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Notes`)}
            style={{
              fontWeight: isActive("/Notes") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Notes</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Personal-Contact-Info`)}
            style={{
              fontWeight: isActive("/Personal-Contact-Info") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Personal Contact Inforamtion</Typography>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => setRP(!RP)}
        style={{ backgroundColor: RP ? "#EBE9E9" : "", padding: "10px 35px" }}
      >
        <ListItemText primary="Risk Profile" />
        {RP ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={RP}
        timeout="auto"
        unmountOnExit
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} 
           onClick={() => history.push(`${url}/Risk-Summary`)}
          style={{ padding: "10px 35px" }}>
            <Typography variant="p">Risk Summary</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Safe-Alert`)}
            style={{
              fontWeight: isActive("/Safe-Alert") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Safe Alerts</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/CCJ`)}
            style={{
              fontWeight: isActive("/CCJ") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">CCJ'S</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Impacted-Creditors`)}
            style={{
              fontWeight: isActive("/Impacted-Creditors") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Impacted Creditors</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Commentary`)}
            style={{
              fontWeight: isActive("/Commentary") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Commentary</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Company-Event`)}
            style={{
              fontWeight: isActive("/Company-Event") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Company Events</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Creditors`)}
            style={{
              fontWeight: isActive("/Creditors") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Creditors</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Bad-Debts`)}
            style={{
              fontWeight: isActive("/Bad-Debts") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Bad Debts</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Charges`)}
            style={{
              fontWeight: isActive("/Charges") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Charges</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Write-Offs`)}
            style={{
              fontWeight: isActive("/Write-Offs") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Write Offs</Typography>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => setDS(!DS)}
        style={{ backgroundColor: DS ? "#EBE9E9" : "", padding: "10px 35px" }}
      >
        <ListItemText primary="Director/Shareholders" />
        {DS ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={DS}
        timeout="auto"
        unmountOnExit
        style={{ backgroundColor: "#F1F1F1" }}
      >
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Directors`)}
            style={{
              fontWeight: isActive("/Directors") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Directors</Typography>
          </ListItemButton>

          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Shareholders`)}
            style={{
              fontWeight: isActive("/Shareholders") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Shareholders</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Related-Directors`)}
            style={{
              fontWeight: isActive("/Related-Directors") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Related Directors</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Related-Comapnies`)}
            style={{
              fontWeight: isActive("/Related-Comapnies") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Related Companies</Typography>
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => history.push(`${url}/Related-Person-Info`)}
            style={{
              fontWeight: isActive("/Related-Person-Info") ? "bold" : "",
              padding: "10px 35px",
            }}
          >
            <Typography variant="p">Related Person Info</Typography>
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        onClick={() => history.push(`${url}/Documents`)}
        style={{
          backgroundColor: isActive("/Documents") ? "#EBE9E9" : "",
          padding: "10px 35px",
        }}
      >
        <ListItemText primary="Documents" />
      </ListItemButton>

      <ListItemButton
        onClick={() => history.push(`${url}/News-Feed`)}
        style={{
          backgroundColor: isActive("/News-Feed") ? "#EBE9E9" : "",
          padding: "10px 35px",
        }}
      >
        <ListItemText primary="News Feeds" />
      </ListItemButton>
    </List>
  );
}
