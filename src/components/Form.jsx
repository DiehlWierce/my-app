import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import FormWrapper from '../containers/FormWrapper'


// создаем компонент, в котором будет объявлен компонент, содержащий форму.
// все методы для работы с ней будем получать через props, так же как и value для инпутов, поэтому state здесь не нужен.

class Form extends Component {
  handleInput = event => {
    const { value, name } = event.currentTarget
    this.setState(({ data, errors }) => ({
      data: {
        ...data,
        [name]: value,
      },
      // обнуление хранилища ошибок
      errors: {
        ...errors,
        [name]: '',
      },
    }))
  }


  // С помощью метода reduce переберём все обязательные поля. При каждой итерации происходит вызов метода validate, 
  // в который передаём пару name, value. Внутри метода происходит проверка на корректность введённых данных, 
  // по результатам которой возвращается булев тип. Если хотя бы одна пара значений не пройдёт валидацию, 
  // то переменная isValid станет false, и данные в консоль не выведутся, то есть форма не будет обработана. 
  handleSubmit = e => {
    e.preventDefault()
    const { data } = this.state
    const isValid = Object.keys(data).reduce(
      (sum, item) => sum && this.validate(item, data[item]),
      true
    ) 
    if (isValid) {
      console.log(data)
    }
  }

  // Здесь рассмотрен простой случай — проверка на непустую форму.
  validate = (name, value) => {
    if (!value.trim()) {
      this.setState(
        ({ errors }) => ({
          errors: {
            ...errors,
            [name]: 'поле не должно быть пустым',
          },
        }),
        () => false
      )
    } else {
      return true
    }
  }



  render() {
    const {
      data: { username, email, phone },
      errors,
      handleInput,
      handleSubmit,
    } = this.props

    return (
      <Fragment>
        {/* Оба метода handleSubmit и handleInput передаются во WrappedComponent */}
        <WrappedComponent
          {...this.state}
          {...this.props}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <div className="openBill">
          <form className="openBillForm" onSubmit={handleSubmit}>
            <Input
              key="username"
              value={username}
              name="username"
              onChange={handleInput}
              placeholder="Логин"
              error={errors.username}
              required
            />
            <Input
              key="phone"
              value={phone}
              name="phone"
              onChange={handleInput}
              placeholder="Телефон"
              error={errors.phone}
              required
            />
            <Input
              key="email"
              value={email}
              type="email"
              name="email"
              onChange={handleInput}
              placeholder="Электронная почта"
              error={errors.email}
              required
            />
            <button type="submit" className="submitBtn">
              Отправить форму
            </button>
          </form>
        </div>
      </Fragment>
    )
  }
}

Form.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    username: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}


// объявим начальные значения state и передадим их в High Order Component
const initialState = {
  username: '',
  phone: '',
  email: '',
}

export default FormWrapper(initialState, initialState)(Form)