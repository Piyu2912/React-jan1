import React, { useState } from 'react'

const Func = () => {

    const [data, setData] = useState(1);

    const increase = () => {
        setData(data + 1);
    }


    return (
        <div>
            <h1>Features of React</h1>
            <ol>
                <li><b>Single Page Application</b> Any web application , in which when you are clicking on any
                    button or selecting option from navigation bar then if your page which means browser
                    page is reloading then that means that application is your multi - page application.
                    If it does not reload the browser page and just only updates the page without
                    reloading then that application is known as Single Page application.</li>
                <li><b>Use of Components</b> Whenever we are creating React application so the complete screen 
                    component will be broke down into smaller components. We do this thing to make sure that these 
                    components can be reused at any time when required. React we have two different types of 
                    components : Class and Functional. In React we also create smart and dumb components. 
                    Smart are the ones in which state variable is there and you can do all the data manipulation in this. 
                    Dumb are the ones which only used for UI, they receive data from parent component as props.</li>
                    <li><b>Virtual DOM</b></li>
                    <li><b>Performance</b> React uses virtual DOM and updates only the modified parts. So , this makes 
                    the DOM to run faster. DOM executes in memory so we can create separate components which makes the 
                    DOM run faster.</li>
                    <li><b>Simplicity</b> React is component-based which makes the code reusable and React.js uses JSX 
                    which is a combination of HTML and JavaScript. This makes code easy to understand and easy to debug 
                    and has less code.</li>
            </ol>

            <h1 style={{ textAlign: 'left', color: 'blue', marginLeft: '20px' }}>Virtual DOM</h1>
            <p>First of all before getting to Virtual DOM, lets understand that what is DOM. So,
                DOM is Document Object Model which means it is an object model which is created by converting HTML,
                CSS and JS Real DOM. This DOM gets created whenever the React app is loaded for the
                first time. Now when any change is made on the screen, then these changes would not got directly to
                the Real DOM, instead for this a concept is there in React which is Virtual DOM.
                Now, coming to Virtual DOM, in React we are having two virtual DOMs. When the changes occur, these two
                are compared with each other and will be checked for new changes. The new changes will be updated in the Real
                DOM. This procedure is known as Recoincilliation.
            </p>
            <h1 style={{ color: 'lightgreen' }}>{data}</h1>
            <button onClick={increase}>Click</button>

        </div>
    )
}

export default Func