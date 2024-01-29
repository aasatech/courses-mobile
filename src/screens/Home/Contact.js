import React from 'react';
import Layout from '../../components/ui/Layout';
import {Text} from 'react-native';
import {GColor} from '../../constants/Theme/Global';

export default function Contact() {
  return (
    <Layout>
      <Text style={{color: GColor.accent300}}>Welcome to Contact Screen</Text>
    </Layout>
  );
}
