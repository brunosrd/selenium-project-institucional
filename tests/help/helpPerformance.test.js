const { Builder, By } = require('selenium-webdriver');
const HelpPage = require('../../pages/help/helpPage.js');
const StartPage = require('../../pages/start/startPage.js');
const { describe, it, before, after } = require('mocha');
const { performance } = require('perf_hooks');

describe('Teste de Desempenho da Página de Ajuda da Lacrei Saúde', function() {
    this.timeout(30000);
    let driver;
    let helpPage;
    let startPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        helpPage = new HelpPage(driver);
        startPage = new StartPage(driver);
    });

    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Deve medir o tempo para acessar a página de Ajuda e verificar a presença de Dúvidas Frequentes', async function() {
        const start = performance.now();
        await helpPage.open();
        await startPage.clicarAjuda();
        await helpPage.verifyDuvidasFrequentesIsPresent();
        const end = performance.now();
        console.log(`Tempo para acessar a página de Ajuda: ${end - start} ms`);
    });
});
