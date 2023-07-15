import React from 'react'
import { LanguageSwitcher } from 'components/LanguageSwitcher'
import { Intro } from './components/Intro'
import { Poem } from './components/Poem'

export const App = () => {
  return (
    <div className="page-wrapper">
      <Intro />
      <LanguageSwitcher />
      <Poem />
    </div>
  )
}
