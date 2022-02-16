# Image Processing API

## endpoints

### /image
you have to add query to make it work 
example: http://localhost/image?name=imageName&width=100&height=100

if you miss any of this attributes (name, width, height) it will show a message that you miss somthing

### /placeholder
you have to add query to make it work
example: http://localhost/placeholder?width=100&height=100

if you miss any of this attributes (width, height) it will show a message that you miss something

## libraries that I used

  for developing I used:

* "@types/express": "^4.17.13"
* "@types/jasmine": "^3.10.3"
* "@types/node": "^17.0.17"
* "@types/sharp": "^0.29.5"
* "@types/supertest": "^2.0.11"
* "@typescript-eslint/eslint-plugin": "^5.12.0"
* "@typescript-eslint/parser": "^5.12.0"
* "eslint": "^8.9.0"
* "eslint-config-prettier": "^8.3.0"
* "eslint-plugin-prettier": "^4.0.0"
* "nodemon": "^2.0.15"
* "prettier": "^2.5.1"
* "tsc-node": "^0.0.3"
* "typescript": "^4.5.5"

for runtime I used:

- "express": "^4.17.2"
- "g": "^2.0.1"
- "jasmine": "^4.0.2"
- "jasmine-spec-reporter": "^7.0.0"
- "sharp": "^0.30.1"
- "supertest": "^6.2.2"
- "ts-node": "^10.5.0"

## scripts I used

- "build": "npx tsc" - for compile the ts file to js files
- "jasmine": "jasmine" - for testing
- "test": "npm run build && npm run jasmine" - for compile files and test it at the same time
- "start": "nodemon src/index.ts" - for running on server using ts file
- "lint": "eslint *.js" - for using eslint on js files
- "lint-ts": "eslint **/*.ts" - for using eslint on ts files
- "lint-ts-fix":"eslint **/*.ts --fix" - for using eslint on ts files and fix it
- "prettier": "prettier --config .prettierrc *.js --write" - for using prettier on js files
- "prettier-ts": "prettier --config .prettierrc **/*.ts --write" - for using prettier on ts files
