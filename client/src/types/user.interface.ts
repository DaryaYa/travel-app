export interface UserResponseInterface {
  email: string;
  username: string;
  imgSrc: string;
  _id: string;
}

export interface UserRequestInterface {
  email: string;
  password: string;
  imgSrc?: string;
}
