import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Card from './Card';
import axios from 'axios';

const EarthquakeList = props => {
  const { orderPriority } = props.route.params;
  const {navigation} = props;
  const [earthquakes, setEarthquakes] = useState([]);

  const url =
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';
  const getData = () => {
    const temporalData = [];
    axios.get(url).then(response => {
      const data = response.data;
      Object.values(data.features).forEach(item => {
        const current = {};
        current.id = item.id;
        current.magnitud = item.properties.mag;
        current.city = item.properties.place.split('of')[1]
          ? item.properties.place.split('of')[1]
          : item.properties.place;
        current.tsunami = item.properties.tsunami;
        current.cordinates = item.geometry.coordinates;
        current.place = item.properties.title;
        current.date = `${new Date(item.properties.time)}`;
        current.type = item.properties.type;
        current.aler = item.properties.alert;
        current.typemag = item.properties.magType;
        temporalData.push(current);
      });

      if (temporalData.length) {
        setEarthquakes(temporalData);
      }
      response.data = {};
    });
  };

  useEffect(() => {
    if (!earthquakes.length) {
      getData();
    } else {
      const intervalId = setInterval(() => {
        getData();
      }, 30000);
      return () => clearInterval(intervalId);
    }
  }, [earthquakes]);

  useEffect(() => {
    const orderComparation = (itemA, itemB) => {
      if (orderPriority > 0) {
        return itemA.magnitud - itemB.magnitud;
      } else if (orderPriority < 0) {
        return itemB.magnitud - itemA.magnitud;
      } else {
        return 0;
      }
    };
    const copy = [...earthquakes];
    copy.sort(orderComparation);
    setEarthquakes(copy);
  }, [orderPriority]);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={earthquakes}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Card data={item} navigation={navigation} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EarthquakeList;
