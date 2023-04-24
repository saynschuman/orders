import axios from "axios";
import { ProjectList } from "./types";

export const getOrders = async () => {
  try {
    const res = await axios.get<ProjectList>(
      "https://www.freelancer.com/api/projects/0.1/projects/active?limit=1000&offset=0"
    );
    return res;
  } catch (e) {
    console.log(e);
    throw Error();
  }
};
