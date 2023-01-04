import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country } from '../types'

interface CountryModalProps {
  title: string,
  countryCode: CountryCode,
  setCountryCode:(code: CountryCode)=> void
}
export function CountryModal(props: CountryModalProps) {
// export const CountryModal: FC<{props: CountryModalProps}> = (...props)=>{
  const {setCountryCode, title, countryCode} = props
  // const [countryCode, setCountryCode] = useState<CountryCode>('FR')
  // const [country, setCountry] = useState<Country>(null)


  const [show, setShow] = useState(false);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    // setCountry(country)
  }
  return (
    <View>
    <TouchableOpacity
      onPress={() => setShow(true)}>
      <Text>
          {title} {countryCode}
      </Text>
    </TouchableOpacity>

    <CountryPicker
            {...{
              countryCode,
              withFilter: true,
              withFlag: true,
              withCountryNameButton: true,
              withAlphaFilter: false,
              withCallingCode: false,
              withEmoji: false,
              onSelect,
              show
            }}
    />
  </View>
  )
};