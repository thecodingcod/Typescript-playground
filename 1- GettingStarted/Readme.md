# Up & Running with TS

## Installation

npm is required to install the typescript, you can aquire via installing nodejs
Note: we are Installing the transpiling tool.

```ps
> npm install -g typescript
```

## Usage

Will generate a file called `basics.js` with javascript syntax in.

```ps
> tsc basics.ts
```

## TS Features

- Types & Type Checking
- Interfaces
- Generics
- Configurable Compiler
- Decorators
- and more ...

## Vscode Extensions

- `ESLint`: for javascript files linting.
- `TSLint`: for Typescript files linting.
- `Prettier`: to format the file.
- `Path Intellisense`: to autocomplete paths.
- `Code Runner`: to run typescript files as a script with the help of `ts-node` command.
- `Debugger for chrome`: allow debugging apps via chrome.

## Recommended Tools

- Direct Running Tools: [`ts-node`](https://github.com/TypeStrong/ts-node), `ts-node-script`
  - Installation: `npm install -g ts-node`
- Run & Watch: [`ts-node-dev`](https://github.com/whitecolor/ts-node-dev)
- Transpiling tool: `tsc`
  - Installation: `npm install -g typescript`

## Running the script

Append the following line to the Code Runner Executers map configuration:

```json
'typescript': 'ts-node --script-mode',
```

or

```json
'typescript': 'ts-node-script',
```
