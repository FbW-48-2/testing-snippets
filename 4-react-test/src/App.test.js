import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders my heading', () => {
  render(<App />); // simulate a browser rendering stuff
  
  // screen => gives us access to rendered DOM!
  const heading = screen.getByText("Testing like hell")

  expect( heading ).toBeInTheDocument() // is this heading part of the DOM?

});

test('show secret message on heading click', () => {
  render(<App />)

  // query => will return NO error if element not found, simply null
  const messageDiv = screen.queryByText("Secret message")
  console.log( messageDiv )

  // expect secret message to be hidden on first render!
  expect( messageDiv ).not.toBeInTheDocument()
})

test(" should show message on heading click ", () => {

  render(<App />) // render me some dom to query...

  const heading = screen.getByText("Testing like hell")

  // fire a click event on the heading
  fireEvent.click( heading ) // simulate click on heading

  // check if DOM node with message appears!
  const messageDiv = screen.queryByText("Secret message")

  expect( messageDiv ).toBeInTheDocument()

})