import React from 'react'
import { render } from '@testing-library/react'
import Episodes from './Episodes'



test('testing the episodes', () => {
    const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />)


}
