# NSS WYSIWYG Exercise

### Project Description 

Five famous people, [Barack Obama, Daenerys Targaryen, Meryl Streep, Kate McKinnon, Bernie Sanders], are hard-coded into an Object Array along with required attributes: `title`, `name`, `bio`, `lifespan`, as well as an image to be displayed. The contents of the array are written dynamically to the DOM. If a viewer/user clicks on the *card* for one of these Famous People, the card border displays in `dotted red`, and the user can directly edit the Person's biography. 

#### WYSIWYG Initial State Screen 
![WYSIWYG Initial State Screen](https://raw.githubusercontent.com/SMITHsharon/wysiwyg/screens/screens/WYSIWYG%20Initial%20State%20Screen%20Grab.png)

#### WYSIWYG Selected Element Screen :: POTUS
![WYSIWYG Selected Element Screen](https://raw.githubusercontent.com/SMITHsharon/wysiwyg/screens/screens/WYSIWYG%20Selected%20Element%20Screen%20Grab.png)


### Project Specs
#### `html` structure and definitions
1. Creates an array of objects, `famePeople`, that represents famous people
2. Creates a text input in the DOM
3. Beneath that, creates a container (block element) in the DOM, id=`peopleContainer`
4. Creates a DOM element for each of the objects inside the container, class=`eachPerson`; 
styling for `eachPerson` elements is discretionary

#### `css` stylings
5. Even-numbered elements: have a light yellow background
6. Odd-numbered elements: have a light blue background

#### functionality implemented in `JavaScript` 
7. When an `eachPerson` element is clicked:
- a red-dotted border displays around it, and if some other element has the dotted border, it reverts back to solid
- the textbox input area immediately gains focus so the user can start typing
8. Additionally, when an `eachPerson` element is selected, that person's biography displays in the textbox input area. The selected Person's biography displayed on their *card* is immediately bound to what the user types in the textbox input area, character by character.
9. When the user presses the `Enter/Return` key when typing in the input field, the content of the input field displays the placeholder, *Biography Goes Here...*


####
Object Structure
```
{
  title: "Mother of Dragons",
  name: "Daenerys Targaryen",
  bio: "Introduced in 1996's A Game of Thrones, Daenerys (along with her older brother, Viserys) is one of the last confirmed members of House Targaryen who ...",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnqwh0LAZhFN5U1bbhI7TDNugs-ZIIoUfBXOohphk7B2m3HWD"
  lifespan: {
    birth: "284 AC",
    death: "present"
  }
}
```

### Technologies Used
- html
- css
- JavaScript


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/wysiwyg.git
cd wysiwyg
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

