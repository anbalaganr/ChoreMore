import React from "react"
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import { Text } from "./Text"
import { useAppTheme } from "../utils/useAppTheme"
import { spacing } from "../theme"

export interface SegmentedTabsProps<T extends string> {
  tabs: T[]
  activeTab: T
  onTabChange: (tab: T) => void
}

export function SegmentedTabs<T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: SegmentedTabsProps<T>) {
  const { theme } = useAppTheme()
  const { colors } = theme

  return (
    <View style={[$container, { backgroundColor: colors.tintInactive }]}>
      {tabs.map((tab, index) => {
        const isActive = tab === activeTab
        const isFirst = index === 0
        const isLast = index === tabs.length - 1

        return (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabChange(tab)}
            style={[
              $tabButton,
              isActive && {
                backgroundColor: colors.tint, // ✅ Active tab color
                borderRadius: spacing.xl, // ✅ Fully round when selected
              },
              !isActive &&
                isFirst && { borderTopLeftRadius: spacing.xl, borderBottomLeftRadius: spacing.xl },
              !isActive &&
                isLast && { borderTopRightRadius: spacing.xl, borderBottomRightRadius: spacing.xl },
            ]}
            activeOpacity={0.9}
          >
            <Text
              text={tab}
              style={[
                $tabText,
                { color: isActive ? colors.background : colors.text }, // ✅ Active text color
              ]}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

// ✅ Styles
const $container: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: spacing.xl, // ✅ Ensures container has rounded corners
  marginTop: spacing.md,
  padding: 3,
  position: "relative",
  overflow: "hidden",
}

// ✅ Tab Button (No Default Border Radius to Avoid Conflicts)
const $tabButton: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: spacing.xxs,
  marginHorizontal: 1, // ✅ Small gap to ensure rounding is visible
}

const $tabText: TextStyle = {
  fontSize: 13,
  fontWeight: "500",
}
