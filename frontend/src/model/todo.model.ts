export interface Todo {
  id: number;
  description: string;
  prioritylevel: number;
  datedue?: string;
  isdone: string;
}

export interface TodoItem extends Todo {
  prioritydescription: string;
}
