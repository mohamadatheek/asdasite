import {
  Grid,
  Box,
  Typography,
  Card,
  Divider,
  Avatar,
  Rating,
} from "@mui/material";
import { Testimonies } from "../constant/Testimoney";

export const Testimonials = () => {
  return (
    <Box px={3}>
      <Grid container>
        <Grid item xs={12}>
          <Box textAlign={"center"}>
            <Typography variant="h3" fontFamily={"Archivo Narrow"}>
              What Alumni Say About Our School
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {Testimonies.map((t, i) => (
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                p: 2,
                bgcolor: "#EEEEEE",
                borderRadius: 5,
                border: "1px solid lightgray",
              }}
              elevation={0}
            >
              <Box gap={2} display={"flex"} flexDirection={"column"}>
                <Box height={90}>
                  <Typography variant="body2">{t.feedback}</Typography>
                </Box>
                <Divider />
                <Box>
                  <Box display={"flex"} gap={2} alignItems={"center"}>
                    <Avatar sx={{ height: 60, width: 60 }} />
                    <Box>
                      <Typography
                        variant="body2"
                        fontSize={15}
                        fontFamily={"Oswald"}
                      >
                        {t.student_name}
                      </Typography>
                      <Rating size="small" value={t.rating} disabled />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
