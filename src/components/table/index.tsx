import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchData } from "../../../utils/fetchData";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 100 },
  { field: "count", headerName: "Count of Related Posts", width: 300 },
];

const Table = () => {
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

  return (
    <div className="table">
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
      />
    </div>
  );
};

export default Table;
