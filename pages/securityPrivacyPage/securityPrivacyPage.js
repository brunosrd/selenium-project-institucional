const { By, until } = require('selenium-webdriver');

class SecurityPrivacyPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://staging.lacreisaude.com.br/seguranca-e-privacidade/';
    }

    async open() {
        await this.driver.get(this.url);
    }

    // Rola a página até o elemento "Termos de Uso"
    async scrollToTermsOfUse() {
        const element = await this.driver.findElement(By.css("[aria-label='Acessar Termos de Uso']"));
        await this.driver.executeScript("arguments[0].scrollIntoView();", element);
    }

     // Clica no link "Acessar Termos de Uso"
    async clickAccessTermsOfUse() {
        await this.driver.findElement(By.css("[aria-label='Acessar Termos de Uso']")).click();
    }

    // Rola a página até o elemento "Política de Privacidade"
    async scrollToPrivacyPolicy() {
        const element = await this.driver.findElement(By.css("[aria-label='Acessar Políticas de Privacidade']"));
        await this.driver.executeScript("arguments[0].scrollIntoView();", element);
    }

    // Clica no link "Acessar Política de Privacidade"
    async clickAccessPrivacyPolicy() {
        await this.driver.findElement(By.css("[aria-label='Acessar Políticas de Privacidade']")).click();
    }

    // Rola a página até o elemento "Direitos do Titular"
    async scrollToRightsHolder() {
        const element = await this.driver.findElement(By.css("[aria-label='Solicitar seus Direitos de Titular']"));
        await this.driver.executeScript("arguments[0].scrollIntoView();", element);
    }

    // Clica no link "Solicitar Direitos do Titular"
    async clickRequestRightsHolder() {
        await this.driver.findElement(By.css("[aria-label='Solicitar seus Direitos de Titular']")).click();
    }

}

module.exports = SecurityPrivacyPage;
