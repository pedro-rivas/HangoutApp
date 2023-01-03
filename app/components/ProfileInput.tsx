import React from "react"
import { ImageStyle, ViewStyle, View, TextInput } from "react-native"
import { Icon, IconTypes, Text } from "../components"
import { colors, spacing } from "../theme"

interface ProfileInputProps {
  icon: IconTypes
  title?: string
  subtitle?: string
  handleChange: any
}
export function ProfileInput(props: ProfileInputProps) {
  const { icon, title, subtitle, handleChange } = props

  return (
    <View style={$profileWrapper}>
      <View style={$profileContent}>
        <Text preset="formHelper" style={$textHeading}>
          {title}
        </Text>
        <Icon icon={icon} style={$iconStyle} />
      </View>
      <View>
        <Icon icon="caretRight" />
        <TextInput style={$inputStyle} onChangeText={handleChange} value={subtitle} />
      </View>
    </View>
  )
}

const $profileWrapper: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "full",
  borderWidth: 2,
  borderColor: colors.palette.accent400,
}

const $profileContent: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: 100,
  borderWidth: 2,
  borderColor: colors.palette.accent400,
}
const $iconStyle: ImageStyle = { width: 10, height: 10 }

const $topSection: ViewStyle = {
  flex: 1,
  alignItems: "center",
}

const $textHeading: ViewStyle = {
  paddingLeft: spacing.medium,
}

const $inputStyle: ViewStyle = {
  width: 100,
}
