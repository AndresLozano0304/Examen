import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isTemplateElement } from '@babel/types';


const HomeStack = createNativeStackNavigator();

function Home() {
  return (
    <HomeStack.Navigator initialRouteName="Listado">
      <HomeStack.Screen name="Listado" component={Usuarios} options={{ headerStyle: { backgroundColor: 'red' } }} />
      <HomeStack.Screen name="Filtro" component={FiltroScreen} options={{ headerStyle: { backgroundColor: 'red' } }} />
    </HomeStack.Navigator>

  );
}

const Tab = createBottomTabNavigator();



const styles = StyleSheet.create({
  textos: {
    backgroundColor: 'white',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white",
    justifyContent: 'center'

  },
  touchable: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20
  },
  header: {
    backgroundColor: 'red',
  },
  image: {
    height: 150, width: 150
  },
  textinput: {
    height: 15,
    width: 150
  }
});

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused
                ? 'body'
                : 'body';
            } else if (route.name === 'Usuarios') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
        })}
      >
        <Tab.Screen name="Historia" component={HistoriaScreen} options={{ headerStyle: { backgroundColor: 'red' } }} />
        <Tab.Screen name="Usuarios" component={Usuarios} options={{ headerStyle: { backgroundColor: 'red' } }} />

      </Tab.Navigator>
    </NavigationContainer>
  );

}

function HistoriaScreen() {

  return (

    <ScrollView>
      <View style={styles.view}>
        <Text style={styles.textos}>Bienvenidos a la Historia de los dispositivos</Text>
        <Image style={{ height: 200, width: 150 }} source={{ uri: 'https://m.media-amazon.com/images/I/81tnErm2w6L._AC_SX355_.jpg' }} />
        <Text>La primera red celular fue hecha en el año 1977 en Chicado y comenzó a funcionar bien en 1978.</Text>
        <Image style={{ height: 250, width: 200 }} source={{ uri: 'http://www.geekosystem.com/wp-content/uploads/2011/12/Orbitel_ascom-220x277.jpg' }} />
        <Text>En un principio éstos dispositivos sólo funcionaban para comunicarse por medio de llamadas de voz, sin embargo, en los años 90's fueron creados los SMS.</Text>
        <Image style={{ height: 250, width: 250 }} source={{ uri: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Psion_Organiser_II_-_270404_-_Modified.jpg/220px-Psion_Organiser_II_-_270404_-_Modified.jpg' }} />
        <Text>En 1998 se unieron las compañías Psion, Nokia, Ericsson y Motorola y crearon Symbian Ltd (Una empresa dedicada a desarrollo de Software). Ésta empresa creo el Symbian OS (Un sistema operativo diseñado especialmente para operar en dispositivos móviles). </Text>
        <Image style={{ height: 250, width: 300 }} source={{ uri: 'http://logout.hu/dl/cnt/2007-11/26292/ericsson_r380.jpg' }} />
      </View>
    </ScrollView>

  );
}


function Usuarios(navigation) {
  const [number, onChangeNumber] = React.useState(null);
  return (

    <View style={styles.view}>
      <Text>Busca los Usuarios por edad</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="EDAD"
        keyboardType="numeric"
      />
      <Button
        title='Buscar'
        onPress={() => navigation.navigate("Filtro", { number: number })}
      />

    </View>
  )

}

function FiltroScreen(route, navigation) {

  const users = [
    { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
    { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
    { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },
    { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' },
    { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
    { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
    { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
    { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
    { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
    { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
    { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
    { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
    { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
    { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
    { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
    { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
    { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
    { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' }
  ]
  function filtro(item) {
    if (item.age == route.params.number) {
      return <View>
        <Text>item.name</Text>
        <Text>item.age</Text>
      </View>
    }
  }
  return (

    <View>
      <FlatList
        data={users}
        renderItem={filtro}
        kayExtractor={item => item.id} />
    </View>
  );





}





