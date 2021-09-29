import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text } from "native-base";
import React from "react";
import BaseApp from "./src";

export default function App() {
  return (
    <NativeBaseProvider>
      <BaseApp />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
