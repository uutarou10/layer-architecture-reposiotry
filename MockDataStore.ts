import RepositoryInterface from './Repository/User/UserRepositoryInterface'
import {User} from "./User";

class MockDataStore implements  RepositoryInterface{
  private dummyUsers: User[] = [
    new User('hoge', 'Kota Nonaka', 'Kanagawa', 20),
    new User('fuga', 'Fujisaki', 'Saitama', 21)
  ];

  public getUser(id: string): User {
    return <User>this.dummyUsers.filter((value => value.id === id ? value : null));
  }

  public saveUser(user: User): boolean {
    this.dummyUsers = [
      ...this.dummyUsers,
      {
        name: user.name,
        address: user.address,
        age: user.age
      }
    ];
    return true;
  }
}