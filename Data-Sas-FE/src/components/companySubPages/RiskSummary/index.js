import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import { ColorPalette   } from 'material-ui-color';

// const palette = {
//   red: '#ff0000',
//   blue: '#0000ff',
//   green: '#00ff00',
//   yellow: 'yellow',
//   cyan: 'cyan',
//   lime: 'lime',
//   gray: 'gray',
//   orange: 'orange',
//   purple: 'purple',
//   black: 'black',
//   white: 'white',
//   pink: 'pink',
//   darkblue: 'darkblue',
// };

export default function index() {
  const CardOne = ({ title, value1, value2 }) => {
    return (
      <Paper
        style={{
          borderRadius: "10px",
          width: "300px",
          padding: "5px 10px",
          margin: "5px",
        }}
      >
        <Grid container style={{ justifyContent: "space-between" }}>
          <Grid item style={{ width: "50%" }}>
            <Typography display="inline" variant="h5">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              display="inline"
              variant="h6"
              style={{ color: "darkturquoise" }}
            >
              See More
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ justifyContent: "space-between", marginTop: "5px" }}
        >
          <Grid item style={{ width: "50%" }}>
            {value1 && (
              <Typography
                display="inline"
                variant="h6"
                style={{ color: "gray" }}
              >
                {value1}
              </Typography>
            )}
          </Grid>
          <Grid item style={{ width: "50%" }}>
            {value2 && (
              <Typography
                display="inline"
                variant="h6"
                style={{ color: "gray" }}
              >
                {value2}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    );
  };

  const CardTwo = ({ color, title, value1, value2 }) => {
    return (
      <Paper
        style={{
          backgroundColor: `${color}`,
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <Box p={3}>
          <Grid container style={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography
                display="inline"
                variant="h6"
                style={{ color: "white" }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                display="inline"
                variant="h5"
                style={{ color: "white" }}
              >
                25
              </Typography>
            </Grid>
          </Grid>

          <Grid container style={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography
                display="inline"
                variant="h5"
                style={{ color: "white" }}
              >
                {value1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                display="inline"
                variant="h6"
                style={{ color: "white" }}
              >
                {value2}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    );
  };

  return (
    <Container style={{ width: "1000px" }}>
      <Typography variant="h5" style={{ color: "#8a8fa7" }}>
        Risk Summary
      </Typography>
      {/* first 13 boxes */}

      {/* 1/3 */}
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <CardOne title="Safe Alert" value1="No" />
        </Grid>
        <Grid item lg={4}>
          <CardOne title="CJJ'S" value1="No" />
        </Grid>
        <Grid item lg={4}>
          <CardOne title="Overdue Account" value1="No Overdue" />
        </Grid>
      </Grid>

      {/* 2/3 */}
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <CardOne
            title="Last Account Field"
            value1="31/07/2020 (40 Days Before)"
          />
        </Grid>
        <Grid item lg={4}>
          <CardOne title="Changed Director in 3 month" value1="No Changes" />
        </Grid>
        <Grid item lg={4}>
          <CardOne title="Disqualified Directors" value1="0" />
        </Grid>
      </Grid>

      {/* 3/3 */}
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <CardOne title="Furlough" value1="Not Avaliable" />
        </Grid>
        <Grid item lg={4}>
          <CardOne title="Corporate Land" value1="No" />
        </Grid>
        <Grid item lg={4}>
          <CardOne
            title="Corporate Land"
            value1="No. of Bad Debts:00"
            value2="Total Amount:00"
          />
        </Grid>
      </Grid>

      {/* 4/3 */}
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <CardOne
            title="Creditors"
            value1="No of Creditors:00"
            value2="Total Amount:00"
          />
        </Grid>
        <Grid item lg={4}>
          <Paper
            style={{
              borderRadius: "10px",
              width: "300px",
              padding: "5px 10px",
              margin: "5px",
            }}
          >
            <Box p={3}>
              <Typography display="inline" variant="h5">
                Risk Assessment
              </Typography>
              <br />
              {/* <ColorPalette palette={palette} /> */}
              <input
                type="color"
                value="#e66465"
                style={{ width: "250px", height: "10px" }}
              ></input>
              <br />

              <Grid container justify="space-between">
                <Grid item >
                  <Typography
                    variant="text"
                    style={{ color: "gray"  }}
                  >
                    Very Low
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography                 
                  variant="text"
                    style={{ color: "gray" }}
                  >
                    Low
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography
                    variant="text"
                    style={{ color: "gray" }}
                  >
                    Modrate
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography
                    variant="text"
                    style={{ color: "gray" }}
                  >
                    High
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <CardOne
            title="Ultimate Parent Company"
            value1="The University of Hertfordshire"
          />
        </Grid>
      </Grid>

      {/* 13 */}
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <CardOne
            title="Changes Outstanding"
            value1=" Abc Banks"
            value2="Last Update on 19/08/2020"
          />
        </Grid>
      </Grid>

      {/* second 3 boxess */}
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <CardTwo
            color="cornflowerblue"
            title="Turnover"
            value1="$3884949"
            value2="$3384949"
          />
        </Grid>
        <Grid item lg={4}>
          <CardTwo
            color="gold"
            title="Total Assets"
            value1="$3884949"
            value2="$3884949"
          />
        </Grid>
        <Grid item lg={4}>
          <CardTwo
            color="darkturquoise"
            title="Total Liabilities"
            value1="$3884949"
            value2="$3884949"
          />
        </Grid>
      </Grid>

      {/*forth 3 boxes */}
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <CardTwo
            color="lightsalmon"
            title="Net Worth"
            value1="$3884949"
            value2="$3884949"
          />
        </Grid>
        <Grid item lg={4}>
          <CardTwo
            color="crimson"
            title="Profit Before Tax"
            value1="$3884949"
            value2="$3884949"
          />
        </Grid>
        <Grid item lg={4}>
          <CardTwo
            color="darkgreen"
            title="EBITDA"
            value1="$3884949"
            value2="$3884949"
          />
        </Grid>
      </Grid>

      {/* third 2 div */}
    </Container>
  );
}
