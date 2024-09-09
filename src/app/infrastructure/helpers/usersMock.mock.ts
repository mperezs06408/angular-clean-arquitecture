import { User } from '@domain/entities/user/user.entity';

export const usersMock: User[] = [
  {
    firstName: 'Carlos',
    lastName: 'Pérez',
    username: 'carlos_perez',
    password: 'Carlos123!',
    mobileNumber: '+34123456789',
    role: 'Admin',
  },
  {
    firstName: 'Lucía',
    lastName: 'Martínez',
    username: 'lucia_martinez',
    password: 'Lucia456@',
    mobileNumber: '+34987651234',
    role: 'User',
  },
  {
    firstName: 'Juan',
    lastName: 'Rodríguez',
    username: 'juan_rod',
    password: 'Juan789#',
    mobileNumber: '+34111222333',
    role: 'User',
  },
];
