import React from 'react';
import { render } from '@testing-library/react';
import cardsContext from './cardsContext';

describe('cardsContext', () => {
  it('should render without errors', () => {
    const { container } = render(
      <cardsContext.Provider value={[]}>
        <div>Test</div>
      </cardsContext.Provider>
    );

    expect(container.firstChild).toBeDefined();
  });
});
