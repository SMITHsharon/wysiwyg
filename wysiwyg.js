var onEnterKey = document.getElementById("enterKey");

// 1. Create an array of objects that represents famous people (see structure below).
// var famePeople = {
//   title: "Samurai",
//   name: "Tomoe Gozen",
//   bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
//   image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
//   lifespan: {
//     birth: 1747,
//     death: 1797
//   }
// }



//******************************************************
// <Enter> key event handler
// 11. When you press the enter/return key when typing in the input field, 
// then the content of the input field should immediately be blank.
//******************************************************
onEnterKey.addEventListener("keyup", function(e) {
	e.which = e.which || e.keyCode;
	if (e.which === 13) {
     	onEnterKey.value = "";
     } else {
     return false;
     }
});



//******************************************************
// Click Events
//******************************************************
// 8. When you click on one of the person elements, 
// a dotted border should appear around it.
// 9. When you click on one of the person elements, 
// the text input should immediately gain focus so that you can start typing.




// 10. When there is a highlighted person element, and you begin typing in the input box, 
// the person's biography should be immediately bound to what you are typing, letter by letter.










