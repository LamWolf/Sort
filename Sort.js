const Sort = {
	quickSort: function(arg) {
			if(arg.length <= 1){
				return arg;
			}
			let pivotIndex = Math.floor(arg.length/2);
			let pivot = arg.splice(pivotIndex, 1)[0];
			let left = [];
			let right = [];
			for(let i = 0; i < arg.length; i++){
				if(arg[i] <= pivot){
					left.push(arg[i]);
				}
				if(arg[i] > pivot){
					right.push(arg[i]);
				}
			}

			return this.quickSort(left).concat([pivot], this.quickSort(right));
		}	
		
}