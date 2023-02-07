### Explore all the ways of writing css.

There are various ways of writng CSS

- inline style
- using extended style sheet creating a .css file
- SCSS
- Component Library : MaterialUI, Chakra UI, Ant UI, Base UI
- Styled Components
- Frameworks : TailwindCSS

### How do we Configure Tailwind?

To configure tailwind first we have to read the docs of tailwind css there it has provided various ways for various frontend library and framework. In our case we are using Parcel as a bundler under which react is there so to configure tailwind we follow the steps below:

- In our app directory use :

```
 npm i -D tailwindcss postcss
```

- Initialize the tailwind config file :

```
npx tailwindcss init
```

- create a .postcssrc file in the root and provide the following code:

```
{
 "plugins": {
 "tailwindcss": {}
 }
 }
```

- Configure the tailwindcss.config file to provide details where the tailwind css will work :
  ```
  content: [
  "./src/**/*.{html,js}", in our case we are using only html & js file so we provided that only.
  ],
  ```
- Configure the main index.css file and provide it with the following code :

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

So these are the steps require to configure our tailwind css into our app.

### Why do we have .postcssrc file?

The 'postcssrc' is a configuration file for the postcss tool which the tailwind uses to convert the tailwind class css into normal css using javascript. Thats why we have to configure the postcssrc file to work with in sync with the tailwindcss.

### In tailwind.config.js what does all the keys mean (content, theme, extend, plugins)?

In tailwing config file each keys has a specific work to modify the default tailwind configuration.

- Content :
  It is the section where we configur ethe paths ot all ou HTML template, javascript files, typescript files or jsx/tsx files or any other source files that contains tailwind class names.
- Theme :
  The theme section is the place where we can define our projects color palette, type scale, fonts, breakpoints for media query, border radius values, and more which actually modify the default tailwind config.
- Extend :
  Extend is use when we want to keep the default values but want to add our values to the existing values, like adding new breakpoint for screen or adding a new theme.
- Plugins :
  It is used to extend tailwind with reusable third-party plugins, we can register a new styles for the Tailwind to inject into the our stylesheet using JavaScript instead of CSS.
