// lru cache

class lruCache {
	constructor(limit= 10){
		this.cache = new Map();
		this.limit = limit
	}
    get(key) {
      if(!this.cache.has(key)) {
        return null
      }
      let value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value)
      
    }

	set(key, val) {
        if(this.cache.has(key)) {
          this.cache.delete(key)
        }else if(this.cache.size >= this.limit) {
          let firstElement = this.cache.keys().next().value
          this.cache.delete(firstElement)
        }
		this.cache.set(key, val)
	}
	display(){
		return [...this.cache.entries()]
	}
}

let lru = new lruCache(3)
lru.set(1,'a'),
lru.set(2,'b'),
lru.set(3,'c')
lru.set(4,'d')
lru.set(5,'e')
lru.set(3,'f')
lru.get(5);
lru.set(1, 'a')

console.log(lru.display())