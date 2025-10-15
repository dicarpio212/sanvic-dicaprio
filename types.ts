

export enum View {
  LOGIN,
  DASHBOARD,
  NOTIFICATIONS,
  CALENDAR,
  CLASS_DETAIL,
  ARCHIVED_CLASSES,
  ADD_CLASS,
  EDIT_CLASS,
  PROFILE,
  ADMIN_APP_USAGE,
  ADMIN_DASHBOARD,
  ADMIN_USER_DETAIL,
}

export type UserRole = 'student' | 'lecturer' | 'administrator';

export interface User {
  $id: string; // Appwrite Document ID
  id: string;
  name: string;
  username: string;
  role: UserRole;
  nim_nip: string;
  classType: string | null;
  profilePic: string | null;
  registrationDate: Date;
  isSuspended: boolean;
  // FIX: Added optional password_raw property to the User interface to resolve type errors where it was used.
  password_raw?: string;
}

export enum ClassStatus {
  Selesai = 'selesai',
  Aktif = 'aktif',
  Belum = 'belum',
  Batal = 'batal',
  Segera = 'segera',
}

export interface ClassInstance {
  $id?: string; // Appwrite Document ID
  id: string;
  createdAt: Date;
  name:string;
  classTypes: string[];
  start: Date;
  end: Date;
  location: string;
  lecturers: string[];
  note: string;
  status: ClassStatus;
}

export interface Notification {
  $id?: string; // Appwrite Document ID
  id: string;
  classId: string;
  className: string;
  message: string;
  date: Date;
  readBy: string[];
  deletedBy: string[];
}

export enum TimeFilter {
    Semua = 'semua',
    Harian = 'harian',
    Mingguan = 'mingguan',
    Bulanan = 'bulanan',
}

export enum StatusFilter {
    Semua = 'semua',
    Aktif = 'aktif',
    Belum = 'belum',
    Batal = 'batal',
    Selesai = 'selesai',
    Segera = 'segera',
}