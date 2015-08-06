var es = require('event-stream');
module.exports = function(app) {
  var MyModel = app.models.MyModel;
  MyModel.createChangeStream(function(err, changes) {
    changes.pipe(es.stringify()).pipe(process.stdout);
  });
  MyModel.create({foo: 'bar'});
}
