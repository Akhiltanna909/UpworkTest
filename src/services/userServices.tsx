import database from '@react-native-firebase/database';

export const getQuestions = () => {
  return database()
    .ref('excersices/')
    .once('value', (snapshot) => {
      return snapshot.val();
    });
};
