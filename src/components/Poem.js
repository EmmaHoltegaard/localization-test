import React from 'react'
import { useTranslation } from 'react-i18next'

export const Poem = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className="poem-title">{t('poem.poem_title')}</h4>
      <p className="poem-line">{t('poem.line_1')}</p>
      <p className="poem-line">{t('poem.line_2')}</p>
      <p className="by-line">{t('poem.by_line')}</p>
    </div>
  )
}