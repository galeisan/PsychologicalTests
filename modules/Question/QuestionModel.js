import Realm, { ObjectSchema } from 'realm';
export const QuestionTable = 'Question';

export default class QuestionModel extends Realm.Object {
  id
  question
  test
  answers

  static schema = {
    name: QuestionTable,
    properties: {
      id: 'int',
      question: 'string',
      test: { type: 'linkingObjects', objectType: 'Test', property: 'questions' },
      answers: { type: 'list', objectType: 'Answer' },
    },
    primaryKey: 'id',
  };
}