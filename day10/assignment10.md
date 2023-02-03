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
