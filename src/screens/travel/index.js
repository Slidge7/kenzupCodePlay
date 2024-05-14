import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity} from 'react-native';
import TravelHome from './TravelHome';
import LikesList from './LikesList';
import History from './History';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={TravelHome} />
      <Tab.Screen name="Likes" component={LikesList} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function MyTabBar({state, descriptors, navigation}) {

  const colors = useSelector(state => state.uiManager.colors);

  const TabArr = [
    {route: 'Home', label: 'Home', icon: 'home'},
    {route: 'Likes', label: 'Likes', icon: 'heart'},
    {route: 'History', label: 'History', icon: 'history'},
    {route: 'Profile', label: 'Profile', icon: 'user-alt'},
  ];

  return (
    <View style={{flexDirection: 'row'}}>
      {TabArr.map((route, index) => {
        const {options} = descriptors[state.routes[index].key];
        const label = route.label;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.route,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.route, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.route,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: isFocused ? colors.lightBlue : colors.halfWhiteTxt,
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
            <Icon name={route.icon} size={20} color={isFocused ? colors.whiteTxt : colors.lightGray} />

            <Text
              style={{color: isFocused ? colors.whiteTxt : colors.lightGray}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabs;
