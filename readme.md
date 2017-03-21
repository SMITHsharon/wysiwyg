# NSS WYSIWYG Exercise

### Project Description 
This assignment ...

#### WYSIWYG Initial State Screen 
<!-- ![WYSIWYG Initial State Screen Grab](https:xxx.png) -->

#### WYSIWYG Selected Element Screen :: POTUS
<!-- ![WYSIWYG Selected Element Screen Grab](https:xxx.png) -->


### Project Specs
#### `html` structure and definitions
1. Created an array of objects, `famePeople`, that represents famous people
2. Created a text input in the DOM
3. Beneath that, created a container (block element) in the DOM, id=`peopleContainer`
4. Created a DOM element for each of the objects inside the container, class=`eachPerson`; 
styling for `eachPerson` elements is discretionary

#### `css` stylings
5. Even numbered elements: have a light yellow background
6. Odd numbered elements: have a light blue background

#### functionality implemented in `javascript` 
7. When an `eachPerson` element is clicked:
- a red dotted border displays around it, and if some other element has the dotted border, it reverts back to solid
- the textbox input area immediately gains focus so the user can start typing

8. Additionally, when an `eachPerson` element is selected, that person's biography displays in the textbox input area. The selected Person's biography displayed on their *card* is immediately bound to what the user types in the textbos input area, character by character.
11. When the user presses the `Enter/Return` key when typing in the input field, the content of the input field displays the placeholder, *Biography Goes Here...*


######
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
- javascript


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/wysiwyg.git
cd wysiwyg
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)

