import { Drawer } from "expo-router/drawer";
import {Feather} from "@expo/vector-icons"
import { CounterProvider } from "../src/context/Counter";


export default function Layout(){
    return(
        <CounterProvider>
            <Drawer>
                <Drawer.Screen name="home" options={{
                        drawerIcon:()=><Feather name="home"/>,
                        title:"Inicio"}}/>
                <Drawer.Screen name="details" options={{
                        drawerIcon:()=><Feather name="info"/>,
                        title:"Detalhes"}}/>
            </Drawer>
        </CounterProvider>
    );
}