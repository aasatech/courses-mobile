import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TabButton from './TabButton';
import {useDispatch, useSelector} from 'react-redux';
import {filterCourses} from '../../redux/reducers/courseReducer';

export default function TabList({onSelectCategories, selectCategories}) {
  const store = useSelector(store => store.course);
  //   const [selectCategories, setSelectCategories] = useState([]);

  //   const onSelectCategories = id => {
  //     console.log(id);
  //     if (selectCategories.includes(id)) {
  //       setSelectCategories(pre => {
  //         return pre.filter(pre => pre !== id);
  //       });
  //       return;
  //     }
  //     setSelectCategories(pre => pre.concat(id));
  //   };
  //   console.log(selectCategories);

  //   useEffect(() => {
  //     dispatch(filterCourses(null, true, selectCategories, []));
  //   }, [selectCategories]);

  return (
    <View>
      <FlatList
        horizontal
        disableScrollViewPanResponder
        showsHorizontalScrollIndicator={false}
        data={store?.categories}
        renderItem={item => (
          <View style={styles.tabBar}>
            <TabButton
              id={item?.item?.id}
              label={item?.item?.name}
              selected={selectCategories.includes(item.item?.id)}
              onPress={onSelectCategories}
            />
          </View>
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
