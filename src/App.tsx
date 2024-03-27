// import { useState,useEffect } from 'react'

import { Skeleton } from "@mui/material";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 100 },
  { field: "count", headerName: "Count of Related Posts", width: 300 },
];

const fetchData = async () => {
  const response = await fetch(
    "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  );
  const tags = await response.json();

  return tags;
};

function App() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchData,
  });

  if (isPending) {
    return (
      <>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={60}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={60}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={60}
        />
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data.items.map((el, i) => {
          return {
            name: el.name,
            count: el.count,
            id: i++,
          };
        })}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default App;
