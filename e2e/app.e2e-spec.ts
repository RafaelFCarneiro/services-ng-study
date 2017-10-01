import { ServicesNgStudyPage } from './app.po';

describe('services-ng-study App', () => {
  let page: ServicesNgStudyPage;

  beforeEach(() => {
    page = new ServicesNgStudyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
