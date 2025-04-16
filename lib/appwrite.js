import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67f64cb6000394fd3e09')
    .setPlatform('com.sirayel.selfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);