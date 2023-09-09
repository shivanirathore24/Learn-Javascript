/*
Develop a utility function called "URLConstructor" that constructs a URL based on the provided arguments.
Requirements:
The function URLConstructor accepts three parameters:
1. query parameters: query parameter is an object containing different properties. => {name:'John',age:'28'}
2. domain: domainName is nothing but => google.com, facebook.com, codingninjas.com etc.
3. path: path is => /search, /profile
The function on receiving all three arguments should return a fully constructed URL in the format :
https://google.com/search?name=John?age=28`
where google.com is the domain name, /search is the path and {name:John,age:28} is the query parameter.

1. Domain Name wouldn't contain https section you have to append it to every URL.
2. for query parameters, all the properties are separated using ?, and the key and values are separated using =.

Input:
const queryParameters = {name:'John',age:'28'}; 
const domain = "google.com";
const path = '/search';
console.log(URLconstructor(queryParameters,dom
ain,path));

Output:
https://google.com/search?name=John?age=28 */

function URLconstructor(queryParameters, domain, path) {
  let finalurl = "";
  finalurl += "https://";
  finalurl += domain;
  finalurl += path;
  for (let key in queryParameters) {
    finalurl += "?";
    finalurl += key;
    finalurl += "=";
    finalurl += queryParameters[key];
  }
  return finalurl;
}

const queryParameters = { name: "John", age: "28" };
const domain = "google.com";
const path = "/search";
console.log(URLconstructor(queryParameters, domain, path));
//output: https://google.com/search?name=John&age=28
