import { School, Diversity2, Shield } from "@mui/icons-material";
import { Grid, Box, Typography, Card, styled } from "@mui/material";

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

export const QualitySchool = () => {
  return (
    <Box px={2}>
      <Grid container>
        <Grid item xs={12}>
          <Box textAlign={"center"}>
            <Box>
              <Typography variant="h3" fontFamily={"Archivo Narrow"}>
                Choose a Quality School
              </Typography>
              <Typography variant="h3" fontFamily={"Archivo Narrow"}>
                for a Bright Future
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <StyledCard elevation={0}>
            <Box>
              <School sx={{ fontSize: 80 }} />
            </Box>
            <Box>
              <Typography
                fontFamily={"Noto Serif"}
                variant="subtitle2"
                fontSize={30}
              >
                Academic Excellence
              </Typography>
            </Box>
            <Box>
              <Typography>
                At ASDA, we offer a rigorous academic program designed to
                challenge and inspire students. Our dedicated faculty members
                are experts in their fields, committed to fostering a love for
                learning. Our students consistently achieve high academic
                standards and gain acceptance into prestigious colleges and
                universities.
              </Typography>
            </Box>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard elevation={0}>
            <Box>
              <Diversity2 sx={{ fontSize: 80 }} />
            </Box>
            <Box>
              <Typography
                fontFamily={"Noto Serif"}
                variant="subtitle2"
                fontSize={30}
              >
                Supportive Community
              </Typography>
            </Box>
            <Box>
              <Typography>
                At ASDA, provides a nurturing and inclusive environment where
                every student is valued. With small class sizes, our teachers
                give personalized attention to each student’s needs. Our strong
                sense of community, supported by various events and activities,
                helps students build lasting friendships and feel a true sense
                of belonging.
              </Typography>
            </Box>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard elevation={0}>
            <Box>
              <Shield sx={{ fontSize: 80 }} />
            </Box>
            <Box>
              <Typography
                fontFamily={"Noto Serif"}
                variant="subtitle2"
                fontSize={30}
              >
                Safe Environment
              </Typography>
            </Box>
            <Box>
              <Typography>
                The safety and well-being of our students are our top priorities
                at Asda. We maintain a secure environment with comprehensive
                safety measures in place. Our supportive staff and programs
                ensure a safe, positive atmosphere where students can thrive
                both academically and personally. With regular drills, parental
                involvement, we create a nurturing environment.
              </Typography>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};
