import { useQuery } from "@tanstack/react-query";
import Table from "./components/table";
import { fetchData } from "../utils/fetch-data";
import { Skeleton } from "@mui/material";
import { columns } from "../utils/static-data";

const App: React.FC = (): JSX.Element => {
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
