import React, {} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const DetailView = props => {
  const {data} = props.route.params;

  const determineColor = magnitud => {
    let ans = 0;
    if (magnitud > 3 && magnitud <= 4.5) {
      ans = 1;
    } else if (magnitud > 4.5) {
      ans = 2;
    }
    return ans;
  };
  const coordinates = {
    longitude: data.cordinates[0],
    latitude: data.cordinates[1],
    latitudeDelta: 0.9,
    longitudeDelta: 0.9,
    // depth: 3.83
  };

  const colors = ['#d9f7c6', '#eee7a1', '#f78d87'];

  return (
    <View style={styles.container}>
      <View style={[styles.container]}>
        <MapView style={styles.map} initialRegion={coordinates}>
          <Marker coordinate={coordinates} />
        </MapView>
      </View>
      <ScrollView style={styles.container}>
        <View style={[styles.container, {margin: 10}]}>
          {console.log(data)}
          <View
            style={[
              styles.titleContainer,
              {
                backgroundColor: colors[determineColor(data.magnitud)],
              },
            ]}>
            <Text style={styles.title}>{data.city}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.cellContainer}>
              <View style={styles.identifierContainer}>
                <Text style={styles.identifier}> Magnitud </Text>
              </View>
              <View style={styles.dataCellContainer}>
                <Text style={styles.data}>
                  {data.magnitud} {data.typemag}
                </Text>
              </View>
            </View>
            <View style={styles.cellContainer}>
              <View style={styles.identifierContainer}>
                <Text style={styles.identifier}> Profundidad </Text>
              </View>
              <View style={styles.dataCellContainer}>
                <Text style={styles.data}>{data.cordinates[2]} Km</Text>
              </View>
            </View>
            <View style={styles.cellContainer}>
              <View style={styles.identifierContainer}>
                <Text style={styles.identifier}> Fecha </Text>
              </View>
              <View style={styles.dataCellContainer}>
                <Text style={styles.data}>{data.date}</Text>
              </View>
            </View>
            <View style={styles.cellContainer}>
              <View style={styles.identifierContainer}>
                <Text style={styles.identifier}> Tipo de Sismo </Text>
              </View>
              <View style={styles.dataCellContainer}>
                <Text style={styles.data}>{data.type}</Text>
              </View>
            </View>
            <View style={styles.cellContainer}>
              <View style={styles.identifierContainer}>
                <Text style={styles.identifier}> Tsunamis </Text>
              </View>
              <View style={styles.dataCellContainer}>
                <Text style={styles.data}>{data.tsunami}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.moreInfoContainer}>
          <View style={styles.titleInfoContainer}>
            <Text style={styles.titleInfo}> Más Información</Text>
          </View>
          <View style={styles.infoJsonContainer}>
            <Text style={styles.infoJson}>
              {' '}
              {JSON.stringify(data, null, 4)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom: 20,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    padding: 15,
  },
  identifier: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  data: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  cellContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  identifierContainer: {
    flex: 0.5,
    justifyContent: 'center',
    padding: 4,
  },
  dataCellContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    padding: 10,
    borderRadius: 25,
  },
  moreInfoContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: '#F0F8FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 10,
    marginBottom: 40,
  },
  titleInfoContainer: {
    flex: 0.5,
    alignContent: 'center',
  },
  titleInfo: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  infoJsonContainer: {
    flex: 1,
    padding: 10,
  },
  infoJson: {
    color: '#000',
    fontSize: 15,
    textAlign: 'justify',
  },
});

export default DetailView;
