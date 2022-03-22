import React from 'react'
import './styles.css'
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
  return (
    <Container>
      <Typography variant='h5' style={{ color: "#8a8fa7" }}>Risk Summary</Typography>
      {/* first 13 boxes */}
      {/* 1/3 */}
      <Grid container spacing={2} className="mains" >
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3}>
              <Typography display="inline" variant="h5">Safe Alert</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "162px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>No</Typography>

            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }} >
            <Box p={3} >
              <Typography display="inline" variant="h5">CJJ'S</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "206px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>No</Typography>

            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3} >
              <Typography display="inline" variant="h5">Overdue Account</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "90px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>No Overdue</Typography>

            </Box>
          </Paper>

        </Grid>
      </Grid>
      {/* 2/3 */}
      <Grid container spacing={2} className="mains" >
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3}>
              <Typography display="inline" variant="h5">Last Account Field</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "76px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>31/07/2020 (40 Days Before)</Typography>

            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }} >
            <Box p={3} >
              <Typography display="inline" variant="h6">Changed Director in 3 month</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "24px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>No Changes</Typography>

            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3} >
              <Typography display="inline" variant="h5">Disqualified Directors</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "44px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>0</Typography>

            </Box>
          </Paper>

        </Grid>
      </Grid>

      {/* 3/3 */}
      <Grid container spacing={2} className="mains" >
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3} >
              <Typography display="inline" variant="h5">Furlough</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "170px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>Not Avaliable</Typography>

            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3} >
              <Typography display="inline" variant="h5">Corporate Land</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "107px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>No</Typography>

            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3} >
              <Typography display="inline" variant="h5">Bad Debts</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "158px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>No. of Bad Debts:00</Typography>
              <Typography display="inline" variant="h6" style={{ color: "gray",marginLeft:"34px" }}>Total Amount:00 </Typography>

            </Box>
          </Paper>

        </Grid>
      </Grid>

      {/* 4/3 */}
      <Grid container spacing={2} className="mains" >
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3} >
              <Typography display="inline" variant="h5">Creditors</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "169px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>No of Creditors:00</Typography>
              <Typography display="inline" variant="h6" style={{ color: "gray",marginLeft:"49px" }}>Total Amount:00 </Typography>

            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3} >
              <Typography display="inline" variant="h5">Risk Assessment</Typography>
              <br />
              {/* <ColorPalette palette={palette} /> */}
              <input 
              type="color" 
              value="#e66465"
              style={{ width:"340px", height:"10px" }}
              >
              </input><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>Very Low</Typography>
              <Typography display="inline" variant="h6" style={{ color: "gray",marginLeft:"38px" }}>Low</Typography>
              <Typography display="inline" variant="h6" style={{ color: "gray",marginLeft:"37px" }}>Modrate</Typography>
              <Typography display="inline" variant="h6" style={{ color: "gray",marginLeft:"37px" }}>High</Typography>

            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3} >
              <Typography display="inline" variant="h5">Ultimate Parent Company</Typography>
              <br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>The University of Hertfordshire</Typography>

            </Box>
          </Paper>

        </Grid>
      </Grid>

      {/* 13 */}
      <Grid container spacing={2} className="mains" >
      <Grid item lg={4} >

        <Paper style={{ borderRadius: "10px" }}>
          <Box p={3} >
            <Typography display="inline" variant="h5">Changes Outstanding</Typography>
              <Typography display="inline" variant="h6" style={{ marginLeft: "52px", color: "darkturquoise" }}>See More</Typography><br />
              <Typography display="inline" variant="h6" style={{ color: "gray" }}>Abc Banks<br/>Last Update on 19/08/2020</Typography>
              
          </Box>
        </Paper>
      </Grid>
      </Grid>

      {/* second 3 boxess */}
      <Grid container spacing={2} className="mains" >
        <Grid item lg={4} >

          <Paper style={{ backgroundColor: "cornflowerblue", borderRadius: "10px" }}>
            <Box p={3}>
              <Typography display="inline" variant="h5">Turnover</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "227px" }}>25</Typography><br />
              <Typography display="inline" variant="h5">$3884949</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "150px" }}>$3384949</Typography>
            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ backgroundColor: "gold", borderRadius: "10px" }} >
            <Box p={3} >
              <Typography display="inline" variant="h5">Total Assets</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "195px" }}>25</Typography><br />
              <Typography display="inline" variant="h5">$3884949</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "150px" }}>$3384949</Typography>
            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4} >

          <Paper style={{ backgroundColor: "darkturquoise", borderRadius: "10px" }}>
            <Box p={3} >
              <Typography display="inline" variant="h5">Total Liabilities</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "159px" }}>25</Typography><br />
              <Typography display="inline" variant="h5">$3884949</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "122px" }}>$333884949</Typography>
            </Box>
          </Paper>

        </Grid>
      </Grid>

      {/*forth 3 boxes */}
      <Grid container spacing={2} className="mains">
        <Grid item lg={4}>

          <Paper style={{ backgroundColor: "lightsalmon", borderRadius: "10px" }}>
            <Box p={3}>
              <Typography display="inline" variant="h5">Net Worth</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "212px" }}>25</Typography><br />
              <Typography display="inline" variant="h5">$3884949</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "144px" }}>$3384949</Typography>
            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4}>

          <Paper style={{ backgroundColor: "crimson", borderRadius: "10px" }}>
            <Box p={3}>
              <Typography display="inline" variant="h5">Profit Before Tax</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "144px" }}>25</Typography><br />
              <Typography display="inline" variant="h5">$3884949</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "144px" }}>$3384949</Typography>
            </Box>
          </Paper>

        </Grid>
        <Grid item lg={4}>

          <Paper style={{ backgroundColor: "darkgreen", borderRadius: "10px" }}>
            <Box p={3}>
              <Typography display="inline" variant="h5">EBITDA</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "223px" }}>25</Typography><br />
              <Typography display="inline" variant="h5">$3884949</Typography>
              <Typography display="inline" variant="h5" style={{ marginLeft: "122px" }}>$333884949</Typography>
            </Box>
          </Paper>

        </Grid>
      </Grid>

      {/* third 2 div */}

    </Container>
  )
}

