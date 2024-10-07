import {RefreshControl, ScrollView} from 'react-native';
import {CustomView} from './CustomView';
import {Title} from './Title';
import {colors} from '../../../config/theme/theme';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 4000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange', 'green']}
          onRefresh={onRefresh}
        />
      }>
      <CustomView margin>
        <Title text={'PullToRefreshScreen'} safe />
      </CustomView>
    </ScrollView>
  );
};
