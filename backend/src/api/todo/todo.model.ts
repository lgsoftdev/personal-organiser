enum PriorityLevel {
  High = 1,
  Medium = 2,
  Low = 3,
}

type DoneStatus = 'N' | 'Y';

export type Todo = {
  id: number;
  description: string;
  prioritylevel: PriorityLevel;
  datedue?: string;
  isdone: DoneStatus;
  datecreated?: string;
};

export type TodoInsert = Pick<
  Todo,
  'description' | 'prioritylevel' | 'datedue'
>;

export type ObjectWithId = {
  id: string;
};
