import React, { FC } from "react"

import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../components"
import { TabScreenProps } from "../navigators/BottomNavigator"
import { colors, spacing } from "../theme"
import { useStores } from "../models"

export const MessagesScreen: FC<TabScreenProps<"Messages">> = function MessagesScreen(_props) {
  const {
    authenticationStore: { logout },
  } = useStores()

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <Text
        style={$reportBugsLink}
        // tx="demoDebugScreen.reportBugs"
        // onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite/issues")}
      >
        Messages
      </Text>
      {/* <Text style={$title} preset="heading" tx="demoDebugScreen.title" />
      <View style={$itemsContainer}>
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Id</Text>
              <Text>{Application.applicationId}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Name</Text>
              <Text>{Application.applicationName}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Version</Text>
              <Text>{Application.nativeApplicationVersion}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">App Build Version</Text>
              <Text>{Application.nativeBuildVersion}</Text>
            </View>
          }
        />
        <ListItem
          LeftComponent={
            <View style={$item}>
              <Text preset="bold">Hermes Enabled</Text>
              <Text>{String(usingHermes)}</Text>
            </View>
          }
        />
      </View>
      <View style={$buttonContainer}>
        <Button style={$button} tx="demoDebugScreen.reactotron" onPress={demoReactotron} />
        <Text style={$hint} tx={`demoDebugScreen.${Platform.OS}ReactotronHint` as const} />
      </View> */}
      <View style={$buttonContainer}>
        <Button style={$button} onPress={logout} >logout </Button>
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.large + spacing.extraLarge,
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $reportBugsLink: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.large,
  alignSelf: "flex-end",
}

// const $item: ViewStyle = {
//   marginBottom: spacing.medium,
// }

// const $itemsContainer: ViewStyle = {
//   marginBottom: spacing.extraLarge,
// }

const $button: ViewStyle = {
  marginBottom: spacing.extraSmall,
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.medium,
}

// const $hint: TextStyle = {
//   color: colors.palette.neutral600,
//   fontSize: 12,
//   lineHeight: 15,
//   paddingBottom: spacing.large,
// }

// @demo remove-file
