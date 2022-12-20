const pairs = {
  'A': 'T',
  'T': 'A',
  'G': 'C',
  'C': 'G'
}

function pairElement(str) {
  return str.split("").map(item => [item, pairs[item]]);
}

pairElement("GCG");