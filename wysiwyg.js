var onEnterKey = document.getElementById("enterKey");
// var thisPerson = document.getElementById("eachPerson");
var everyone = document.getElementById("peopleContainer");

// 1. Create an array of objects that represents famous people (see structure below).
var famePeople = [
{
  title: "44th POTUS",
  name: "Barack Obama",
  bio: "Served two terms as 44th POTUS, from 2009 to 2017. He is the first African American to have served as president, as well as the first born outside the contiguous United States. He previously served in the U.S. Senate representing Illinois from 2005 to 2008, and in the Illinois State Senate from 1997 to 2004.",
  image: "https://en.wikipedia.org/wiki/Barack_Obama",
  lifespan: {
    birth: 1961,
    death: "present"
  }
}, 
{
  title: "The Unburnt, Queen of the Andals, the Rhoynar and the First Men (Claiment), Queen of Meereen, Khaleesi of the Great Grass Sea, Breaker of Chains, Mother of Dragons",
  name: "Daenerys Targaryen",
  bio: "Introduced in 1996's A Game of Thrones, Daenerys (along with her older brother, Viserys) is one of the last confirmed members of House Targaryen who, until fifteen years before the events of the first novel, ruled on the Iron Throne for nearly three hundred years. She becomes the heir of the Targaryen dynasty after her brother's death and plans to reclaim the Iron Throne herself, seeing it as her birthright.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnqwh0LAZhFN5U1bbhI7TDNugs-ZIIoUfBXOohphk7B2m3HWD",
  lifespan: {
    birth: 284 AC,
    death: "present"
  }
},
{
  title: "So-Called Actress",
  name: "Meryl Streep",
  bio: "Cited in the media as the 'best actress of her generation',– a designation to which both she AND dTRUMP object – Streep is particularly known for her versatility in her roles, transformation into the characters she plays, and her accent adaptation.",
  image: "https://en.wikipedia.org/wiki/File:Meryl_Streep_-_Berlin_Berlinale_66_(24609057279)_(cropped_2).jpg",
  lifespan: {
    birth: 1949,
    death: "present"
  }
}, 
{
  title: "SNL For The Win",
  name: "Kate McKinnon",
  bio: "An American comedian and actress, McKinnon is best known for her sketch comedy work, character work, and celebrity impressions. She is a cast member on Saturday Night Live and The Big Gay Sketch Show.",
  image: "https://s-media-cache-ak0.pinimg.com/originals/94/89/86/948986532cb57dd74ff1293f8b8b677c.jpg",
  lifespan: {
    birth: 1984,
    death: "present"
  }
}, 

{
  title: "The Man Who Should Be President",
  name: "Bernie Sanders",
  bio: "hSanders is the longest serving independent in U.S. congressional history. Since his election to the House of Representatives in 1991, he has caucused with the Democratic Party, which has entitled him to congressional committee assignments and at times given Democrats a majority. Sanders's campaign against Hillary Clinton for the party's 2016 U.S. presidential nomination raised more money in small, individual contributions than any other in American history, and helped him rise to international recognition.",
  image: "http://www.zerohedge.com/sites/default/files/images/user5/imageroot/sanders%20teaser%202.jpg",
  lifespan: {
    birth: 1941,
    death: "present"
  }
}, 
];


function writeToDOM () {
	console.log("famePeople :: ", famePeople);
	console.log("everyone :: ", everyone);
	everyone.innerHTML += writeSolitary();

}

function writeSolitary () {
	console.log("thisPerson :: ", thisPerson);
	thisPerson.innerHTML = "writing this person";
	
	return thisPerson;
}
writeToDOM();

//******************************************************
// <Enter> key event handler
// 11. When you press the enter/return key when typing in the input field, 
// then the content of the input field should immediately be blank.
//******************************************************
onEnterKey.addEventListener("keyup", function(e) {
	e.which = e.which || e.keyCode;
console.log("Enter Key event handler firing");
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










