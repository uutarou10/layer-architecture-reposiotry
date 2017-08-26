import {UserRepositoryInterface} from "./UserRepositoryInterface";
import {User} from "../../User";

class UserRepository {
  private repository: UserRepositoryInterface;

  constructor (repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  public getUser(id: string): User {
    return this.repository.getUser(id)
  }

  public setUser(user: User): boolean {
    return this.repository.saveUser(user);
  }
}