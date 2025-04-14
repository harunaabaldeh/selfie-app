import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setProject('67f64cb6000394fd3e09')
    .setPlatform('com.sirayel.selfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
