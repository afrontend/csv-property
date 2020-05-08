[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
# csv-property
Convert csv string to JSON object
```javascript
// From
"apple, color, red"

// To
{
  apple: {
    color: 'red'
  }
}
```

## Install
```sh
npm install csv-property
```

## Usage
```javascript
const { toObject } = require('csv-property')
console.log(toObject('apple, color, red'))
```

## License
MIT © Bob Hwang
