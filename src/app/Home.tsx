import {
  AccountCircleOutlined,
  Calculate,
  CalculateOutlined,
  Computer,
  ComputerOutlined,
  Diversity2,
  MedicationLiquid,
  Person,
  School,
  Science,
  ScienceOutlined,
  Shield,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { ChartData, ChartOptions } from "chart.js";
import { Fragment } from "react";
import styled from "styled-components";
import { BarChart } from "./components/BarChart";
import { Groupoptions } from "./constant/chartdata";
import { Streams } from "./home/Stream";
import { QualitySchool } from "./home/QualitySchool";
import { Cluture } from "./home/Cluture";
import { ResultSummery } from "./home/ResultSummery";
import { Testimonials } from "./home/Testimonials";
import { BestPerformermers } from "./home/BestPerformars";
import { Slider } from "./components/Slider";
import { Performers } from "./constant/Performers";
import { useBreakpointUp } from "./constant/MediaQuery";
import { TestiSlider } from "./components/TestiSlider";
import { Testimonies } from "./constant/Testimoney";

const StyledCenterBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledCardStream = styled(Card)`
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 25px !important;
  padding: 16px !important;
  border: 1px solid #e0e0e0 !important;
  background-color: #f1f1f1 !important;
  color: gray !important;
`;

const StyledCard = styled(Card)`
  padding: 16px !important;
  border-radius: 25px !important;
  border: 1px solid #e0e0e0 !important;
  background-color: #f2f2f2 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
`;
export const Home = () => {
  const matches = useBreakpointUp("md");

  return (
    <Fragment>
      <Box height={"80vh"}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Box>

      <Grid container spacing={2} direction={"column"}>
        <Grid item xs={12}>
          <Streams />
        </Grid>
        <Grid item xs={12}>
          <Box px={5} py={20} bgcolor={"#1975d4"} color={"white"}>
            <Grid container spacing={matches ? 2 : 8}>
              <Grid item xs={12} md={4}>
                <StyledCenterBox>
                  <Typography variant="h2" fontWeight={"bold"}>
                    4,3K
                  </Typography>
                  <Typography variant="h6">Students</Typography>
                </StyledCenterBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <StyledCenterBox>
                  <Typography variant="h2" fontWeight={"bold"}>
                    60+
                  </Typography>
                  <Typography variant="h6">Teachers</Typography>
                </StyledCenterBox>
              </Grid>
              <Grid item xs={12} md={4}>
                <StyledCenterBox>
                  <Typography variant="h2" fontWeight={"bold"}>
                    10K
                  </Typography>
                  <Typography variant="h6">University Enterence</Typography>
                </StyledCenterBox>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {matches ? <BestPerformermers /> : <Slider Performers={Performers} />}
        </Grid>
        <Grid item xs={12}>
          <Cluture />
        </Grid>
        <Grid item xs={12}>
          <QualitySchool />
        </Grid>
        <Grid item xs={12}>
          <ResultSummery />
        </Grid>
        <Grid item xs={12}>
          {matches ? <Testimonials /> : <TestiSlider  Testimonials={Testimonies}/>}
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Fragment>
  );
};

// https://preview.themeforest.net/item/teachzy-school-management-html-5-template/full_screen_preview/28167547?_ga=2.213137684.1893705115.1717421489-1632299981.1702970754
