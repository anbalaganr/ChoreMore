import React from "react"
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import { Text } from "./Text"
import { Icon } from "./Icon"
import { useAppTheme } from "../utils/useAppTheme"
import { spacing } from "../theme"

interface HomeHeaderProps {
  greetingText: string
  onSettingsPress?: () => void
  onNotificationsPress?: () => void
  onProfilePress?: () => void
}

export function HomeHeader({
  greetingText,
  onSettingsPress,
  onNotificationsPress,
  onProfilePress,
}: HomeHeaderProps) {
  const { theme } = useAppTheme()
  const { colors } = theme

  return (
    <View style={$container}>
      <Text
        preset="heading"
        style={[$greetingText, { color: colors.text }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {greetingText}
      </Text>

      <View style={$spacer} />

      <View style={$iconsContainer}>
        <TouchableOpacity onPress={onSettingsPress}>
          <Icon icon="settings" color={colors.text} size={20} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onNotificationsPress}>
          <Icon icon="bell" color={colors.text} size={20} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onProfilePress}>
          <Icon icon="menu" color={colors.text} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",

  // Removed borderBottomWidth and borderBottomColor
}

const $greetingText: TextStyle = {
  flexShrink: 1,
}

const $spacer: ViewStyle = {
  width: spacing.lg,
}

const $iconsContainer: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
}
