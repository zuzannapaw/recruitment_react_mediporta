export const fetchData = async () => {
    const response = await fetch(
      "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
    );
    const tags = await response.json();
  
    return tags;
  };