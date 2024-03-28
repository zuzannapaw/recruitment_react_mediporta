import { GridColDef } from "@mui/x-data-grid";
import { TableProps } from "./types";

export const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 100 },
  { field: "count", headerName: "Count of Related Posts", width: 300 },
];

export const mockedRows: TableProps["rows"] = [
  { name: "javascript", count: 2767 },
  { name: "php", count: 543 },
  { name: "javascript", count: 677 },
  { name: "ed", count: 769 },
  { name: "javascript", count: 2767 },
  { name: "php", count: 543 },
  { name: "c++", count: 677 },
  { name: "ed", count: 769 },
];
