import { browser, by, element } from 'protractor';



export class AppPage {
  navigateTo() {
    return browser.get('/planning');
  }

  getpatientName() {
    return element(by.className('patientName')).getText();
  }
}
