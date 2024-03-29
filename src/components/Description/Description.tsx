import { Box } from "@mui/system";

export const Description = (props: { description: string | null }) => {
  return (
    <Box>
      {props.description?.split("\n").map((line, i) => (
        <Box key={i}>
          {line}
          <br />
        </Box>
      ))}
    </Box>
  );
};
