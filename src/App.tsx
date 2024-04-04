//region imports
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@mui/material";
import { createPortal } from "react-dom";
import { fetchData } from "../utils/fetch-data";
import { columns } from "../utils/static-data";
import ErrorModal from "./components/error-modal";
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
      <div className="skeleton-wrapper">
        <h2 className="heading">Tags Table</h2>
        {[...Array(5)].map((_, i) => (
          <Skeleton
            variant="rectangular"
            className="skeleton"
            height={40}
            key={i++}
          />
        ))}
      </div>
    );
  }
  if (isError) {
    return createPortal(
      <ErrorModal message={error.message} />,
      document.getElementById("portal")!
    );
  }
  return (
    <>
      <h2 className="heading">Tags Table</h2>
      <Table columns={columns} rows={data.items} />
    </>
  );
};
//endregion

export default App;
