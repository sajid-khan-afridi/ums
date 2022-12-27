tsc –init

npm init –y

npm i –g nodemon (one time)

npm i nodemon (everytime time)

create .gitignore file and write node_modules

then create file main.ts

tsc

two terminal will run

npx nodemon main.js (first for server is run)

tsc -w (second is the typescript)

when you want to run both the command in one terminal

step1: install the package

npm add concurrently

step2:write in "package.json"

"scripts": {
"start:ts": "tsc -w",
"start:js": "nodemon main.js",
"start": "concurrently npm:start:\*"
}

step3: Run "npm start" command and in one terminal we will run the "node main.js" and "tsc -w"
