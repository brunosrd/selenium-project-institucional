const { Builder, By } = require('selenium-webdriver');
const SecurityPrivacyPage = require('../../pages/securityPrivacyPage/securityPrivacyPage.js');
const { describe, it } = require('mocha');

describe('Testes da Página de Segurança e Privacidade da Lacrei Saúde', function() {
    this.timeout(10000);
    let driver;
    let securityPrivacyPage;

    // Configuração antes de todos os testes
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        securityPrivacyPage = new SecurityPrivacyPage(driver);
    });

    // Fechar o navegador após todos os testes
    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Deve acessar a seção "Termos de Uso"', async function() {
        await securityPrivacyPage.open();
        await securityPrivacyPage.scrollToTermsOfUse();
        await securityPrivacyPage.clickAccessTermsOfUse();
    });

    it('Deve acessar a seção "Política de Privacidade"', async function() {
        await securityPrivacyPage.open();
        await securityPrivacyPage.scrollToPrivacyPolicy();
        await securityPrivacyPage.clickAccessPrivacyPolicy();
    });

    it('Deve acessar a seção "Direitos do Titular"', async function() {
        await securityPrivacyPage.open();
        await securityPrivacyPage.scrollToRightsHolder();
        await securityPrivacyPage.clickRequestRightsHolder();
    });


});
