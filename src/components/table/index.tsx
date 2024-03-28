import { DataGrid } from "@mui/x-data-grid";
import { TableProps } from "../../../utils/types";

const Table: React.FC<TableProps> = (props): JSX.Element => {
  console.log(props.rows);
  return (
    <div className="table">
      <DataGrid
        rows={props.rows.map(
          (el: { name: string; count: number }, i: number) => {
            return {
              name: el.name,
              count: el.count,
              id: i++,
            };
          }
        )}
        columns={props.columns}
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
