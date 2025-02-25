import { FC } from "react"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen, Text } from "@/components"
// import { useNavigation } from "@react-navigation/native"

interface StatisticsScreenProps extends AppStackScreenProps<"Statistics"> {}

export const StatisticsScreen: FC<StatisticsScreenProps> = () => {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top", "bottom"]}>
      <Text text="statistics" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
