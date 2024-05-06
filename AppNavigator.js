import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your Welcome, Login, and Signup components here
import Welcome from './screens/welcome';
import Login from './screens/login';
import Signup from './screens/signup';
import Home from './screens/home';
import Profile from './screens/profile';
import Brands from './screens/brands';
import Charlotte from './screens/charlotte';
import Hooligans from './screens/hooligans';
import Mnla from './screens/mnla';
import Offset from './screens/offset';
import Toughwave from './screens/toughwave';
import Faqs from './screens/faqs';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderSuccessScreen from './screens/OrderSuccessScreen'; 

import Cfolk from './items/charlottefolk1';
import Cfolk2 from './items/charlottefolk2';
import Cfolk3 from './items/charlottefolk3';
import Cfolk4 from './items/charlottefolk4';
import Cfolk5 from './items/charlottefolk5';
import Cfolk6 from './items/charlottefolk6';
import Hg1 from './items/hooligans1';
import Hg2 from './items/hooligans2';
import Hg3 from './items/hooligans3';
import Hg4 from './items/hooligans4';
import Hg5 from './items/hooligans5';
import Hg6 from './items/hooligans6';
import Mnla1 from './items/mnla1';
import Mnla2 from './items/mnla2';
import Mnla3 from './items/mnla3';
import Mnla4 from './items/mnla4';
import Mnla5 from './items/mnla5';
import Mnla6 from './items/mnla6';
import Os1 from './items/offset1';
import Os2 from './items/offset2';
import Os3 from './items/offset3';
import Os4 from './items/offset4';
import Os5 from './items/offset5';
import Os6 from './items/offset6';
import Tw1 from './items/toughwave1';
import Tw2 from './items/toughwave2';
import Tw3 from './items/toughwave3';
import Tw4 from './items/toughwave4';
import Tw5 from './items/toughwave5';
import Tw6 from './items/toughwave6';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator
        initialRouteName='Welcome'>
        <Stack.Screen
          name="Welcome"
          component={Welcome} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Faqs"
          component={Faqs}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Brands"
          component={Brands}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Charlotte"
          component={Charlotte}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Hooligans"
          component={Hooligans}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Mnla"
          component={Mnla}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Offset"
          component={Offset}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Toughwave"
          component={Toughwave}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="charlottefolk1"
          component={Cfolk}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="charlottefolk2"
          component={Cfolk2}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="charlottefolk3"
          component={Cfolk3}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="charlottefolk4"
          component={Cfolk4}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="charlottefolk5"
          component={Cfolk5}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="charlottefolk6"
          component={Cfolk6}
          options={{
            headerShown: true
          }}
        />
         <Stack.Screen
          name="hooligans1"
          component={Hg1}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="hooligans2"
          component={Hg2}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="hooligans3"
          component={Hg3}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="hooligans4"
          component={Hg4}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="hooligans5"
          component={Hg5}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="hooligans6"
          component={Hg6}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="mnla1"
          component={Mnla1}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="mnla2"
          component={Mnla2}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="mnla3"
          component={Mnla3}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="mnla4"
          component={Mnla4}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="mnla5"
          component={Mnla5}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="mnla6"
          component={Mnla6}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="offset1"
          component={Os1}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="offset2"
          component={Os2}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="offset3"
          component={Os3}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="offset4"
          component={Os4}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="offset5"
          component={Os5}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="offset6"
          component={Os6}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="toughwave1"
          component={Tw1}
          options={{
            headerShown: true
          }}
        />
                <Stack.Screen
          name="toughwave2"
          component={Tw2}
          options={{
            headerShown: true
          }}
        />
                <Stack.Screen
          name="toughwave3"
          component={Tw3}
          options={{
            headerShown: true
          }}
        />
                <Stack.Screen
          name="toughwave4"
          component={Tw4}
          options={{
            headerShown: true
          }}
        />
                <Stack.Screen
          name="toughwave5"
          component={Tw5}
          options={{
            headerShown: true
          }}
        />
                <Stack.Screen
          name="toughwave6"
          component={Tw6}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen name="Success" component={OrderSuccessScreen} />
        
      </Stack.Navigator>
    
  );
}

export default AppNavigator;
