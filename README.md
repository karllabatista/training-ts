### Python vs Node

#### 1.Linguagem e runtime

Este comparativo mostra diferenças importantes entre Node.js e Python, com foco em backend e desenvolvimento de APIs.

| Aspecto   | Node.js                                  | Python                                                         |
| --------- | ---------------------------------------- | -------------------------------------------------------------- |
| Tipo      | Runtime JavaScript                       | Linguagem interpretada                                         |
| Sintaxe   | JS/TS (JavaScript/TypeScript)            | Python                                                         |
| Paradigma | Event-driven, assíncrono, não bloqueante | Orientado a objetos e procedural, síncrono (async via asyncio) |
| Tipagem   | Dinâmica (ou TypeScript para estática)   | Dinâmica (type hints opcionais)                                |

**Node.js**: excelente para alta concorrência e I/O intensivo (APIs, chat em tempo real).

**Python**: excelente para cálculos e scripts; menor performance em I/O sem async.

#### 2. Modelo de execução

| Aspecto     | Node.js                              | Python                                                    |
| ----------- | ------------------------------------ | --------------------------------------------------------- |
| I/O         | Assíncrono por padrão (event loop)   | Síncrono por padrão; async com `asyncio`                  |
| Threads     | Single-threaded + event loop         | Multi-thread/multi-process (GIL limita threads nativas)   |
| Concurrency | Escalável com async e não bloqueante | Menos escalável nativamente; precisa de threads/processes |

### 3. Performance

**Node.js**: excelente para alta concorrência e I/O intensivo (APIs, chat em tempo real).

**Python:** excelente para cálculos e scripts; menor performance em I/O sem async.

### 4. Ecossistema e pacotes

| Aspecto                  | Node.js                    | Python                     |
| ------------------------ | -------------------------- | -------------------------- |
| Gerenciamento de pacotes | npm / yarn                 | pip / poetry               |
| Web frameworks           | Express, Fastify, NestJS   | Django, Flask, FastAPI     |
| Testes                   | Jest, Mocha, Vitest        | pytest, unittest, nose     |
| Banco de dados           | MongoDB, PostgreSQL, MySQL | PostgreSQL, MySQL, MongoDB |

### 5. Simplicidade vs Complexidade

**Node.js**: precisa entender async/await, event loop e callbacks; ideal para apps modernos e escaláveis.

**Python**: fácil de ler e escrever; ótimo para scripts, protótipos, automação e ciência de dados.


# JavaScript (JS) vs TypeScript (TS)

## JavaScript (JS)

- ✅ Vem pronto no Node, não precisa configurar nada.
- ✅ Mais rápido de começar (ideal se você quer aprender Node “do zero”).
- ❌ Sem tipos → erros só aparecem em runtime.
- ✅ Excelente para treinar fundamentos (módulos, async/await, http, fs, etc).

## TypeScript (TS)

- ✅ Tipagem estática → ajuda a evitar muitos erros.
- ✅ Melhor suporte em projetos grandes e times.
- ❌ Requer configuração inicial (tsconfig.json, compilação com tsc ou rodar com ts-node).
- ❌ Um pouco mais de curva de aprendizado (tipos, interfaces, generics).

---

## Para começar em TypeScript no Node você precisa:

1. Entender tipos básicos (`string`, `number`, `boolean`, `any`, `void`, `never`).
2. Definir funções com parâmetros e retornos tipados.
3. Tratar erros com `try/catch` e usar `Error`.
4. Criar objetos tipados com `interface` ou `type`.
5. Usar `async/await` para funções assíncronas.
6. Rodar com `ts-node` (`npm run dev`).
