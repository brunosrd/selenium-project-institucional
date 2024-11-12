const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://paciente-staging.lacreisaude.com.br/';
    }

    async open() {
        await this.driver.get(this.url);
    }

    async enterCredentials(email, password) {
        await this.driver.findElement(By.css('#email')).sendKeys(email);
        await this.driver.findElement(By.css('#password')).sendKeys(password);
    }

    async submitLogin() {
        await this.driver.findElement(By.css("[aria-label='Entrar na Lacrei Saúde']")).click();
    }

    async verifyLoginSuccess() {
        await this.driver.wait(until.urlContains('buscar-profissional'), 5000);
    }
}

module.exports = LoginPage;
