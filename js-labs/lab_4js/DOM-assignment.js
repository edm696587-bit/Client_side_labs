// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
console.log(document.getElementsByTagName("div")[0].innerHTML);
// 2. Using getElementById change the text of #my-p to "Hello DOM".
document.getElementById("my-p").innerText = "Hello Dom";

// 3. Use querySelector to select the element with class "target-div" and log its nodeName.
console.log(document.querySelector(".target-div").nodeName);

// 4. Use querySelectorAll to count how many <div> elements exist; log the count.
console.log(document.querySelectorAll("div").length);
// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".
Element = document.getElementsByName("user-email")[0].value = "user@test.com";
// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
textInput = document.getElementById('my-input');
if (!textInput.hasAttribute("name")) {
  textInput.setAttribute("name", "user-name");
}
// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).
document.getElementById("my-p").innerText += " - UPDATED";
// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.
var array = ["assets/1.png", "assets/2.jfif", "assets/3.webp", "assets/4.webp"];
var index = 0;
var get_image = document.querySelector(".image_loop .card img");
var get_button = document.querySelector(".image_loop .buttonn").children;

function show() {
  get_image.src = array[index];
}

function next() {
  index += 1;
  if (index >= array.length) {
    index = 0;
  }
  show();
}

function prev() {
  index -= 1;
  if (index < 0) {
    index = array.length - 1;
  }
  show();
}

function start() {
  interval = setInterval(next, 1000);
}

function stop() {
  clearInterval(interval);
}
get_button[0].onclick = start;
get_button[1].onclick = stop;
get_button[2].onclick = next;
get_button[3].onclick = prev;


// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.
document.getElementsByName("user-name")[0].placeholder = "Type your full name";

// 10. Log whether the email input has attribute "required"; if missing add it.
var emailInput = document.getElementsByName("user-email")[0];

if (!emailInput.hasAttribute("required")) { 
  emailInput.setAttribute("required", "");
  console.log("email attribute hasn't required ");
}

// 11. Write function getSelectedValue(selectId) returning the current selected option value.
function getSelectedValue(selectId) {
  return document.getElementById (selectId).value;
}
console.log(getSelectedValue("my-select"));
// 12. Loop through all options of the select and log each option's text and value.
var options = document.getElementById("my-select").options;
for (var i = 0; i < options.length; i++) {
console.log(options[i].text + " ==> " + options[i].value);
}
// 13. Programmatically select the option with value "EG".

var select = document.getElementById("my-select");
select.value = "EG";  


// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
function selectByText(selectId, text) {
  var select = document.getElementById(selectId);
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].text === text) {
      return select.options[i]; 
      break;
      
    }
  }
}
console.log(selectByText("my-select", "Egypt").value) ;


// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
document.getElementById("div-2").innerHTML = "<p><b>Bold Text</b></p>";



// 16. Add classes class-a a  nd class-b to #div-2 then remove class-b (using classList).
document.getElementById("div-2").classList += " class-a  class_b"
console.log(document.getElementById("div-2").classList)
document.getElementById("div-2").classList.remove("class_b")
console.log(document.getElementById("div-2").classList)


// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.
var div2 = document.getElementById("div-2")
div2.classList.toggle("hidden")
console.log(div2.classList)
div2.classList.toggle("hidden")
console.log(div2.classList)
// the final visibility that it's not visable....  <== 

// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.



// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
var neww = document.createElement("div")
neww.innerText = "Dynamic Box"
neww.style.backgroundColor = "yellow";
document.getElementById("div-2").appendChild(neww)

// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
var para = document.createElement("p")
para.textContent  = "paregraph"
para.style.backgroundColor = "green";
document.getElementById("div-2").insertBefore(para , document.getElementById("div-2").firstChild)



// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
// sp = document.createElement("span")
// sp.textContent = "AFTER END"
// sp.style.backgroundColor = "blue"
// document.getElementById("div-2").insertAdjacentElement("afterend", sp);
sp = `<span style="background-color:blue;">AFTER END</span>`
document.getElementById("div-2").insertAdjacentHTML("afterend", sp)


// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
document.forms[0].onsubmit = function(event) {
  event.preventDefault();

  var textValue = document.getElementsByName("user-name")[0].value
  var emailValue = document.getElementsByName("user-email")[0].value;
  var selectValue = document.getElementById("my-select").value
  console.log("Text ==> " + textValue)
  console.log("Email ==> " + emailValue);
  console.log("Select ==> " + selectValue);
}

// 23. Add input event on the text input that logs its length whenever it changes.
document.getElementsByName("user-name")[0].addEventListener("input", function() {
  console.log(this.value.length);
});

// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
function validateEmailSimple(value) {
for (var i = 0; i < value.length; i++) {
  if (value.includes("@") && value.includes(".")) {
    return true;
  } else {
    return false;         

}
}
}
console.log(validateEmailSimple("askjfb@.com")) 
console.log(validateEmailSimple("mohamed@yahoo.com")) 
console.log(validateEmailSimple("askjfb.com")) 
console.log(validateEmailSimple("askjfb@gmailcom")) 


// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).
var ch_div = document.createElement("div")
ch_div.innerText = "Child Div"
document.getElementById("div-2").appendChild(ch_div)
document.getElementById("div-2").removeChild(ch_div)

// 25. Create an element, append it to <div id="wrapper">
//   <p id="first">First</p>
//   <p id="second">Second</p>
// </div>
new_p = document.createElement("p")
new_p.innerText = "Third"
document.getElementById("wrapper").appendChild(new_p)

// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.

var fake_div2 = document.getElementById("div-2").cloneNode(true);
fake_div2.id = "div-2-clone";
document.getElementById("div-2").insertAdjacentElement("afterend", fake_div2);
new_pp = document.createElement("p")
new_pp.innerText = "trying to learn more"
document.getElementById("div-2-clone").appendChild(new_pp)


// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.
function highlightInputs(form) {
  var inputs = form.querySelectorAll('input[type="text"], input[type="email"]');
  inputs.forEach(function(input) {
    input.style.border = "3px solid green";
  });
}
document.addEventListener("DOMContentLoaded", function() {
  var form = document.forms[0]
  highlightInputs(form)
});

// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body..
function buildCard(title, content){
var Card = document.createElement("div")
Card.className = "Card";  

Card.style.border = "1px solid black";
Card.style.padding = "10px"
Card.style.margin = "10px"

var h3 = document.createElement("h3");
h3.innerText = content;
var p = document.createElement("p")  
p.innerText = content;
Card.appendChild(h3);
Card.appendChild(p);
return Card;
}

document.body.appendChild(buildCard("Card 1", "content of card 1 for p and h3"))

document.body.appendChild(buildCard("Card 2", "content of card 2 for p and h3"))

// 29. Add delegated click listener on body logging when a .card is clicked Card 'C'==> capitalize .
document.body.addEventListener("click", function(event) {
  if (event.target.classList.contains("Card")) {
    console.log("Card clicked:", event.target);
  }
});

// 30. Reflection (comment): Which two tasks were most challenging and why?
// ==>nothing was extremly challenging
// ==> but i think i need a time to study well trying to save as most i can of the lots of js's keywords and methods 
//==> but image slider was easy but took a while and may be other 2 tasks 


// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-
  var ul = document.createElement("ul");
  ul.classList = "ul_31"


    for (var i = 1; i <= 10; i++) {
      var li = document.createElement("li")
      

      if (i % 2 === 0) {
        li.classList.add("even")
        li.textContent =  i+ "'th even item";
      } else {
        li.classList.add("odd")
        li.textContent =  i+ "'th odd item";
      }

      ul.appendChild(li)
    }

   
    document.body.appendChild(ul);

//32. create a form with 3 inputs (name , password , last-name) and makea submit button and on click event the valuse of the inputs should appeares in 3 divs which there id (1==>name,2==>lastname,3==>password)
// i have the form in the html file
document.getElementById("myForm").onsubmit = function(event) {
  event.preventDefault();

  var nameValue = document.getElementById("name").value
  var lastNameValue = document.getElementById("lastName").value;
  var passwordValue = document.getElementById("password").value
  document.getElementById("1").innerText = nameValue;
  document.getElementById("2").innerText = lastNameValue;
  document.getElementById("3").innerText = passwordValue;
}
