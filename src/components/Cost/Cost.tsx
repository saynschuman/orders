import { Grid } from "@mui/material";

export const Cost = (props: { currency: string; max: number }) => {
  return (
    <Grid container gap={1} sx={{ fontWeight: "bold", my: 1 }}>
      <Grid item>{props.currency}</Grid>
      <Grid item>{props.max}</Grid>
    </Grid>
  );
};
