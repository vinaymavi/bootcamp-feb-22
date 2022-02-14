var name = "Global name"

function parent(){
  var name = "Parent name"

  if(true){
    console.log(ifName);
    let ifName = 'I am inside if';
    console.log("#############")
    console.log(name);
    console.log(ifName);
  }

  console.log("$$$$$$$$$$$$$$$")
  console.log(name);
  // console.log(ifName);
}



parent();

console.log("*****************")
console.log(name);
console.log(ifName);