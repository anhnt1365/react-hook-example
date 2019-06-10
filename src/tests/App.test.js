import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('</App>', () => {
  beforeEach(()=>{
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });
  })

  afterEach(()=>{
    window.matchMedia.mockRestore()
  });
  
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});