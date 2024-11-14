# Selenium Project Institucional

Este projeto utiliza Selenium WebDriver para automatizar testes de interface de usuário para o site da Lacrei Saúde. O projeto inclui testes para a página inicial, login e segurança e privacidade.

## Autor

**Bruno Soares Ribeiro**

## Estrutura do Projeto

```plaintext
selenium-project-institucional/
├── pages/
│   ├── login/
│   │   └── loginPage.js
│   ├── securityPrivacyPage/
│   │   └── securityPrivacyPage.js
│   └── start/
│   │    └── startPage.js
│   └── help/
│       └── helpPage.js
├── tests/
│   ├── login/
│   │   └── login.test.js
│   │   └── loginPerformance.test.js
│   ├── securityPrivacy/
│   │   └── securityPrivacy.test.js
│   │   └── securityPrivacyPerformance.test.js
│   └── start/
│   │    └── start.test.js
│   │    └── startPerformance.test.js
│   └── help/
│       └── help.test.js
│       └── helpPerformance.js
├── .gitignore
├── loginLoadTeste.yml
└── package.json
├── package-lock.json
└── README.md
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/brunosrd/selenium-project-institucional.git
cd selenium-project-institucional
```

2. Instale as dependências:

```bash
npm install
```

3. Instale o WebDriver Manager:

```bash
npm install -g webdriver-manager
webdriver-manager update
```

4. Instale o Artillery

```bash
npm install --save-dev artillery
```

### Ferramentas Utilizadas

- Selenium WebDriver
- Navegador Chrome
- Visual Studio Code
- Github
- Notion
- npm
- Mocha
- Git
- Artillery

### Configuração do Ambiente

- Sistema Operacional: Windows 10
- Versão do Navegador: Chrome 114

## Scripts de Teste

### Testes da Página Inicial

Arquivo: `tests/start/start.test.js` e  `tests/start/start`

Para executar os testes da página inicial:

```bash
npm run test:start
npm run test:startPerformance
```

### Testes em Login

Arquivo: `tests/login/login.test.js` e `tests/login/loginPerformance.test.js`
Arquivo: `loginLoadTest.yml`

Para executar os testes de login:

```bash
npm run test:login
npm run test:loginPerformance
npm run test:loginLoad
```

### Testes em Segurança e Privacidade

Arquivo: `tests/securityPrivacy/securityPrivacy.test.js`
Arquivo: `tests/securityPrivacy/securityPrivacyPerformance.test.js`

Para executar os testes de segurança e privacidade:

```bash
npm run test:securityPrivacy
npm run test:securityPrivacyPerformance
```

### Testes em Ajuda

Arquivo: `tests/help/help.test.js`
Arquivo: `tests/help/helpPagePerformance.test.js`

Para executar os testes em ajuda:

```bash
npm run test:help
npm run test:helpPerformance
```

## Descrição dos Arquivos

### Pages

1. `loginPage.js`: Contém a classe LoginPage com métodos para interagir com a página de login.
2. `securityPrivacyPage.js`: Contém a classe SecurityPrivacyPage com métodos para interagir com a página de segurança e privacidade.
3. `startPage.js`: Contém a classe StartPage com métodos para interagir com a página inicial.
4. `helpPage.js`: Contém a classe helpPage com métodos para interagir com o épico ajuda.

### Tests

1. `login.test.js`: Testes automatizados para a página de login.
2. `securityPrivacy.test.js`: Testes automatizados para a página de segurança e privacidade.
3. `start.test.js`: Testes automatizados para a página inicial.
4. `help.test.js`: Testes automatizados para o épico ajuda.

## Executando os Testes

Certifique-se de que o WebDriver Manager está atualizado e em execução:

```bash
npx webdriver-manager start
```

Em seguida, execute os scripts de teste conforme descrito acima.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou novos testes. Faça um fork do projeto, crie um branch para suas alterações e envie um pull request.
