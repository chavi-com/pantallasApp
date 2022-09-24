//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"// aias de la pantalla
          component = {HomeScreen}
          options={{title:'Inicio'}}
        
        />
        <Stack.Screen

          name="Profile"
          component={ProfileScreen}
          options={{title:'perfil del ususario'}}
        />
        <Stack.Screen

          name="Dashboard"
          component={DeshboardScreen}
          options={{title:'***********'}}
        />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}
const HomeScreen = ({ navigation})=>{
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{backgroundColor:'purple', padding:10,borderRadius:10}}
        onPress={()=>{
          navigation.navigate('Profile', {name:'edison',username:'edisonchavi',rol:1})

        }
      }
      >
      
        <Text style={{color:'white', fontSize:20}}>Ir al Perfil De Ususario</Text>
      
      
      </TouchableOpacity>
      
    </View>
    
  );
}
const ProfileScreen = ({navigation, route})=>{
  return(
    <View style={styles.container}>
      <Text>Este es el ususario {route.params.username}, con nombre {route.params.name}</Text>

      <TouchableOpacity
        style={{backgroundColor:'purple', padding:10,borderRadius:10}}
        onPress={()=>{
          route.params.rol == 1 ? navigation.navigate('Dashboard') : navigation.navigate('Home')

        }
      }
      >
      
        <Text style={{color:'white', fontSize:20}}>Ingresar al panel de control</Text>
      
      
      </TouchableOpacity>
      

      
    </View>

  );
}

const DeshboardScreen = ({navigation})=>{
  return(
    <View style={styles.container}>
      <Text>Estas como ususario administrador del sistema</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


