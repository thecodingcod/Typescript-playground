# Commonly Used Compiler Configs

## Watch Mode (`-w` or `--watch`)

Make sure that we don't run the `tsc file.ts` command with every change, rather

To enter watch mode use the following command: 
Command Line:

```powershell
> tsc --watch file.ts
```

To Quit, press `ctrl + c` in the terminal. 
Warning: Don't quit the watch mode whilst developing !

## Compile the entiry project (multiple files)

Assuming we have a project consists of multiple TS files that we need to compile on every change to see our updates rocking !

Project: /path/to/project
    - app.ts
    - analytics.ts
    - charts.ts

To allow watching all of these files an auto compile them whenever we make a change follow these steps:

1. Navigate the project working directory using `cd` command.
2. Run `tsc --init` to create a sample `tsconfig.json` file.
3. Now you can run just the `tsc` command which will use the `tsconfig.json` file to manage the compilation.
4. you can easily run `tsc -w` to enable watch mode for the entire directory.
