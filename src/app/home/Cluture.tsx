import { Grid, Box, Typography, Card } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

export const Cluture = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Box textAlign={"center"}>
            <Box px={5}>
              <Typography variant="h3" fontFamily={"Archivo Narrow"}>
                School Values and Cluture
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card elevation={0}>
            <Box>
              <Typography variant="h6" fontFamily={"Roboto Condensed"}>
                Our Core Values
              </Typography>
            </Box>
            <Box>
              <Typography>
                At ASDA, we take immense pride in fostering a positive and
                inclusive culture that nurtures the growth and development of
                every student. Our core values form the bedrock of our
                community, guiding us in all our endeavors. We emphasize
                respect, integrity, and excellence, ensuring that every student
                feels valued and supported. By promoting a collaborative and
                compassionate environment, we empower students to achieve their
                full potential, both academically and personally. Our commitment
                to these principles ensures a vibrant and dynamic learning
                experience, preparing our students to become responsible and
                engaged global citizens.
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={0}>
            <Box>
              <Typography variant="h6" fontFamily={"Roboto Condensed"}>
                Culture Description
              </Typography>
            </Box>
            <Box>
              <Typography>
                At ASDA, our culture fosters holistic student growth.
                Academically, we provide a rigorous curriculum and personalized
                attention to instill a lifelong love of learning. Socially,
                students engage in various activities, clubs, and community
                projects, promoting teamwork and empathy. Emotionally, our
                supportive environment and counseling services ensure students
                feel safe and valued as they navigate challenges. We are
                dedicated to nurturing confident, compassionate individuals who
                are well-prepared to positively impact the world. Through this
                comprehensive approach, we create a vibrant community where
                every student can thrive and develop into a well-rounded,
                responsible global citizen.
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};
