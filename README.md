```
mkdir node_project
cd node_project

npm init -y
npm install -S express 

npm install -D eslint typescript @types/express @typescript-eslint/parser @typescript-eslint/eslint-plugin

npx eslint --init

npx tsc --init

# most of the default are fine, only need to change
"target": "ES2019"   /* according to the recommendation of tsc: matching the version of node, v12 -> ES2019 */
"outDir": "dist"
```

### Ref:

The original setup is from [DO](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript)

Set up [ESlint for TypeScript](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
by copying the example. `typescript-eslint/parser` messes up linting JS. So remember to add rules to exclude JS from it.