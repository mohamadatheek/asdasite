import { Box, Card, CardMedia, Grid, Typography, styled } from "@mui/material";
import { Fragment } from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: 15,
  backgroundColor: "#f8f8f9",
}));

export const AboutUs = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography></Typography>
        </Grid>
      </Grid>

      <Box px={35}>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <StyledCard elevation={0}>
              <Box>
                <CardMedia
                  component="img"
                  src={`${process.env.PUBLIC_URL}/vission.png`}
                  sx={{ width: "200px", height: "200px" }}
                />
              </Box>
              <Box p={2}>
                <Typography variant="h6">Mission</Typography>
                <Typography fontFamily={"Roboto"}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur excepturi numquam libero. Adipisci, similique
                  odio, perferendis ut quibusdam ipsa odit asperiores natus
                  voluptas labore, laudantium cum? Omnis architecto neque sequi?
                </Typography>
              </Box>
            </StyledCard>
          </Grid>
          <Grid item xs={4}>
            <StyledCard elevation={0}>
              <CardMedia
                component="img"
                src={`${process.env.PUBLIC_URL}/mission.png`}
                sx={{ width: "200px", height: "200px" }}
              />
              <Box p={2}>
                <Typography variant="h6">Vissioin</Typography>
                <Typography fontFamily={"Roboto"}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur excepturi numquam libero. Adipisci, similique
                  odio, perferendis ut quibusdam ipsa odit asperiores natus
                  voluptas labore, laudantium cum? Omnis architecto neque sequi?
                </Typography>
              </Box>
            </StyledCard>
          </Grid>
          <Grid item xs={4}>
            <StyledCard elevation={0}>
              <CardMedia
                component="img"
                src={`${process.env.PUBLIC_URL}/values.png`}
                sx={{ width: "200px", height: "200px" }}
              />
              <Box p={2}>
                <Typography variant="h6">Values</Typography>
                <Typography fontFamily={"Roboto"}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequuntur excepturi numquam libero. Adipisci, similique
                  odio, perferendis ut quibusdam ipsa odit asperiores natus
                  voluptas labore, laudantium cum? Omnis architecto neque sequi?
                </Typography>
              </Box>
            </StyledCard>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography>History</Typography>
              <Typography>
                Athugalpura Science Development Academy (ASDA) was established
                on July 16, 2004, with a clear vision to provide high-quality
                education to Tamil medium Advanced Level students in Sri Lanka.
                The school began with two primary streams of study: Physical
                Science and Bio-Science. With an initial enrollment of just 17
                pioneering students, ASDA embarked on its journey to become a
                leading institution in the region. Our first academic session
                commenced in January 2005, marking the beginning of our
                commitment to academic excellence. During this foundational
                period, ASDA was supported by a dedicated team of four teachers
                who played a crucial role in shaping the educational environment
                and laying the groundwork for future growth. The establishment
                of ASDA was driven by a desire to create a nurturing and
                intellectually stimulating environment where students could
                thrive and reach their full potential. From these humble
                beginnings, ASDA has grown significantly, now serving a diverse
                student body and continuing to uphold its tradition of
                excellence in education.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography>Administration</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography>School Staff</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography>Facilities</Typography>
              <Typography>
                Athugalpura Science Development Academy (ASDA) prides itself on
                providing a comprehensive and state-of-the-art learning
                environment that supports the academic and personal growth of
                our students. Our facilities are designed to create a conducive
                atmosphere for education and extracurricular activities.
              </Typography>
              <Typography>Smart Classrooms </Typography>
              <Typography>
                Our smart classrooms are equipped with the latest technology to
                enhance the learning experience. These classrooms feature:
                Interactive Whiteboards: Allowing teachers to present dynamic
                lessons and engage students in interactive activities. Digital
                Projectors: Used for multimedia presentations and video
                lectures. High-Speed Internet Access: Facilitating research and
                access to online educational resources. Audio-Visual Equipment:
                Supporting a variety of teaching methods and enhancing classroom
                interaction.
              </Typography>
              <Typography>Classrooms</Typography>

              <Typography>
                Our traditional classrooms are designed to provide a comfortable
                and focused learning environment. Features include: Ergonomic
                Furniture: Ensuring student comfort during long periods of
                study. Adequate Lighting and Ventilation: Promoting a healthy
                and conducive learning atmosphere. Teaching Aids: Including
                whiteboards, projectors, and other essential teaching tools.
              </Typography>
              <Typography>Hostels</Typography>
              <Typography>
                ASDA provides comfortable and secure hostel facilities for
                students who require accommodation. Our hostels offer: Separate
                Dormitories: For boys and girls, ensuring privacy and safety.
                24/7 Security: With staff and surveillance systems in place.
                Nutritious Meals: Prepared in hygienic conditions to cater to
                the dietary needs of students. Recreational Areas: Including
                common rooms, sports facilities, and study halls.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography>Community and Culture</Typography>
            <Typography>Inclusive Community</Typography>
            <Typography>
              ASDA is a melting pot of diverse cultures, backgrounds, and
              perspectives, united by a shared commitment to excellence and
              mutual respect. Cultural Diversity: We celebrate the unique
              backgrounds of our students, creating an environment where
              different cultures and perspectives enhance the learning
              experience. Supportive Environment: Our dedicated teachers and
              staff provide personalized support, ensuring each student feels
              valued and encouraged to reach their full potential.
            </Typography>
            <Typography>Values and Ethics</Typography>
            <Typography>
              Our school culture is grounded in core values that guide our
              community's actions and interactions. Integrity and Respect: We
              promote a culture of honesty, integrity, and respect for all
              individuals. Responsibility and Accountability: Students are
              encouraged to take responsibility for their actions and decisions,
              fostering a sense of accountability.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>School Policies</Typography>
            <Typography>Attendance Policy</Typography>
            <Typography>
              Regular Attendance: Students are expected to attend all classes
              regularly and punctually. Consistent attendance is crucial for
              academic success. Absence Reporting: Parents or guardians must
              notify the school of a student's absence as soon as possible,
              providing a valid reason. Make-Up Work: Students are responsible
              for catching up on any missed work due to absences.
            </Typography>
            <Typography>Academic Integrity</Typography>
            <Typography>
              Honesty in Work: Students must complete their own work and avoid
              any form of cheating, plagiarism, or academic dishonesty.
              Examination Conduct: Strict rules govern behavior during exams to
              ensure fairness and integrity.
            </Typography>
            <Typography>Behavior and Conduct</Typography>
            <Typography>
              Behavior and Conduct Respectful Behavior: Students must treat
              peers, teachers, and staff with respect and courtesy at all times.
              Classroom Conduct: Disruptive behavior in class is not tolerated.
              Students are expected to contribute positively to the learning
              environment. Bullying and Harassment: ASDA has a zero-tolerance
              policy for bullying, harassment, and discrimination. All incidents
              will be addressed promptly and appropriately.
            </Typography>
            <Typography>Dress Code</Typography>
            <Typography>
              Dress Code Uniform Requirement: Students must wear the prescribed
              school uniform, which should be clean and well-maintained.
              Personal Grooming: Neat and appropriate personal grooming is
              expected at all times. Exceptions: Any exceptions to the dress
              code (e.g., for religious reasons) must be discussed with and
              approved by the school administration.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
