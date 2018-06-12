import React from 'react';
import { Button, Image, View, TouchableOpacity } from 'react-native';
import { ImagePicker,Permissions } from 'expo';

const SeleccionarImagen = (props) => {
  const permiso = async () => {
    const response = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    console.log('Permisos->>>>' +response.status);
    return response;
  }
  const seleccionarImagen = async () => {
    const respuestaPermiso = await permiso();
    if(respuestaPermiso.status==='denied'){
      await Permissions.askAsync(Permissions.CAMERA_ROLL)
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);
    if (!result.cancelled) {
      props.cargar(result);
    }
  };

  const radius = { borderRadius: props.radius ? 80 : 0 };

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={seleccionarImagen}>
        {props.imagen ? (
          <Image
            source={{ uri: props.imagen.uri }}
            style={{ width: 160, height: 160, ...radius }}
          />
        ) : (
          <Image
            source={require('../assets/margarita.jpg')}
            style={{ width: 160, height: 160, ...radius }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;
