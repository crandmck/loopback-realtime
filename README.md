# loopback-realtime
Very simple demo of realtime server-sent events for a LoopBack app.

**NOTE: The recommended way to push data from server to client is with [angular-live-set](https://github.com/strongloop/angular-live-set)**, which requires 
using AngularJS. For an example, see https://github.com/strongloop/angular-live-set-example.

## Installation

```
$ git clone https://github.com/crandmck/loopback-realtime.git
$ cd loopback-realtime
$ npm install
```

## Run

```
$ node .
```

1. Load the home page: `http://localhost:3000`.  You should see the **LoopBack Rocks!** page.
1. Open your browser's JavaScript console; for example, with Chrome choose **More Tools > JavaScript Console**.
1. In another browser window, open LoopBack Explorer: `http://localhost:3000/explorer`.
2. Click **POST /MyModels** 
3. Click on the Model Schema to copy it into the data field. Enter a value for the `foo` property so the JSON looks something like this:
```
{
  "foo": "xyz",
  "id": 0
}
```
1. Click **Try it Out!**  to add a model instance (add a record).

Now in the other browser window in the JavaScript console, you should see 
```
Object {target: 2, data: Object, type: "create"}
```
In the Node console, you'll see:
```
{"target":2,"data":{"foo":"xyz","id":2},"type":"create"}
```
