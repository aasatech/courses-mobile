import {Text, View} from 'react-native';
import Modal from 'react-native-modal';

function WrapperComponent() {
  return (
    <View>
      <Modal>
        <View style={{flex: 1}}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
