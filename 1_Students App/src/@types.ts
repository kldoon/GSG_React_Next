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
  role: Role;
}

export enum Role {
  ADMIN = 'admin',
  Teacher = 'teacher',
  GUEST = 'guest'
}