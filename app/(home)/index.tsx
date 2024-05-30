import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import { BrowserRouter as Router } from 'react-router-dom';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Kaneda-Gothic': require('@/assets/fonts/KanedaGothic-ExtraBoldItalic.ttf')
  });

  const slideAnim = useRef(new Animated.Value(100)).current; // Initial value for Y-axis position
  const opacityAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start();
  }, [slideAnim, opacityAnim]);

  if (!fontsLoaded) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  return (
      <View style={styles.container}>
        <Animated.View style={[styles.animatedContainer, { transform: [{ translateY: slideAnim }], opacity: opacityAnim }]}>
          <Text style={styles.title}>MIKAEL ALEXANDER GUNAWAN</Text>
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.description}>
                MY PORTOFOLIO
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedContainer: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'Kaneda-Gothic',
    fontSize: 72,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginLeft: 20,
  },
  description: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
