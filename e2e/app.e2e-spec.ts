import { OscPage } from './app.po';

describe('osc App', function() {
  let page: OscPage;

  beforeEach(() => {
    page = new OscPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
