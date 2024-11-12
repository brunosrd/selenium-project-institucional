const { Builder, By } = require('selenium-webdriver');
const LoginPage = require('../../pages/login/loginPage.js');
const { describe, it } = require('mocha');

describe('Testes de Login da Lacrei Saúde', function() {
    this.timeout(10000);
    let driver;
    let loginPage;

    // Configuração antes de todos os testes
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(driver);
    });

    // Fechar o navegador após todos os testes
    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Deve realizar login com sucesso', async function() {
        await loginPage.open();
        await loginPage.enterCredentials('brunosr099@outlook.com', 'Teste@123');
        await loginPage.submitLogin();
        await loginPage.verifyLoginSuccess();
    });
});
