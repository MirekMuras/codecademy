/* FLEX proparty element  will remain block level — no other elements will appear
  on the same line as it. However, it will change the behavior of its child elements.

  Child elements will not begin on new lines.

- flexbox or Flexible Box Layout simplifies how to position element
 individualy or in groups

- default behaviour of flex container move element toward the upper left corner of the perant container

- There are two important components to a flexbox layout: 

- flex containers : flex containers have two axes: a major axis and a cross axis.
     By default, the major axis is horizontal and the cross axis is vertical which are interchangeable.
     We can SWITCH them using the felx-direction property.
     If we add the 'flex-direction' property and give it a value of column, the flex items will be ordered vertically,
     not horizontally.
     
     an element on a page that contains flex items such as :

    - display => a block level element 
    - justify-content => we can specify how element spread out from left to the right,along the main axis*/
        
    .container {
        display: flex;                        // flex value
        
        /** ### The Major Axis proparties */
        justify-content: flex-end;
        

        flex-grow: 1;
        flex-shrink: 2;
        flex-basis: 100px;

        flex: 1 2 150px;                      // flex praporty => ( grow shrink basis)

        flex-wrap: wrap;

        /** ### The Cross Axis properties */

        align-items: baseline;
        align-content: space-around;

        /** ## Switch direction property */
        flex-direction: column;               // the flex items will be ordered V not H
        
        /** ## Declare both the flex-wrap & flex-direction */
        flex-flow: column wrap;

      }

/* - Flex containers are helpful tools for creating websites that respond to changes
 in screen sizes. Child elements of flex containers will change size and location in 
 response to the size and position of their parent container.
      

flex items :    All direct child elements of a flex container are flex items that stretch and shrink horizontally
                and wrap vertically.
        
        
        flex-grow           // The Flex items  shrink proportionally when the flex container is too small. 
                              However, if the parent container is larger than necessary then the flex items 
                              will not stretch by default.property allows us to specify if items should grow
                              to fill a container and also which items should grow proportionally more or less
                               than others.*/

                               // HTML
                               <div class="container">
                                  
                                  <div class="side">
                                    <h1>I’m on the side of the flex container!</h1>
                                  </div>

                                  <div class="center">
                                    <h1>I'm in the center of the flex container!</h1>
                                  </div>

                                  <div class=”side”>
                                    <h1>I'm on the other side of the flex container!</h1>
                                  </div>

                                </div>

                                //CSS
                                .container {
                                  display: flex;
                                }
                                
                                .side {
                                  width: 100px;
                                  flex-grow: 1;
                                }
                                
                                .center {
                                  width: 100px;
                                  flex-grow: 2;
                                }





/*      flex-shrink         // to specify which elements will shrink and in what proportions.

        flex-basis          // Grow & Shring were determined by heights and widths set. The flex-basis allows 
                               us to specify the width of an item before it stretches or shrinks.

        flex                // The flex property allows you to declare flex-grow, flex-shrink, and flex-basis all in one line.
                              The flex property is different from the flex value used for the display property.

        flex-wrap           // Sometimes, we don’t want our content to shrink to fit its container.
                             Instead, we might want flex items to move to the next line when necessary.
                             This can be declared with the flex-wrap property.

                              The flex-wrap property can accept three values:
                        1) wrap — child elements of a flex container that don’t fit into a row will move down to the next line
                        2) wrap-reverse — the same functionality as wrap, but the order of rows within a flex container
                        is reversed (for example, in a 2-row flexbox, the first row from a wrap container will become 
                        the second in wrap-reverse and the second row from the wrap container will become
                        the first in wrap-reverse)
                        3) nowrap — prevents items from wrapping; this is the default value and is only necessary to override a wrap value set by a different CSS rule.
        
        align-items         // to space flex item vertically. we used the align-items property to space flex items
                           from the top to the bottom of a flex container.
                           Align-items is for aligning elements within a single row.
                           If a flex container has multiple rows of content, we can use align-content 
        
        align-content       // to space the rows from top to bottom.
                            
                            align-content accepts six values:

                        1) flex-start — all rows of elements will be positioned at the top of the parent container
                         with no extra space between.
                        2) flex-end — all rows of elements will be positioned at the bottom of the parent container 
                        with no extra space between.
                        3) center — all rows of elements will be positioned at the center of the parent element 
                        with no extra space between.
                        4) space-between — all rows of elements will be spaced evenly from the top to
                         the bottom of the container with no space above the first or below the last.
                        5) space-around — all rows of elements will be spaced evenly from the top to 
                        the bottom of the container with the same amount of space at the top and bottom
                         and between each element.
                        6) stretch — if a minimum height or no height is specified, the rows of elements
                         will stretch to fill the parent container from top to bottom (default value).

        flex-direction      // Switch Flex direction 
                        1) row — elements will be positioned from left to right across the parent element starting from the top left corner (default).
                        2) row-reverse — elements will be positioned from right to left across the parent element
                         starting from the top right corner.
                        3) column — elements will be positioned from top to bottom of the parent element starting 
                        from the top left corner.
                        4) column-reverse — elements will be positioned from the bottom to the top of the parent
                         element starting from the bottom left corner.

        flex-flow           // declare both the flex-wrap and flex-direction properties in one line.

        inline-flex         // allows to create flex container that are inline element with each other 

        justify-content: 
                        1) flex-start - all items will be positioned in order starting, from the left of the parent container,
                                            with no extra space between or before them.
                        2) flex-end - all items will be positioned in order, with the last item starting on the right side
                                            of the parent container, with no extra space between or after them.
                        3) center - all items will be positioned in order, in the center of the parent container with
                                            no extra space before, between, or after them.
                        4) space-around - items will be positioned with equal space before and after each item,
                                            resulting in double the space between elements.
                        5) space-between - items will be positioned with equal space between them, but no extra space before 
                                            the first or after the last elements.

        

        flex-start — all elements will be positioned at the top of the parent container.

        flex-end — all elements will be positioned at the bottom of the parent container.

        center — the center of all elements will be positioned halfway between the top and 
                  bottom of the parent container.

        baseline — the bottom of the content of all items will be aligned with each other.

        stretch — if possible, the items will stretch from top to bottom of the container 
                (this is the default value; elements with a specified height will not stretch; 
                  elements with a minimum height or no height specified will stretch).


        Nested Flexboxes - 

 Link : https://www.codecademy.com/learn/paths/web-development/tracks/getting-more-advanced-with-design/modules/layout-with-flexbox/cheatsheet */
