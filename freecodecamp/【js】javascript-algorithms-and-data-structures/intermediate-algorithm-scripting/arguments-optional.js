function addTogether(x, y) {
  if (typeof x !== 'number') {
    return undefined
  }
  if (arguments.length === 2) {
    return (typeof y === 'number') ? x + y : undefined;
  }

  return function(y) {
    return (typeof y === 'number') ? x + y : undefined;
  };
}

addTogether(2,3);