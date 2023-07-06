type UserProfile = {
  name: string;
  picture: string;
};

export class User {
  name?: string;
  picture?: string;

  constructor({ name, picture }: UserProfile) {
    this.name = name;
    this.picture = picture;
  }
}
