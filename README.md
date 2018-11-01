# :moneybag: expensify :dollar: :euro: :pound: :yen:

### a repo created to learn React Fiber & React Router v4.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

#### From the terminal, run:

```
$ yarn run build
```

...which would be equivalent to running the following, if Webpack were installed globally as opposed to locally:

```
$ webpack --watch
```

#### ...and to fire up a barebones dev server:

```
$ yarn run dev-server
```

#### in re react-redux:

`<Provider store={store}>` makes the Redux store available to the `connect()` calls in the component hierarchy below it. In plain English, it makes the Redux store available to all components we `connect()`.

#### to run tests once

```
$ yarn test
```

#### to run tests continuously

```
$ yarn test -- --watch
```