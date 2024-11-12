const { Builder, By } = require('selenium-webdriver');
const StartPage = require('../../pages/start/startPage.js');
const { describe, it } = require('mocha');

describe('Testes da Página Inicial da Lacrei Saúde', function() {
    this.timeout(10000)
    let driver;
    let startPage;

    // Configuração antes de todos os testes
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        startPage = new StartPage(driver);
    });

    // Fechar o navegador após todos os testes
    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Deve acessar a página "Quem somos"', async function() {
        await startPage.open();
        await startPage.clickQuemSomos();

    });


    it('Deve acessar a página de ajuda', async function() {
        await startPage.open();
        await startPage.clickAjuda();

    });

    it('Deve acessar a página para pacientes e verificar a URL', async function() {   //passing
        await startPage.open();
        await startPage.clickParaPacientes();
        await startPage.verifyUrlContains('lacreisaude'); // Verifica por URL
    });


    it('Deve acessar a página para profissionais e verificar pelo h1', async function() {  //passing
        await startPage.open();
        await startPage.clickParaProfissionais();
        await startPage.verifyH1IsPresent(); // Verifica pelo título H1
    });


    it('Deve acessar a página de segurança e privacidade', async function() {
        await startPage.open();
        await startPage.clickEntenda();

    });


    it('Deve acessar a página de acessibilidade', async function() {
        await startPage.open();
        await startPage.clickConheca();

    });


    it('Deve acessar a página de dúvidas frequentes', async function() {
        await startPage.open();
        await startPage.clickAcesse();

    });
});
