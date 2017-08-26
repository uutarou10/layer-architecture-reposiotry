import {User} from "../../User";

interface UserRepositoryInterface {
  getUser(id: string): User;
  saveUser(user: User): boolean;
}

export {UserRepositoryInterface}