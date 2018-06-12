import { StackNavigator } from 'react-navigation';
import Add from './Add';
import SeleccionarGaleria from './SeleccionarGaleria';

const StackAdd = StackNavigator({
    Add: {
    screen: Add,
  },
  Seleccion: {
    screen: SeleccionarGaleria,
    navigationOptions: {
        tabBarVisible: false,
    }
  },
});

export { StackAdd }