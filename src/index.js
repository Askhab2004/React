import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Text from './components/Text';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const component = 'Hello'

root.render(
  <React.Fragment>
    <span>
      {component}
    </span>
    <span>Hello</span>
  </React.Fragment>
);

root.render(
  <table border='1'>
    <tr>
      <td><Text/></td>
      <td><Text/></td>
    </tr>
    <tr>
      <td><Text2/></td>
      <td><Text2/></td>
    </tr>
  </table>
)


function Text2() {
  return(
    <p className='text'>ipsum</p>
  )
}

root.render(
  <>
  <Text name='Askhab' age='18' city='Grozny'/>
  <Text name='Asb' age='18' city='Grozny'/>
  </>
)