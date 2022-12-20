function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const computePeriod = (alt) => {
    return Math.round(2 * Math.PI * Math.sqrt(Math.pow((alt + earthRadius), 3) / GM));
  }
  return arr.map((item) => ({"name": item.name, "orbitalPeriod": computePeriod(item.avgAlt)}));
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);