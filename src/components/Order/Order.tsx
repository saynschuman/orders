import { CopyButton } from "../CopyButton";
import { Cost } from "../Cost";
import { Description } from "../Description";
import { Title } from "../Title";
import { Project } from "@/types";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

export const Order = (props: Project) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Title title={props.title} seo_url={props.seo_url} />
      <Box>
        <Cost currency={props.currency.code} max={props.budget.maximum} />
        <Description description={props.description} />
        <Grid container gap={1}>
          <CopyButton descr={props.description} type="copy" />
          <CopyButton descr={props.description} type="about" />
        </Grid>
      </Box>
    </Box>
  );
};
