// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export interface sch {
  using: boolean;
  name: string;
  phone: string;
  count: string;
  time?: string;
}

export interface login {
  id: string;
}
