export interface Item {
  id: number;
  name: string;
}

export interface ItemFilter {
  status: 'new' | 'open' | 'closed';
}
