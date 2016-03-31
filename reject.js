Array.prototype.reject = function(callback) {
	var arr = [];
	var length = this.length;

	if ( length < 0 )
		length = 0;


	for (var i = 0; i < length; i++)
		if ( i in this )
			if (!callback(this[i]))
				arr.push(this[i]);

	return arr;
}
