var name = "Global name"

function parent(){
  var name = "Parent name"

  if(true){
    const ifName = {
      ifName:"I am if"
    };
    console.log("#############")
    console.log(name);
    ifName.ifName = "I am updated if";
    console.log(ifName.ifName);
  }

  console.log("$$$$$$$$$$$$$$$")
  console.log(name);
}



parent();

console.log("*****************")
console.log(name);