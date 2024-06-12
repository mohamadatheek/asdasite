import {
  Grid,
  Box,
  Typography,
  Slide,
  Card,
  Avatar,
  Divider,
  Rating,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Testimonials } from "../constant/Testimoney";
import {
  FiberManualRecordOutlined,
  FiberManualRecord,
} from "@mui/icons-material";

interface Props {
  Testimonials: Testimonials[];
}
export const TestiSlider: React.FC<Props> = (props) => {
  const { Testimonials } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [inProp, setInProp] = useState(true);

  const handleSwipe = (direction: "left" | "right") => {
    setDirection(direction);
    setInProp(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleExited = () => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Testimonials.length - 1 : prevIndex - 1
      );
    }
    setInProp(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("left");
      setInProp(false);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box textAlign={"center"}>
          <Typography variant="h3" fontFamily={"Archivo Narrow"}>
            What Alumni Say About Our School
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box p={3} {...handlers} overflow={"hidden"}>
          <Slide
            direction={direction === "left" ? "left" : "right"}
            in={inProp}
            mountOnEnter
            unmountOnExit
            onExited={handleExited}
          >
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
                  <Typography variant="body2">
                    {Testimonials[currentIndex].feedback}
                  </Typography>
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
                        {Testimonials[currentIndex].student_name}
                      </Typography>
                      <Rating
                        size="small"
                        value={Testimonials[currentIndex].rating}
                        disabled
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Slide>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          {Testimonials.map((p, i) => (
            <>
              {i === currentIndex ? (
                <FiberManualRecordOutlined />
              ) : (
                <FiberManualRecord
                  onClick={() => {
                    setCurrentIndex(i);
                  }}
                />
              )}
            </>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};
