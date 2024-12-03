export type LoginUser = {
  email: string;
  password: string;
};

export type CreatedUser = LoginUser & {
  username: string;
};

export type User = CreatedUser & {
  id: number;
};
