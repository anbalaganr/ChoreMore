import { FC } from "react"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen, Text } from "@/components"
import { useAppTheme } from "@/utils/useAppTheme"
import { isRTL, TxKeyPath } from "@/i18n" // ✅ Import TxKeyPath for correct typing
import { ThemedStyle } from "@/theme"
import { $styles } from "@/theme"

interface AddChoreScreenProps extends AppStackScreenProps<"AddChore"> {}

export const AddChoreScreen: FC<AddChoreScreenProps> = () => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={$styles.container}
      safeAreaEdges={["top"]}
    >
      <Text preset="heading" tx="addChoreScreen:title" style={themed($title)} />
    </Screen>
  )
}

const $title: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.sm,
})

const $root: ViewStyle = {
  flex: 1,
}
