import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { GradientBackground } from './components/GradientBackground';
import AiPickStack from './screens/AiPick/AiPickStack';
import ApplianceStack from './screens/Appliance/ApplianceStack';
import Login from './screens/Auth/Login';
import SignUp from './screens/Auth/SignUp';
import LoadPage from './screens/LoadPage';
import MainPage from './screens/MainPage';
import MyPageStack from './screens/Mypage/MyPageStack';

const BottomTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

// Bottom Tab Navigator for main app screens
function MainTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: 'transparent',
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
        options={{ tabBarLabel: '홈' }}
      />
      <BottomTab.Screen
        name="Ai's Pick"
        component={AiPickStack}
        options={{ tabBarLabel: 'AI 추천' }}
      />
      <BottomTab.Screen
        name="가전기기 관리"
        component={ApplianceStack}
        options={{ tabBarLabel: '가전관리' }}
      />
      <BottomTab.Screen
        name="Mypage"
        component={MyPageStack}
        options={{ tabBarLabel: '내정보' }}
      />
    </BottomTab.Navigator>
  );
}

// Stack Navigator for authentication and LoadPage
function AuthFlow() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="LoadPage" component={LoadPage} />
      <AuthStack.Screen name="MainTabs" component={MainTabs} />
    </AuthStack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'BlackHanSans': require('./assets/fonts/Black_Han_Sans/BlackHanSans-Regular.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Font loading error:', error);
        setFontsLoaded(true);
      }
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <GradientBackground>
        <NavigationContainer>
          <AuthFlow />
        </NavigationContainer>
        <StatusBar style="auto" />
      </GradientBackground>
    </>
  );
}
