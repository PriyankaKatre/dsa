let str = '[]{}()'

const isValid = (str) =>{
    if(str.length <= 1) {
        return false
    }
	let pairs = {
		'(':')',
		'{':'}',
		'[':']'
	}
	let result = [];
	for(let i = 0 ; i<str.length; i++) {
		if(pairs[str[i]]) {
			result.push(str[i])
		}
		else if(pairs[result.pop()] !== str[i]) {
			return false
		}
	}
	return result.length === 0
}


console.log(isValid(str))


//Using Recursion
const isValid = () =>{
	let pairs = {
		'(':')',
		'{':'}',
		'[':']'		
	}
	let check = (str, stack=[]) => {
      
      if (str.length === 0) {
            return stack.length === 0;
        }

		let char = str[0];
		let rest = str.slice(1)
		if(pairs[char]) {
			stack.push(char);
		}
		else if(char === ')' || char ==='}' || char===']') {
			if(stack.length === 0) {
				return false
			}
			const top = stack.pop()
			if(pairs[top] !== char) {
				return false
			}
			return check(rest, stack)
		}
		return check(rest, stack)
		
	}
	return check('')
}

console.log(isValid())






const string = '({[{()}]})'

const balancedBrackt = (string) => {
    const stack = [];
    const parentheses = '{}, (), []';
    let count= 0;
    let bracket;
    for(let i in string) {
        stack.push(string[i]);
        const open = stack[stack.length - 2];
        const close = stack[stack.length - 1]

        bracket = open + close
        if (parentheses.includes(bracket)) {
            stack.pop();
            stack.pop();
            count++
        }
    }
    return count
}
console.log(balancedBrackt(string))
