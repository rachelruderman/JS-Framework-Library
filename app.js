var g = G$('John', 'Doe')
//the first function returns 'this', making it chainable. Pass in 'true' to get formal greeting
//now i have chainable methods and an object I created without having to to call new, using the jQuery syntax
g.greet().setLang('es').greet(true)
