//region imports

import { DataGrid } from "@mui/x-data-grid";
import { TableProps } from "../../../utils/types";
//endregion

/**
 * @name Table
 * @description Table component with two columns displaying tags and count of related posts
 * @param {TableProps} props
 * @returns {React.ReactElement}
 * @example
 * <Table columns=[{ field: "name", headerName: "Name", width: 100 },
  { field: "count", headerName: "Count of Related Posts", width: 300 }] rows=[ { name: "javascript", count: 2767 },
  { name: "php", count: 543 },
  { name: "c++", count: 677 }]/>
 */

//region component
const Table: React.FC<TableProps> = (props): JSX.Element => {
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
//endregion

export default Table;
