import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({name: 'create-user-questions'})
export class CreateUserQuestions {
  @Question({
    message: 'Username ?',
    name: 'username',
  })
  parseUsername(value: string): string {
    return value;
  }

  @Question({
    message: 'Email ?',
    name: 'email',
  })
  parseEmail(value: string): string {
    return value;
  }

  @Question({
    message: 'Password ?',
    name: 'password',
    type: 'password',
  })
  parsePassword(value: string): string {
    return value;
  }

}
