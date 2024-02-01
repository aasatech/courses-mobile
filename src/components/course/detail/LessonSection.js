import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import ListTile from './ListTile';
import {GColor} from '../../../constants/Theme/Global';
import DownloadIcon from 'react-native-vector-icons/Ionicons';
import VideoPlay from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
export default function LessonSection({data = [], onSelectVideo}) {
  const lessonChapter = data?.lessons;

  return (
    <View>
      <FlatList
        data={lessonChapter}
        showsVerticalScrollIndicator={false}
        renderItem={item => (
          <ListTile
            listStyle={styles.itemStyle}
            title={item?.item?.name}
            subTitle={item?.item?.name}
            description=""
            textColor={GColor.accent300}
            leading={
              <TouchableOpacity
                onPress={onSelectVideo.bind(
                  null,
                  item?.item?.video_url,
                  item?.item?.image_url,
                )}>
                <VideoPlay
                  name="play-circle-outline"
                  size={30}
                  color={GColor.primary500}
                />
              </TouchableOpacity>
            }
            trailing={
              <DownloadIcon name="caret-down-circle-outline" size={23} />
            }
          />
        )}
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
