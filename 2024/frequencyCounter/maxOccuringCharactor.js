const maxCharCount = (str) => {
	const newstr = str.toLowerCase();
    let map = new Map()

  let start = 0;
  while(start < newstr.length) {
  	if(!map.has(newstr[start])) {
    	map.set(newstr[start], 1)
    }
    else {
    	map.set(newstr[start], map.get(newstr[start]) + 1)
    }
    start++
  }
  let max = 0;
   for(let [k,v] of map) {
        if(v > max) {
        	max= v
        }
    }
  return max
}

console.log(maxCharCount('Hello woroold'))
