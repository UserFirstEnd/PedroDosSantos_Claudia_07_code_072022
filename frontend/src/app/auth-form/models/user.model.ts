export class User {
    userId!: string;
    token!: string;
    role!: roles
}

export interface roles {
    admin: 'Admin';
    user: 'User'
}