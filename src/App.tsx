// import { useState,useEffect } from 'react'

import "./App.css";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const response = await fetch(
    "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  );
  const tags = await response.json();

  return tags;
};

function App() {
  // const [posts, setPosts] = useState(null)

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchData,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.items.map((el, i) => (
        <li key={i++}>{el.name}</li>
      ))}
    </ul>
  );
}

export default App;
