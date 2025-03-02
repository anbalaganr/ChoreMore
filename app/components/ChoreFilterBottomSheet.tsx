import React, { useState, useRef, useMemo } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import BottomSheet from "@gorhom/bottom-sheet"

const FilterComponent = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ["25%", "50%"], [])

  return (
    <View style={styles.container}>
      <Button title="Show Bottom Sheet" onPress={() => bottomSheetRef.current?.expand()} />
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Button title="Close" onPress={() => bottomSheetRef.current?.close()} />
        </View>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  contentContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
})

export default FilterComponent
