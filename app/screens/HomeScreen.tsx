import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { TabScreenProps } from "../navigators/BottomNavigator"
import { spacing } from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"

const reactNativeLiveLogo = require("../../assets/images/rnl-logo.png")
const reactNativeRadioLogo = require("../../assets/images/rnr-logo.png")
const reactNativeNewsletterLogo = require("../../assets/images/rnn-logo.png")

export const HomeScreen: FC<TabScreenProps<"HomeView">> = function HomeScreen(_props) {
  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text preset="heading" style={$title}>title</Text>
      <Text style={$tagline} >title</Text>

      <Text preset="subheading" >demoCommunityScreen.joinUsOnSlackTitle</Text>
      <Text style={$description}>demoCommunityScreen.joinUsOnSlack</Text>
      <ListItem
        leftIcon="slack"
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        onPress={() => openLinkInBrowser("https://community.infinite.red/")}
      >joinSlackLink</ListItem>

      <ListItem
        leftIcon="github"
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite")}
      >contributeToIgniteLink</ListItem>

      <Text
        preset="subheading"
        style={$sectionTitle}
      >theLatestInReactNativeTitle</Text>
      <Text style={$description}>theLatestInReactNative</Text>
      <ListItem
        bottomSeparator
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        LeftComponent={
          <View style={$logoContainer}>
            <Image source={reactNativeRadioLogo} style={$logo} />
          </View>
        }
        onPress={() => openLinkInBrowser("https://reactnativeradio.com/")}
      >reactNativeRadioLink</ListItem>
      <ListItem
        bottomSeparator
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        LeftComponent={
          <View style={$logoContainer}>
            <Image source={reactNativeNewsletterLogo} style={$logo} />
          </View>
        }
        onPress={() => openLinkInBrowser("https://reactnativenewsletter.com/")}
      >reactNativeNewsletterLink</ListItem>
      <ListItem
        bottomSeparator
        rightIcon={isRTL ? "caretLeft" : "caretRight"}
        LeftComponent={
          <View style={$logoContainer}>
            <Image source={reactNativeLiveLogo} style={$logo} />
          </View>
        }
        onPress={() => openLinkInBrowser("https://rn.live/")}
      >reactNativeLiveLink</ListItem>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.large + spacing.extraLarge,
  paddingHorizontal: spacing.large,
}

const $title: TextStyle = {
  marginBottom: spacing.small,
}

const $tagline: TextStyle = {
  marginBottom: spacing.huge,
}

const $description: TextStyle = {
  marginBottom: spacing.large,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.huge,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.medium,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}

// @demo remove-file
