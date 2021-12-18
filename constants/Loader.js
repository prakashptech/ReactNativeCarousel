import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator} from 'react-native';

const Loader = props => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={props.loading}
      supportedOrientations={[
        'portrait',
        'landscape',
        'landscape-left',
        'landscape-right',
      ]}
      onRequestClose={() => {
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            color="green"
            animating={props.loading}
            size="large"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
