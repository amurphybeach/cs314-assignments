/* August Murphy-Beach */ 


document.getElementById("buttonOne").addEventListener("click", function() {
  document.getElementById("one").scrollIntoView();
});
document.getElementById("buttonTwo").addEventListener("click", function() {
  document.getElementById("two").scrollIntoView();
});
document.getElementById("buttonThree").addEventListener("click", function() {
  document.getElementById("three").scrollIntoView();
});
document.getElementById("buttonFour").addEventListener("click", function() {
  document.getElementById("four").scrollIntoView();
});
document.getElementById("buttonFive").addEventListener("click", function() {
  document.getElementById("five").scrollIntoView();
});

document.getElementById("blueButton").addEventListener("click", function(){
  document.getElementById("one").style.backgroundColor = "blue";
});
document.getElementById("greenButton").addEventListener("click", function(){
  document.getElementById("one").style.backgroundColor = "green";
});

let sectionTwo = document.getElementById("two");
let sectionTwoButton = document.getElementById("pinkButton");
sectionTwoButton.addEventListener("click", function(){
  if (sectionTwoButton.innerHTML === "Click for pink!") {
    sectionTwo.style.backgroundColor = "pink";
    sectionTwoButton.innerHTML = "Click for orange!";
  }
  else {
    sectionTwo.style.backgroundColor = "orange";
    sectionTwoButton.innerHTML = "Click for pink!";
  }
});

let threeList = document.getElementById("threeList");
let inputText = document.getElementById("inputText");
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(){
  let userInput = document.getElementById("inputText").value;
  var newListItem = document.createElement('li');
  newListItem.appendChild(document.createTextNode(userInput));
  threeList.appendChild(newListItem);
});

let fourList = document.getElementById("fourList");
let fourListContent = fourList.getElementsByTagName("li");
for (var n=0; n<fourListContent.length; n++) {
  let liItem = fourListContent[n]
  liItem.addEventListener('click', function() {
    fourList.removeChild(liItem);
  });
}

let fiveList = document.getElementById("fiveList");
let fiveListContent = fiveList.getElementsByTagName("li");
for (var n=0; n<fiveListContent.length; n++) {
  let liItem = fiveListContent[n]
  liItem.addEventListener('click', function() {
    for (var n=0; n<fiveListContent.length; n++) {
      fiveListContent[n].style.backgroundColor = "transparent";
    }
    liItem.style.backgroundColor = "purple";
  });
}