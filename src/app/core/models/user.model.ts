export enum UserRole {
  PASSENGER = 'PASSENGER',
  DRIVER = 'DRIVER',
  AGENCY_MANAGER = 'AGENCY_MANAGER',
  ADMIN = 'ADMIN'
}

export interface RegisterUser {
  email: string;
  password: string;
  pseudo: string;
  role: UserRole;
}

export interface LoginUser {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    expiresIn: number;
    role: UserRole;
}

export const AvailableRoles: { value: UserRole; label: string }[] = [
  { value: UserRole.PASSENGER, label: 'Passager' },
  { value: UserRole.DRIVER, label: 'Chauffeur' }
];

export interface User {
  id: number;
  fullName: string;
  pseudo: string;
  email: string;
  role: string;
  photo?: string;
  tel?: string;
  bio?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
