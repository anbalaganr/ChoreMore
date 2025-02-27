import React from "react"
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import { Text } from "./Text"
import { useAppTheme } from "../utils/useAppTheme"
import { spacing } from "../theme"

export type FilterTabOption = "All" | "My Day" | "My Week"

interface SegmentedTabsProps {
  activeTab: FilterTabOption
  onTabChange: (tab: FilterTabOption) => void
}

export function SegmentedTabs({ activeTab, onTabChange }: SegmentedTabsProps) {
  const { theme } = useAppTheme()
  const { colors } = theme

  const tabs: FilterTabOption[] = ["All", "My Day", "My Week"]

  return (
    <View style={[$container, { backgroundColor: colors.tintInactive }]}>
      {tabs.map((tab) => {
        const isActive = tab === activeTab

        return (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange(tab)}
            style={[
              $tabButton,
              isActive && {
                backgroundColor: colors.tint,
                shadowOpacity: 0.1, // Optional subtle lift for iOS
                shadowRadius: 2,
                shadowOffset: { height: 1, width: 0 },
                elevation: 1, // Optional subtle lift for Android
              },
            ]}
            activeOpacity={0.9}
          >
            <Text
              text={tab}
              style={[$tabText, { color: isActive ? colors.background : colors.text }]}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const $container: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: spacing.xl,
  marginTop: spacing.md,
  gap: 3, // Consistent small gap between tabs
}

const $tabButton: ViewStyle = {
  flex: 1,
  paddingVertical: spacing.xxs,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: spacing.xl,
}

const $tabText: TextStyle = {
  fontSize: 13,
  fontWeight: "500",
}
