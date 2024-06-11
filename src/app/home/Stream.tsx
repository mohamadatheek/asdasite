import {
  CalculateOutlined,
  ComputerOutlined,
  MedicationLiquid,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

export const Streams = () => {
  return (
    <Fragment>
      <Box display={"flex"} flexDirection={"column"} gap={10}>
        <Typography
          textAlign={"center"}
          variant="h2"
          fontFamily={"Archivo Narrow"}
        >
          Streams
        </Typography>
        <Box px={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={3}
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box>
                  <MedicationLiquid sx={{ fontSize: 100 }} />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    fontFamily={"Roboto Condensed"}
                    textAlign={"center"}
                  >
                    Bio-Science
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={3}
                textAlign={"center"}
              >
                <Box>
                  <CalculateOutlined sx={{ fontSize: 100 }} />
                </Box>
                <Box>
                  <Typography variant="h3" fontFamily={"Roboto Condensed"}>
                    Physical Science
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={3}
                textAlign={"center"}
              >
                <Box>
                  <ComputerOutlined sx={{ fontSize: 100 }} />
                </Box>
                <Box>
                  <Typography variant="h3" fontFamily={"Roboto Condensed"}>
                    Technology
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};
