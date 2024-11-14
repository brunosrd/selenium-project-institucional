const { Builder, By } = require('selenium-webdriver');
const LoginPage = require('../../pages/login/loginPage.js');
const { describe, it, before, after } = require('mocha');
const { performance } = require('perf_hooks');

describe('Teste de Desempenho de Login da Lacrei Saúde', function() {
    this.timeout(30000);
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

    it('Deve medir o tempo de login com sucesso', async function() {
        const start = performance.now();
        await loginPage.abrir();
        await loginPage.inserirCredenciais('brunosr099@outlook.com', 'Teste@123');
        await loginPage.enviarLogin();
        await loginPage.verificarSucessoLogin();
        const end = performance.now();
        console.log(`Tempo de login: ${end - start} ms`);
    });
});
