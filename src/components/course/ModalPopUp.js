import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import IconClose from 'react-native-vector-icons/Ionicons';
import HeadLine from '../ui/HeadLine';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {GColor} from '../../constants/Theme/Global';
import TabButton from './TabButton';
import {useSelector} from 'react-redux';

function WrapperComponent({
  visible = false,
  setModalVisible,
  selectedTag,
  setSelectedTag,
}) {
  const store = useSelector(store => store.course);

  return (
    <Modal
      style={styles.modal} // Added style for zIndex
      isVisible={visible}
      animationIn="slideInUp" // Use slideInUp for bottom sheet effect
      animationOut="slideOutDown" // Use slideOutDown for bottom sheet effect
      backdropOpacity={0.5}
      swipeDirection={['down']}
      onBackdropPress={() => setModalVisible(false)}
      onSwipeComplete={() => setModalVisible(pre => !pre)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <HeadLine label="Tags" size="lg" />
          <TouchableOpacity onPress={() => setModalVisible(pre => !pre)}>
            <IconClose name="close" size={20} />
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={4}
          showsVerticalScrollIndicator={false}
          disableScrollViewPanResponder
          showsHorizontalScrollIndicator={false}
          data={store.tags}
          renderItem={item => (
            <View style={styles.tabBar}>
              <TabButton
                id={item?.item?.id}
                label={item?.item?.name}
                selected={selectedTag.includes(item.item?.id)}
                onPress={setSelectedTag}
              />
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modal: {
    zIndex: 10000,
    marginTop: 400,
  },
  modalContainer: {
    flex: 1, // Ensure that the container takes up all available space
    backgroundColor: GColor.primary400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 55,
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,

  },
  tabBar: {
    marginBottom: 10,
    marginRight: 15, // Add marginBottom to provide spacing between modal header and FlatList items
  },
  // Add additional styles as needed
});

export default WrapperComponent;
