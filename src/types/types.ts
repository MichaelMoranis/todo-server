export interface TaskParams {
  id: number;
  params: string;
}

export interface User {
    username: string;
    email: string;
    password: string;
  }

  export  interface Task {
    newtext: string;
    isChecked?: boolean;
    id?: number
  }