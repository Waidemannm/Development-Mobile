import { Drawer } from "expo-router/drawer";
import {Feather} from "@expo/vector-icons"

export default () => {
    /*<Tabs>
            <Tabs.Screen name="index"
                options={{
                    tabBarIcon:()=><Feather name="home"/>,
                    title:"Inicio"
                }}/>
                <Tabs.Screen name="user"
                options={{
                    tabBarIcon:()=><Feather name="user"/>,
                    title:"Usuario"
                }}/>
        </Tabs>*/ 
    return(
        <Drawer>
            <Drawer.Screen name="index"
                options={{
                    drawerIcon:()=><Feather name="home"/>,
                    title:"Inicio"}}/>
            <Drawer.Screen name="user"
                options={{
                    drawerIcon:()=><Feather name="user"/>,
                    title:"Usuario"}}/>
            <Drawer.Screen name="service" options={{drawerIcon: ()=> <Feather name="settings"/>, title:"Serviçoes"}}/>
        </Drawer>
    )
}