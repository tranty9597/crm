import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

import RNLanguages from 'react-native-languages';

import { en, vi } from './locales'

I18n.fallbacks = true;

I18n.translations = {
    en, vi
};

RNLanguages.addEventListener('change', (deviceLocale) => {
  i18n.locale = deviceLocale.language
})

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
};

export default I18n