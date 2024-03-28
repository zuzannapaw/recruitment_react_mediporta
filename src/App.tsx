//region imports
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@mui/material";
import { fetchData } from "../utils/fetch-data";
import { columns } from "../utils/static-data";
import Table from "./components/table";
//endregion

/**
 * @name App
 * @description Main App component that holds all content.
 * @returns {React.ReactElement}
 * @example
 * <App><Component/></App>
 */

//region component
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

//endregion
export default App;
