export class User {
  createdAt:   string;
  username:      string;

  constructor() {}

  public static build(username) {
    const user = new User();
    user.username = username;
    user.createdAt = new Date().toISOString();
    return user;
  }
}
