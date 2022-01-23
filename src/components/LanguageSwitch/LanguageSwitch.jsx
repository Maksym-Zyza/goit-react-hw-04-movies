import { useState, useEffect } from 'react';
import st from './LanguageSwitch.module.scss';
import { text } from '../../helpers/text';

export const LanguageSwitch = () => {
  const [language, setLanguage] = useState(
    window.localStorage?.getItem('language'),
  );

  useEffect(() => {
    if (language === null) {
      window.localStorage.setItem('language', 'en-US');
    }
  }, []);

  useEffect(() => {
    setLanguage(window.localStorage?.getItem('language'));
  }, [language]);

  const changeLanguage = ({ target }) => {
    if (target.value === 'uk-UA') {
      window.localStorage.setItem('language', 'uk-UA');
      setLanguage('uk-UA');
      window.location.reload();
    } else {
      window.localStorage.setItem('language', 'en-US');
      setLanguage('en-US');
      window.location.reload();
    }
  };

  return (
    <div className={st.btn}>
      <p>{text.Language}:</p>

      {language === 'en-US' && (
        <label>
          <input
            type="radio"
            name="language"
            value="uk-UA"
            onChange={changeLanguage}
            defaultChecked={language === 'uk-UA'}
          />
          Uk
        </label>
      )}

      {language === 'uk-UA' && (
        <label>
          <input
            type="radio"
            name="language"
            value="en-US"
            onChange={changeLanguage}
            defaultChecked={language === 'en-US'}
          />
          En
        </label>
      )}
    </div>
  );
};
