import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('scan-and-go-web-client App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.ignoreSynchronisation = true;
    browser.waitForAngularEnabled(false);
    browser.get('/planning');
    element(by.id('nlsConfig_submit')).click();
    browser.waitForAngularEnabled(true);
    browser.ignoreSynchronisation = false;
    page = new AppPage();
  });

  it('should display patient name', () => {  
    expect(page.getpatientName()).toEqual('Str_m_S16_F==');
  });
});
