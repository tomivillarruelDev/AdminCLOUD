export interface TablerowData {
  [key: string]: any;
}

export interface TableColumn {
  name: string;
  label: string;
}

export interface Table {
  columns: TableColumn[];
  data: TablerowData[];
  actions?: boolean;
  paginator?: boolean;
  customClasses?: string;
}
