let polyfillJsonStringify = function(obj){
  if(obj === null) {
    return 'null'
  }
  if(typeof obj === 'string') {
    return `"${obj}"`
  }
  if(typeof obj === 'number' || typeof obj === 'boolean') {
    return obj
  }

  if(Array.isArray(obj)) {
     const result = obj.map(el => {
        return polyfillJsonStringify(el); 
      }) 
      return  `[${result.join(',')}]`;
    }

  if(typeof obj === 'object' && obj !== null) {
    const entries = Object.keys(obj).map((key) =>{   
      return `"${key}":${polyfillJsonStringify(obj[key])}`;
    })

    return  `{${entries.join(',')}}`;
  }

}


// var data = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ];

//let data = { name: "Alice", age: 25, isVerified:true, address: null }
let data = {key:null}


console.log(polyfillJsonStringify(data))