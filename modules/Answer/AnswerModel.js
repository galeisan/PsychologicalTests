import Realm, { ObjectSchema } from 'realm';
export const AnswerTable = 'Answer';

export default class AnswerModel extends Realm.Object {
  id
  answer
  score
  question

  static schema = {
    name: AnswerTable,
    properties: {
      id: 'int',
      answer: 'string',
      score: 'int',
      question: { type: 'linkingObjects', objectType: 'Question', property: 'answers' },
    },
    primaryKey: 'id',
  };
}