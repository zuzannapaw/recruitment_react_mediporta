import { GridColDef } from "@mui/x-data-grid";
import { TableProps } from "./types";

export const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    align: "center",
    headerAlign: "center",
    flex: 1,
    cellClassName: "cell",
    headerClassName: "header",
  },
  {
    field: "count",
    headerName: "Count of Related Posts",
    align: "center",
    headerAlign: "center",
    flex: 2,
    cellClassName: "cell",
    headerClassName: "header",
  },
];

export const mockedRows: TableProps["rows"] = [
  { name: "javascript", count: 2767 },
  { name: "php", count: 513 },
  { name: "python", count: 677 },
  { name: "java", count: 769 },
  { name: "android", count: 2767 },
  { name: "php", count: 543 },
  { name: "c++", count: 671 },
  { name: "ruby", count: 769 },
  { name: "javascript", count: 543 },
  { name: "c++", count: 671 },
  { name: "ruby", count: 769 },
  { name: "php", count: 543 },
  { name: "android", count: 671 },
  { name: "ruby", count: 769 },
];
