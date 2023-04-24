import { getOrders } from "./api";
import { useQuery } from "react-query";

function App() {
  const { data } = useQuery("orders", getOrders);
  const orders = data?.data?.result?.projects;

  return (
    <>
      {orders?.map((o) => (
        <div key={o.id}>{o.id}</div>
      ))}
    </>
  );
}

export default App;
