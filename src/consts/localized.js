import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity , NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizedStrings from 'react-native-localization';

const Localization = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [strings, setStrings] = useState(null);

  useEffect(() => {
    const getSelectedLanguage = async () => {
      const language = await AsyncStorage.getItem('selectedLanguage');
      setSelectedLanguage(language);
    };

    getSelectedLanguage();
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      const localizedStrings = new LocalizedStrings({
        en: {
          greeting: 'React Native is a popular framework for building mobile applications using JavaScript and React. It allows developers to write code once and deploy it on both iOS and Android platforms, resulting in faster development and reduced time-to-market.',
        },
        fr: {
          greeting: 'React Native est un framework populaire pour construire des applications mobiles en utilisant JavaScript et React. Il permet aux développeurs d\'écrire du code une fois et de le déployer sur les plateformes iOS et Android, ce qui entraîne un développement plus rapide et un délai de mise sur le marché réduit.',
        },
        de: {
          greeting: 'React Native ist ein beliebtes Framework zum Erstellen von mobilen Anwendungen mit JavaScript und React. Es ermöglicht Entwicklern, den Code einmal zu schreiben und auf beiden Plattformen iOS und Android bereitzustellen, was zu einer schnelleren Entwicklung und einer verkürzten Time-to-Market führt.',
        },
      });
      localizedStrings.setLanguage(selectedLanguage);
      setStrings(localizedStrings);
    } else {
      setStrings(null);
    }
  }, [selectedLanguage]);

  const onLanguageSelect = async (language) => {
    setSelectedLanguage(language);
    await AsyncStorage.setItem('selectedLanguage', language);
  };

  const onDefaultLanguageSelect = async () => {
    setSelectedLanguage(null);
    // const deviceLanguage = NativeModules.I18nManager.localeIdentifier;
    // const languageCode = deviceLanguage.substring(0, 2);
    // strings.setLanguage(languageCode);
    await AsyncStorage.removeItem('selectedLanguage');
  };

  return (
    <View>
      {strings && <Text>{strings.greeting}</Text>}

      <TouchableOpacity onPress={() => onLanguageSelect('en')}>
        <Text>English</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onLanguageSelect('fr')}>
        <Text>Français</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onLanguageSelect('de')}>
        <Text>Deutsch</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDefaultLanguageSelect}>
        <Text>System Default</Text>
      </TouchableOpacity>

      <Text>Selected Language: {selectedLanguage}</Text>
    </View>
  );
};

export default Localization;

