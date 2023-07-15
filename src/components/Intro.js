import React from 'react'
import { useTranslation } from 'react-i18next'

export const Intro = () => {
  const { t } = useTranslation()

  return (
    <p className="intro">{t('intro.intro_text')}</p>
  )
}