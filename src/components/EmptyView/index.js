import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Icon,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ScreenTitle from '../ScreenTitle';
import styles from './styles';

const EmptyView = ({
  title,
  note,
}) => {

  return (
    <View style={styles.container}>
      <Icon
        as={MaterialCommunityIcons}
        name="emoticon-sad-outline"
        size={200}
        color="red.500"
      />
      <View style={styles.textConatiner}>
        <ScreenTitle size="xl">
          {title}
        </ScreenTitle>
        <Text
          fontSize="md"
          style={styles.note}
        >
          {note}
        </Text>
      </View>
    </View>
  );
};

export default EmptyView;