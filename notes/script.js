/**Web programmers use JavaScript to make web pages dynamic and interactive. 
 * This powerful scripting language is encapsulated in its own HTML element: the <script> element. 
 * You can think of this <script> element as the door to JavaScript for HTML.  */
<script src="./main.js"></script>

//      ## DEFER attribute
/** The defer attribute ensures that the entire HTML file has been parsed before the script is executed.

 When is defer useful?
 When a script contains functionality that requires interaction with the DOM,
 the defer attribute is the way to go. This way, it ensures that the entire HTML file has been parsed before 
 the script is executed.*/
 <script src="example.js" defer></script> 

 
 //     ## ASYNC attribute
/** The async attribute will allow the HTML parser to continue parsing as the script is being downloaded,
 but will execute immediately after it has been downloaded.
 * 
 When is it useful?
 async is useful for scripts that are independent of other scripts in order to function accordingly.
 Thus, if it does not matter exactly at which point the script file is executed, asynchronous loading is 
 the most suitable option as it optimizes web page load time. */
 <script src="example.js" async></script>

