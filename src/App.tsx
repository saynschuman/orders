import { getOrders } from "./api";
import { CopyButton } from "./components/CopyButton";
import { Box, Grid, Link, Typography } from "@mui/material";
import { useQuery } from "react-query";

function App() {
  const { data } = useQuery("orders", getOrders);
  const orders = data?.data?.result?.projects;

  return (
    <Box sx={{ fontFamily: "sans-serif", p: 2, maxWidth: 700, m: "auto" }}>
      {orders?.map((o) => (
        <Box sx={{ mb: 2 }} key={o.id}>
          <Link
            href={`https://www.freelancer.com/projects/${o.seo_url}`}
            target="_blank"
          >
            <Typography sx={{ fontWeight: "bold" }}>{o.title} </Typography>
          </Link>
          <Box>
            <Grid container gap={1} sx={{ fontWeight: "bold" }}>
              <Grid item>{o.currency.code}</Grid>
              <Grid item>{o.budget.maximum}</Grid>
            </Grid>
            <Box>
              {o.description?.split("\n").map((line) => (
                <>
                  {line}
                  <br />
                </>
              ))}
            </Box>
            <CopyButton descr={o.description} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default App;
