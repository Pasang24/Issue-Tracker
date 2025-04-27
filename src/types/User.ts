export interface User {
  readonly id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
}
