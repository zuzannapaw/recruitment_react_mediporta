import { GridColDef } from "@mui/x-data-grid";

//COMPONENTS TYPES//

export type TableProps = {
  columns: GridColDef[];
  rows: {
    name: string;
    count: number;
    // has_synonyms?: boolean;
    // is_moderator_only?: boolean;
    // is_required?: boolean;
  }[];
};

//UTIL FUNCTIONS TYPES//

export type Tags = {
  items: {
    name: string;
    count: number;
  }[];
};
