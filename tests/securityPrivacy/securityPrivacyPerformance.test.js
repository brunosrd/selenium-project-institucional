const { Builder, By } = require('selenium-webdriver');
const SecurityPrivacyPage = require('../../pages/securityPrivacyPage/securityPrivacyPage.js');
const { describe, it, before, after } = require('mocha');
const { performance } = require('perf_hooks');

describe('Teste de Desempenho da Página de Segurança e Privacidade da Lacrei Saúde', function() {
    this.timeout(30000);
    let driver;
    let securityPrivacyPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        securityPrivacyPage = new SecurityPrivacyPage(driver);
    });

    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Deve medir o tempo para acessar a seção "Termos de Uso"', async function() {
        const start = performance.now();
        await securityPrivacyPage.abrir();
        await securityPrivacyPage.rolarParaTermosDeUso();
        await securityPrivacyPage.clicarAcessarTermosDeUso();
        const end = performance.now();
        console.log(`Tempo para acessar "Termos de Uso": ${end - start} ms`);
    });
});
