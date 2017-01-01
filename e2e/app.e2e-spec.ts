import { OmniTeaPlannerPage } from './app.po';

describe('omni-tea-planner App', function() {
  let page: OmniTeaPlannerPage;

  beforeEach(() => {
    page = new OmniTeaPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
