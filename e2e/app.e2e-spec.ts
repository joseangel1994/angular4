import { CursoAngular4Page } from './app.po';

describe('curso-angular4 App', () => {
  let page: CursoAngular4Page;

  beforeEach(() => {
    page = new CursoAngular4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
