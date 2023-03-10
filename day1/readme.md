## Day One

### What is Emmet?

Emmet is a set of plug-ins for text editors that allow for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist.It is designed to be very easy to use and can save you a lot of time when writing HTML or XML code by expanding short, predefined codes into full blocks of code.

For example, you can type "ul>li" and then press the tab key to expand it into an unordered list with a single list item, like this:

```
<ul>
  <li></li>
</ul>
```

### Difference between a Library and Framework?

A library is a collection of code that you can use to perform specific tasks in your own code. A library typically provides a set of functions or classes that you can use to do things like perform calculations, parse data, or interact with external systems.

A framework, on the other hand, is a collection of code that provides a structure for building applications. A framework provides a set of conventions and guidelines for organizing your code, and often includes a set of libraries and other tools that you can use to build your application.

One key difference between a library and a framework is the way that they are used. When you use a library, you typically call the functions or classes provided by the library to perform specific tasks in your own code. When you use a framework, you typically build your application by writing code that conforms to the conventions and guidelines provided by the framework. The framework then calls your code at specific points to perform specific tasks, rather than you calling the framework's code directly.

Another difference between a library and a framework is the level of control they provide. A library gives you a set of tools that you can use in any way you see fit, whereas a framework imposes a certain structure and flow on your code. This can make it easier to build complex applications with a framework, but can also make it harder to customize or extend the application in ways that are not supported by the framework.

In general, libraries are more flexible and lower-level than frameworks, and are useful for performing specific tasks or adding specific features to your code. Frameworks are more opinionated and provide a more comprehensive structure for building applications, but can also be more restrictive in terms of how you can use them.

### What is CDN? Why do we use it?

A CDN, or Content Delivery Network, is a distributed network of servers that are used to deliver content, such as web pages, images, and videos, to users around the world. CDNs are designed to improve the performance and reliability of websites by distributing the delivery of content across multiple servers, which are located in strategically chosen locations around the globe.

There are several benefits to using a CDN:

1. Improved performance: CDNs can significantly improve the performance of a website by delivering content from servers that are physically closer to the user. This reduces the time it takes for the content to be delivered, leading to faster loading times for the website.

2. Increased scalability: CDNs can handle large amounts of traffic, making it easier for websites to scale and support a larger number of users without experiencing performance issues.

3. Improved reliability: CDNs can help ensure that a website remains available even if one of the servers in the network goes offline. This can improve the overall reliability of the website.

4. Enhanced security: CDNs can provide additional security features, such as DDoS protection, to help protect a website from malicious attacks.

In summary, CDNs are used to improve the performance, scalability, reliability, and security of websites by delivering content from a network of servers located around the world.

### Why is React known as React?

React is known as React because it was developed by Facebook as a way to build user interfaces for web applications. The name "React" is short for "responsive," which refers to the way that React allows developers to create components that respond to changes in data and update the user interface in real-time.

React was developed by Jordan Walke, a software engineer at Facebook, in 2011. It was initially used internally at Facebook to build the user interface for the social media platform's newsfeed feature. In 2013, Facebook released React as an open-source library, making it available to other developers to use in their own projects.

Since its release, React has become very popular among web developers, particularly for building modern, single-page applications that are designed to be fast and responsive. It is now used by many companies and organizations around the world, including Facebook, Instagram, Netflix, and Airbnb.

React is known for its efficient and flexible approach to building user interfaces, which involves breaking the interface down into small, reusable components that can be easily composed and updated. This makes it easy to build complex user interfaces that are easy to maintain and evolve over time.

### What is crossorigin in script tag?

The crossorigin attribute is an optional attribute that can be used in the script tag to indicate that the script should be loaded using a "cross-origin" request. This means that the script is being loaded from a different domain than the one that the current page is being served from.

By default, web browsers block "cross-origin" requests for security reasons. However, the crossorigin attribute allows you to indicate that the script should be loaded from a different domain, and to specify how the browser should handle any errors or security issues that may arise from this.

The crossorigin attribute takes a single value, which can be one of the following:

- anonymous: This value indicates that the script should be loaded using a "cors" (Cross-Origin Resource Sharing) request, and that the server will not include any credentials (such as cookies) in the request. This is the most common value used for the crossorigin attribute.

- use-credentials: This value indicates that the script should be loaded using a "cors" request, and that the server should include credentials (such as cookies) in the request.

- none: This value indicates that the script should not be loaded using a "cors" request, and that the browser should block the request if it is being loaded from a different domain.

Here is an example of how you might use the crossorigin attribute in a script tag:

```
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```

This would load the script located at "https://example.com/script.js" using a "cors" request, and the server would not include any credentials in the request.

The crossorigin attribute is useful for loading scripts from third-party domains, as it allows you to control how the browser handles any security issues that may arise from this. It is particularly useful for loading scripts from a CDN (Content Delivery Network), as it allows you to take advantage of the performance and reliability benefits of a CDN without introducing any security risks.

### What is diference between React and ReactDOM

React is a JavaScript library for building user interfaces. It is designed to be efficient, declarative, and flexible, and is particularly well-suited for building reusable, modular components that can be easily composed to build complex user interfaces.

ReactDOM is a separate library that provides specific methods for rendering React components to the DOM (Document Object Model). The DOM is a tree-like structure that represents the structure and content of a web page, and is used by web browsers to render web pages to the screen.

ReactDOM provides a number of methods for rendering React components to the DOM, including render, hydrate, and unmountComponentAtNode. It also provides a number of utility methods for interacting with the DOM, such as findDOMNode and createPortal.

In general, React is used to define the structure and behavior of user interface components, while ReactDOM is used to render those components to the DOM and manage their interactions with the DOM.

For example, you might use React to define a component that represents a button, and use ReactDOM to render that button to the DOM and attach event listeners to it.

Here is an example of how you might use React and ReactDOM together to render a button component to the DOM:

```
import React from "react";
import ReactDOM from "react-dom";

// Define a button component using React
const Button = () => (
  <button onClick={() => console.log("Button clicked")}>Click me</button>
);

// Render the button component to the DOM using ReactDOM
ReactDOM.render(<Button />, document.getElementById("root"));


```

This code defines a button component using React, and then renders it to the DOM using ReactDOM. When the button is clicked, it will log a message to the console.

In summary, React and ReactDOM are two separate libraries that are often used together to build user interfaces for web applications. React is used to define the structure and behavior of user interface components, while ReactDOM is used to render those components to the DOM and manage their interactions with the DOM.

### What is difference between react.development.js and react.production.js files via CDN?

The react.development.js and react.production.js files are versions of the React library that are optimized for different environments.

The react.development.js file is intended for use in development environments, and is optimized for debugging and testing purposes. It includes extra checks and warnings to help identify potential issues in your code, and is generally larger in size than the production version.

The react.production.js file, on the other hand, is intended for use in production environments, and is optimized for performance and size. It includes fewer checks and warnings, and is generally smaller in size than the development version.

### What is async and defer?

The async and defer attributes are optional attributes that can be used in the script tag to control the loading and execution of external JavaScript files in web pages.

The async attribute tells the browser to load and execute the script asynchronously, which means that the script will be loaded in the background while the page continues to load. This can improve the performance of the page by allowing the browser to load and execute the script in parallel with other resources.

The defer attribute tells the browser to load the script, but to defer its execution until the page has finished loading. This can be useful if you want to make sure that the script is not executed until the rest of the page has finished loading, or if you want to ensure that the script is executed in a particular order.
