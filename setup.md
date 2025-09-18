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


```node
npx tsc --init
```

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