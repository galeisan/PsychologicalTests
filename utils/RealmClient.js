import Realm from 'realm';
import AnswerModel from '../modules/Answer/AnswerModel';
import ProfileModel from '../modules/Profile/ProfileModel';
import QuestionModel from '../modules/Question/QuestionModel';
import ResultModel from '../modules/Result/ResultModel';
import TestModel from '../modules/Test/TestModel';

export const RealmClient = new Realm({schema: [
    TestModel.schema,
    QuestionModel.schema,
    AnswerModel.schema, 
    ResultModel.schema,
    ProfileModel.schema, 
]})