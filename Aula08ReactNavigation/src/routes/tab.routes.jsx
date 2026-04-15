import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home"
import Login from "../screens/Login"
import Servicos from "../screens/servicos"
import {Feather} from "@expo/vector-icons"
 
const Tab = createBottomTabNavigator()
 
export default () =>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen
                name="home"
                component={Home}
                options={{tabBarIcon:()=><Feather name="home" color="red" size={26}/>}}            
            />  
            <Tab.Screen name="login" component={Login} options={{tabBarIcon:()=>
                <Feather name="log-in" color="green" size={26}/>}}/>  
            <Tab.Screen name="serviços" component={Servicos} options={{tabBarIcon:()=>
                <Feather name="server" color="purple" size={26}/>}}/>    
        </Tab.Navigator>
    )
}