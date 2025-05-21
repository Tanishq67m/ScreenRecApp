import React from 'react'

type Option = { label: string; value: string }

interface FormFieldProps {
  id: string
  label: string
  type?: React.HTMLInputTypeAttribute
  value: string
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
  placeholder?: string
  as?: 'input' | 'textarea' | 'select'
  options?: Option[]
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  as = 'input',
  options = [],
}) => {
  let field: React.ReactNode

  switch (as) {
    case 'textarea':
      field = (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border rounded"
        />
      )
      break

    case 'select':
      field = (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )
      break

    default:
      field = (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border rounded"
        />
      )
  }

  return (
    <div className="form-field mb-4">
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}
      </label>
      {field}
    </div>
  )
}

export default FormField
