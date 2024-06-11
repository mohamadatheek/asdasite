import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { Lectures } from "./constant/lectures";
import { ChartData, ChartOptions } from "chart.js";
import LineChart from "./components/LineChart";
import { optionsLine } from "./constant/chartdata";
import { Streams } from "./home/Stream";

export const Academics = () => {
  const data: ChartData<"line"> = {
    labels: [
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
    ],
    datasets: [
      {
        label: "students",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "white",
        borderColor: "lightgray",
      },
    ],
  };

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            textAlign={"center"}
            fontFamily={"Archivo Narrow"}
            p={5}
          >
            Overview
          </Typography>
          <Box px={20}>
            <Typography
              variant="body1"
              fontSize={19}
              fontFamily={"PT Sans"}
              // fontWeight={400}
            >
              Welcome to the Academic section of Athugalpura Science Development
              Academy (ASDA), where we are dedicated to fostering academic
              excellence and holistic development. At ASDA, our goal is to
              provide a challenging and supportive learning environment that
              empowers students to reach their full potential and prepares them
              for future success. We believe in educating the whole student. Our
              approach integrates academic learning with extracurricular
              activities, personal development, and community involvement. This
              holistic education model ensures that our students develop not
              only intellectually but also socially and emotionally, equipping
              them with the skills necessary to navigate the complexities of the
              modern world. We understand that each student has unique learning
              needs. ASDA offers a range of academic support services, including
              tutoring, counseling, and special education programs. Our goal is
              to provide every student with the resources and assistance they
              need to succeed academically and personally.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box py={5}>
          <Streams />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box color={"white"} bgcolor={"black"} px={2} py={5}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Typography
                      textAlign={"center"}
                      variant="h4"
                      fontFamily={"Archivo Narrow"}
                    >
                      Student Enrollment
                    </Typography>
                    <Box display={"flex"} gap={2}>
                      <Box border={"2px solid white"} width={30} />
                      <Box border={"2px solid white"} width={2} />
                    </Box>
                  </Box>
                  <Box>
                    <LineChart data={data} options={optionsLine} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Typography
                      textAlign={"center"}
                      variant="h4"
                      fontFamily={"Archivo Narrow"}
                    >
                      University Enterence
                    </Typography>
                    <Box display={"flex"} gap={2}>
                      <Box border={"2px solid white"} width={30} />
                      <Box border={"2px solid white"} width={2} />
                    </Box>
                  </Box>
                  <Box>
                    <LineChart data={data} options={optionsLine} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            textAlign={"center"}
            fontFamily={"Archivo Narrow"}
          >
            Lecture Pannel
          </Typography>
          <Box>
            <Box
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
              p={5}
            >
              <Typography
                textAlign={"center"}
                variant="h4"
                fontFamily={"Archivo Narrow"}
              >
                Science Stream
              </Typography>
              <Box display={"flex"} gap={2}>
                <Box border={"2px solid black"} width={30} />
                <Box border={"2px solid black"} width={2} />
              </Box>
            </Box>
            <Box px={20}>
              <Grid container spacing={2}>
                {Lectures.map((l, i) => (
                  <Grid item xs={12} md={2} key={i}>
                    <Card
                      elevation={0}
                      sx={{
                        bgcolor: "#f2f2f2",
                        borderRadius: 5,
                        border: "1px solid lightgray",
                      }}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        // gap={2}
                        justifyContent={"center"}
                        alignItems={"center"}
                        p={2}
                      >
                        <Avatar sx={{ width: 90, height: 90 }} />
                        <Box height={10} />
                        <Typography variant="subtitle2" fontSize={15}>
                          {l.name.toUpperCase()}
                        </Typography>
                        <Typography>{l.degree}</Typography>
                        <Typography>{l.subject}</Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h2"
              textAlign={"center"}
              fontFamily={"Archivo Narrow"}
              padding={3}
            >
              Best Performaers Of the Year
            </Typography>
            <Box
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
              p={5}
            >
              <Typography
                textAlign={"center"}
                variant="h4"
                fontFamily={"Archivo Narrow"}
              >
                Bio-Science
              </Typography>
              <Box display={"flex"} gap={2}>
                <Box border={"2px solid black"} width={30} />
                <Box border={"2px solid black"} width={2} />
              </Box>
            </Box>

            <Box>
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                p={5}
              >
                <Typography
                  textAlign={"center"}
                  variant="h4"
                  fontFamily={"Archivo Narrow"}
                >
                  Physical-Science
                </Typography>
                <Box display={"flex"} gap={2}>
                  <Box border={"2px solid black"} width={30} />
                  <Box border={"2px solid black"} width={2} />
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                justifyContent={"center"}
                alignItems={"center"}
                display={"flex"}
                flexDirection={"column"}
                p={5}
              >
                <Typography
                  textAlign={"center"}
                  variant="h4"
                  fontFamily={"Archivo Narrow"}
                >
                  Technology
                </Typography>
                <Box display={"flex"} gap={2}>
                  <Box border={"2px solid black"} width={30} />
                  <Box border={"2px solid black"} width={2} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="h2"
            textAlign={"center"}
            fontFamily={"Archivo Narrow"}
            padding={3}
          >
            Result Summery
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};
