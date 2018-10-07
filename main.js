var main = document.createElement('main');
var pageBody = document.getElementsByTagName('body')[0];
var scriptTag = document.getElementsByTagName('script')[0];
pageBody.insertBefore(main, scriptTag);

var header = document.createElement('h1');
main.appendChild(header);

var ul = document.createElement('ul');
main.appendChild(ul);

var li = document.createElement('li');
ul.appendChild(li);

var headerText = document.createTextNode('This is header text!');
var listItemText = document.createTextNode('This is the list item');
header.appendChild(headerText);
li.appendChild(listItemText);

header.classList.add('mystyle');
main.classList.add('text-center');

var link = document.createElement('a');
var linkListItem = document.createElement('li');
linkListItem.appendChild(link);
ul.appendChild(linkListItem);
var linkText = document.createTextNode('This is my link');
link.appendChild(linkText);

console.log(link);