export interface TaskParams {
    id: number;
    params: string;
  }
  
  export default interface Task {
    newtext?: string;
    isChecked?: boolean;
    id?: number
  }
  
  export interface User {
    username: string;
    email: string;
    password: string;
  }