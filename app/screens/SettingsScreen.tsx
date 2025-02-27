import { FC } from "react"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "@/navigators"
import { ListItem, Screen, Text } from "@/components"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { useAppTheme } from "@/utils/useAppTheme"
import { isRTL, TxKeyPath } from "@/i18n" // ✅ Import TxKeyPath for correct typing
import { ThemedStyle } from "@/theme"
import { $styles } from "@/theme"
import {
  Users,
  CheckCircle,
  UserCog,
  LogOut,
  MapPinHouse,
  CreditCard,
  Pencil,
  Paintbrush,
  Bell,
  CircleHelp,
  ShieldCheck,
} from "lucide-react-native"

interface SettingsScreenProps extends AppStackScreenProps<"Settings"> {}

export const SettingsScreen: FC<SettingsScreenProps> = () => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  // Function to apply rounded corners to first and last items
  const getListItemStyle = (index: number, totalItems: number) =>
    themed({
      ...$listItem,
      borderTopLeftRadius: index === 0 ? 10 : 0,
      borderTopRightRadius: index === 0 ? 10 : 0,
      borderBottomLeftRadius: index === totalItems - 1 ? 10 : 0,
      borderBottomRightRadius: index === totalItems - 1 ? 10 : 0,
    })

  // Sections with grouped settings (✅ Explicitly typed `TxKeyPath` for `tx`)
  const sections: { title: TxKeyPath; items: { tx: TxKeyPath; icon: JSX.Element }[] }[] = [
    {
      title: "settingsScreen:management.title" as TxKeyPath,
      items: [
        {
          tx: "settingsScreen:management.menuItems.managePlaces" as TxKeyPath,
          icon: <MapPinHouse color={colors.text} />,
        },
        {
          tx: "settingsScreen:management.menuItems.manageMembers" as TxKeyPath,
          icon: <Users color={colors.text} />,
        },
        {
          tx: "settingsScreen:management.menuItems.manageChores" as TxKeyPath,
          icon: <CheckCircle color={colors.text} />,
        },
      ],
    },
    {
      title: "settingsScreen:account.title" as TxKeyPath,
      items: [
        {
          tx: "settingsScreen:account.menuItems.accountSettings" as TxKeyPath,
          icon: <UserCog color={colors.text} />,
        },
        {
          tx: "settingsScreen:account.menuItems.logOut" as TxKeyPath,
          icon: <LogOut color={colors.text} />,
        },
      ],
    },
    {
      title: "settingsScreen:subscription.title" as TxKeyPath,
      items: [
        {
          tx: "settingsScreen:subscription.menuItems.manageSubscription" as TxKeyPath,
          icon: <CreditCard color={colors.text} />,
        },
      ],
    },
    {
      title: "settingsScreen:preferences.title" as TxKeyPath,
      items: [
        {
          tx: "settingsScreen:preferences.menuItems.appearance" as TxKeyPath,
          icon: <Paintbrush color={colors.text} />,
        },
        {
          tx: "settingsScreen:preferences.menuItems.choreEditor" as TxKeyPath,
          icon: <Pencil color={colors.text} />,
        },
        {
          tx: "settingsScreen:preferences.menuItems.notifications" as TxKeyPath,
          icon: <Bell color={colors.text} />,
        },
      ],
    },
    {
      title: "settingsScreen:resources.title" as TxKeyPath,
      items: [
        {
          tx: "settingsScreen:resources.menuItems.helpAndSupport" as TxKeyPath,
          icon: <CircleHelp color={colors.text} />,
        },
        {
          tx: "settingsScreen:resources.menuItems.privacyPolicy" as TxKeyPath,
          icon: <ShieldCheck color={colors.text} />,
        },
      ],
    },
  ]

  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={$styles.container}
      safeAreaEdges={["top"]}
    >
      <Text preset="heading" tx="settingsScreen:title" style={themed($title)} />

      {sections.map((section, sectionIndex) => (
        <View key={sectionIndex}>
          <Text preset="subheading" tx={section.title} style={themed($sectionTitle)} />
          <View style={themed($listGroup)}>
            {section.items.map((item, index) => (
              <ListItem
                key={item.tx}
                tx={item.tx}
                bottomSeparator={index !== section.items.length - 1}
                style={getListItemStyle(index, section.items.length)}
                LeftComponent={
                  <View style={[$styles.row, themed($logoContainer)]}>{item.icon}</View>
                }
                rightIcon={isRTL ? "caretLeft" : "caretRight"}
                onPress={() => openLinkInBrowser("https://reactnativeradio.com/")}
              />
            ))}
          </View>
        </View>
      ))}
    </Screen>
  )
}

// ✅ Theme-Based Styles (Fixed & Optimized)
const $root: ViewStyle = {
  flex: 1,
}

const $title: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.sm,
})

const $sectionTitle: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xxl,
  marginBottom: spacing.sm,
})

const $listGroup: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  backgroundColor: colors.palette.neutral100, // ✅ Light background for menu groups
  borderRadius: 10, // ✅ Rounded corners for groups
  overflow: "hidden", // ✅ Ensures child items respect the border radius
  marginBottom: spacing.md, // ✅ Adds spacing between groups
  paddingHorizontal: spacing.sm, // ✅ Ensures list items don't touch the edges
})

const $listItem: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  backgroundColor: colors.palette.neutral400, // ✅ Match section background
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.sm, // ✅ Smaller padding left & right
  marginHorizontal: spacing.sm, // ✅ Adds space between item & border
  borderBottomWidth: 1, // ✅ Ensures separator visibility
  borderBottomColor: colors.palette.neutral300, // ✅ Light gray separator color
})

const $logoContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginEnd: spacing.md,
  flexWrap: "wrap",
  alignContent: "center",
  alignSelf: "stretch",
})

export default SettingsScreen
