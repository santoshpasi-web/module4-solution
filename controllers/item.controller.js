(
    function () {
     var app = angular.module('menuApp')
     .controller('ItemController',  ItemController)
     ItemController.$inject = ['resData', '$stateParams' ]

     function ItemController (resData, $stateParams) {
        var item = this
        var id = $stateParams.id || 0
        item.category = resData[id].category
        item.items = resData[id].menu_items
        console.log(item.items)
     }

    }
)();