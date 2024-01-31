import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CourseHeader from './CourseHeader';
import TabBarHorizontal from '../../ui/TabBarHorizontal';
import HeadLine from '../../ui/HeadLine';
import {GColor} from '../../../constants/Theme/Global';
import ListTile from './ListTile';

export default function HeaderCourse({onTap, tabItem}) {
  return (
    <View style={styles.bodyContainer}>
      <CourseHeader />
      <View style={{marginVertical: 15}}>
        <ListTile
          title="Panhavorn"
          description={'Mobile and Web App Developer'}
          textColor={GColor.primary300}
          leading={
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
          }
        />
      </View>
      <View
        style={{
          rowGap: 10,
        }}>
        <HeadLine label="What Will I learn?" size={'md'} />
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ut modi nemo iste animi deleniti aspernatur debitis, deserunt unde
          nisi. Quo accusamus numquam soluta suscipit doloribus, quasi deleniti
          iste. Ipsum!
        </Text>
      </View>


    </View>
  );
}
const styles = StyleSheet.create({
  imgView: {
    width: '100%',
    height: 300,
  },
  descriptionText: {
    textAlign: 'justify',
    color: GColor.grey500,
    lineHeight: 25,
  },
  bodyContainer: {
    padding: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
