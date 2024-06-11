import { Grid, Box, Typography, Avatar } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { Performers } from "../constant/Performers";
import { useBreakpointUp } from "../constant/MediaQuery";

export const BestPerformermers = () => {
  const matches = useBreakpointUp("md");

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Box textAlign={"center"}>
            <Typography variant="h3" fontFamily={"Archivo Narrow"}>
              Best Performers - 2024 -
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box px={matches ? 50 : 2}>
        <Grid container spacing={4}>
          {Performers.map((p, i) => (
            <Grid item xs={12} sm={6} md={3}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Avatar sx={{ height: 120, width: 120, borderRadius: 3 }} />
                <Box height={10} />
                <Typography variant="h6">{`${p.name}`}</Typography>
                <Typography>{`${p.stream}`}</Typography>
                <Typography>{`Z-Score ${p.zscore}`}</Typography>
                <Typography>{`Distric Rank ${p.district_rank}`}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
};
