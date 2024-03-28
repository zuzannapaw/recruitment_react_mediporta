import { GridColDef } from "@mui/x-data-grid";
import { TableProps } from "./types";

export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerClassName: "header",
    headerAlign: "center",
    align: "center",
    cellClassName: "cell",
  },
  {
    field: "count",
    headerName: "Count of Related Posts",
    width: 200,
    headerClassName: "header",
    cellClassName: "cell",
    align:"center",
    headerAlign: "center",
  },
];

export const mockedRows: TableProps["rows"] = [
  { name: "javascript", count: 2767 },
  { name: "php", count: 513 },
  { name: "python", count: 677 },
  { name: "java", count: 769 },
  { name: "javascript", count: 2767 },
  { name: "php", count: 543 },
  { name: "c++", count: 671 },
  { name: "ruby", count: 769 },
];
