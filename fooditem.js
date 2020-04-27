let fooditem = function (foodtype, quantity, calories) 
{this.foodtype = foodtype;
 this.quantity = parseInt(quantity);
 this.calories = parseInt(calories);
 this.intake = function () 
{return this.quantity * this.calories;};};


fooditem.prototype.toString = function () 
{return this.quantity+" "+ this.foodtype+ "(s)"+ " worth "+ this.intake()+ " calories";};

fooditem.prototype.isValid = function () 
{if (this.foodtype == "" || isNaN(this.quantity) || isNaN(this.calories)) { return false;} 
	else if (this.quantity < 0 || this.calories < 0) {return false;} 
	else {return true;}};

	