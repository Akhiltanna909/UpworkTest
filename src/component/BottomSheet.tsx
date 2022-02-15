import React from 'react';
import {Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export const BottomSheet = ({refRBSheet}: any) => {
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={false}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        container: {
          height: 40,
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}>
      <View style={{backgroundColor: 'red', flex: 1}}>
        <Text>hello</Text>
      </View>
    </RBSheet>
  );
};
