import React, { useState } from "react"
import { View, TouchableOpacity, ViewStyle, Text, TextStyle } from "react-native"
import CountryPicker from "react-native-country-picker-modal"
import { CountryCode, Country } from "../../types"
import { colors } from "../theme"

interface CountryModalProps {
  countryCode: CountryCode
  setCountryCode: (code: CountryCode) => void,
  title?: string
}
export function CountryModal(props: CountryModalProps) {
  const { setCountryCode, countryCode, title } = props
  const [show, setShow] = useState(false)

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    // setCountry(country)
  }
  return (
    <View>
      <TouchableOpacity onPress={() => setShow(true)} style={$CCStyle}>
        {title &&<Text style={$TitleStyle}>{title}</Text>}

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
  borderColor: colors.palette.accent200,
  paddingLeft: 8,
  paddingBottom:5,
  backgroundColor:  colors.palette.accent100,
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}


const $TitleStyle: TextStyle = {
  margin: 5,
  marginTop: 10
}