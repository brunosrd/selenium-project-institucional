const { By, until } = require('selenium-webdriver');

class SecurityPrivacyPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://staging.lacreisaude.com.br/seguranca-e-privacidade/';
    }

    async abrir() {
        await this.driver.get(this.url);
    }

    async rolarParaTermosDeUso() {
        const element = await this.driver.findElement(By.css("[aria-label='Acessar Termos de Uso']"));
        await this.driver.executeScript("arguments[0].scrollIntoView();", element);
    }

    async clicarAcessarTermosDeUso() {
        await this.driver.findElement(By.css("[aria-label='Acessar Termos de Uso']")).click();
    }

    async rolarParaPoliticaDePrivacidade() {
        const element = await this.driver.findElement(By.css("[aria-label='Acessar Políticas de Privacidade']"));
        await this.driver.executeScript("arguments[0].scrollIntoView();", element);
    }

    async clicarAcessarPoliticaDePrivacidade() {
        await this.driver.findElement(By.css("[aria-label='Acessar Políticas de Privacidade']")).click();
    }

    async rolarParaDireitosDoTitular() {
        const element = await this.driver.findElement(By.css("[aria-label='Solicitar seus Direitos de Titular']"));
        await this.driver.executeScript("arguments[0].scrollIntoView();", element);
    }

    async clicarSolicitarDireitosDoTitular() {
        await this.driver.findElement(By.css("[aria-label='Solicitar seus Direitos de Titular']")).click();
    }
}

module.exports = SecurityPrivacyPage;
