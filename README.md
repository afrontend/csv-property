[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
# csv-property
Convert CSV string to JSON object

Convert JSON object to CSV string

CSV string: "path1, path2, path3, string"

```javascript
// From
'popup, title, Login'

// To
{
  popup: {
    title: 'Login'
  }
}
```

## Install
```sh
npm install csv-property
```

## Usage
```javascript
const { toObject, toCSVString } = require('csv-property')
toObject([ 'popup, title, Login' ]) // { popup: { title: 'Login' } }
toCSVString({ popup: { title: 'Login' } }) // [ 'popup, title, Login' ]
toObject([ 'popup; title; Login' ], ';') // { popup: { title: 'Login' } }
toCSVString({ popup: { title: 'Login' } }, ';') // [ 'popup; title; Login' ]
```

## License
MIT © [Bob Hwang](https://afrontend.github.io)
