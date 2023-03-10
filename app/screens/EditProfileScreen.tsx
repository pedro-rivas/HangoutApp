import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { ImageStyle, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, ProfileInput, TextField, CountryModal } from "../components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { CountryCode } from "react-native-country-picker-modal"

interface EditProfileScreenProps extends AppStackScreenProps<"Login"> {}

export const EditProfileScreen: FC<EditProfileScreenProps> = observer(function EditProfileScreen(
  _props,
) {
  const [userInfo, setUserInfo] = useState<{
    name: string
    profession?: string
  }>()
  const [isLoading, setIsLoading] = useState(false)

  const [bio, setBio] = useState<string>()
  const [from, setFrom] = useState<CountryCode>("PL")
  const [liveIn, setLiveIn] = useState<CountryCode>("PT")
  const [countryCode, setCountryCode] = useState<CountryCode>("FR")
  
  useEffect(() => {
    ;(async function load() {
      setIsLoading(true)
      setUserInfo({ name: "Anna", profession: "Frontend Developer" })
      setBio("lorem ipsum hello")
      setIsLoading(false)
    })()
  }, [])
  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <Button
        style={$styleBtn}
        LeftAccessory={(_props) => <Icon icon="back" color={colors.palette.red} />}
        onPress={() => _props.navigation.goBack()}
      >
        <Text preset="heading" size="sm" style={{ color: colors.palette.red }}>
          Back
        </Text>
      </Button>
      <Text preset="subheading">My Bio</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={$textField}
        onChangeText={setBio}
        value={bio}
      />
      <Text preset="subheading">My Basis</Text>
      <View style={$profileWrapper}>
        <View style={$profileContainer}>
          <Icon icon="work" color={colors.palette.neutral700} />
          <Text preset="formHelper" style={$textHeading} text="Work" />
        </View>
        <View style={$profileContainerInput}>
          <TextInput
            onChangeText={(value: string) => setUserInfo({ ...userInfo, profession: value })}
            value={userInfo?.profession}
          />
          <Icon icon="caretRight" color={colors.palette.neutral700} />
        </View>
      </View>
      <View style={$profileWrapper}>
        <View style={$profileContainer}>
        <CountryModal countryCode={liveIn} setCountryCode={setLiveIn} title="Live in" />
        </View>
        <View style={$profileContainer}>
        <CountryModal countryCode={from} setCountryCode={setFrom} title="From" />
        </View>
      </View>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.medium,
  margin: spacing.medium,
  borderRadius: spacing.large,
  backgroundColor: colors.palette.neutral100,
}
const $styleBtn: TextStyle = {
  borderRadius: 30,
  marginTop: spacing.tiny,
  marginBottom: spacing.tiny,
  backgroundColor: colors.palette.neutral100,
  borderColor: colors.palette.red,
  borderWidth: 2,
  paddingTop: spacing.micro,
  paddingHorizontal: spacing.medium,
  paddingBottom: 0,
  minHeight: 52,
  maxWidth: 110,
  display: "flex",
  justifyContent: "space-between",
}
const $textField: ViewStyle = {
  marginBottom: spacing.large,
  backgroundColor: colors.palette.neutral100,
  borderColor: colors.palette.neutral200,
  borderWidth: 1,
  borderRadius: spacing.medium,
  padding: spacing.medium,
  paddingVertical: spacing.large,
  minHeight: 100,
}

const $textHeading: ViewStyle = {
  paddingLeft: spacing.tiny,
}

const $profileWrapper: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  height: spacing.huge,
  alignContent: "center",
}

const $profileContainer: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  flex: 1,
  flexShrink: 2,
}

const $profileContainerInput: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  flexWrap: "wrap",
  flex: 1,
  flexGrow: 2,
  paddingTop: 2,
}
