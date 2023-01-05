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

### What is Hot Module Replacement?

Hot Module Replacement (HMR) is a feature that allows us to update parts of our application "on the fly" while the application is running, without having to reload the entire page. This can be a very useful tool for improving the development experience, as it allows us to see our changes in real time and iterate more quickly.

To use HMR, we will need to use a bundler that supports it, such as Webpack or Parcel.

And HMR is generally used in the development and typically not on the production enviroment.

### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words

- Minification
- Tree Shaking
- Hot module Replacement
- Image Optimization
- File Watcher

- Minification : Parcel have minifiers for javascript, html, css and svg out of the box. It reduces the output size of the file by removing whitespaces,renaming variables to shorter names, and many other optimization.

- Image Optimization : It support resizing, converting and optimizing images. We have to specify which format and size the image should be converted and it also support multiple sizes for different devices.

- File Watcher : To support an optimal caching and development experience Parcel utilizes a very fast watcher written in C++ that integrates with low-level file watching functionality of each operating system. Using this watcher Parcel watches every file in your project root (including all node_modules). Based on events and metadata from these files, Parcel determines which files need to be rebuilt.

### What is `.gitignore`? What should we add and not add into it?

.gitignore is a file that tells git which file or directories should be ignored while we commit our code.

We should add files that can again made in the production server for exmaple the nodemodules folder we should include in the git ignore bcause pakage.lock.json have all the information of the packages that we are using.

We should not add files that we cannot make it in the production server.

### What is the difference between `package.json` and `package-lock.json`

package.json is a file that is used to manage the dependencies of a Node.js project. It includes information about the project, such as the name, version, and dependencies, as well as scripts that can be used to build or test the project.

package-lock.json, on the other hand, is a file that is used to lock the dependencies of a project to specific versions. It is generated automatically by npm when you install packages, and it records the exact versions of the packages that are installed, as well as the versions of their dependencies.

### Why should I not modify `package-lock.json`?

package-lock.json is used to lock the dependencies of a project to specific versions, and it is generated automatically by npm when we install packages. It records the exact versions of the packages that are installed, as well as the versions of their dependencies.

If we moidify the package-lock.json than we may end up with a file that does not accurately reflect the state of our project dependencies.It will cause error when we try to install or update package, and if somebody pull our code from github and build it at that it will throw errors or it will not run properly.

### What is `node_modules` ? Is it a good idea to push that on git?

node_modules is a directory that is used to store the dependencies of a Node.js project. When we install packages using npm, the packages and their dependencies are downloaded and stored in the node_modules directory.

No it is not a good idea to push the node modules folder to the git because we have package.json and package-lock.json which have the exact details of the packages we are using and anybody with the code and the package files can download their own nodemodules in their own device and server can also build the nodemodules folder using the package files.

### What is the `dist` folder?

The dist folder (short for "distribution") is a directory that is used to store the files that are ready to be deployed or distributed. It typically contains the final, built version of an application or library, and is the result of the build process.

### What is `browserlists`

browserslist is a configuration file that is used to specify the target browsers for a project. It is typically used by tools like Babel, Autoprefixer, and other tools that need to know which browsers to support or optimize for.
With having the browser list any transplier will optimize the code to run in the given version of browsers.
