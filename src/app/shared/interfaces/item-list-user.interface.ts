export interface ItemListUser {
  data: ItemData[];
  customClasses?: string;
}

interface ItemData {
  [key: string]: any;
}