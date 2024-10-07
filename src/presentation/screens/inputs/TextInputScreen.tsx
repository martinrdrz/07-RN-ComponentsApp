import {ScrollView, Text, TextInput, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {globalStyles} from '../../../config/theme/theme';
import {useState} from 'react';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <ScrollView>
      <CustomView margin>
        <Text>TextInputScreen</Text>
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Nombre Completo"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={(value: string) => setForm({...form, name: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(value: string) => setForm({...form, email: value})}
          />

          <TextInput
            style={globalStyles.input}
            placeholder="Telefono"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={(value: string) => setForm({...form, phone: value})}
          />
        </Card>

        <View style={{height: 10}} />

        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
      </CustomView>
    </ScrollView>
  );
};
