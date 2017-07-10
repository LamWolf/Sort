const Sort = {
	quickSort: (arg) => {
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
	},	
	bubbleSort: (arg) => {
		let len = arg.length;
		let temp;
		for(let i = 0; i < len; i++){
			for(let j = 0; j < len - i - 1; j++){
				if(arg[j] > arg[j+1]){
					temp = arg[j];
					arg[j] = arg[j+1];
					arg[j+1] = temp;
				}
			}
		}
		return arg;
	},
	bubbleSort2: (arg) => {
		let i = arg.length - 1;
		while(i > 0) {
			var flag = 0;	//设置一个flag，用于记录已交换到位的位置
			for(let j = 0; j < i; j++){
				if(arg[j] > arg[j+1]){
					flag = j;
					let temp = arg[j];
					arg[j] = arg[j+1];
					arg[j+1] = temp;
				}
			}
			console.log(flag);
			i = flag;
		}
		return arg;
	}
}
