import { FC } from "react"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen, Text } from "@/components"
// import { useNavigation } from "@react-navigation/native"

interface LeaderBoardScreenProps extends AppStackScreenProps<"LeaderBoard"> {}

export const LeaderBoardScreen: FC<LeaderBoardScreenProps> = () => {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="fixed" safeAreaEdges={["top", "bottom"]}>
      <Text text="leaderBoard" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
