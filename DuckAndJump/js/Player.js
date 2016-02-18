/**
 * 
 */

Player.States = {
	Jump: 4,
	Stand: 3,
	Duck: 2,
	Down: 1
};

Player.Defaults = {
	Health: 3,
	Score: 0,
	State: Player.States.Stand,
	Name: 'Unknown'
};

function Player($dom) {
	
	var _$dom = $dom;
	
	var _health = Player.Defaults.Health;
	
	var _score = Player.Defaults.Score;
	
	var _state = Player.Defaults.State;
	
	var _name = Player.Defaults.Name;
	
	
	this.getDom = function() {
		return this._$dom;
	}
	
	this.getHealth = function() {
		return this._health;
	}
	
	this.setHealth = function(health) {
		this._health = health;
	}
	
	this.getScore = function() {
		return this._score;
	}
	
	this.setScore = function(score) {
		this._score = score;
	}
	
	this.getState = function() {
		return this._state;
	}
	
	this.setState = function(state) {
		this._state = state;
	}
	
	this.getName = function() {
		return _name;
	}

	this.setName = function(name) {
		_name = name;
	}
	
}

Player.prototype.jump = function() {
	var _this = this;
	_this.setState(Player.States.Jump);
	this.getDom().animate({
		bottom:'120px'
	},100, function() {
		_this.stand();
	})
}

Player.prototype.stand = function() {
	var _this = this;
	this.getDom().animate({
		bottom: '20px',
		height: '210px'
	},1000, function() {
		_this.setState(Player.States.Stand);
	})
}

Player.prototype.duck = function() {
	var _this = this;
	_this.setState(Player.States.Duck);
	this.getDom().animate({
		height: '120px'
	},100, function() {
		_this.stand();
	})
}

Player.prototype.down = function() {
	var _this = this;
	_this.setState(Player.States.Down);
	this.getDom().animate({
		height: '50px'
	},100, function() {
		_this.stand();
	})
}





