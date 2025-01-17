function areThereDuplicates(...args) {

  let obj = {}

  for(let i = 0 ; i<args.length; i++) {
      obj[args[i]] = ++obj[args[i]] || 1
  }
  for(let key in obj) {
      if(obj[key] > 1) return true
  }
    return false
}

console.log(areThereDuplicates(1, 2, 2))
