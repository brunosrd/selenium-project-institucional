# Selenium Project Institucional

Este projeto utiliza Selenium WebDriver para automatizar testes de interface de usuário para o site da Lacrei Saúde. O projeto inclui testes para a página inicial, login e segurança e privacidade.

## Autor

**Bruno Soares Ribeiro**

## Estrutura do Projeto

selenium-project-institucional/
├── pages/
│   ├── login/
│   │   └── loginPage.js
│   ├── securityPrivacyPage/
│   │   └── securityPrivacyPage.js
│   └── start/
│       └── startPage.js
├── tests/
│   ├── login/
│   │   └── login.test.js
│   ├── securityPrivacy/
│   │   └── securityPrivacy.test.js
│   └── start/
│       └── start.test.js
├── package.json
└── README.md

## Instalação

1. Clone o repositório:
git clone https://github.com/brunosrd/selenium-project-institucional.git
cd selenium-project-institucional

2. Instale as dependências:
npm install

3. Instale o WebDriver Manager:
npm install -g webdriver-manager
webdriver-manager update

## Scripts de Teste

### Testes da Página Inicial

Arquivo: `tests/start/start.test.js`

Para executar os testes da página inicial:
npm run test:start

### Testes de Login

Arquivo: `tests/login/login.test.js`

Para executar os testes de login:
npm run test:login

### Testes de Segurança e Privacidade

Arquivo: `tests/securityPrivacy/securityPrivacy.test.js`

Para executar os testes de segurança e privacidade:
npm run test:securityPrivacy

## Descrição dos Arquivos

### Pages
1. `loginPage.js`: Contém a classe LoginPage com métodos para interagir com a página de login.
2. `securityPrivacyPage.js`: Contém a classe SecurityPrivacyPage com métodos para interagir com a página de segurança e privacidade.
3. `startPage.js`: Contém a classe StartPage com métodos para interagir com a página inicial.

### Tests
1. `login.test.js`: Testes automatizados para a página de login.
2. `securityPrivacy.test.js`: Testes automatizados para a página de segurança e privacidade.
3. `start.test.js`: Testes automatizados para a página inicial.

## Executando os Testes

Certifique-se de que o WebDriver Manager está atualizado e em execução:
webdriver-manager start

Em seguida, execute os scripts de teste conforme descrito acima.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou novos testes. Faça um fork do projeto, crie um branch para suas alterações e envie um pull request.
