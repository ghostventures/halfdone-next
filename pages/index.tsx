import { useContext } from 'react'
import { ConfigCtx, Card, Switch } from '@components'
import { themes } from '@styles/themes'

// TODO: ghost and half done attribution link
// TODO: features list page
// TODO: colors palette page
// TODO: 404 error page
// TODO: dynamic routes demo
// TODO: purge font-awesome

const HomePage = () => {
  const { siteData, theme, setTheme } = useContext(ConfigCtx)

  return (
    <main className='flex flex-1'>
      <Card>
        <h1 className='text-lg sm:text-4xl'>Welcome to {siteData.title}</h1>

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
