import { GridColDef } from "@mui/x-data-grid";

//COMPONENTS TYPES//

type TableProps = {
  columns: GridColDef[];
  rows: {
    name: string;
    count: number;
    // has_synonyms?: boolean;
    // is_moderator_only?: boolean;
    // is_required?: boolean;
  }[];
};

export { type TableProps };

//UTIL FUNCTIONS TYPES//

type Tags = {
  items: {
    name: string;
    count: number;
  }[];
};

export { type Tags };
