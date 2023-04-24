import { getOrders } from "./api";
import { Arrows } from "./components/Arrows/Arrows";
import { Order } from "./components/Order";
import { classes } from "./styles";
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

  return (
    <Box sx={classes.wrapper} ref={ordersContainerRef}>
      <Arrows offset={offset} setOffset={setOffset} />
      {orders?.map((order) => (
        <Order {...order} key={order.id} />
      ))}
    </Box>
  );
}

export default App;
