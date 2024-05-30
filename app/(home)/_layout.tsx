import React from 'react';
import { SafeAreaView, StyleSheet, Switch } from 'react-native';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './index';
import Portofolio from './portofolio';
import { useRootNavigationState, Slot } from 'expo-router';


const Layout = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/portfolio" element={<Portofolio />} />
            {/* Other routes here */}
          </Routes>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Layout;
