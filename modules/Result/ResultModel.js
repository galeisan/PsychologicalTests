import Realm, { ObjectSchema } from 'realm';
import Test from '../Test/TestModel';
export const ResultTable = 'Result';

export default class Result extends Realm.Object {
  id
  min_score
  max_score
  description
  test

  static schema = {
    name: ResultTable,
    properties: {
      id: 'int',
      min_score: 'int',
      max_score: 'int',
      description: 'string',
      test: { type: 'linkingObjects', objectType: 'Test', property: 'results' },
    },
    primaryKey: 'id',
  };
}