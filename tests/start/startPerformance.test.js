const { Builder, By } = require('selenium-webdriver');
const StartPage = require('../../pages/start/startPage.js');
const { describe, it, before, after } = require('mocha');
const { performance } = require('perf_hooks');

describe('Teste de Desempenho da Página Inicial da Lacrei Saúde', function() {
    this.timeout(30000);
    let driver;
    let startPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        startPage = new StartPage(driver);
    });

    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Deve medir o tempo para acessar a página "Quem somos"', async function() {
        const start = performance.now();
        await startPage.abrir();
        await startPage.clicarQuemSomos();
        const end = performance.now();
        console.log(`Tempo para acessar "Quem somos": ${end - start} ms`);
    });
});
