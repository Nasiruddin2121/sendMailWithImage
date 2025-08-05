# sendMailWithImage

*-1 : npm init -y
What It Does:
   -> Initializes a new Node.js project.
   -> Automatically fills out the package.json with default values.
   -> Skips the interactive prompts (which you'd get if you just used npm init without -y).
*-2 : npm i typescript --save-dev
Breakdown:
    npm i is short for npm install.

        typescript is the package being installed.

        --save-dev means it's a dev dependency — it's only needed during development (e.g., for compiling .ts files), not in production.

        Result:

            Adds TypeScript to your node_modules.
            Updates your package.json like this:

        json:
            "devDependencies": {
            "typescript": "^X.Y.Z"
            }
*-3 :npx tsc --init
*-3 :initializes a TypeScript configuration file named tsconfig.json in your project directory.
    ✅ What It Does:
        Creates a tsconfig.json file with a default set of compiler options.

        Enables TypeScript to understand how to compile your .ts files (what files to include, where to output compiled JS, which language features to support, etc.).
*-4 :npm in @types/node --save-dev
*-4 :✅ What This Does:
        Installs the Node.js type definitions for TypeScript as a development dependency.

    💡 Why It's Needed:
        
*-5 :mkdir src
*-5 :Folder created by this 
*-6 :npm i express
*-6 :✅ Why Do We Use It?
        We use Express to build web servers and APIs easily and efficiently.

    🔧 What It Gives You:
        Easy routing (handling URLs and HTTP methods).

        Middleware system (for things like logging, authentication, etc.).

        Simplifies working with requests and responses.

        Faster setup compared to raw Node.js http module.
*-7 :npm i @types/express --save-dev
*-7 :✅ Why Do We Use This?
        We use this command to install TypeScript type definitions for Express.

    📦 What It Does:
        Adds Express's type definitions (like types for Request, Response, NextFunction, etc.).

        Allows TypeScript to understand Express-specific objects, methods, and parameters.

    🔍 Why It's Needed:
        Express is written in JavaScript, not TypeScript, so its types are not built-in.
*-1 :npm i ts-node nodemon --save-dev
*-1 :
*-1 :npm install express @prisma/client
*-1 :
*-1 :npm install typescript ts-node @types/node @types/express nodemon --save-dev
*-1 :
*-1 :npm install cors
*-1 :
*-1 :npm install --save-dev @types/cors
*-1 :
*-1 :npm install morgan
*-1 :

*-1 :npm install --save-dev @types/morgan
*-1 :
npx prisma init
npx prisma generate
npx prisma migrate dev --name init
