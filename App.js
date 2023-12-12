import { View, Text, StyleSheet, Button, TextInput, Switch, Pressable, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from "@react-navigation/native";


function telaCadastro() {
  
  const navigation = useNavigation()

  return (
    <View style={style.container}>
      
      <Text>Insira seu nickname: </Text>
      <TextInput/>
      <TextInput 
      />
      <Text>Insira seu email: </Text>
      <TextInput></TextInput>
      <Text>Crie sua senha: </Text>
      <TextInput secureTextEntry={true}></TextInput>
     
      <Pressable onPress={() => {
        navigation.navigate("inicioLog")
      }}>
        <Text>Cadastrar</Text>
      </Pressable>
      <Pressable title="fazer login"
      onPress={() => {
        navigation.navigate("telalogin")
      }}>
        <Text> Fazer login</Text>
      </Pressable>
   
  
    </View>
    
  )
}
function inicioLog() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Bem vindo! Parabens pelo cadastro</Text>
      <Pressable title="Voltar"
      onPress={() => {
        navigation.navigate("telaCadastro")
      }}>
      <Text>Voltar</Text>
      </Pressable>

      <Pressable title="Para o perfil"
      onPress={() => {
        navigation.navigate("perfil")
        
      }}>
        <Text>para o perfil</Text>
        </Pressable>
    </View>
  )
}
function inicial() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Image source={{
        uri: "https://www.puri.com.br/wp-content/uploads/2021/05/banner-item-5.png"
      }}
      style={style.image}
      />
      <br>
      </br>
      <Text>Bem vindo ao site.</Text>
      <Pressable title="Cadastrar"
      onPress={() => {
        navigation.navigate("telaCadastro")
      }}>
        <Text> Cadastrar</Text>
        </Pressable>
    </View>
  )
  }
function telalogin() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Insira seu email ou nickname:</Text>
      <TextInput></TextInput>
      <Text>Insira sua senha:</Text>
      <TextInput></TextInput>
      <Pressable title="Faça login"
      onPress={() => {
        navigation.navigate("inicioLog")
      }}>
        <Text>Faça seu login</Text>
        </Pressable>
    </View>
  )
}
function perfil() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Aqui esta seu perfil</Text>
      <Text>Perfil privado</Text>
     <Switch></Switch>
     <Text>Perfil profissional</Text>
     <Switch></Switch>
     <Text>Apagar/deslogar conta</Text>
      <Pressable title="Voltar"
      onPress={() => {
        navigation.navigate("inicioLog")
      }}>
        <Text>voltar</Text>
        </Pressable>
    </View>
  )
}
export default function App() {

  const Stack = createStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="inicial"> 
        <Stack.Screen name="telaCadastro" component={telaCadastro} />
        <Stack.Screen name="inicioLog" component={inicioLog} />
        <Stack.Screen name="inicial" component={inicial} />
        <Stack.Screen name="telalogin" component={telalogin} />
        <Stack.Screen name="perfil" component={perfil} />

       </Stack.Navigator>
    </NavigationContainer>
  )
  } 
 
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
backgroundColor: 'green',
  },
  
  image: { 
    width: 700,
    height: 200,
    borderRadius: 5

  }
})
