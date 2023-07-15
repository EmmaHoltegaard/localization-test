import React from 'react'
import { useTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'English' },
  da: { nativeName: 'Dansk' }
}

export const LanguageSwitcher = () => {
  // Access the i18n object via the useTranslation hook(recommended method, rather than importing)
  const { i18n } = useTranslation()

  return (
    <div className="buttons-wrapper">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}>
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  )
}