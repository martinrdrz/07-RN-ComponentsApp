import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

export default function CustomSwitch({isOn, text, onChange}: Props) {
  return (
    <View style={styles.switchRow}>
      {text && <Text style={{color: colors.text}}>{text}</Text>}

      <Switch
        trackColor={{false: '#3f3f3e', true: '#07c84e'}}
        thumbColor={Platform.OS === 'android' ? '#509a69' : ''}
        ios_backgroundColor="#5d5b5b"
        onValueChange={onChange}
        value={isOn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
