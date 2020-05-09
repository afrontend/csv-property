[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
# csv-property
Convert csv string to JSON object
Convert JSON object to csv string
csv string: "path1, path2, path3, string"

## Install
```sh
npm install csv-property
```

## Usage
```javascript
const { toObject, toCSVString } = require('csv-property')
toObject('apple, color, red') // { apple: { color: 'red' } }
toCSVString({ apple: { color: 'red' } }) // [ 'apple, color, red' ]
```

## License
MIT © Bob Hwang
