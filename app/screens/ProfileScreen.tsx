/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { View, ViewStyle, TextStyle } from "react-native"

import { AutoImage, Icon, Screen, Text, TabInfo, Button } from "../components"
import { useStores } from "../models"

import { TabScreenProps } from "../navigators/BottomNavigator"
import { spacing } from "../theme"
import { colors } from "../theme/colors"
// import { emojiFlag } from "../utils/emojFlag"
// import countryFlagEmoji from "country-flag-emoji";
export const ProfileScreen: FC<TabScreenProps<"Profile">> = observer(function ProfileScreen(
  _props,
) {
  const { episodeStore } = useStores()

  const [refreshing, setRefreshing] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [userInfo, setUserInfo] = React.useState<{
    name: string
    profession?: string
  }>()
  const [interest, setInterest] = React.useState<[]>([])
  const [bio, setBio] = React.useState<string>()
  const [currentLocation, setCurrentLocation] = React.useState<string>("Lisbon")
  const [from, setFrom] = React.useState<string>("PL")
  const [liveIn, setLiveIn] = React.useState<string>("PT")
  // initially, kick off a background refresh without the refreshing UI
  useEffect(() => {
    ;(async function load() {
      setIsLoading(true)
      await episodeStore.fetchEpisodes()
      setUserInfo({ name: "Anna", profession: "Frontend Developer" })
      setBio("lorem ipsum hello")
      setIsLoading(false)
      // console.log(countryFlagEmoji.list);
    })()
  }, [episodeStore])

  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <View style={$alignmentWrapper}>
        <AutoImage
          maxWidth={150}
          maxHeight={150}
          style={{ borderRadius: 150, width: 150, height: 150 }}
          source={{
            uri: "https://user-images.githubusercontent.com/1775841/184508739-f90d0ce5-7219-42fd-a91f-3382d016eae0.png",
          }}
        />
        <Button
          style={$styleBtn}
          RightAccessory={(_props) => <Icon icon="caretRight" color={colors.palette.red} />}
          onPress={() => _props.navigation.navigate("EditProfile")}
        >
          <Text preset="heading" size="sm" style={{ color: colors.palette.red }}>
            Edit profile
          </Text>
        </Button>
        <Text preset="heading" size="xl">
          {userInfo?.name}
        </Text>
        {userInfo?.profession && (
          <View style={$infoSection}>
            <Text preset="subheading" size="md">
              <Icon icon="work" size={18} style={{ marginTop: 5, marginRight: 5 }} />
              {userInfo?.profession}{" "}
            </Text>
          </View>
        )}
      </View>
      {bio?.length > 0 && (
        <View style={$screenInfoContainer}>
          <Text preset="heading" size="xl">
            Bio
          </Text>
          <Text preset="default" size="sm">
            {bio}
          </Text>
        </View>
      )}
      {currentLocation && (
        <View style={$screenInfoContainer}>
          <Text preset="subheading" size="sm">
            <Icon icon="location" size={18} style={{ marginTop: 5, marginRight: 5 }} />
            {currentLocation}
          </Text>
        </View>
      )}
      {/* {countryFlagEmoji.list.map((item: any)=> {
        return(
          <Text preset="subheading" size="sm" key={item.code}>
          {item.emoji}
        </Text>
        )
      })} */}
      {/* <View style={$alignmentInterestCategories}>
        {from && (
          <Button style={$locationInfo} disabled={true}>
            <Text preset="subheading" size="sm">
              From {emojiFlag("pl")}
            </Text>
          </Button>
        )}
        {liveIn && (
          <Button style={$locationInfo} disabled={true}>
            <Text preset="subheading" size="sm">
              Live in {emojiFlag("pt")}
            </Text>
          </Button>
        )}
      </View> */}
    </Screen>
  )
})

// #region Styles
const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.medium,
  backgroundColor: colors.palette.neutral100,
  margin: spacing.medium,
  borderRadius: spacing.large,
  minHeight: 280,
}
const $screenInfoContainer: ViewStyle = {
  marginTop: spacing.medium,
}

const $alignmentWrapper: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  height: 300,
}

const $infoSection: ViewStyle = {
  flex: 1,
}

const $alignmentInterestCategories: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
}
const $locationInfo: ViewStyle = {
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
  maxWidth: 160,
  display: "flex",
  justifyContent: "space-between",
}
