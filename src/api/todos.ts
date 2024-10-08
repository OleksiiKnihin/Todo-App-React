import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 906;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const createTodo = (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  return client.post('/todos', todo);
};

export const updateTodo = (id: number, data: Partial<Todo>): Promise<Todo> => {
  return client.patch(`/todos/${id}`, data);
};
