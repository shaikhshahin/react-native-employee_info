import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DrawerItems from './constants/DrawerItems';
import HomeScreen from './screens/Home';
import EmployeeScreen from './screens/Employee';
import store from './redux_folder/store';
import { Provider as StateProvider } from 'react-redux';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <StateProvider store={store}>

    <NavigationContainer>
<Drawer.Navigator 
        drawerType="front"
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}
       
      >
        {
          DrawerItems.map(drawer=><Drawer.Screen 
            key={drawer.name}
            name={drawer.name} 
            options={{
            drawerIcon:({focused})=>
             drawer.iconType==='Material' ? 
              <MaterialCommunityIcons 
                  name={drawer.iconName}
                  size={24} 
                  color={focused ? "#e91e63" : "black"} 
              />
            :
            drawer.iconType==='Feather' ?
              <Feather 
                name={drawer.iconName}
                size={24} 
                color={focused ? "#e91e63" : "black"} 
              /> 
            :
              <FontAwesome5 
                name={drawer.iconName}
                size={24} 
                color={focused ? "#e91e63" : "black"} 
              />
            ,
                headerShown:true,
                // header: ({ scene }) => {
                //   const { options } = scene.descriptor;
                //   const title =
                //     options.headerTitle !== undefined
                //       ? options.headerTitle
                //       : options.title !== undefined
                //       ? options.title
                //       : scene.route.name;
                
                //   return (r
                //     <Header screen={title}/>
                //   );
                // }
          
            }} 
            component={
              drawer.name==='Home' ? HomeScreen 
                : drawer.name==='Employee' ? EmployeeScreen 
                    : ReferScreen
            } 
          />)
        }
      </Drawer.Navigator>
    </NavigationContainer>
    </StateProvider>
  );
}