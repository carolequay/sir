
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	
	// onInteractionStart
	this.onInteractionStart = function(x0, y0, x1, y1){
	};
	
	// onInteractionUpdate
	this.onInteractionUpdate = function(x0, y0, x1, y1){
	};
	
	// onInteractionEnd
	this.onInteractionEnd = function(x0, y0, x1, y1){
		this.controlEditingMode();
		this.controlColour();
		this.controlLineWidth();
		
		var shape = (this.currentShape == editingMode.line ? 
						new Line(	x0,
									y0,
									x1,
									y1,
									this.currLineWidth,
									this.currColour)
						:
						new Rectangle(	x0,
										y0,
										x1 - x0,
										y1 - y0,
										this.currLineWidth,
										this.currColour));
		drawing.addForm(shape);
		drawing.paint(ctx);
	};
	
	// editingMode
	this.controlEditingMode = function(){
		var btn = document.getElementsByName('mx');
		
		for(var i = 0; i < btn.length; i++){
			if(btn[i].checked){
				if(btn[i].value == 'rectangle'){
					this.currentShape = editingMode.rect;
				} else {
					this.currentShape = editingMode.line;
				}
			}
		}
	};
	
	// colour
	this.controlColour = function(){
		this.currColour = document.getElementById('colour').value;
	};
	
	// lineWidth
	this.controlLineWidth = function(){
		this.currLineWidth = document.getElementById('spinnerWidth').value;
	};
};


