# NSS WYSIWYG Exercise

### Project Description 
This assignment ...

#### WYSIWYG Screen 
<!-- ![WYSIWYG Screen Grab](https:xxx.png) -->


### Project Specs
#### `html` structure and definitions
1. Created an array of objects, `famePeople`, that represent famous people
2. Created a text input in the DOM
3. Beneath that, created a container, block element in your DOM, id=`peopleContainer`
4. Created a DOM element for each of the objects inside the container; 
styling for `person` elements is discretionary

#### `css` stylings
5. Even numbered element: have a light yellow background
6. Odd numbered element: have a light blue background

#### functionality implemented in `javascript` 
7. Each element's DOM structure should be as shown below. 
- When one of the `person` elements is clicked: 
* a red dotted border appears around it, and if some other element has the dotted border, it reverts back to solid
* the textbox input area immediately gains focus so that user can start typing

10. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
11. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

######
Sample `HTML`
```
<person>
  <header>Name and title go here</header>
  <section>Bio and image go here</section>
  <footer>Lifespan info goes here</footer>
</person>
```

######
Object Structure
```
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg"
  lifespan: {
    birth: 1747,
    death: 1797
  }
}
```

######
Helpful Tip
```
var counter = 0;
var outputEl = document.getElementById("outputEl");
for (; counter < 5; counter++) {
  // Give each person element a unique identifier
  outputEl.innerHTML += `<div class="person__container" id="person--${counter}"></div>`;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
  });
});
```

### Technologies Used
- html
- css
- javascript


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone 
cd wysiwyg
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

