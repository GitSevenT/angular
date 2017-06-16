
myApp.factory("booklist",function () {
        return [{
            "bookId":"1",
            "index": "1",
            "name": "用AngularJS开发下一代WEB应用",
            "author": "小莫",
            "pubTime": "2014-01-01",
            "price":"35"
        }, {
            "bookId":"2",
            "index": "2",
            "name": "Ext江湖",
            "author": "大漠",
            "pubTime": "2015-01-01",
            "price":"35"
        }, {
            "bookId":"3",
            "index": "3",
            "name": "ActionScript3.0游戏设计基础（第二版）",
            "author": "大漠",
            "pubTime": "2016-01-01",
            "price":"35"
        }, {
            "bookId":"5",
            "index": "5",
            "name": "Ext江湖",
            "author": "大漠",
            "pubTime": "2017-01-01",
            "price":"35"
        }, {
            "bookId":"4",
            "index": "4",
            "name": "用AngularJS开发下一代WEB应用",
            "author": "大漠",
            "pubTime": "2018-01-01",
            "price":"35"
        }]

    })
    .controller("BookController", function ($scope,booklist) {
        $scope.books = booklist;
        $scope.changeOrder = function (order) {
            console.log(order);
            $scope.orderId = order;
        };
        $scope.changeType = function (type) {
            // $scope.books.forEach(function (item,index) {
            //     if(type == item.author){
            //         console.log(item.author);
                    $scope.bookType = {author:type};
                    console.log($scope.bookType);
            //     }
            // });
        }
    });