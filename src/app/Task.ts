// this will be the interface for the task object

export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
