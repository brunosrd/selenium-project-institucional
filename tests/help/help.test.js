const { Builder, By } = require('selenium-webdriver');
const HelpPage = require('../../pages/help/helpPage.js');
const StartPage = require('../../pages/start/startPage.js');
const { describe, it, before, after } = require('mocha');

describe('Testes da Página de Ajuda da Lacrei Saúde', function() {
    this.timeout(10000);
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

    it('Deve acessar a página de Ajuda e verificar a presença de Dúvidas Frequentes', async function() {
        await helpPage.open();
        await startPage.clicarAjuda();
        await helpPage.verifyDuvidasFrequentesIsPresent(); // Verifica a presença de Dúvidas Frequentes
    });
});
