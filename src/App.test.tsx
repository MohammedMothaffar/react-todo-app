/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe('tests the app root component', function () {
    it('should render the awesome text ', function () {
        render(<App />);
        expect(screen.getByText(/awesome/)).ToBeInTheDocument();
    });
});
function expect(arg0: any) {
    throw new Error('Function not implemented.');
}
