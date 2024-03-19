import Realm, { ObjectSchema } from 'realm';
export const TestTable = 'Test';

export default class TestModel extends Realm.Object {
  id
  name
  description
  questions
  results
  profiles

  static schema = {
    name: TestTable,
    properties: {
      id: 'int',
      name: 'string',
      description: 'string',
      questions: { type: 'list', objectType: 'Question' },
      results: { type: 'list', objectType: 'Result' },
      profiles: { type: 'list', objectType: 'Profile' },
    },
    primaryKey: 'id',
  };
}