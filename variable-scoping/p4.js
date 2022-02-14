var name = "Global name"

function parent(){
  var name = "Parent name"

  if(true){
    const ifName = 'I am inside if';
    console.log("#############")
    console.log(name);
    ifName = 'I am inside if updated';
    console.log(ifName);
  }

  console.log("$$$$$$$$$$$$$$$")
  console.log(name);
}



parent();

console.log("*****************")
console.log(name);