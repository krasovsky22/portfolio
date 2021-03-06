import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export interface PreviouExperienceType {
  company: string;
  description: string[];
  end_date: string;
  start_date: string;
  title: string;
}

export const PreviousExperienceDatabase = firebase
  .database()
  .ref('previous_experience');

export const AboutMeDatabase = firebase.database().ref('about_me');

export interface AboutMeDescriptionType {
  title: string;
  description: string;
  sub_descriptions?: string[];
}

export type ContactMeFieldsType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const InsertContactMeDataQuery = (
  data: ContactMeFieldsType
): Promise<unknown> => {
  const insertData = {
    ...data,
    created_at: firebase.database.ServerValue.TIMESTAMP,
  };
  return firebase
    .database()
    .ref('contact_me/' + insertData.name)
    .set(insertData);
};
