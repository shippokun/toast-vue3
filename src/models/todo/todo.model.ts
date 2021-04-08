export interface Todo {
  id: string;
  title: string;
  context: string;
  completed: boolean;
  updatedAt: Date;
  createdAt: Date;
}

export interface TodoCreateDto {
  title: string;
  context: string;
  completed: boolean;
}

export interface TodoUpdateDto {
  title: string;
  context: string;
  completed: boolean;
}
