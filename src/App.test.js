import { render, screen } from '@testing-library/react';
import App from './App';

  it('should display a loading text', () => {

    const {getByText} = render(<App />);

    expect(getByText(/Loading.../i)
      .textContent)
      .toBe('Loading...');
  })

  const pokemons = {
    name: 'picachu',
    url:  'https://pokeapi.co/api/v2/pokemon/25/',
  };

  
