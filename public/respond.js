// require node modules 
const url = require('url')
const path = require('path');

// file imports

// static base path: location of static folder
//const staticBasePath = 
console.log(path.join__dirname,'static');
//respond to a request 
//Following in function passed to createServer used to create the server
const respond = (request, response) => {
    response.write('respond fired!');
    response.end();
    //before workinig with the pathname, you need to decode it
    let pathname = url.parse(request.url,true).pathname;

    //if favicon.ico stop
    if (pathname === '/favicon.ico'){
        return false;
    }
    pathname = decodeURIComponent(pathname);


    // get the correponding full static path locted in the static folder

    //can we find something in fullStaticPath?

    //no:send '404: Flie Not Found

    //we found something
    //is it a file or directory

    //It is a dirctory:
        //get content from template server || index.html(put in static folder)
        //build the page title
        //build breadcrumb
        //build table rows(main_content)
        //fill the temple data with: the page title, breadcrumb and table rows(main_content)
        //print data to the webpage
    //Is not a directory but not file either
        //send:401:Access denied
    //its is a file
        //lets get the file extension
        //get the file mime type and add it to the response header
        //pdf file? -> display in browser
        //audio/video file? -> stream in ranges
        //all other files stream in a normal way.
        
        
}

module.exports = respond;