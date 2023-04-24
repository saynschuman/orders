import { convertUnixTimestampToDate } from "@/utils";
import { Box } from "@mui/system";

export const Time = (props: { unix: number }) => {
  return (
    <Box sx={{ my: 1, color: "#999" }}>
      {convertUnixTimestampToDate(props.unix)}
    </Box>
  );
};
