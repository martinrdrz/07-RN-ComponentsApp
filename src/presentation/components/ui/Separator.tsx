import {View, Text, StyleProp, ViewStyle, ImageBackground} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export default function Separator({style}: Props) {
  return (
    <View style={{backgroundColor: colors.cardBackground}}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '80%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 8,
          },
          style,
        ]}
      />
    </View>
  );
}
