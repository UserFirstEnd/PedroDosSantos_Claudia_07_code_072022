export class User {
    userId!: string;
    token!: string;
    role!: roles
  static role: any;
}

export interface roles {
    admin: 'Admin',
    user: 'User'
}