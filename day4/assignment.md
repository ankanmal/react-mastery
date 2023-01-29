### Is JSX mandatory for React?

No, JSX is not mandatory for react, we can use good old React.createElement to create element and pass element inside it as children and we can pass props as well. So what JSX gives is a html like syntax inside js to write reactcomponent and render it. Under the hood babel just convert the jsx into react.createelement and which in turns converted into a big object i.e virtual dom which updates the real dom.
