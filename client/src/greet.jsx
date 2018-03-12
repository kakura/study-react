import React  from 'react'
import {render} from 'react-dom';
import Greet from './components/Greet';

render(
  <Greet name="world" />,
  document.getElementById('footer')
);