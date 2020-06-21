/** Document Object Model 
 * Link: https://www.codecademy.com/learn/paths/web-development/tracks/build-interactive-websites/modules/web-dev-interactive-websites/cheatsheet
 * 
 * The DOM is a logical tree-like Model
 * that organizes a web page’s HTML Document 
 * as an Object.
 * 
 * The DOM is a language-agnostic structure implemented by browsers to allow for web scripting languages,
 * like JavaScript, to access, modify, and update the structure of an HTML web page in an organized way.
*/

document.body                               // The document keyword grants access to the root of the DOM 
.querySelector()                            // SELECT a specific element with CSS selectors
.getElementById()                           // ACCESS an element directly by its ID
.innerHTML = 'The cat loves the dog.'       // MODIFY an element by changing its contents or style
.style.backgroundColor = 'blue'
.createElement()                            // create, append, and remove elements
.appendChild()
.removeChild()
.onclick                                    // ADD interactivity/functinality to a DOM element on click event

/**
 * The DOM as a Tree Structure
 * 
 * In the DOM tree, the top-most node is called the root node, and it represents the HTML document.
 * The descendants of the root node are the HTML tags in the document, starting with the <html> tag 
 * followed by the <head> and <body> tags and so on.
 */

 /**
  * Nodes and Elements in the DOM
  * 
  * a node is the equivalent of each family member in a family tree.
  * A node is an intersecting point in a tree that also contains data.
  */

  /**
   * Attributes of Element Node
   * 
   * Much like an element in an HTML page, the DOM allows us to access a node’s attributes,
   * such as its class, id, and inline style.
   */

   /**
    * The document keyword
    * 
    * - The document keyword grants access to the root of the DOM in JavaScript
    * - List of all document proparties : https://developer.mozilla.org/en-US/docs/Web/API/Document
    */

    /**
     * Tweak an Element
     * 
     * The ability to modify the contents of the element as well as its attributes and properties— 
     * that can range from modifying the text inside a p element to assigning a new background color to a div.
     * 
     * - You can access and set the contents of an element with the .innerHTML property.
     * - The .innerHTML property can also add any valid HTML, including properly formatted elements.
     *  The following example assigns an h2 element as a child inside the <body> element:
     */
    document.body.innerHTML = '<h2>This is a heading</h2>'; 
    document.body.innerHTML = 'The cat loves the dog.';

    /**
     * Select and Modify Elements
     * 
     * What if we wanted to select a specific element?
     * - The DOM interface allows us to access a specific element with CSS selectors. 
     * - CSS selectors define the elements to which a set of CSS rules apply,
     * but we can also use these same selectors to access DOM elements with our script!
     * Selectors can include the name of the tag, a class, or an ID.
     * - The .querySelector() method allows us to specify a CSS selector and then returns the first element
     * that matches that selector. The following code would return the first paragraph in the document.
     * 
     * - You can also use other CSS selectors such as an element’s . class or its # ID.
     * - Another option, if you want to access elements directly by their id,
     * you can use the aptly named .getElementByID() function:
     */
    document.querySelector('p');
    document.getElementById().innerHTML = '<h1>The description</h1>';

    /**
     * Style an element
     * 
     * - Another way to modify an element is by changing its CSS style. 
     * - The syntax follows an element.style.property format, with the property representing a CSS property.
     * 
     * - For example, the following code selects the first element with a class of blue and 
     * assigns blue as the background-color:
     */
    let blueElement = document.querySelector('.blue');
    blueElement.style.backgroundColor = 'blue';

    //Style the background-color of the body by using the .style proparty
    document.body.style.backgroundColor = 'red';

    /**
     * Create and Insert Elements
     * 
     * - The .innerHTML and .style properties allow you to modify an element by changing its contents or style respectively
     * - The .createElement(tagName) method creates a new element based on the specified tag name
     * passed into it as an argument. It creates an empty element with no inner HTML.
     * 
     * - In order to create an element and add it to the web page, you must assign it to be the child of an element
     * that already exists on the DOM.  We call this process appending. 
     * 
     * - The .appendChild() method will add a child element as the last child node.
     */

    let paragraph = document.createElement('p');            // creates a new paragraph element

    paragraph.id = 'info';                                  // give it an id
    
    paragraph.innerHTML = 'The text inside the paragraph';  // add text to the new element's  .innerHTML
    
    document.body.appendChild(paragraph);                   // appends it to the body of the documents


    /**
     * Remove an Element
     * 
     * - The .removeChild() method removes a specified child from a parent.
     * - the .querySelector() method returns the first paragraph,
     * - It’s possible to also specify a different parent with the .querySelector() method,
     * as long as you remove an element nested within that parent element.
     * - If you want to hide an element because it does not need to be loaded initially,
     * the .hidden property allows you to hide it by assigning it as true or false:
     */
    let paragraph = document.querySelector('p');
    document.body.removeChild(paragraph);               // remove the first paragraph in th edocuments

    document.getElementById('sign').hidden = true;      // did not remove the element from DOM, rather hid it.

    /**
     * Interactivity with onclick
     * 
     * - You can add interactivity to DOM elements by assigning a function to run based on an event.
     * - The .onclick property allows you to assign a function to run on a click event on an element:
     */
    let element = 
    document.getElementById('interact');
    element.onclick = function() { element.style.backgroundColor = 'blue' };

    /**
     * Traversing the DOM
     * 
     * - Each DOM element node has a .parentNode and .children property.
     *  The property will return a list of the element’s children and return null if the element has no children.
     * - The .firstChild property will grant access to the first child of that parent element. 
     */
    let first = document.body.firstChild;

    first.innerHTML = 'I am the child!';

    first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!';