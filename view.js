
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
	// On privatise le rectangle
	ctx.beginPath();
	
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.lineWidth;
	
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    
	// On dessine le rectangle
	ctx.stroke();
	
	// Appel de updateShapeList
	updateShapeList();
};

Line.prototype.paint = function(ctx) {
	// On privatise la ligne
    ctx.beginPath();
	
	ctx.strokeStyle = this.color;
	ctx.lineWidth = this.lineWidth;
	
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
	
	// On dessine la ligne
    ctx.stroke();

	// Appel de updateShapeList
	updateShapeList();
};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	this.getForms().forEach(function(eltDuTableau) {
		// now fill the canvas
		eltDuTableau.paint(ctx);
	});
	
	// Appel de updateShapeList
	updateShapeList();
};

var updateShapeList = function(){
	// Remise à zéro de shapeList
	document.getElementById("shapeList").innerHTML = "";
	
	// Pour toutes les formes dessinées
	for(var i = 0; i < drawing.forms.length; i++){
		// On prend le type de la forme
		var type = "";
		if(drawing.forms[i] instanceof Rectangle){
			type = "Rectangle";
		} else {
			type = "Line";
		}
		
		// On crée un élément <li>
		var li = document.createElement("li");
		
		// On crée le <button>
		var button = document.createElement("button");
		button.setAttribute("type", "button");
		button.setAttribute("class", "btn btn-default");
		button.setAttribute("onClick", "drawing.removeForm(" + i + ")");
		
		// on crée le <span>
		var span = document.createElement("span");
		span.setAttribute("class", "glyphicon glyphicon-remove-sign");
		
		// On met le <span> dans le <button>
		button.appendChild(span);
		
		// On met le <button> dans le <li>
		li.appendChild(button);
		
		// On crée du texte
		var text = document.createTextNode(type + drawing.forms[i].coordinates());
		// On ajoute le texte au <li>
		li.appendChild(text);
		
		// On ajoute le <li> au <ul> déjà sur la page
		document.getElementById("shapeList").appendChild(li);
	}
};