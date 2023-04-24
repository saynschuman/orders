import { getOrders } from "./api";
import { Order } from "./components/Order";
import { classes } from "./styles";
import { Box } from "@mui/material";
import { useQuery } from "react-query";

function App() {
  const { data } = useQuery("orders", getOrders);
  const orders = data?.data?.result?.projects;

  return (
    <Box sx={classes.wrapper}>
      {orders?.map((order) => (
        <Order {...order} />
      ))}
    </Box>
  );
}

export default App;
