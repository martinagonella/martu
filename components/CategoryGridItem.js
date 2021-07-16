import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native';

const CategoryGridItem = ({ item, onSelected }) => {
  const TouchableComponent = Platform.OS === 'android' && Platform.version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TouchableComponent
        onPress={() => onSelected(item)}
        style={{ ...styles.container, backgroundColor: item.color }}
      >
        <View>
          <Text styles={styles.title}>{item.name}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 10,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'open-sans-bold',
    textAlign: 'left',
  }
});

export default CategoryGridItem;