function spinalCase(str) {
  return str.replaceAll(/([A-Z])/g, ' $1').toLowerCase().trim().replaceAll(/[^a-z]+/g, '-');
  // best solution
  // Create a variable for the white space and underscores.
  // var regex = /\s+|_+/g;

  // // Replace low-upper case to low-space-uppercase
  // str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // // Replace space and underscore with -
  // return str.replace(regex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');