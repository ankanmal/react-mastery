# Assignments Day 2

### What is 'NPM' ?

NPM is the world largest software registry it is used by open source developers to share and borrow packages. Many software companies use npm packages in their live projects.

### What is `Parcel/Webpack`? Why do we need it?

Parcel/Webpack are bundlers which we use for build and bundle javascript applications.

Parcel is a fast,zero-configuration bundler it is fast and easy to use it can handle many comman task automatically like bundling,minification and code transformation.

Webpack is a more powerful and flexible bundler where we have to setup the build process and it is not a favorable way for begineers. It is mostly used for large and complex projects that need more fine-grained control over the build process.

We need bundlers bacause of some of the following reasons below:

ombine multiple JavaScript files into a single file, or "bundle", to reduce the number of requests the browser has to make to the server. This can improve the performance of your application by reducing the amount of time it takes to load.
Transform and optimize code to make it more efficient and compatible with different environments. For example, a bundler might transpile modern JavaScript code to be compatible with older browsers, or minify the code to reduce its size.
Manage dependencies between different parts of your codebase. A bundler can help you include the right versions of your dependencies and ensure that everything is properly linked together.

### What is `.parcel-cache`

Parcel cache is the directory use by parcel bundler to store cached files. When we build projects using parcel it save various intermediate files to the parcel cache directory in order to speed up the build process.

If you want to clear cache for any reason we need to delete the cache files and again start the build process.

In most cases the folder is hidden by deafault and we need to use some options to view it.

### What is `npx` ?

npx is a tool that is included with npm, the package manager for javascript. It is used to execute or run packages from the command line without the need to install them globally to the system.

It is also use to run local executables in our projects or to excute scripts defined in the package.json file.

### What is difference between `dependencies` vs `devDependencies`

In package.json there are two dependencies present there.

So in the case of dependencies it specifies the package that are project depends on in order to work correctly. These packages are required for the project to run in the production. For eg. React,ReactDom,Babel

For devDependencies it contains all the specific package that are only needed for the development or testing purposes. These packages are not required for the project to run in the production, and this will not be deployed in the final package that is deployed.For eg. Parcel.

### What is Tree Shaking?

Tree Shaking is used in the context of Javascript code optimization.It is used to remove the dead code, or code that is not actually used in our application.

For example we imported certain packages and it contains different functions and we are using only two function so in the time of production or development build the not required code in the package will be removed.

It is typically used to reduce the size of the codebase and improve the performance of the application.
