import { ProjectList } from "./types";
import { getRequestUrl } from "./utils";
import axios from "axios";

export const getOrders = async (offset: number) => {
  try {
    const res = await axios.get<ProjectList>(
      getRequestUrl(
        "https://www.freelancer.com/api/projects/0.1/projects/active",
        { limit: 20, offset, full_description: true, query: "" }
      )
    );
    return res;
  } catch (e) {
    console.log(e);
    throw Error();
  }
};
