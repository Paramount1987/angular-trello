angular.module('app').factory('cardFactory', function(){
	var service = {};

	var cards = [
	{
		id: 1,
		description: 'Fix bug in player',
		list_id: 1,
		complete: false
	},
		{
		id: 2,
		description: 'Add feature width D3',
		list_id: 1,
		complete: false
	},
		{
		id: 3,
		description: 'Learn AngularJS',
		list_id: 2,
		complete: false
	}];

	service.getCards = function(list){
		return _.filter(cards, {list_id: list.id});
	};

	service.createCard = function(list, cardDescription){
		cards.push({
			id: _.uniqueId('card_'),
			description: cardDescription,
			list_id: list.id
		});
	};

	service.deleteCard = function(card){
		 _.pull(cards, card);
	};

	service.updateCard = function(updatedCard){
		var card = _.find(cards, function(obj){return obj.id == updatedCard.id});
		card.description = updatedCard.description;
		card.list_id = updatedCard.list_id;
	};

	service.completedCard = function(cardComplete){
		var card = _.find(cards, function(obj){return obj.id == cardComplete.id});
		card.complete = !cardComplete.complete;
	};

	return service;
});