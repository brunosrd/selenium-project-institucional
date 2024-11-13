const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://paciente-staging.lacreisaude.com.br/';
    }

    async abrir() {
        await this.driver.get(this.url);
    }

    async inserirCredenciais(email, senha) {
        await this.driver.findElement(By.css('#email')).sendKeys(email);
        await this.driver.findElement(By.css('#password')).sendKeys(senha);
    }

    async enviarLogin() {
        await this.driver.findElement(By.css("[aria-label='Entrar na Lacrei Saúde']")).click();
    }

    async verificarSucessoLogin() {
        await this.driver.wait(until.urlContains('buscar-profissional'), 5000);
    }
}

module.exports = LoginPage;
