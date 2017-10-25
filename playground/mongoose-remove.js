const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '59f0ace529d88bd7e6a81346'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('59f0ace529d88bd7e6a81346').then((todo) => {
console.log(todo);
});
