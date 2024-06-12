import React, { useEffect, useState } from "react";
import { Avatar, Box, Card, Grid, Slide, Typography } from "@mui/material";
import { IPerformers } from "../constant/Performers";
import { useSwipeable } from "react-swipeable";
import {
  FiberManualRecord,
  FiberManualRecordOutlined,
} from "@mui/icons-material";

interface Props {
  Performers: IPerformers[];
}

export const Slider: React.FC<Props> = (props) => {
  const { Performers } = props;
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Performers.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Performers.length - 1 : prevIndex - 1
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
            Best Performers - 2024 -
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
            <Card sx={{ p: 2, borderRadius: 5 }}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Avatar
                  sx={{ height: 120, width: 120, borderRadius: 3 }}
                  //   src={Performers[currentIndex].avatarUrl}
                />
                <Box height={10} />
                <Typography variant="h6">{`${Performers[currentIndex].name}`}</Typography>
                <Typography>{`${Performers[currentIndex].stream}`}</Typography>
                <Typography>{`Z-Score ${Performers[currentIndex].zscore}`}</Typography>
                <Typography>{`District Rank ${Performers[currentIndex].district_rank}`}</Typography>
              </Box>
            </Card>
          </Slide>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          {Performers.map((p, i) => (
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
