/* React.createElement accepts 3 props, 
1 'type' often a dom element as a string, 
2 [props]object or null, 
3 contnets or children of the element or null
**/
//option 1 of react syntaxs
const title = <h1>My first react element!</h1>

//option 2 of react syntaxs
const desc = React.createElement(
    'p',
    null,
    'MY gosh this is so cool I learned how to add stuff to the dom with react!!!!!'
);

const header = React.createElement(
    'header',
    { id: 'headerOne' },
    title,
    desc
);
/* 
Render takes 2 properties
1. the object you want to render.
2. the location on the DOM that you want to render to.
**/
ReactDOM.render(
    header, 
    document.getElementById('root')
);

