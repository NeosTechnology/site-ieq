import { SiteIeqPage } from './app.po';

describe('site-ieq App', () => {
  let page: SiteIeqPage;

  beforeEach(() => {
    page = new SiteIeqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
