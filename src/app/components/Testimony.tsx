import { Card, Box, Typography, Divider, Avatar, Rating } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

interface Props {
  comment: string;
  name: string;
}
export const Testimony: React.FC<Props> = (props) => {
  const { comment, name } = props;
  return (
    <Fragment>
      <Card sx={{ p: 2, bgcolor: "#EEEEEE", borderRadius: 5 }} elevation={0}>
        <Box gap={2} display={"flex"} flexDirection={"column"}>
          <Box>
            <Typography>{comment}</Typography>
          </Box>
          <Divider />
          <Box>
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <Avatar sx={{ height: 60, width: 60 }} />
              <Box>
                <Typography variant="body2" fontSize={15} fontFamily={"Oswald"}>
                  {name}
                </Typography>
                <Rating size="small" value={3.5} disabled />
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </Fragment>
  );
};
