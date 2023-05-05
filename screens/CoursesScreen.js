import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';

const courses = [
  { id: '1', category: 'Técnicos', title: 'Curso Técnico em Automação Industrial', link: 'https://www.sp.senai.br/cursos/37690/722/automa%C3%A7%C3%A3o-industrial', description: 'Descrição do curso de Automação Industrial.' },
  { id: '2', category: 'Técnicos', title: 'Curso Técnico em Mecatrônica', link: 'https://www.sp.senai.br/cursos/37687/720/mecatr%C3%B4nica', description: 'Descrição do curso de Mecatrônica.' },
  { id: '3', category: 'CAI', title: 'Curso de Aprendizagem Industrial em Eletricidade', link: 'https://www.sp.senai.br/cursos/37670/691/eletricidade', description: 'Descrição do curso de Eletricidade.' },
  { id: '4', category: 'CAI', title: 'Curso de Aprendizagem Industrial em Mecânica', link: 'https://www.sp.senai.br/cursos/37672/692/mec%C3%A2nica', description: 'Descrição do curso de Mecânica.' },
  { id: '5', category: 'FIC', title: 'Curso de Fabricação de Pizzas', link: 'https://www.sp.senai.br/cursos/37645/640/fabrica%C3%A7%C3%A3o-de-pizzas', description: 'Descrição do curso de Fabricação de Pizzas.' },
  { id: '6', category: 'FIC', title: 'Curso de Excel Avançado', link: 'https://www.sp.senai.br/cursos/37636/623/excel-avan%C3%A7ado', description: 'Descrição do curso de Excel Avançado.' },
];


const CoursesScreen = ({ route, navigation }) => {
  const category = route.params.category;
    const coursesByCategory = courses.filter((course) => course.category === category);
  
    const handleCoursePress = (course) => {
      navigation.navigate('CourseDetails', { course });
    };
  

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.courseButton} onPress={() => handleCoursePress(item)}>
      <Text style={styles.courseButtonText}>{item.title}</Text>
      </TouchableOpacity>
      
      
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{category}</Text>
        <FlatList
          data={coursesByCategory}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.courseList}
        />
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
    courseList: {
      flex: 1,
      width: '100%',
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
  
  export default CoursesScreen;
  