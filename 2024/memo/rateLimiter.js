function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return "Rate limit exceeded";
    } else {
      lastCalled = now;
      return fn(...args);
    }
  };
}


function fetchData() {
  console.log("Fetching data...");
  return "Data fetched";
}

const rateLimitedFetchData = rateLimiter(fetchData, 2000);
console.log(rateLimitedFetchData()); // Fetching data...
console.log(rateLimitedFetchData()); // Rate limit exceeded
