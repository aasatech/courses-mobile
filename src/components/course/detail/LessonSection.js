import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListTile from './ListTile';
import {GColor} from '../../../constants/Theme/Global';
import DownloadIcon from 'react-native-vector-icons/Ionicons';
import VideoPlay from 'react-native-vector-icons/Ionicons';
export default function LessonSection() {
  return (
    <View>
      <ListTile
        listStyle={styles.itemStyle}
        title="Introduction To Web Design"
        subTitle="5 lessons"
        description=""
        textColor={GColor.accent300}
        leading={
          <VideoPlay
            name="play-circle-outline"
            size={30}
            color={GColor.primary500}
          />
        }
        trailing={<DownloadIcon name="caret-down-circle-outline" size={23} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 5,
  },
  itemStyle: {
    backgroundColor: GColor.primary300,
    borderRadius: 0,
    marginHorizontal: 1,
  },
});
