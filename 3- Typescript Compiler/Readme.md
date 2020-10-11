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

Project: /path/to/project - app.ts - analytics.ts - charts.ts

To allow watching all of these files an auto compile them whenever we make a change follow these steps:

1. Navigate the project working directory using `cd` command.
2. Run `tsc --init` to create a sample `tsconfig.json` file.
3. Now you can run just the `tsc` command which will use the `tsconfig.json` file to manage the compilation.
4. you can easily run `tsc -w` to enable watch mode for the entire directory.

## Including and Excluding files

we can tell typescript compiler to:

1. Explicitly include certain files -> "include":['**/*',..] or "files":['file1.ts','file2.ts']
2. Ignore(Exclude) compiling them --> "exclude":['./charts.ts']

to setup or use these options:

1. goto `tsconfig.json`.
2. Add the option of interest in the main object { } as a sibiling for `"compilerOptions"`.

```json
{
  "compilerOptions": {
    "target": "es6"
  },
  // Note: if you ever added this section, you will have to explicitly mention all the Files & Directories you'd like to compile.
  "include": ["app.ts", "analytics.ts", ""],
  "exclude": [
    "**/*.dev.ts", // exclude all files that match the previous pattern
    "node_modules" // exclude a directory (it's the default already)
  ],
  // Include certain files to be compiled
  // suitable for small projects
  "files": []
}
```

Note: the pattern `**/*` means any file in any folder, you can use it as a wild card to match a certain group of files

Example: `**/*.dev*ts` means any file that ends with `.dev.ts` in thier names.

## Basic Options Compiler Options

**Note**: Visual Studio Code Supports Autocompletion for `tsconfig.json` using `ctrl + space`.

### 1. `"target":"es5"`

specify the Javascript Version

### 2. `"lib":[]`

Definition 1: lib is an option that allows to specify which default objects and features typesscript knows and use during compilation time!
Definition 2: Official Definition Specify library files to be included in the compilation.

Note: if you uncomment it from `tsconfig.json` file, defaults will be ignored and your specified list will be taken in consideration. therefore, it will raise errors with an empty array !

### 3. `"allowJs":true`

Allow javascript files to be compiled. false by default!

### 4. `"checkJs":true`

Report errors in .js files.

### 5. `"jsx"`

jsx option is related to reactJs

### 6. ` "declaration": true`

Matters Only incase you're shipping your project as a library this option will help generate corresponding '.d.ts' file.

### 7. `"sourceMap": true`

Source map helps us with debugging and development, since it deals as a bridge which is understood by modern browsers and developer tools to connect the Javascript files to the input files.

Using this option you'll be able to debug `.ts` files in the browser!

### 8. `"rootDir": "./"` and `"outDir": "./"`

with bigger projects, things get confusing hence we need to organise our files like having separate folders for `sources` amd `distribution` called `src` and `dist`.

- `src` is used to store source files `.ts`.
- `dist` contains the compiled `.js` files.

#### How to achieve this?

1. `rootDir` tells the compiler where the location of our sources --> `./src`

2. `outDir` tell compiler where should it store the output of our files. --> `./dist`

Notes:

- folder structures of src will be replicated in the dist folder.
- `rootDir` specifies the location where compiler should look for `.ts` files in.
- running `tsc` where the cwd is the parent of the src folder will raise an error if a .ts files found outside the src folder. (to keep a clean structure)

### 9. `"removeComments":true`

Don't include the .ts file comments in the output, maily to reduce the file size a little bit!

### 10. `"noEmit":true`

Use noEmit to disable producing Js files, incase you wanna do an error checking process only on the file.

### 11. `"downlevelIteration":true`

Enable if your project includes loops that it being compiled in a way different from it's supposed to be.

### 12. `"noEmmitOnError":false`

Don't produce a .js file if there is an error in the code.

- If any file fails to compile, no files will be emitted !

- Enable: to use a strict mode.
- Disable: to ignore errors (incase you're sure it will work anyway!).

Prefered Mode: Just enable it Noob :3

## Strict Compiler Options

you either set the `"strict":true` option to true, or set the other options 1 by 1 and optionally to true.

example:

```json
"strict": true,                           /* Enable all strict type-checking options. */
// "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
// "strictNullChecks": true,              /* Enable strict null checks. */
// "strictFunctionTypes": true,           /* Enable strict checking of function types. */
// "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
// "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
// "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
// "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
```

or Enable Selectively !

```json
// "strict": true,                           /* Enable all strict type-checking options. */
// "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
// "strictNullChecks": true,              /* Enable strict null checks. */
"strictFunctionTypes": true,           /* Enable strict checking of function types. */
"strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
"strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
// "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
// "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
```

or Enable All but disable selectively 

```json
"strict": true,                           /* Enable all strict type-checking options. */
"noImplicitAny": false,                 /* Raise error on expressions and declarations with an implied 'any' type. */
// "strictNullChecks": true,              /* Enable strict null checks. */
// "strictFunctionTypes": true,           /* Enable strict checking of function types. */
// "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
// "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
// "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
// "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
```

### 1. noImplicitAny
Ensures that we have to be clear about the types of our variables and parameters, which doesn't include the any type.


## Code Quality Compiler Options
Guess they are self-descriptive 

```json
/* Additional Checks */
// "noUnusedLocals": true,                /* Report errors on unused locals. */
// "noUnusedParameters": true,            /* Report errors on unused parameters. */
// "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
// "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
```

## Debugging with visual studio code  
Use the `Debugger for chrome` or `Debugger for firefox` extension to enable debugging in vscode instead of the browser debugger.

Actually vscode will help you to configure the `launch.json` for prefered debugger.
