import React, {useState} from 'react';
import Layout from '../components/ui/Layout';
import {View, Text, Button, Alert, Platform} from 'react-native';
import {Linking} from 'react-native';
import {GColor} from '../constants/Global';
import Share from 'react-native-share';
import {Link} from '@react-navigation/native';
import file64 from '../assets/base64/file64';
export default function Deeplink() {
  const [error, setError] = useState(false);
  const intentImplicit = async url => {
    console.log(url);

    try {
      if (url === `app-settings:`) {
        Platform.OS === 'android'
          ? await Linking.openSettings()
          : await Linking.openURL(url);

        return;
      }
      const res = await Linking.openURL(url);
      const support = await Linking.canOpenURL(url);
      console.log('run', support);
      if (!support) {
        Alert.alert('Warning', 'Comfirm');
        return;
      }

      if (!res) {
        throw new Error('Type not supported');
      }

      return res;
    } catch (error) {
      setError(true);
    }
  };
  const intentSharingImages = async () => {
    const shareReponse = await Share.open({
      // email: 'Vornkh87@gmail.com',
      title: 'Share My Images',
      message: 'lorem',
      url: file64.img1,
    });

    console.log(JSON.stringify(shareReponse));
  };
  const intentSharing = async () => {
    const shareReponse = await Share.open({
      // email: 'Vornkh87@gmail.com',
      title: 'Share Your Thought',
      message: 'lorem',
      url: 'This is my message',
    });

    console.log(JSON.stringify(shareReponse));
  };
  return (
    <Layout>
      <View>
        <View
          style={{
            margin: 50,
            gap: 20,
          }}>
          <Button
            title="Call"
            color={'green'}
            onPress={intentImplicit.bind(this, 'tel:+8551234567890')}
          />
          <Button
            title="Email"
            color={'red'}
            onPress={intentImplicit.bind(
              this,
              'mailto:Nightpp19@gmail.com?subject=SendMail&body=Description',
            )}
          />
          <Button
            title="Web Browser"
            color={'#0B60B0'}
            onPress={intentImplicit.bind(this, 'https://www.youtube.com/')}
          />
          <Button
            title="App Setting"
            color={'#FF6868'}
            onPress={intentImplicit.bind(this, `app-settings:`)}
          />
          <Button
            title="Share Text"
            color={'#FF6868'}
            onPress={intentSharing}
          />
          <Button
            title="Share Image"
            color={'#3652AD'}
            onPress={intentSharingImages}
          />
        </View>
      </View>
    </Layout>
  );
}
