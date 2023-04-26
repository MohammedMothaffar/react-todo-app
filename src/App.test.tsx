import React from 'react';
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import App from './App';
describe('tests the app root component', function () {
    it('should render the awesome text ', function () {
        render(<App />);
        expect(screen.getByText(/awesome/)).ToBeInTheDocument();
    });
});
