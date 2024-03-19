import Realm, { ObjectSchema } from 'realm';
export const ResultTable = 'Result';

export default class ResultModel extends Realm.Object {
  id
  min_score
  max_score
  title
  description
  test

  static schema = {
    name: ResultTable,
    properties: {
      id: 'int',
      min_score: 'int',
      max_score: 'int',
      title: 'string',
      description: 'string',
      test: { type: 'linkingObjects', objectType: 'Test', property: 'results' },
    },
    primaryKey: 'id',
  };
}