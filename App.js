import { View, Text, StyleSheet, Button, TextInput, Switch, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from "@react-navigation/native";


const image = {uri: 'https://static.escolakids.uol.com.br/2023/08/paisagem-natural-ilha.jpg'};
function telaCadastro() {
  
  const navigation = useNavigation()

  return (
    <View style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
      <Text style={style.text}></Text>
    </ImageBackground>
      <Text>Insira seu nickname: </Text>
      <TextInput/>
      <TextInput 
      />
      <Text>Insira seu email: </Text>
      <TextInput></TextInput>
      <Text>Crie sua senha: </Text>
      <TextInput secureTextEntry={true}></TextInput>
      <Button title="Cadastrar" onPress={() => {
        navigation.navigate("inicioLog")
      }}/>
      <Button title="fazer login"
      onPress={() => {
        navigation.navigate("telalogin")

      }}/>
    </View>
    
  )
}
function inicioLog() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Bem vindo! Parabens pelo cadastro</Text>
      <Button title="Voltar"
      onPress={() => {
        navigation.navigate("telaCadastro")

      }}/>
      <Button title="Para o perfil"
      onPress={() => {
        navigation.navigate("perfil")
        
      }}/>
    </View>
  )
}
function inicial() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text>Bem vindo ao site.</Text>
      <Button title="Cadastrar"
      onPress={() => {
        navigation.navigate("telaCadastro")
      }}/>
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
      <Button title="Faça login"
      onPress={() => {
        navigation.navigate("inicioLog")
      }}/>
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
      <Button title="Voltar"
      onPress={() => {
        navigation.navigate("inicioLog")
      }}/>
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
    alignItems: 'center'
  },
  image: {
   flex: 1,

    justifyContent: 'center',
  }
})
