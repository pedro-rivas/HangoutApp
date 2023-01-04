import React, { useState } from "react"
import { View, TouchableOpacity } from "react-native"
import CountryPicker from "react-native-country-picker-modal"
import { CountryCode, Country } from "../types"

interface CountryModalProps {
  countryCode: CountryCode
  setCountryCode: (code: CountryCode) => void
}
export function CountryModal(props: CountryModalProps) {
  const { setCountryCode, countryCode } = props

  const [show, setShow] = useState(false)

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    // setCountry(country)
  }
  return (
    <View>
      <TouchableOpacity onPress={() => setShow(true)}></TouchableOpacity>
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
          show,
        }}
      />
    </View>
  )
}
