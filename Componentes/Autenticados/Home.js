// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { actionDescargarPublicaciones } from '../../Store/ACCIONES';
import Publicacion from './Publicacion';

// create a component
class Home extends Component {
  componentDidMount() {
    this.props.descargarPublicaciones();
  }
  render() {
    console.log('publicaciones->'+this.props.publicaciones);    
    const { navigation, autores } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.publicaciones}
          renderItem={({ item, index }) => <Publicacion item={item} autor={autores[index]}/>}
          ItemSeparatorComponent={() => <View style={styles.separador} />}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  separador: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
  },
});

// make this component available to the app
const mapStateToProps = state => ({
  publicaciones: state.reducerPublicacionesDescargadas,
  autores: state.reducerAutoresDescargados,
});

const mapDispatchToProps = dispatch => ({
  descargarPublicaciones: () => {
    dispatch(actionDescargarPublicaciones());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
