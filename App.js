import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0a192f" }}>
      <WebView
        source={{ uri: "https://rakshacast-sih2026.surge.sh" }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}
