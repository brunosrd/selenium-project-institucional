const { Builder, By } = require('selenium-webdriver');
const LoginPage = require('../../pages/login/loginPage.js');
const { describe, it } = require('mocha');

describe('Testes de Login da Lacrei Saúde', function() {
    this.timeout(10000);
    let driver;
    let loginPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(driver);
    });

    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Deve realizar login com sucesso', async function() {
        await loginPage.abrir();
        await loginPage.inserirCredenciais('brunosr099@outlook.com', 'Teste@123');
        await loginPage.enviarLogin();
        await loginPage.verificarSucessoLogin();
    });
});
