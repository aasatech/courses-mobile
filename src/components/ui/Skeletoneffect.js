import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GColor} from '../../constants/Theme/Global';
import BadgeCourse from '../course/BadgeCourse';
import HeadLine from './HeadLine';
import {Image} from 'react-native-svg';

const SkeletonUI = ({layout}) => {
  return (
    <SkeletonPlaceholder borderRadius={4} backgroundColor={GColor.primary350}>
      <View
        style={{
          width: '100%',
          height: 125,
          borderRadius: 10,
          marginVertical: 8,
        }}
      />

      <View
        style={[
          {
            flex: 1,
          },
          layout === 'card' && {flex: 0},
        ]}></View>
      <View style={styles.detailCourse}></View>
    </SkeletonPlaceholder>
  );
};
// const SkeletonUI = () => {
//   return (
//     <SkeletonPlaceholder borderRadius={4} backgroundColor={GColor.primary350}>
//       <View style={{flexDirection: 'column', alignItems: 'center'}}>
//         <View style={{width: '100%', height: 125, borderRadius: 10}} />
//         <View style={{marginLeft: 20}}>
//           <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18}}>
//             Hello world
//           </Text>
//         </View>
//       </View>
//     </SkeletonPlaceholder>
//   );
// };

const styles = StyleSheet.create({
  courseState: {
    flexDirection: 'row',
    gap: 15,
  },
  imageCard: {
    width: '100%',
    height: 150,
    borderRadius: 0,
  },
  outerContainer: {
    padding: 10,
    alignItems: 'center',
    gap: 12,
    marginVertical: 7,
    columnGap: 10,
    borderRadius: 7,
    backgroundColor: '#FFECAF',
    flexDirection: 'row',
  },
  outerCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    minHeight: 300,
    padding: 0,
  },

  detailCourse: {
    flex: 2,
    gap: 5,
    paddingHorizontal: 15,
  },
});
export default SkeletonUI;
