import { NsNgDemoLibPage } from './app.po';

describe('nexxera-angular-library App', () => {
  let page: NsNgDemoLibPage;

  beforeEach(() => {
    page = new NsNgDemoLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('demo works!');
  });
});
