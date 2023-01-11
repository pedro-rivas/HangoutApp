import React, { useState } from "react"
import { View, TouchableOpacity, ViewStyle } from "react-native"
import CountryPicker from "react-native-country-picker-modal"
import { CountryCode, Country } from "../types"
import { colors } from "../theme"

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
    <View style={$CCStyle}>
      <TouchableOpacity onPress={() => setShow(true)}>
      <CountryPicker
        {...{
          countryCode,
          withFilter: true,
          withFlag: true,
          withCountryNameButton: false,
          withAlphaFilter: false,
          withCallingCode: false,
          withEmoji: false,
          onSelect,
          show,
        }}
      />
      </TouchableOpacity>
    </View>
  )
}

const $CCStyle: ViewStyle = {
  borderWidth: 1,
  borderColor: colors.palette.accent300,
  paddingLeft: 8,
  paddingBottom:5,
  backgroundColor:  colors.palette.accent200,
  borderRadius: 10
}
