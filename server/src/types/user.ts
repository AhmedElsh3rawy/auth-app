export type CreatedUser = {
  username: string;
  email: string;
  password: string;
};

export type User = CreatedUser & {
  id: number;
};
