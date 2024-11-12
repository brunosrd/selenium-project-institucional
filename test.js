const { Builder, By, Key, until } = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://staging.lacreisaude.com.br/');
        console.log('Página carregada com sucesso!');
    } finally {
        await driver.quit();
    }
}

example();
