menuListArray = ["Pizza brasileira",
"Pizza de pepperoni",
"Pizza de comida de pet",
"Pizza de chocolate",
"mini Pizza",
"Pizza japonesa"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata
}

function addTop(){
var item=document.getElementById(addItem).value;
menuListArray.push(item);
addItem();
}