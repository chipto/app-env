## app-env

Tries to be environment variables in JS runtime, global variables really, just not on `window` or `self` object.
Still be cautious, two packages using `app-env`, and one is dependency of another and both call `env.set('url', someValue)`.
It will change value of `url` for both of them, causing unexpected behaviour.

## Usage

### Install

```bash
$ npm i app-env
```

### Use
```javascript
import env from 'app-env';
``` 

## API

### `env.set(key: string, value: any, [modifiable: boolean])`

Sets a value for given key, can be prevented from further modification by setting modifiable to `false`, in which case another
attempt will throw `TypeError`.

### `env.get(key: string)`

Gets value of given key, same as `env.KEY_NAME_HERE` 