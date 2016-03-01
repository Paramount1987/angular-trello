angular.module('app').controller('listsCtrl', function(listFactory){
	this.lists = listFactory.getList();

	this.addList = function(){
		listFactory.addList(this.listName);
		this.listName = '';
	};
});