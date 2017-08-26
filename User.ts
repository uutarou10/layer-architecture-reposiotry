class User {
  private _id: string;
  private _name:string;
  private _address: string;
  private _age: number;

  constructor (id:string, name:string, address:string, age:number) {
    this._id = id;
    this.name = name;
    this.address = address;
    this.age = age;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
      return this._name;
  }

  set name(value: string) {
      this._name = value;
  }

  get address(): string {
      return this._address;
  }

  set address(value: string) {
      this._address = value;
  }

  get age(): number {
      return this._age;
  }

  set age(value: number) {
      if (value < 0) {
          throw new Error('Invalid age.')
      } else {
          this._age = value;
      }
  }
}

export {User}