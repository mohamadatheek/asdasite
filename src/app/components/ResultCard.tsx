import { AccountCircleOutlined } from "@mui/icons-material";
import { Card, Box, Typography } from "@mui/material";

interface Props {
  name: string;
  stream: string;
  result: string;
  isMale: boolean;
}
export const ResultCard: React.FC<Props> = (props) => {
  const { isMale, name, result, stream } = props;

  return (
    <Card
      sx={{
        borderRadius: 5,
        bgcolor: "black",
        border: "2px solid white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        color: "white",
      }}
      elevation={0}
    >
      <Box>
        <AccountCircleOutlined sx={{ color: "white", fontSize: 120 }} />
      </Box>
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h6">{stream}</Typography>
        <Typography variant="h6">{result}</Typography>
      </Box>
    </Card>
  );
};
