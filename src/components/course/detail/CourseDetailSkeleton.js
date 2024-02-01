/* eslint-disable react/self-closing-comp */
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

        <View style={{flexDirection: 'row', gap: 5, marginVertical: 10}}>
          {Array.from({length: 3}, (item, index) => (
            <View
              key={index}
              style={{
                width: 90,
                height: 30,
              }}></View>
          ))}
        </View>

        <View>
          <View
            style={{
              width: 190,
              height: 40,
            }}></View>

          <View>
            <View style={{flexDirection: 'row', gap: 5, marginVertical: 10}}>
              {Array.from({length: 2}, (item, index) => (
                <View
                  key={index}
                  style={{
                    width: 90,
                    height: 30,
                  }}></View>
              ))}
            </View>
            <View style={{flexDirection: 'row', gap: 5, marginVertical: 10}}>
              {Array.from({length: 3}, (item, index) => (
                <View
                  key={index}
                  style={{
                    width: 90,
                    height: 30,
                  }}></View>
              ))}
            </View>

            <View
              style={{
                width: '100%',
                height: 100,
                marginBottom: 10,
              }}></View>
            <View
              style={{
                width: 90,
                height: 30,
                marginBottom: 10,
              }}></View>

            <View
              style={{
                width: '100%',
                height: 20,
                marginBottom: 10,
              }}></View>

            <View
              style={{
                width: '100%',
                height: 200,
                marginBottom: 10,
              }}></View>
          </View>
        </View>

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
