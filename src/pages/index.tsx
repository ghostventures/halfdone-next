import { useContext } from 'react'
import { ConfigCtx, Card, Switch } from '@components'
import { themes } from '@styles/themes'

const HomePage = () => {
  const { siteData, theme, setTheme } = useContext(ConfigCtx)

  return (
    <main className='flex flex-1'>
      <Card>
        <h1 className='text-3xl sm:text-4xl pb-2'>
          Welcome to {siteData.title}
        </h1>

        <Switch
          activeId={theme.id}
          buttons={[
            {
              id: 'dark',
              icon: 'fas fa-moon',
            },
            {
              id: 'light',
              icon: 'fas fa-sun',
            },
          ]}
          onChange={id => setTheme(themes[id])}
        />
      </Card>
    </main>
  )
}

export default HomePage
