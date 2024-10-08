import {Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';

export const ChangeThemeScreen = () => {
  return (
    <CustomView>
      <Title text={'Cambiar Tema'} />
      <Button text={'Light'} onPress={() => {}} />
      <View style={{height: 20}} />
      <Button text={'Dark'} onPress={() => {}} />
    </CustomView>
  );
};
