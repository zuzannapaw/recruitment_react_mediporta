import { Tags } from "./types";

/**
 * @name fetchData
 * @description Function that fetch tags from API.
 * @returns {Tags}
 */

export const fetchData = async () => {
  const response = await fetch(
    "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  );
  const tags: Tags = await response.json();
  return tags;
};
