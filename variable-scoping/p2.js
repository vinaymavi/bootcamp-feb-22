var name = "Global name"

function parent(){
  var name = "Parent name"

  if(false){
    var ifName = 'I am inside if';
    console.log("#############")
    console.log(name);
    console.log(ifName);
  }

  console.log("$$$$$$$$$$$$$$$")
  console.log(name);
  console.log(ifName);
}

console.log("*****************")
console.log(name);

parent();

console.log(ifName);