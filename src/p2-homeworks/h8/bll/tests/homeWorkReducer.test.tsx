import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]// need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-NAMES', payload:{up: 'up', down: undefined}})

    // const res = [
    //     1,3//...
    // ].filter((el, i) => el === newState[i]._id)
    // expect(res.length).toBe(newState.length)

   // console.log(newState)
    expect(newState[0].name).toBe('Александр')
    expect(newState[0]._id).toBe(1)
    expect(newState[0].age).toBe(66)
    expect(newState[5].name).toBe('Кот')
    expect(newState[5]._id).toBe(0)
    expect(newState[5].age).toBe(3)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-NAMES', payload:{ up: undefined, down: 'down'}})

    expect(newState[0].name).toBe('Кот')
    expect(newState[0]._id).toBe(0)
    expect(newState[0].age).toBe(3)
    expect(newState[5].name).toBe('Александр')
    expect(newState[5]._id).toBe(1)
    expect(newState[5].age).toBe(66)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK-AGE', payload: 18})

    expect(newState.length).toBe(4)
})
