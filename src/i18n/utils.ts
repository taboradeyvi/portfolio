import { content, defaultLang } from "./ui";

// Tipo para generar claves anidadas.
type NestedKeyOf<T> = {
  [K in keyof T]: T[K] extends object
    ? `${Extract<K, string>}.${NestedKeyOf<T[K]>}`
    : Extract<K, string>;
}[keyof T];

// Obtiene el idioma desde la URL.
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in content) return lang as keyof typeof content;
  return defaultLang;
}

// Función de traducción con soporte para claves anidadas.
export function useTranslations(lang: keyof typeof content) {
  return function t(key: NestedKeyOf<(typeof content)[typeof defaultLang]>) {
    const keys = key.split("."); // Divide la clave en partes.
    let translation: any = content[lang];
    let defaultTranslation: any = content[defaultLang];

    for (const k of keys) {
      if (translation && translation[k] !== undefined) {
        translation = translation[k];
      } else {
        translation = undefined;
      }

      if (defaultTranslation && defaultTranslation[k] !== undefined) {
        defaultTranslation = defaultTranslation[k];
      } else {
        defaultTranslation = undefined;
      }
    }

    return translation || defaultTranslation || key; // Devuelve la traducción o la clave.
  };
}
