import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TabButton from './TabButton';
import {useDispatch, useSelector} from 'react-redux';
import {filterCourses} from '../../redux/reducers/courseReducer';
import {GColor} from '../../constants/Theme/Global';

export default function TabList({onSelectCategories, selectCategories}) {
  const store = useSelector(store => store.course);

  useEffect(() => {
    return () => {
 
    };
  }, []);

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={store?.categories}
        renderItem={item => (
          <>
            {/* {item.index === 0 && (
              <View style={styles.tabBar}>
                <TabButton
                  label={'Clear All'}
                  txtColor={GColor.primary300}
                  bgColor={GColor.secondary500}
                  onPress={() => onSelectCategories(null)}
                />
              </View>
            )} */}

            <View style={styles.tabBar}>
              <TabButton
                id={item?.item?.id}
                label={item?.item?.name}
                selected={selectCategories.includes(item.item?.id)}
                onPress={onSelectCategories}
              />
            </View>
          </>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    marginRight: 10,
  },
});
