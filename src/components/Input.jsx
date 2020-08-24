import React, { PureComponent } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

// Общий компонент для всех инпутов
class Input extends PureComponent {
  render() {
    const {
      name,
      error,
      labelClass,
      inputClass,
      placeholder,
      ...props
    } = this.props

    return (
      <label
        className={cx('label', !!labelClass && labelClass)} //Если есть labelClass, то он добавляется в className
        htmlFor={`id-${name}`} // цепляется на id
      >
        <span className="span">{placeholder}</span>
        <input
          className={cx(
            'input',
            !!inputClass && inputClass, // См. чуть выше, только тут уже с inputClass
            !!error && 'error' // Если в хранилище ошибок что-то есть, то отправить сообщение с ошибкой
          )}
          name={name} 
          id={`id-${name}`} //id имени, по которому лейбл цепляется
          onFocus={this.handleFocus} // при наведении
          onBlur={this.handleBlur} // 
          {...props}
        />
        {/* Если есть ошибка, то вывод спана */}
        {!!error && <span className="errorText">{error}</span>}
      </label>
    )
  }
}

//начальные значения пропсов
Input.defaultProps = {
  type: 'text',
  error: '',
  required: false,
  autoComplete: 'off',
  labelClass: '',
  inputClass: '',
}

// проверка на типы и обозначение важность нужного типа
Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
}

export default Input