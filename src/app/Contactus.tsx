import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Fragment } from "react";
import { Button } from "./components/Button";
import {
  Apartment,
  Call,
  Email,
  Facebook,
  LocationCity,
  Place,
  RingVolume,
  WhatsApp,
} from "@mui/icons-material";
import { useBreakpointUp } from "./constant/MediaQuery";

export const Contactus = () => {
  const matches = useBreakpointUp("md");

  const handleSubmit = () => {};

  return (
    <Fragment>
      <Box component={"form"} onSubmit={handleSubmit}>
        <Grid
          container
          spacing={5}
          sx={{ height: "80vh" }}
          justifyContent="center"
          alignItems="center"
          px={matches ? 30 : 2}
        >
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography fontWeight="bold" variant="h4" p={0}>
                  Get In Touch
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Contact us for any questions, enrollment inquiries, or
                  collaboration opportunities. Whether you're a prospective
                  parent, current student, or community member, we’re here to
                  help. Reach out via the contact information provided. We look
                  forward to connecting and assisting you with your educational
                  needs at ASDA.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <RingVolume sx={{ fontSize: 30, mr: 1 }} />
                  <Typography variant="body1">(037) 2247-562</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Email sx={{ fontSize: 30, mr: 1 }} />
                  <Typography variant="body1">asdakek@gmail.com</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Place sx={{ fontSize: 30, mr: 1 }} />
                  <Typography variant="body1">
                    No. 194, Madalassa, Kekunagolla
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Apartment sx={{ fontSize: 30, mr: 1 }} />
                  <Typography variant="body1">
                    Office Hour: 9.00 AM - 5.00 PM
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Box>
                    <IconButton>
                      <Facebook sx={{ fontSize: 35 }} />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton>
                      <WhatsApp sx={{ fontSize: 35 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Box py={2}>
              <Typography fontWeight={"bold"} variant="h4">
                Contact Us
              </Typography>
            </Box> */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth label="Name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField required fullWidth label="Email" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField required fullWidth label="Phone Number" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item>
                <Button type="submit" size="large">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};
