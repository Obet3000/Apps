import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Card = props => {
  const {data, navigation} = props;
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('details', {data: data});
      }}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.magContainer}>
            <Text style={styles.magnitud}>{data.magnitud.toFixed(2)}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.city}>{data.city}</Text>
          </View>
          <View style={[styles.dataContainer, {flex: 0.5}]}>
            <Text> button</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    opacity: 0.9,
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  magnitud: {
    color: '#000',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '600',
  },
  city: {
    paddingHorizontal: 15,
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '400',
  },
  dataContainer: {
    flex: 1,
  },
  magContainer: {
    flex: 0.5,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Card;
