import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login'
import PetaLokasiObjek from './PetaLokasiObjek'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PetaLokasiObjek" component={PetaLokasiObjek} />
    </Stack.Navigator>
  );
}
export default MyStack
