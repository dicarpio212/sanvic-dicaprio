

import { Client, Databases, Account, ID as AppwriteID, Query as AppwriteQuery } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('YOUR_PROJECT_ID'); // Your project ID

export const account = new Account(client);
export const databases = new Databases(client);
// FIX: Re-exporting ID and Query as constants to avoid module resolution conflicts
// caused by the filename being the same as the 'appwrite' package.
export const ID = AppwriteID;
export const Query = AppwriteQuery;

// Database and Collection IDs
export const DATABASE_ID = 'YOUR_DATABASE_ID';
export const USERS_COLLECTION_ID = 'users';
export const CLASSES_COLLECTION_ID = 'classes';
export const NOTIFICATIONS_COLLECTION_ID = 'notifications';
export const PREFERENCES_COLLECTION_ID = 'preferences';