const { By, until } = require('selenium-webdriver');

class StartPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://staging.lacreisaude.com.br/';
    }

    async abrir() {
        await this.driver.get(this.url);
    }

    async clicarQuemSomos() {
        const elements = await this.driver.findElements(By.css("[aria-hidden='false']"));
        const element = elements[1];
        await this.driver.wait(until.elementLocated(By.css("[aria-hidden='false']")), 5000); // Espera até que o elemento esteja localizado
        await this.driver.wait(until.elementIsVisible(element), 5000); // Espera até que o elemento esteja visível
        await this.driver.wait(until.elementIsEnabled(element), 5000); // Espera até que o elemento esteja habilitado
        await element.click();
    }

    async clicarAjuda() {
        await (await this.driver.findElements(By.css("[aria-hidden='false']")))[2].click();
    }

    async clicarParaPacientes() {
        await this.driver.findElement(By.css("[aria-label='Ir para página de login do paciente']")).click();
    }

    async clicarParaProfissionais() {
        await this.driver.findElement(By.css("[aria-label='Ir para página de login do profissional da saúde']")).click();
    }

    async clicarEntenda() {
        await this.driver.findElement(By.css("[aria-label='Acesse nossas informações sobre privacidade de segurança']")).click();
    }

    async clicarConheca() {
        await this.driver.findElement(By.css("[aria-label='Conheça nossos recursos de acessibilidade']")).click();
    }

    async clicarAcesse() {
        await this.driver.findElement(By.css("[aria-label='Acesse nossas dúvidas frequentes']")).click();
    }

    async verificarUrlContem(substring) {
        await this.driver.wait(until.urlContains(substring), 5000);
    }

    async verificarTitulo(title) {
        await this.driver.wait(until.titleIs(title), 5000);
    }

    async verificarH1Presente() {
        await this.driver.wait(until.elementLocated(By.css('h1')), 5000);
    }
}

module.exports = StartPage;
