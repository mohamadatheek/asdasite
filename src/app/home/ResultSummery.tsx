import { Box, Typography, Grid } from "@mui/material"
import { BestPerformermers, Groupoptions } from "../constant/chartdata"
import { BarChart } from "../components/BarChart"

export const ResultSummery=()=>{
    return(
        <>
         <Box p={5} bgcolor={"black"} color={"white"}>
            <Box pb={5}>
              <Typography variant="h4" fontFamily={"Archivo Narrow"}>
                Result Summery 2023
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" fontSize={16}>
                  Bio-Science
                </Typography>
                <Box>
                  <BarChart data={BestPerformermers} options={Groupoptions} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" fontSize={16}>
                  Physical-Science
                </Typography>
                <Box>
                  <BarChart data={BestPerformermers} options={Groupoptions} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle2" fontSize={16}>
                  Technology
                </Typography>
                <Box>
                  <BarChart data={BestPerformermers} options={Groupoptions} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
    )
}