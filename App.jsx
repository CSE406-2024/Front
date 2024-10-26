
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import AiPick from './screens/AiPick.jsx';
import Appliance from './screens/Appliance.jsx';
import MainPage from './screens/MainPage.jsx';
import MyPage from './screens/MyPage.jsx';

const BottomTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'BlackHanSans': require('./assets/fonts/Black_Han_Sans/BlackHanSans-Regular.ttf'),
      });
      setFontsLoaded(true);
    };

    try {
      loadFonts();
    } catch (error) {
      console.error('Font loading error:', error);
      setFontsLoaded(true);
    }
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              height: 100,
              backgroundColor: '#3AFBF7' + '30',
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
              marginBottom: 5,
            },
            tabBarActiveTintColor: '#5e5eb4',
            tabBarInactiveTintColor: '#666666',
          }}
        >
          <BottomTab.Screen
            name="MainPage"
            component={MainPage}
            options={{
              tabBarLabel: '홈',
            }}
          />
          <BottomTab.Screen
            name="Ai's Pick"
            component={AiPick}
            options={{
              tabBarLabel: 'AI 추천',
            }}
          />
          <BottomTab.Screen
            name="가전기기 관리"
            component={Appliance}
            options={{
              tabBarLabel: '가전관리',
            }}
          />
          <BottomTab.Screen
            name="mypage"
            component={MyPage}
            options={{
              tabBarLabel: '내정보',
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}