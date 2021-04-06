export interface Todo {
  id: number;
  title: string;
  context: string;
  complated: boolean;
  updatedAt: Date;
  createdAt: Date;
}

export interface TodoCreateDto {
  title: string;
  context: string;
  complated: boolean;
}
