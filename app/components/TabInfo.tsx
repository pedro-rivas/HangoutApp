import React from "react"
import { ImageStyle, ViewStyle } from "react-native"
import { useSharedValue, withSpring } from "react-native-reanimated"
import { Button, Icon, IconTypes, Text } from "../components"
import { colors, spacing } from "../theme"

interface TabInfoProps {
  icon: IconTypes
  title: string
  disabled: boolean
  isActive: boolean
  handleClick?: any
}
export function TabInfo(props: TabInfoProps) {
  const { icon, disabled, isActive, title, handleClick } = props

  const isSelected = useSharedValue(isActive ? 1 : 0)

  const handlePressFavorite = () => {
    // TODO: complete handle click
    handleClick()
    isSelected.value = withSpring(isSelected.value ? 0 : 1)
  }

  return (
    <Button
      onPress={handlePressFavorite}
      onLongPress={handlePressFavorite}
      style={[$unSelectedTabButton, isSelected && $selectedTabButton]}
      disabled={disabled}
      RightAccessory={(props) => (
        <Icon containerStyle={props.style} style={$iconStyle} icon={icon} />
      )}
    >
      <Text size="xxs" weight="medium" text={title} />
    </Button>
  )
}

const $unSelectedTabButton: ViewStyle = {
  borderRadius: 17,
  marginTop: spacing.medium,
  marginRight: spacing.tiny,
  backgroundColor: colors.palette.neutral100,
  borderColor: colors.palette.neutral300,
  paddingTop: spacing.micro,
  paddingBottom: 0,
  minHeight: 32,
  alignSelf: "flex-start",
}

const $selectedTabButton: ViewStyle = {
  borderColor: colors.palette.accent400,
  backgroundColor: colors.palette.accent200,
}
const $iconStyle: ImageStyle = { width: 18, height: 18 }
