import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Grid, IconButton } from "@mui/material";

export const Arrows = (props: {
  offset: number;
  setOffset: (o: number) => void;
}) => {
  return (
    <Grid container sx={{ position: "fixed", bottom: 1, left: 1 }}>
      <IconButton onClick={() => props.setOffset(props.offset + 20)}>
        <KeyboardBackspaceIcon />
      </IconButton>
      {!!props.offset && (
        <IconButton
          onClick={() => props.setOffset(props.offset ? props.offset - 20 : 0)}
        >
          <KeyboardBackspaceIcon sx={{ rotate: "180deg" }} />
        </IconButton>
      )}
    </Grid>
  );
};
