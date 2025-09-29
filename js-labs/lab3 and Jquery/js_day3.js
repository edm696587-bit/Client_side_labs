// ---
// BOM (Browser Object Model)

// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.

function closeWindow() {
  newwin.close();
}

var newwin;

function nwindow() {
  newwin = window.open(
    "https://www.facebook.com/index.php/",
    "",
    "width=500, height=500"
  );

  setTimeout(closeWindow, 3000);
}
// nwindow()

// 2. Display the browser's user agent string in an alert.

// alert(navigator.userAgent);

// 3. Use `navigator` to detect if the browser is online or offline and log the result.
console.log(navigator.onLine);
// 4. Write code to reload the current page after 5 seconds.
function interv() {
  intervalId = setInterval(function () {
    location.reload();
  }, 5000);
  function stopCongratulating() {
    clearInterval(intervalId);
  }
}
// interv()

// 5. Get the current page URL, protocol, and hostname using `location` and log them.
console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);

// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).
history.back();
history.forward();

// 7. Show the screen width and height in a div -change the div content- on the page.
my_div = document.childNodes[1].childNodes[2].childNodes[3];
function change_info() {
  my_div.textContent = `width = ${window.innerWidth}, height = ${window.innerHeight}`;
}
// ==> change_info()

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.
var hyber_l = document.childNodes[1].childNodes[2].childNodes[5];
function chang_a() {
  hyber_l.textContent = "Changed Content";
}
var timeoutId = setTimeout(chang_a, 2000);

function cancelChange() {
  clearTimeout(timeoutId);
}

// 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.

function timer() {
  intervall = setInterval(function () {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.title = timeString; 
  }, 1000);
}

function stopTimer() {
  clearInterval(intervall);
}

// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").

function continue_() {
  if (confirm("Do you want to continue?")) {
    console.log("user said yes");
  } else {
    console.log("user said no");
  }
}
// == >continue_() 

// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.
function selectUl() {
  console.log(document.childNodes[1].childNodes[2].childNodes[19]);
  console.log(document.children);
}

// 12. Write a function that logs the tag names of all direct child elements of `<body>`.
function body_tags() {
  var b_tages = document.body.children;
  for (var i = 0; i < b_tages.length; i++) {
    console.log(b_tages[i].tagName);
  }
}

// 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).
function just_elements(parent) {
  var child = parent.childNodes;

  for (var i = 0; i < child.length; i++) {

    if (child[i].nodeType === 1) {

      console.log(child[i].tagName);
    }
  }
}

// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.
console.log(document.childNodes[1].childNodes[2].childNodes[19].firstChild) 
console.log(document.childNodes[1].childNodes[2].childNodes[19].firstElementChild)
// firstChild get is the first child including the text "consider spaces as elements" 
// firstChild get is the first child execlude the text  

// 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.
console.log(document.childNodes[1].childNodes[2].childNodes[19].children)

// 17. Write a function that logs all sibling elements of a given element (excluding itself).

function siplings (element) {
  var parent = element.parentNode;
var children = parent.children

while (children){
    if(children != element)
}
}
siplings()
// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.
function traverse() {
  var ul =
    document.childNodes[1].childNodes[2].childNodes[19]

  var node = ul.firstChild;
    while (node) {
        console.log(node);        
        node = node.nextSibling;
      }

  var element_ = ul.firstElementChild;
  while (element_) {
    console.log("Element:", element_.tagName, ":", element_.textContent.trim());
    element_ = element_.nextElementSibling;
  }
}

// 19. Count how many element children a given node has (not using `children.length`).
function countchildren(element) {
  var count = 0;
  var child = element.firstChild;

  while (child) {
    if (child.nodeType === 1) {
      count++;
    }
    child = child.nextSibling;
  }

  return count;
}
// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.
function form_in() {
        
        var form_i = document.childNodes[1].childNodes[2].childNodes[16]

 for (var i = 0; i < form_i.elements.length; i++) {
    var input = form_i.elements[i];
    console.log(input.name, ":", input.value);
  }
}

 

// 21. Access all forms in the document using `document.forms` and log their names.
function get() {
  var forms = document.childNodes[1].childNodes[2].childNodes[16];

  for (var i = 0; i < forms.length; i++) {
    console.log(forms[i].name);
  }
}
// 22. Access all images in the document using `document.images` and log their `src` attributes.
function images() {
  var imgs = document.document.childNodes[1].childNodes[2].childNodes[21];

 for (var img of imgs) {
        console.log(img.src);
      }
    }
// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.

      function disable() {
        
        var form = document.childNodes[1].childNodes[2].childNodes[16];

        
        for (var el of form.elements) {
          el.disabled = true;  
        }
      }

