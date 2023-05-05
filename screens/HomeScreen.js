import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate('Courses', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SENAI</Text>
      <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('Técnicos')}>
        <Text style={styles.categoryButtonText}>Técnicos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('CAI')}>
        <Text style={styles.categoryButtonText}>CAI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => handleCategoryPress('FIC')}>
        <Text style={styles.categoryButtonText}>FIC</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>© 2023 工业学徒服务</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9e9d6',
  },
  headerText: {
    color: '#800000',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  categoryButton: {
    backgroundColor: '#f5deb3',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  categoryButtonText: {
    color: '#800000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    color: '#800000',
    fontSize: 16,
    textAlign: 'center',
    textShadowColor: '#fff',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
});

export default CategoriesScreen;
