import { GridColDef } from "@mui/x-data-grid";

//    COMPONENTS TYPES    //

/**
 * Table component types
 * @typedef {object} TableProps
 * @property {GridColDef[]} columns - Table columns
 * @property {Array<{name:string,count:number}[]>} rows - Table rows
 */

export type TableProps = {
  columns: GridColDef[];
  rows: {
    name: string;
    count: number;
  }[];
};

/**
 * ErrorModal component types
 * @typedef {object} ErrorModalProps
 * @property {string} message - Dynamic error message provided by fetching operation.
 */

export type ErrorModalProps = {
  message: string;
};

//    UTIL FUNCTIONS TYPES    //

/**
 * Tags type
 * @typedef {object} Tags
 * @property {Array<{name:string,count:number}[]>} items - A property of data object comes from promise response.
 */

export type Tags = {
  items: {
    name: string;
    count: number;
  }[];
};
