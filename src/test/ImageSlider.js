import React from 'react';
import Layout from '../components/ui/Layout';
import {Dimensions, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default function ImageSlider() {
  const images = [
    'https://images.unsplash.com/photo-1682687979601-082a1295b78f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1674841253285-77e02800a6ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1705850653966-62ec3e79713a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const screen = Dimensions.get('screen').width;
  return (
    <Layout>
      <SliderBox
        images={images}
        parentWidth={screen}
        sliderBoxHeight={200}
        // autoplay={true}
        circleLoop={true}
        autoplayInterval={900}
        resizeMode={'cover'}
        sliderBoxHeight={'100%'}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      />
    </Layout>
  );
}
