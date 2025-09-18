## Install

### Iniciar o package.json

```node
npm init -y
```

Isso cria um arquivo package.json que guarda as configs e dependências do seu projeto.

### Instalar o TypeScript

```node
npm install typescript --save-dev
```

### Criar o tsconfig.json

Esse arquivo diz ao compilador como transformar .ts → .js.


````node
npx tsc --init
````

Isso gera um tsconfig.json cheio de configs.
Pra começar, pode deixar as principais assim:

```node
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}

```
### Build and run


**1.** Rodar com o node:
```bash
node src/index.js
```
### Usar ts-node pra facilitar (optional)
Assim você não precisa compilar toda hora. Se nao, nao pega as atualizacoes:

```node
npm install ts-node --save-dev
```
### Run

```bash
npx ts-node src/index.ts
```

## Gerenciamentos de versoes
Se quiser isolar a versão do Node, você pode usar nvm (Node Version Manager)

### Instalar o nvm

1.Instalação do NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash


2.Instalar Node com NVM:

```bash
nvm install 16
nvm use 16
node -v   # deve mostrar v16.x
```

Isso instala Node v16 só para você usar nesse ambiente, sem precisar mexer no apt.

Se você quiser, pode ter várias versões do Node em paralelo e alternar com nvm use <versão>.