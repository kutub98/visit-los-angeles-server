export interface IUser {
  username: string;
  email: string;
  img: string;
  password: string;
  role: 'admin' | 'user';
}
