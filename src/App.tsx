import { useQuery } from "@tanstack/react-query";
import Table from "./components/table";
import { fetchData } from "../utils/fetchData";
import { Skeleton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 100 },
  { field: "count", headerName: "Count of Related Posts", width: 300 },
];

const App = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchData,
  });

  if (isPending) {
    return (
      <>
        <Skeleton variant="rectangular" className="table" />
      </>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return <Table columns={columns} rows={data.items} />;
};

export default App;
