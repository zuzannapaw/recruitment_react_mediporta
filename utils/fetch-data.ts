import { Tags } from "./types";
export const fetchData = async () => {
    const response = await fetch(
      "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
    );
    const tags:Tags = await response.json();
    console.log(tags)
  
    return tags;
  };