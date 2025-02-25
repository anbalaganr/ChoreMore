import { FC } from "react"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { Screen, Text } from "@/components"
// import { useNavigation } from "@react-navigation/native"

interface AddChoreScreenProps extends AppStackScreenProps<"AddChore"> {}

export const AddChoreScreen: FC<AddChoreScreenProps> = () => {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="fixed" safeAreaEdges={["top", "bottom"]}>
      <Text text="addChore" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
