import { User } from './types';

export const USERS_DATA: User[] = [
  {
    id: 'admin-0',
    name: 'Admin PAJAL',
    username: 'adminpajal',
    role: 'administrator',
    nim_nip: '',
    classType: null,
    password_raw: '11223344',
    profilePic: null,
    registrationDate: new Date('2024-01-01T00:00:00'),
    isSuspended: false,
  },
  {
    id: 'lecturer-1',
    name: 'Iman Saladin B. Azhar, S.Kom., M.M.S.I.',
    username: 'Iman Saladin',
    role: 'lecturer',
    nim_nip: '198001012005011001',
    classType: null,
    password_raw: '123456',
    profilePic: null,
    registrationDate: new Date('2024-01-01T00:00:00'),
    isSuspended: false,
  },
  {
    id: 'student-1',
    name: 'Sanvic Dicaprio',
    username: 'dika',
    role: 'student',
    nim_nip: '09011282227081',
    classType: 'SK7C',
    password_raw: '1234',
    profilePic: null,
    registrationDate: new Date('2022-07-01T00:00:00'),
    isSuspended: false,
  }
];