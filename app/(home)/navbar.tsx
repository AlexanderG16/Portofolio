import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useLocation } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={isActive('/') ? [styles.navItem, styles.activeNavItem] : styles.navItem}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Text style={isActive('/') ? styles.activeText : styles.text}>Home</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={isActive('/portofolio') ? [styles.navItem, styles.activeNavItem] : styles.navItem}>
        <Link to="/portofolio" style={{ textDecoration: 'none' }}>
          <Text style={isActive('/portofolio') ? styles.activeText : styles.text}>Portofolio</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  navItem: {
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  activeNavItem: {
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  activeText: {
    color: 'black',
    fontSize: 18,
  },
});

export default Navbar;
