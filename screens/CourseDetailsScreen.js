import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const CourseDetailsScreen = ({ route }) => {
  const course = route.params.course;

  const handleCoursePress = () => {
    Linking.openURL(course.link);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <TouchableOpacity style={styles.courseButton} onPress={handleCoursePress}>
        <Text style={styles.courseButtonText}>Go to course website</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9e9d6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
  },
  courseButton: {
    backgroundColor: '#f5deb3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignSelf: 'stretch',
  },
  courseButtonText: {
    color: '#800000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CourseDetailsScreen;