1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
<br>
Ans: by getElementById we can find a unique element using id, with getElementsByClassName we can find more than one elements using class, querySelector return the first marching element using a css selector and querySelectorAll return all matching elements using a css selector.
<br><br>

2.How do you create and insert a new element into the DOM?
<br>
Ans: First we use document.createElement() to create a new element then we write .textContent/.className/.id to add attribute or content finally we write appendChild() / insertBefore() to add in DOM.

<br><br>
3.What is Event Bubbling and how does it work?
<br>
Ans: Event Bubbling is  an event triggered on a child element propagates step by step up to its parent elements. It can be stopped using stopPropagation(). The flow is ( child - parent - grandparent - body - head - html ). 

<br><br>
4.What is Event Delegation in JavaScript? Why is it useful?
Ans: Instead of attaching event listeners to multiple child elements, we attach a single listener on their parent, and handle events for the children dynamically. It costs less memory and better performance, no repetitive code we fet a cleaner code.

<br><br>
5.What is the difference between preventDefault() and stopPropagation() methods?
<br>
Ans: preventDefault() means its Stops the default browser action associated with an event. And stopPropagation() means its Stops the event from bubbling up (or capturing down) the DOM tree.