
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

// Classe Drawing
var Drawing = function(){
	this.forms = new Array();
	
	this.addForm = function(form){
		this.forms.push(form);
	}
	
	this.getForms = function(){
		return this.forms;
	}
	
	this.removeForm = function(index){
		if (index > -1) {
			this.forms.splice(index, 1);
		}
		
		this.paint(ctx);
	}
};

// Classe Forme
var Forme = function(x0, y0, x1, y1, lineWidth, color){
	this.x0 = x0;
	this.y0 = y0;
	this.x1 = x1;
	this.y1 = y1;
	
	this.color = color;
	this.lineWidth = lineWidth;
	
	this.getInitX = function(){
		return this.x0;
	};
	
	this.getInitY = function(){
		return this.y0;
	};
	
	this.getFinalX = function(){
		return this.x1;
	};
	
	this.getFinalY = function(){
		return this.y1;
	};
	
	this.coordinates = function(){
		return "(" + this.x0 + ";" + this.y0 + ";" + this.x1 + ";" + this.y1 + ")";
	};
};

// Classe Rectangle
var Rectangle = function(x0, y0, x1, y1, lineWidth, color){
	this.x0 = x0;
	this.y0 = y0;
	this.x1 = x1;
	this.y1 = y1;
	
	this.color = color;
	this.lineWidth = lineWidth;
	
	this.getInitX = function(){
		return this.x0;
	};
	
	this.getInitY = function(){
		return this.y0;
	};
	
	this.getFinalX = function(){
		return this.x1;
	};
	
	this.getFinalY = function(){
		return this.y1;
	};
	
	this.coordinates = function(){
		return "(" + this.x0 + ";" + this.y0 + ";" + this.x1 + ";" + this.y1 + ")";
	};
};

// Classe Ligne
var Line = function(x0, y0, x1, y1, lineWidth, color){
	this.x0 = x0;
	this.y0 = y0;
	this.x1 = x1;
	this.y1 = y1;
	
	this.color = color;
	this.lineWidth = lineWidth;
	
	this.getInitX = function(){
		return this.x0;
	};
	
	this.getInitY = function(){
		return this.y0;
	};
	
	this.getFinalX = function(){
		return this.x1;
	};
	
	this.getFinalY = function(){
		return this.y1;
	};
	
	this.coordinates = function(){
		return "(" + this.x0 + ";" + this.y0 + ";" + this.x1 + ";" + this.y1 + ")";
	};
};