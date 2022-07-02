/* cookies vs local storage vs session storage */
//localStorage = sessionStorage
localStorage.setItem('breakfast', 'cereal'); //lunch
localStorage.setItem('dinner', 'fish'); //lunch
console.log("*** localStorage >>> breakfast === " + localStorage.getItem('breakfast'));

//localStorage.removeItem('lunch');
//localStorage.clear();

sessionStorage.setItem('lunch', 'rice');
console.log("*** sessionStorage >>> " + sessionStorage.getItem('lunch'));

document.cookie = "hello=true";
document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
document.cookie = "person=beau; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/"

document.cookie = "person=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

console.log(document.cookie)