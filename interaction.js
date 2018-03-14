
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.xInit = 0;
	this.yInit = 0;
	this.x = 0;
	this.y = 0;
	
	// Developper les 3 fonctions gérant les événements
	this.drag = function(evt, x, y){
		var pos = getMousePosition(canvas, evt);
		this.xInit = pos['x'];
		this.yInit = pos['y'];
		
		if(interactor !== undefined){
			//interactor.onInteractionStart(this.xInit, this.yInit, this.x, this.y);
		}
	};
	
	this.dragging = function(evt, x, y){
		var pos = getMousePosition(canvas, evt);
		this.x = pos['x'];
		this.y = pos['y'];
		
		if(interactor !== undefined){
			//interactor.onInteractionUpdate(this.xInit, this.yInit, this.x, this.y);
		}
	};
	
	this.drop = function(evt, x, y){
		var pos = getMousePosition(canvas, evt);
		this.x = pos['x'];
		this.y = pos['y'];
		
		if(interactor !== undefined){
			//interactor.onInteractionEnd(0, 0, this.x, this.y);
			interactor.onInteractionEnd(this.xInit, this.yInit, this.x, this.y);
		}
	};
	
	this.getXinit = function(){
		return this.xInit;
	};
	
	this.getYinit = function(){
		return this.yInit;
	};
	
	this.getX = function(){
		return this.x;
	};
	
	this.getY = function(){
		return this.y;
	};
	
	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener("mousedown", 	this.drag, 		false);
	canvas.addEventListener("mousemove", 	this.dragging, 	false);
	canvas.addEventListener("mouseup", 		this.drop, 		false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



