import { ProjectList } from "./types";
import { getRequestUrl } from "./utils";
import axios from "axios";

export const getOrders = async () => {
  try {
    const res = await axios.get<ProjectList>(
      getRequestUrl(
        "https://www.freelancer.com/api/projects/0.1/projects/active",
        { limit: 20, offset: 0, full_description: true, query: "react" }
      )
    );
    return res;
  } catch (e) {
    console.log(e);
    throw Error();
  }
};
