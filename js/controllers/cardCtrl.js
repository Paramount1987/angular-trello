angular.module('app').controller('cardCtrl',function(cardFactory){

	this.isEditing = false;
	this.editingCard = null;
	this.editAviable = true;

	this.deleteCard = function(card){
		if(!this.editAviable)return;
		cardFactory.deleteCard(card);
	};
	this.editCard = function(card){
		if(!this.editAviable) return;
		this.isEditing = true;
		this.editingCard = angular.copy(card);
	};
	this.updateCard = function(){
		cardFactory.updateCard(this.editingCard);
		this.editingCard = null;
		this.isEditing = false;
	};

	this.completedCard = function(cardComplete){
		cardFactory.completedCard(cardComplete);
		this.editAviable = !this.editAviable;
	};

});