type UserLevel = {
  level_id: number;
  level_name: 'Admin' | 'User' | 'Guest';
};

type User = {
  user_id: number;
  username: string;
  password: string;
  email: string;
  user_level_id: number;
  created_at: Date;
};

// type gymnastics to get rid of user_level_id from User type and replace it with level_name from UserLevel type
type LoginUser = Omit<User, 'user_level_id'> & Pick<UserLevel, 'level_name'>;

type TokenContent = {
  id: number;
  role: 'User' | 'Admin' | 'Guest';
};

export {UserLevel, User, LoginUser, TokenContent};
