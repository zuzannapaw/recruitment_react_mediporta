import { DataGrid } from "@mui/x-data-grid";

const Table = ({ rows, columns }) => {
  return (
    <div className="table">
      <DataGrid
        rows={rows.map((el, i) => {
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
