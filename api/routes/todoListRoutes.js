'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var productList = require('../controllers/productController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/product')
    .get(productList.list_all_product)
    .post(productList.create_a_product);

  app.route('/product/:pId')
    .get(productList.read_a_product)
    .put(productList.update_a_product)
    .delete(productList.delete_a_product);
};