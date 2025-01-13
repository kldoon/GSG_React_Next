export interface IStudent {
  id: string;
  name: string;
  age: number;
  absents: number;
  isGraduated: boolean;
  coursesList: string[];
}

export interface IUserData {
  userName: string;
  role: string;
}