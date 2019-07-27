## rcolor.js - getting Reverse Color of hex [![Build Status](https://travis-ci.com/kazumalab/rcolor.js.svg?branch=master)](https://travis-ci.com/kazumalab/rcolor.js)

## install

```
yarn add rcolor.js
```

## API

```
const rcolor = new RColor('#FFFFFF')
rcolor.toRGB() // rgb(255,255,255)
```

```
const rcolor = new RColor('#FFFFFF')
rcolor.toReverse() // #000000
```

## testing

using [jest](https://github.com/facebook/jest).

```
yarn test
```

## Contributing

Pull requests are welcome.