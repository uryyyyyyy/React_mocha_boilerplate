
## my env

- Ubuntu14.04
- node v0.12
- g++ (to build contexify)

(no need jasmine, jest)

## setUp

```
npm install -g gulp
npm install
ln -s ../src node_modules/
```

## build

`gulp webpack`

and you can open build/index.html in your browser

## unit test

`gulp test:testUtil --path [targetFile]`

like

`gulp test:testUtil --path src/reactComponents/_tests_/nestComponentTest.js`

