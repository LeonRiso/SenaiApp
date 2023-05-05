import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CoursesScreen from './screens/CoursesScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Categorias' }} />
        <Stack.Screen name="Courses" component={CoursesScreen} options={({ route }) => ({ title: route.params.category })} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} options={({ route }) => ({ title: route.params.course.title })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
