import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'
import Dashboard from './components/Dashboard';


test('renders without crashing', () => {
  render(<App />);
 });



test(' Displays an h1 "At Bat" ', () => {
  
  const container = render(<App />);

  container.getByText('At Bat')
});

test('Shows text for Hit button', () =>{
  const wrapper = render(<Dashboard/>);
  wrapper.getByText('Strikes')
})

test('Shows text for Foul button', () =>{
  const wrapper = render(<Dashboard/>);
  wrapper.getByText('Foul')
})