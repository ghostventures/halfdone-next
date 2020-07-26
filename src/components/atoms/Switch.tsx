import { useContext } from 'react'
import { ConfigCtx } from '@components'

type Btn = {
  id: string
  icon?: string
  text?: string
}

type SwtichBtnProps = {
  button: Btn
  active: boolean
  onClick?: (id: string) => void
}

type SwitchProps = {
  activeId: string
  buttons: Btn[]
  onChange: (id: string) => void
}

export const Switch = ({ activeId, buttons, onChange }: SwitchProps) => {
  const {
    theme: { onPrimary, primary, secondary },
  } = useContext(ConfigCtx)

  const SwitchBtn = ({
    button: { id, icon, text },
    active,
    onClick,
  }: SwtichBtnProps) => (
    <button
      className={`
      ${!(icon || text) && 'hidden'}
         inline-flex items-center transition-colors duration-300 ease-in focus:outline-none  hover:text-${secondary} rounded-l-full px-2 py-2 space-x-1 ${
        active && `bg-${onPrimary} text-${primary} rounded-full`
      }`}
      id={id}
      onClick={() => onClick(id)}
      aria-label={id}
    >
      <i className={`${!icon && 'hidden'} ${icon} `} />
      <span className={`${!text && 'hidden'} `}>{text}</span>
    </button>
  )

  return (
    <div className='bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex'>
      {buttons.map((button, key) => (
        <SwitchBtn
          button={button}
          key={key}
          active={activeId === button.id}
          onClick={id => onChange(id)}
        />
      ))}
    </div>
  )
}
