import React from "react"
import { Image, ImageProps, ImageStyle, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { translate } from "../i18n"
import { spacing } from "../theme"
import { Button, ButtonProps } from "./Button"
import { Text, TextProps } from "./Text"

const sadFace = require("../../assets/images/sad-face.png")

interface EmptyStateProps {
  preset?: keyof typeof EmptyStatePresets
  style?: StyleProp<ViewStyle>
  imageSource?: ImageProps["source"]
  imageStyle?: StyleProp<ImageStyle>
  ImageProps?: Omit<ImageProps, "source">
  heading?: string
  headingStyle?: StyleProp<TextStyle>
  HeadingTextProps?: TextProps
  content?: TextProps["text"]
  contentStyle?: StyleProp<TextStyle>
  ContentTextProps?: TextProps
  button?: TextProps["text"]
  buttonStyle?: ButtonProps["style"]
  buttonTextStyle?: ButtonProps["textStyle"]
  buttonOnPress?: ButtonProps["onPress"]
  ButtonProps?: ButtonProps
}

const EmptyStatePresets = {
  generic: {
    imageSource: sadFace,
    heading: translate("emptyStateComponent.generic.heading"),
    content: translate("emptyStateComponent.generic.content"),
    button: translate("emptyStateComponent.generic.button"),
  },
} as const

/**
 * A component to use when there is no data to display. It can be utilized to direct the user what to do next.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-EmptyState.md)
 */
export function EmptyState(props: EmptyStateProps) {
  const preset = EmptyStatePresets[props.preset] ? EmptyStatePresets[props.preset] : undefined

  const {
    button = preset?.button,
    buttonOnPress,
    content = preset?.content,
    heading = preset?.heading,
    imageSource = preset?.imageSource,
    style: $containerStyleOverride,
    buttonStyle: $buttonStyleOverride,
    buttonTextStyle: $buttonTextStyleOverride,
    contentStyle: $contentStyleOverride,
    headingStyle: $headingStyleOverride,
    imageStyle: $imageStyleOverride,
    ButtonProps,
    ContentTextProps,
    HeadingTextProps,
    ImageProps,
  } = props

  const isImagePresent = !!imageSource
  const isHeadingPresent = !!heading
  const isContentPresent = !!content
  const isButtonPresent = !!(button)

  const $containerStyles = [$containerStyleOverride]
  const $imageStyles = [
    $image,
    (isHeadingPresent || isContentPresent || isButtonPresent) && { marginBottom: spacing.micro },
    $imageStyleOverride,
    ImageProps?.style,
  ]
  const $headingStyles = [
    $heading,
    isImagePresent && { marginTop: spacing.micro },
    (isContentPresent || isButtonPresent) && { marginBottom: spacing.micro },
    $headingStyleOverride,
    HeadingTextProps?.style,
  ]
  const $contentStyles = [
    $content,
    (isImagePresent || isHeadingPresent) && { marginTop: spacing.micro },
    isButtonPresent && { marginBottom: spacing.micro },
    $contentStyleOverride,
    ContentTextProps?.style,
  ]
  const $buttonStyles = [
    (isImagePresent || isHeadingPresent || isContentPresent) && { marginTop: spacing.extraLarge },
    $buttonStyleOverride,
    ButtonProps?.style,
  ]

  return (
    <View style={$containerStyles}>
      {isImagePresent && <Image source={imageSource} {...ImageProps} style={$imageStyles} />}

      {isHeadingPresent && (
        <Text preset="subheading" text={heading} {...HeadingTextProps} style={$headingStyles}>
          /
        </Text>
      )}

      {isContentPresent && (
        <Text text={content} {...ContentTextProps} style={$contentStyles}>
          {" "}
          /
        </Text>
      )}

      {isButtonPresent && (
        <Button
          onPress={buttonOnPress}
          text={button}
          textStyle={$buttonTextStyleOverride}
          {...ButtonProps}
          style={$buttonStyles}
        />
      )}
    </View>
  )
}

const $image: ImageStyle = { alignSelf: "center" }
const $heading: TextStyle = { textAlign: "center", paddingHorizontal: spacing.large }
const $content: TextStyle = { textAlign: "center", paddingHorizontal: spacing.large }
