(
    function () {
        var app = angular.module('menuApp')
        .factory('DataService', DataService);
        DataService.$inject = ['$http', 'baseUrl'];
        function DataService($http, baseUrl){
            var data = this;
            data.title = 'DataService';
            return {
                getData: function(){
                    return $http({
                        method: 'GET',
                        url: (baseUrl)
                    }).then((res)=> {
                        console.log(Object.keys(res.data).map(key => res.data[key])[0].category);
                        return Object.keys(res.data).map(key => res.data[key])
                    }).catch((err)=> {
                        console.log('An unexpected Error ocurred: ', err);
                    })
                }
            }
        }
    }
)();