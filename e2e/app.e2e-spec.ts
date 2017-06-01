import { MultipartForm2Page } from './app.po';

describe('multipart-form2 App', () => {
  let page: MultipartForm2Page;

  beforeEach(() => {
    page = new MultipartForm2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
