const { By, until } = require('selenium-webdriver');

class StartPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://staging.lacreisaude.com.br/';
    }

    async open() {
        await this.driver.get(this.url);
    }


    async clickQuemSomos() {
        const elements = await this.driver.findElements(By.css("[aria-hidden='false']"));
        const element = elements[1];
        await this.driver.wait(until.elementLocated(By.css("[aria-hidden='false']")), 5000); // Espera até que o elemento esteja localizado
        await this.driver.wait(until.elementIsVisible(element), 5000); // Espera até que o elemento esteja visível
        await this.driver.wait(until.elementIsEnabled(element), 5000); // Espera até que o elemento esteja habilitado
        await element.click();
    }

    async clickAjuda() {
        await (await this.driver.findElements(By.css("[aria-hidden='false']")))[2].click();
    }

    async clickParaPacientes() {
        await this.driver.findElement(By.css("[aria-label='Ir para página de login do paciente']")).click();
    }

    async clickParaProfissionais() {
        await this.driver.findElement(By.css("[aria-label='Ir para página de login do profissional da saúde']")).click();
    }

    async clickEntenda() {
        await this.driver.findElement(By.css("[aria-label='Acesse nossas informações sobre privacidade de segurança']")).click();
    }

    async clickConheca() {
        await this.driver.findElement(By.css("[aria-label='Conheça nossos recursos de acessibilidade']")).click();
    }

    async clickAcesse() {
        await this.driver.findElement(By.css("[aria-label='Acesse nossas dúvidas frequentes']")).click();
    }

    async verifyUrlContains(substring) {
        await this.driver.wait(until.urlContains(substring), 5000);
    }

    async verifyTitleIs(title) {
        await this.driver.wait(until.titleIs(title), 5000);
    }

    async verifyH1IsPresent() {
        await this.driver.wait(until.elementLocated(By.css('h1')), 5000);
    }
}

module.exports = StartPage;
