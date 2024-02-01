/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Layout from '../../ui/Layout';
import {GColor} from '../../../constants/Theme/Global';

export const SkeletonCourseDetail = ({layout}) => {
  return (
    <Layout space={0}>
      <SkeletonPlaceholder borderRadius={4} backgroundColor={GColor.primary350}>
        <View
          style={{
            width: '100%',
            height: 230,
     
          }}
        />

        <View
          style={[
            {
              flex: 1,
            },
          ]}></View>
        <View style={styles.detailCourse}></View>
      </SkeletonPlaceholder>
    </Layout>
  );
};

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
