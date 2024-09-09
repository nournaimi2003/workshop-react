import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import ListProduct from './tps/Store/ListProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fruitlist= [
//   'Apple',
//   'Banana',
//   'Lemon'
// ]
root.render(
  <React.StrictMode>
{/*   

    <Fruit fruits={fruitlist}/>
    <UserForm/>
    <Event/>
    <TodoApp/>
    <Counter increment={5} step={2}/>
   */
    <ListProduct/>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
<>
  {/* Test / Lorem = le nom des function */}
    {/* <Test lastName="Naimi"/>
    <Lorem firstName="Nour"/>
    <Lorem>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis consequatur aliquam tenetur quibusdam veniam eos optio corporis sit non! Sit quae earum blanditiis amet. Nobis veritatis incidunt vel aspernatur omnis.
    </Lorem> */}
    {/* ->children */}
    </>
reportWebVitals();

