### Build Requirements

`npm install react-tools -g`
`npm install uglify-js -g`

### Compiling

`jsx --harmony --source-map-inline -x jsx -w . ./dist/`

### Minifying

`uglifyjs --compress --mangle --screw-ie8 --output ./dist/percolate-contact-form.min.js -- ./dist/percolate-contact-form.js`