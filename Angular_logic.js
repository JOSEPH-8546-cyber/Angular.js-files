//declaracion del Modulo

let app = angular.module("Angular_App", [])

/*
| Dentro del [] se importan los modulos de Angular.
| Existe un modulo que se llama ngResource que es para consumir apis Rest

*/

//declaracion del Controlador

app.controller("ControllerMaster1", ["$scope", function ($) {
$.name= "Joseph";

$.newComment= {}

$.comments= [

    {
      comment: "excelent tutorial",
      username: "Manuel",
      id_user: 058
    },

    {
      comment: "bad tutorial",
      username: "var_02",
      id_user: 25
    }

  ]

  $.addComment = function () {
    $.comments.push($.newComment);
    $.newComment= {};
  };

  //
}]);

/*
$http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
      console.log(data);
      $scope.posts = data;
    })
    .error(function(err) {

    });

$scope.posts = [];

*/

/*
% Angular es MVVM (Modelo-Vista-Vista-Modelo)
*/

// two way data binding and ng Modelo

/*
) data binding es la sincronización que hay entre el modelo y la vista
*/


//dependency injections
