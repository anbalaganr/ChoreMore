import React, { useState, FC } from "react"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen, Text } from "@/components"
import { HomeHeader } from "@/components/HomeHeader"
import { SegmentedTabs } from "@/components/SegmentedTabs"
import { $styles } from "../theme"
// import { useNavigation } from "@react-navigation/native"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export type FilterTabOption = "All" | "My Day" | "My Week"

export const HomeScreen: FC<HomeScreenProps> = () => {
  const [activeTab, setActiveTab] = useState<FilterTabOption>("All")

  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={$styles.container}
      safeAreaEdges={["top", "bottom"]}
    >
      <HomeHeader
        greetingText="Hi Anbalagan Rajagopal"
        onSettingsPress={() => console.log("Settings Pressed")}
        onNotificationsPress={() => console.log("Notifications Pressed")}
        onProfilePress={() => console.log("Profile Pressed")}
      />

      <SegmentedTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <Text text="home" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
