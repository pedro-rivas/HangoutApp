import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country } from '../types'
import { observer } from 'mobx-react-lite'


export const WelcomeScreen: FC = observer(function WelcomeScreen(){
  const [countryCode, setCountryCode] = useState<CountryCode>('FR')
  const [country, setCountry] = useState<Country>(null)
  const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(
    false,
  )
  const [withFlag, setWithFlag] = useState<boolean>(true)
  const [withEmoji, setWithEmoji] = useState<boolean>(true)
  const [withFilter, setWithFilter] = useState<boolean>(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false)
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false)
  const [show, setShow] = useState(false);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  return (
    <View>
    <TouchableOpacity
      onPress={() => setShow(true)}>
      <Text>
          {countryCode}
      </Text>
    </TouchableOpacity>

    <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
              show
            }}
      // when picker button press you will get the country object with dial code
      // pickerButtonOnPress={(item) => {
      //   setCountryCode(item.dial_code);
      //   setShow(false);
      // }}
    />
  </View>
    // <View>
    //   <Text>Welcome to Country Picker !</Text>
    //   <TouchableOpacity
    //     onPress={() => setShow(true)}

    //   >
    //     <Text>
    //         {countryCode}
    //     </Text>
    //   </TouchableOpacity>
    //   <CountryPicker
        // {...{
        //   countryCode,
        //   withFilter,
        //   withFlag,
        //   withCountryNameButton,
        //   withAlphaFilter,
        //   withCallingCode,
        //   withEmoji,
        //   onSelect,
        // }}
        // visible={show}
    //   />
    //   <Text>Press on the flag to open modal</Text>
    //   {country !== null && (
    //     <Text>{JSON.stringify(country, null, 2)}</Text>
    //   )}
    // </View>
  )
});