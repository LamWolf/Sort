let arr = ['A','B','C','D','E','F']


let Sort = {
	begol : teamArray => {
		if(!(teamArray instanceof Array)){
			return "请输入一个数组"
		}
		let teamCount = teamArray.length	//参数队伍总数
		let jumpNum = teamCount <= 4 ? 0 : (teamCount + teamCount % 2 -4) / 2 	//跳转间隔数
		// console.log(jumpNum)
		let maxRound = teamCount % 2 ==1 ? teamCount - 1 : teamCount - 2	//最大循环次数
		if(teamCount % 2 == 1) {
			++teamCount
			teamArray.push('0')
			// console.log(teamArray)
		}
		let fixedTeam = teamArray.slice(-1)[0]	//固定的队伍序号
		let divide = teamCount / 2
		let leftTeam = 	teamArray.slice(0, divide)
		let rightTeam = teamArray.slice(divide)
		let toLeft = []
		let toRight = []
		rightTeam.reverse()
		console.log('第1轮：' + teamArray)
		for(let i = 0; i < maxRound; i++){
			if(i % 2 == 0){
				rightTeam.shift()
				toLeft = rightTeam.slice(0, jumpNum).reverse()
				// console.log('right' + toLeft)
				toRight = leftTeam.slice(-jumpNum - 1).reverse()
				// console.log('right' + toRight)
				leftTeam = toLeft.concat(leftTeam.slice(0, leftTeam.length - jumpNum - 1))
				rightTeam = rightTeam.slice(jumpNum).concat(toRight)
				leftTeam.unshift(fixedTeam)
				teamArray = leftTeam.concat(rightTeam.reverse())
				rightTeam.reverse()
			}else{
				leftTeam.shift()
				// console.log('leftTeam right' + rightTeam)
				toRight = leftTeam.slice(-jumpNum - 1).reverse()
				// console.log('left' + toRight)
				toLeft = rightTeam.slice(0, jumpNum + 2).reverse()
				// console.log('left' + toLeft)
				leftTeam = toLeft.concat(leftTeam.slice(0, leftTeam.length - jumpNum - 1))
				rightTeam = rightTeam.slice(jumpNum + 2).concat(toRight)
				rightTeam.unshift(fixedTeam)
				teamArray = leftTeam.concat(rightTeam.reverse())
				rightTeam.reverse()
			}
			console.log('第' + (i+2)  + '轮：' + teamArray)
		}
	}
}

Sort.begol(arr)