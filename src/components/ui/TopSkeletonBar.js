import React from 'react';
import {Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {GColor} from '../../constants/Theme/Global';

export default function TopSkeletonBar() {
  return (
    <SkeletonPlaceholder borderRadius={4} backgroundColor={GColor.primary350}>
      <Text
        style={{
          height: 50,
        }}></Text>
    </SkeletonPlaceholder>
  );
}
