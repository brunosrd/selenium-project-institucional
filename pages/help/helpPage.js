const { By, until } = require('selenium-webdriver');

class HelpPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://staging.lacreisaude.com.br/';
    }

    async open() {
        await this.driver.get(this.url);
    }

    // async clickAjuda() {
    //     await this.driver.findElement(By.css('Dúvidas Frequentes')).click();
    // }

    async verifyDuvidasFrequentesIsPresent() {
        await this.driver.wait(until.elementLocated(By.css('h1')), 5000);
    }
}

module.exports = HelpPage;
