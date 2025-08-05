# sendMailWithImage

*-1 : npm init -y <br />
What It Does:<br />
   -> Initializes a new Node.js project.<br />
   -> Automatically fills out the package.json with default values.<br />
   -> Skips the interactive prompts (which you'd get if you just used npm init without -y).<br />
*-2 : npm i typescript --save-dev<br />
Breakdown:<br />
    npm i is short for npm install.<br />

        typescript is the package being installed.<br />

        --save-dev means it's a dev dependency — it's only needed during development (e.g., for compiling .ts files), not in production. <br />

        Result: <br />

            Adds TypeScript to your node_modules. <br />
            Updates your package.json like this: <br />

        json:
            "devDependencies": {
            "typescript": "^X.Y.Z"
            }<br />
*-3 :npx tsc --init<br />
*-3 :initializes a TypeScript configuration file named tsconfig.json in your project directory.<br />
    ✅ What It Does:<br />
        Creates a tsconfig.json file with a default set of compiler options.<br />

        Enables TypeScript to understand how to compile your .ts files (what files to include, where to output compiled JS, which language features to support, etc.).<br />
*-4 :npm in @types/node --save-dev<br />
*-4 :✅ What This Does:<br />
        Installs the Node.js type definitions for TypeScript as a development dependency.<br />

    💡 Why It's Needed:<br />
        
*-5 :mkdir src<br />
*-5 :Folder created by this <br />
*-6 :npm i express<br />
*-6 :✅ Why Do We Use It?<br />
        We use Express to build web servers and APIs easily and efficiently.<br />

    🔧 What It Gives You:<br />
        Easy routing (handling URLs and HTTP methods).<br />

        Middleware system (for things like logging, authentication, etc.).<br />

        Simplifies working with requests and responses.<br />

        Faster setup compared to raw Node.js http module.<br />
*-7 :npm i @types/express --save-dev
*-7 :✅ Why Do We Use This?<br />
        We use this command to install TypeScript type definitions for Express.<br />

    📦 What It Does:
        Adds Express's type definitions (like types for Request, Response, NextFunction, etc.).<br />

        Allows TypeScript to understand Express-specific objects, methods, and parameters.<br />

    🔍 Why It's Needed:<br />
        Express is written in JavaScript, not TypeScript, so its types are not built-in.<br />
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
