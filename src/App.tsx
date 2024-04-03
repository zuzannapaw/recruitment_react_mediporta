//region imports
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@mui/material";
import { fetchData } from "../utils/fetch-data";
import { columns } from "../utils/static-data";
import Table from "./components/table";
import { ErrorModal } from "./components/error-modal";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchData,
  });

  const onCloseModal = () => {
    setIsOpen(prevState => !prevState);
  };

  if (isPending) {
    return (
      <div className="skeleton-wrapper">
        <h2 className="heading">Tags Table</h2>
        {[...Array(5)].map(() => (
          <Skeleton variant="rectangular" className="skeleton" height={40} />
        ))}
      </div>
    );
  }
  if (isError) {
    setIsOpen(prevState => !prevState);
    return (
      <>
        <div>
          <span>We encountered an error while trying to fetch the data</span>
          <span>
            Please check your internet connection and try again later.
          </span>
        </div>
        {isOpen && (
          <ErrorModal message={error.message} close={onCloseModal} />
        )}
      </>
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
