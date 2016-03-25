'use strict';

juke.factory('PlayerFactory', function($q){
  // non-UI logic in here
  var player = {};

  player.pause = function(audioElem){
  	return $q(function(resolve, reject) {

  	});
  };

  player.start = function(){

  }
  return player;

});
