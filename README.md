# Next-JS-Tutorial
Next.js is an open source React framework for building single-page web applications. It comes with numerous out-of-the-box functionalities that make developing web applications faster and more interesting, thereby providing refined and elegant developer and user experiences.

Combining Next.js and TypeScript gives us superpowers to rapidly create applications with a good developer and user experiences. Every developer hates bugs. Especially pesky ones such as typos or trying to use or access undeclared variables. TypeScript helps catch these types of bugs early during development, and this is one of the many features that make integrating it with a tool like Next.js fantastic.
# What is TypeScript?
It's a strict JavaScript superset used for large enterprise projects and writing programs that scale. In the end, TypeScript transpiles to plain JavaScript and can be used for developing applications on the client-side and server-side.

TypeScript is an object-oriented programming language that provides all JavaScript features and extra useful capabilities. These capabilities include static or dynamic type checking, error checking during compilation, type inference, and so on.
## History of Next.js
  - Next.js was created by Vercel (formerly ZEIT) to simplify the development of React applications with server-side rendering.
- The framework quickly gained popularity due to its performance optimizations and ease of use.
- The current stable version of Next.js is 15.5.0, released on August 20, 2025.
- The framework continues to evolve, introducing new features with each update.
## Applications of Next.js
   - Web Development: Next.js is widely used to build fast, SEO-friendly websites and web applications such as blogs, e-commerce platforms, and portfolios.
- Enterprise Applications: Companies use Next.js to develop scalable, secure, and high-performance enterprise apps with server-side rendering and API integration.
- E-commerce Platforms: With built-in SSR and SSG, Next.js powers online stores to load faster, rank better on search engines, and provide smooth user experiences.
- Content-Heavy Websites: Next.js is perfect for news portals, documentation sites, and blogs where SEO and performance are crucial.
- Dashboards and Analytics Tools: Next.js can handle dynamic data rendering and integrates well with APIs, making it ideal for dashboards and data-driven apps.
## Features of Next.js
Next.js comes with powerful built-in features like SSR, SSG, API routes, and file-based routing that make development faster and easier.

- Server-Side Rendering (SSR): Next.js allows developers to pre-render pages on the server at request time, providing better performance and SEO compared to traditional client-side rendering.
- Static Site Generation (SSG): Next.js offers static site generation for pages that don’t change frequently. This process involves generating HTML pages at build time, which are then served to users directly from a CDN.
- API Routes: Next.js provides a simple way to create API endpoints within your application, eliminating the need for a separate backend server.
- File-Based Routing: Next.js uses a file-based routing system where routes are created by simply adding files and folders to the pages directory. This makes it easy to organize and manage your application’s structure.
- Automatic Code Splitting: Next.js automatically splits your code into smaller chunks, ensuring that only the necessary JavaScript is loaded for each page.
- Hot Module Replacement (HMR): HMR allows developers to see changes in real-time without needing to refresh the browser, significantly speeding up the development process.
- Built-In CSS and Sass Support: Next.js includes support for importing CSS and Sass files directly into your components, making it easy to style your application without additional configuration.
- Image Optimization: Next.js 15 introduced built-in Image Optimization, which automatically serves images in the best format and size, improving performance across devices.
- Streaming Metadata (Next.js 15): Streaming Metadata allows asynchronous metadata fetching without blocking page rendering or client-side transitions, improving the performance of your application.
- Turbopack Performance Enhancements (Next.js 15): The Turbopack bundler has been optimized for faster compile times and reduced memory usage, enabling a better development experience.

## Working of Next.js
Next.js works as a bridge between the server and the browser. It decides how pages are rendered and delivered, ensuring speed, SEO, and a smooth user experience.
## Installation 
  ### Step 1: Install Node in Your System
Install NodeJS. Follow one of the links to install according to your system: Windows, Linux and MacOS.

### Step 2: Initialize the Next.js Project
Now, create a folder for your project on the desktop, navigate to the folder through your code editor, and run the following command on the terminal.
```bash
npx create-next-app@latest 
#OR
yarn create next-app
#OR
pnpm create next-app
```
### Step 3: Configure your next.js app
Write the project name (default my-app) and choose other configuration options.
```bash
√ What is your project named? my-app
√ Would you like to use TypeScript? No / Yes
√ Would you like to use ESLint? No / Yes
√ Would you like to use Tailwind CSS? No / Yes
√ Would you like to use `src/` directory? No / Yes
√ Would you like to use App Router? (recommended) No / Yes
√ Would you like to customize the default import alias (@/*)? No / Yes
√ What import alias would you like configured? @/*
```
Step 4: Switch to Project Directory
Move to the project folder to install any other dependencies. Use the command given below
```bash
cd my-app
```
#### Project Structure
<img width="260" height="529" alt="image" src="https://github.com/user-attachments/assets/fb6a3021-4053-43c5-a157-f6285ee666e5" />

### Step 5: Run the Application
Write the command below to run the NextJS Application, and then open the URL in the browser.
```bash
npm run dev
```
### Example 1: Hello World in NextJS
In this example, we will simply print Hello. The index.js file is the main entry point of the next.js application, which means the component exported default by the index.js file gets rendered on the screen, so we have to change this file to render hello world on the screen.

```bash
// pages/index.js

export default function Home() {
    return (
        <div>Hello, GeeksforGeeks Learner!!</div>
    );
}
```

# How to add TypeScript to your Next.js app
Next.js provides integrated support for TypeScript with built-in types for pages, API routes, the three data fetching methods, etc.

Basically, there are two ways in which we can add TypeScript to our project. The first is with ``` create-next-app ``` , and the second is by adding TypeScript manually to an existing project.
```bash
create-next-app
```
We can bootstrap a Next.js application with TypeScript by adding a --typescript or --ts flag to the create-next-app command like below:
```bash
npx create-next-app@latest --ts
# or
npx create-next-app@latest --typescript
```
### Adding TypeScript to an existing project
Alternatively, we can also add TypeScript manually to an existing Next.js project.

First, you'll need to create a tsconfig.json file in your project root folder. This file specifies the root files and the compiler options required to compile the project and is populated automatically by Next.js with default values.
```bash
touch tsconfig.json
```
Next, run npm run dev or yarn dev (if you use Yarn) to start the application development server.

Next.js will emit a message in the terminal with the following content and try to install the necessary TypeScript related packages:
```bash
It looks like you're trying to use TypeScript but do not have the required package(s) installed.
Installing dependencies

If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).


Installing devDependencies (yarn):
- typescript
- @types/react
- @types/node

[1/4] Resolving packages...
[2/4] Fetching packages...
```
When the installation is complete, open tsconfig.json and you'll see it populated with values .


# Understanding tsconfig.json in Typescript
The tsconfig.json is the main piece of configuration for TypeScript. This file contains all the compiler options and settings for the TypeScript compiler to know exactly how you want your code transpiled. Here's a structure, which the typical tsconfig.json should have:

#### Compiler Options
- target : It points to the version of JavaScript that the TypeScript code compiles into. Standard settings are "es5" and "es6".
``` "target": "es5" ```

- lib: This specifies the list of library files to include in the compilation. Most of the time, this will be "dom," "dom. iterable", and "next" together for a web project.
``` "lib": ["dom", "dom.iterable", "esnext"] ```

- allowJs: Allows JavaScript file compilation. This may be helpful in introducing TypeScript gradually into an existing JavaScript codebase.
   ``` "allowJs": true ```

- skipLibCheck: This will avoid the checking of declaration files (.d.ts) and would consequently help in faster compiling.
   ``` "skipLibCheck": true ```

- strict: Enable strict option checking. This option, if true, will enable strict rules by which your code will become more resilient.
   ``` "strict": false ```

- forceConsistentCasingInFileNames: Ensures that filenames are consistently cased const.
   ``` "forceConsistentCasingInFileNames": true ```

- noEmit: The output files are not emitted by the compiler. This is a pretty useful option for projects where we are only concerned with type checking and do not want to take a look at the final JavaScript file.
``` "noEmit": true ```

- esModuleInterop: This sets up interoperability between CommonJS and ES Modules; thus, one can import files in CommonJS format with the ES Module syntax.
    ```  "esModuleInterop": true ```

- module: Defines how the module code should be generated. The most common values, appropriate for modern projects, are these, which include esnext.
``` "module": "esnext" ```

- moduleResolution: Defines module resolution strategy: The preferred value for a Node.js application is "node."
``` "moduleResolution": "node" ```

- resolveJsonModule: Enables import for JSON modules in some scenarios, e.g., while working with the configuration file or in a different manner.
``` "resolveJsonModule": true ```

- isolatedModules: Treat each file as a standalone module. This is likely to help in making the build faster. ```json
``` "isolatedModules": true ```


- jsx: Code generation method of the JSX. When set to preserve, JSX is kept as is and not rounded on Next.js to handle it.

``` "jsx": "preserve" ```

- Include and Exclude
- include: Specifies the files or directories to include in the compilation. Typically, this includes next-env.d.ts and all .ts and .tsx files.

``` "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"] ```

- exclude: Specifies the files or directories to exclude from the compilation. This typically includes node_modules to avoid unnecessary type checking of external libraries.

``` "exclude": ["node_modules"] ```
