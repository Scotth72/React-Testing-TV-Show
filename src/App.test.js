import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchShow as mockFetchShows } from './api/fetchShows'

jest.mock('./api/fetchShows')


const movieData = {

}


test('Running async test', async () => {
    mockFetchShows.mockResolvedValueOnce(movieData)

}) 