import React, { Component } from 'react'

// HOC вложен внутрь ещё одной функции, которая будет формировать начальные значения state.

export default function getDefaultValues(initialState, requiredFields) {
  return function Wrapper(WrappedComponent) {
    return class WrappedForm extends Component {
      state = {
        isFetching: false,
        data: initialState,
        errors: requiredFields,
      }

      render() {
        return <WrappedComponent {...this.state} {...this.props} />
      }
    }
  }
}
