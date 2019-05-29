//Пользователь (независит от пола), все данные используются только
export class User{
  private id: number;
  private name: string;
  private surname: string;
  private nickName: string;
  
  private age: number;
  private citizenship: string;
  private profession: string;
  private aboutMyself: string;

  constructor(id: number, name: string, surname: string, nickName: string,
  age: number, citizenship?: string, profession?: string, aboutMyself?: string){
      this.name = name;
      this.surname = surname;
      this.nickName = nickName;
      this.age = age;
      this.citizenship = citizenship;
      this.profession = profession;
      this.aboutMyself = aboutMyself;
  }  
}