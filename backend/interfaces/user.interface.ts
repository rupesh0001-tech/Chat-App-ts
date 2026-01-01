export interface userI {
  name: string;
  email: string;
  password: string;
  isOnline: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface registerUserI {
  name: string | null;
  email: string | null;
  password: string | null;
}

export interface loginUserI {
  email: string | null;
  password: string | null;
}
