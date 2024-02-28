# module4-solution
Module 4 Coding Assignment - Restaurant Menu App
#### Using the following REST API
  * `getAllCategories` - this method should return a promise which is a result of using the `$http` service, using the following REST API endpoint: [https://coursera-jhu-default-rtdb.firebaseio.com/categories.json)](https://coursera-jhu-default-rtdb.firebaseio.com/categories.json)
  * `getItemsForCategory(categoryShortName)` - this method should return a promise which is a result of using the `$http` service, using the following REST API endpoint: https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json, where, before the call to the server, your code should append whatever `categoryShortName` value was passed in as an argument into the `getItemsForCategory` method.
