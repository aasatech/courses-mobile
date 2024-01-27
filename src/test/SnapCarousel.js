import React from 'react';
import Layout from '../components/ui/Layout';
import {View, Text, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function SnapCarousel() {
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ];
  const data = [
    {
      title: 'Aenean leo',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl: 'https://picsum.photos/id/11/200/300',
    },
    {
      title: 'In turpis',
      body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
      imgUrl: 'https://picsum.photos/id/10/200/300',
    },
    {
      title: 'Lorem Ipsum',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: 'https://picsum.photos/id/12/200/300',
    },
  ];
  const SLIDER_WIDTH = Dimensions.get('window').width + 80;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
  const CarouselCardItem = ({item, index}) => {
    return (
      <View key={index}>
        <Image source={{uri: item.imgUrl}} style={{
            width:'100%',
            height:300
        }} />
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      </View>
    );
  };

  return (
    <Layout>
      <View>
    
        <Carousel
          layout="stack"
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />
      </View>
    </Layout>
  );
}
