import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Icon } from "../components"
import { translate } from "@/i18n"
import {
  AddChoreScreen,
  HomeScreen,
  LeaderBoardScreen,
  SettingsScreen,
  StatisticsScreen,
  WelcomeScreen,
} from "@/screens"

import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import type { ThemedStyle } from "@/theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { useAppTheme } from "@/utils/useAppTheme"
import { Trophy, ChartPie, CheckCircle, Settings, Home, PlusCircle } from "lucide-react-native"

export type ChoreNavigatorParamList = {
  Home: undefined
  AddChore: undefined
  Statistics: undefined
  LeaderBoard: undefined
  Settings: undefined
}

export type ChroScreenProps<T extends keyof ChoreNavigatorParamList> = CompositeScreenProps<
  BottomTabScreenProps<ChoreNavigatorParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<ChoreNavigatorParamList>()

const Stack = createNativeStackNavigator<ChoreNavigatorParamList>()
export const ChoreNavigator = () => {
  const { bottom } = useSafeAreaInsets()
  const {
    themed,
    theme: { colors },
  } = useAppTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: themed([$tabBar, { height: bottom + 70 }]),
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: themed($tabBarLabel),
        tabBarItemStyle: themed($tabBarItem),
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: translate("homeScreen:title"),
          tabBarIcon: ({ focused }) => (
            <Home color={focused ? colors.tint : colors.tintInactive} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarLabel: translate("homeScreen:title"),
          tabBarIcon: ({ focused }) => (
            <ChartPie color={focused ? colors.tint : colors.tintInactive} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="AddChore"
        component={AddChoreScreen}
        options={{
          tabBarLabel: translate("homeScreen:title"),
          tabBarIcon: ({ focused }) => <PlusCircle color={colors.tint} size={30} />,
        }}
      />
      <Tab.Screen
        name="LeaderBoard"
        component={LeaderBoardScreen}
        options={{
          tabBarLabel: translate("homeScreen:title"),
          tabBarIcon: ({ focused }) => (
            <Trophy color={focused ? colors.tint : colors.tintInactive} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Settings color={focused ? colors.tint : colors.tintInactive} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ThemedStyle<ViewStyle> = ({ colors }) => ({
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
})

const $tabBarItem: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingTop: spacing.md,
})

const $tabBarLabel: ThemedStyle<TextStyle> = ({ colors, typography }) => ({
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  color: colors.text,
})
