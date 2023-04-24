import { getOrders } from "./api";
import { Order } from "./components/Order";
import { classes } from "./styles";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { useQuery } from "react-query";

function App() {
  const { data } = useQuery("orders", getOrders);
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
      {orders?.map((order) => (
        <Order {...order} key={order.id} />
      ))}
    </Box>
  );
}

export default App;
