function reverseString(str) {
  // type your code here
  let result = ""
  // for(let i=str.length-1; i>=0; i--){
  //   result += str[i]
  // }

  // str.map((eachStr)=>{
  //   return eachStr
  // })
  // console.log(str)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
