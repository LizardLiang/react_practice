import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { StockMain } from '../components/StockPage'
import { Simulate } from 'react-dom/test-utils'

import {TodoList} from '../components/TodoList/TodoList.jsx'
 
describe('Stock Page', () => {
  test('snapshot renders', () => {
    const inputContainer = render(<StockMain/>)
    const inst = inputContainer.getByLabelText('input')
    const sButton = searchButton.getByLabelText('searchButton')

    fireEvent.change(inst, {target: {value: '123'}})
    fireEvent.click(sButton)
    expect(inst.value).toBe('123')
  })
})