import Realm, { ObjectSchema } from 'realm';
export const ProfileTable = 'Profile';

export default class ProfileModel extends Realm.Object {
  id
  score_result
  created_at
  test

  static schema = {
    name: ProfileTable,
    properties: {
      id: 'int',
      score_result: 'int',
      created_at: 'date',
      test: { type: 'linkingObjects', objectType: 'Test', property: 'profiles' },
    },
    primaryKey: 'id',
  };
}