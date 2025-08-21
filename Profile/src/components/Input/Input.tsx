import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classError?: string
}
export default function Input({
  errorMessage,
  classError = 'mb-1 text-red-600 min-h-[1.25rem] text-sm',
  type = 'text',
  placeholder,
  className = 'w-full mb-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
}: InputProps) {
  return (
    <>
      <input type={type} className={className} placeholder={placeholder} />
      <div className={classError}>{errorMessage}</div>
    </>
  )
}
