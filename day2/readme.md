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
