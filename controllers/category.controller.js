(
    function () {
     var app = angular.module('menuApp')
     .controller('CategoryController',  ['DataService','resData', function (DataService, resData){
        var category = this
        category.title = 'Categories'
        category.categories = resData
     }])

    }
)();