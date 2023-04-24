import { getOrders } from "./api";
import { Order } from "./components/Order";
import { classes } from "./styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Grid, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";

function App() {
  const [offset, setOffset] = useState(0);

  const { data } = useQuery(["orders", offset], () => getOrders(offset), {
    enabled: true,
  });
  const projects = data?.data?.result?.projects;
  const orders = projects?.sort((a, b) => a.time_submitted - b.time_submitted);

  // Создаем ref для контейнера со списком элементов
  const ordersContainerRef = useRef<HTMLDivElement>(null);

  // Функция для прокрутки к последнему элементу
  const scrollToBottom = () => {
    const container = ordersContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  // Вызываем функцию scrollToBottom после загрузки данных
  useEffect(() => {
    if (orders?.length) {
      scrollToBottom();
    }
  }, [orders]);

  console.log(offset);

  return (
    <Box sx={classes.wrapper} ref={ordersContainerRef}>
      <Grid container sx={{ position: "fixed", bottom: 1, left: 1 }}>
        <IconButton onClick={() => setOffset(offset + 20)}>
          <KeyboardBackspaceIcon />
        </IconButton>
        {!!offset && (
          <IconButton onClick={() => setOffset(offset ? offset - 20 : 0)}>
            <KeyboardBackspaceIcon sx={{ rotate: "180deg" }} />
          </IconButton>
        )}
      </Grid>
      {orders?.map((order) => (
        <Order {...order} key={order.id} />
      ))}
    </Box>
  );
}

export default App;
