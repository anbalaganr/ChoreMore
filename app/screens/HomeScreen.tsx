import React, { useState, FC } from "react"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen, Text } from "@/components"
import { HomeHeader } from "@/components/HomeHeader"
import { SegmentedTabs } from "@/components/SegmentedTabs"
import { $styles } from "../theme"
import { useAppTheme } from "@/utils/useAppTheme"

// import { useNavigation } from "@react-navigation/native"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export type FilterTabOption = "All" | "My Day" | "My Week" | "Upcoming"
export type FilterTabOption1 = "1y" | "2y" | "3y" | "4y"

export const HomeScreen: FC<HomeScreenProps> = () => {
  const { theme } = useAppTheme() // ✅ Get theme colors
  const { colors } = theme

  const [activeTab, setActiveTab] = useState("All") // ✅ Track active tab

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

      <SegmentedTabs
        tabs={["All", "My Day"]} // ✅ Pass any dynamic tabs
        activeTab={activeTab}
        onTabChange={setActiveTab} // ✅ Updates the state when a tab is clicked
      />

      <Text text="home" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
