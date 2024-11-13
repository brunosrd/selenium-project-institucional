const { Builder, By } = require('selenium-webdriver');
const StartPage = require('../../pages/start/startPage.js');
const { describe, it } = require('mocha');

describe('Testes da Página Inicial da Lacrei Saúde', function() {
    this.timeout(10000);
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
        await startPage.abrir();
        await startPage.clicarQuemSomos();
    });

    it('Deve acessar a página de ajuda', async function() {
        await startPage.abrir();
        await startPage.clicarAjuda();
    });

    it('Deve acessar a página para pacientes e verificar a URL', async function() {   
        await startPage.abrir();
        await startPage.clicarParaPacientes();
        await startPage.verificarUrlContem('lacreisaude'); // Verifica por URL
    });

    it('Deve acessar a página para profissionais e verificar pelo h1', async function() { 
        await startPage.abrir();
        await startPage.clicarParaProfissionais();
        await startPage.verificarH1Presente(); // Verifica pelo título H1
    });

    it('Deve acessar a página de segurança e privacidade', async function() {
        await startPage.abrir();
        await startPage.clicarEntenda();
    });

    it('Deve acessar a página de acessibilidade', async function() {
        await startPage.abrir();
        await startPage.clicarConheca();
    });

    it('Deve acessar a página de dúvidas frequentes', async function() {
        await startPage.abrir();
        await startPage.clicarAcesse();
    });
});
