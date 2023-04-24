import { getOrders } from "./api";
import { Box, Grid, Link, Typography } from "@mui/material";
import { useQuery } from "react-query";

function App() {
  const { data } = useQuery("orders", getOrders);
  const orders = data?.data?.result?.projects;

  return (
    <Box sx={{ fontFamily: "sans-serif", p: 2 }}>
      {orders?.map((o) => (
        <Box sx={{ mb: 2 }} key={o.id}>
          <Typography sx={{ fontWeight: "bold" }}>{o.title} </Typography>
          <Box>
            <Grid container gap={1}>
              <Grid item>{o.currency.code}</Grid>
              <Grid item>{o.budget.maximum}</Grid>
            </Grid>
            <Box>
              {o.preview_description}...
              <Link
                href={`https://www.freelancer.com/projects/${o.seo_url}`}
                target="_blank"
              >
                (details)
              </Link>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default App;
