import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Layout = () => {
    return (
      <Router>
        <SafeAreaView style={styles.container}>
        <Stack>
          <Stack.Screen name="(home)" options={{ headerShown: false }}/>
        </Stack>
        </SafeAreaView>
      </Router>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Layout;