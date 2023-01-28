### What is JSX?

JSX is a html like syntax which is used in react to write the structure which is bascially gets rendered into the dom and appears on the user screen.

### Superpowers of JSX

The SuperPower of JSX is that we can write logic and markup of the component inside the single jsx file. Suppose we want to dispaly the no of times a count button has been pressed and immediately update the UI. So in that that case we can pass the variable that holds the count value and as soon as it changes it reflects the dom inside of a html element.

### Role of 'type' attribute in script tag? What options can I use there?

The script type attribute is used to specify the MIME type of script and identify the content of the tag.For HTML5 it is optional and by default it has a value "application/javascript".And for HTML 4.x the type attribute is required.
Some options that we can use there are async,defer,module.

### {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent ></ TitleComponent >} in JSX

1st is a javascript variable or element inside a jsx, 2nd one is a self closing functional component inside a curly brackets. 3rd it is also a functional component but is not self closing such that if any children needs to be rendered inside it it can faciliate it.
