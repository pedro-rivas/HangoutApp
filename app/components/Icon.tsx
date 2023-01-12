import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  icon: IconTypes
  color?: string
  size?: number
  style?: StyleProp<ImageStyle>
  containerStyle?: StyleProp<ViewStyle>
  onPress?: TouchableOpacityProps["onPress"]
}

export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  check: require("../../assets/icons/check.png"),
  clap: require("../../assets/icons/clap.png"),
  community: require("../../assets/icons/community.png"),
  components: require("../../assets/icons/components.png"),
  heart: require("../../assets/icons/heart.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  more: require("../../assets/icons/more.png"),
  pin: require("../../assets/icons/pin.png"),
  settings: require("../../assets/icons/settings.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
  home: require("../../assets/icons/home.png"),
  search: require("../../assets/icons/search.png"),
  message: require("../../assets/icons/messenger.png"),
  user: require("../../assets/icons/user.png"),
  work: require("../../assets/icons/suitcase.png"),
  location: require("../../assets/icons/location.png"),
  backpack: require("../../assets/icons/color/backpack.png"),
  basketball: require("../../assets/icons/color/basketball.png"),
  boardGame: require("../../assets/icons/color/board-game.png"),
  festivals: require("../../assets/icons/color/concert.png"),
  nightClubs: require("../../assets/icons/color/disco-ball.png"),
  marijuana: require("../../assets/icons/color/marijuana.png"),
  art: require("../../assets/icons/color/palette.png"),
  running: require("../../assets/icons/color/runner.png"),
  standUpComedy: require("../../assets/icons/color/standing.png"),
  beaches: require("../../assets/icons/color/vacations.png"),
  yoga: require("../../assets/icons/color/yoga.png"),
  glob: require("../../assets/icons/glob.png"),
  globo: require("../../assets/icons/globo.png"),

}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
}
