// import { useNavigation } from '@react-navigation/native';
// import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import { typography } from '../styles/typography'; // typography import 추가

// function MainPage() {
//     const navigation = useNavigation();

//     const navigateToTabs = () => {
//         navigation.navigate('TabScreens');
//     }; 

//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.container}>
//             <Text style={[styles.title, typography.title]}>VOICE</Text>
//             <View style={styles.logoContainer}>
//                 <Image 
//                     source={require('../assets/logov1.png')}  // 경로 수정
//                     style={styles.logo} 
//                     resizeMode="contain"
//                 />
//                 <Text style={styles.logoText}>환영합니다! OO님</Text>
//             </View>
            
//         </View>
//       </SafeAreaView>
//     );
// }

// export default MainPage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     title: {
//         textAlign: 'center',
//         marginTop: 100,
//     },
//     logoContainer: {
//         flex: 1,
//         alignItems: 'center',
//         alignItems: 'center',
//         marginTop: 20,  // 추가
//     },
//     logo: {
//         width: 250,
//         height: 250,
//     },
//     logoText: {
//         color: '#0f0f0f',
//         fontSize: 40,
//     }
// });

// screens/MainPage.jsx

import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../components/GradientBackground';
import { typography } from '../styles/typography';

function MainPage() {

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={[styles.title, typography.title]}>VOICE</Text>
          <View style={styles.logoContainer}>
            <Image 
              source={require('../assets/logov1.png')}
              style={styles.logo} 
              resizeMode="contain"
            />
            <Text style={styles.logoText}>환영합니다! OO님</Text>
          </View>
        </View>
      </SafeAreaView>
    </GradientBackground>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 100,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoText: {
    color: '#0f0f0f',
    fontSize: 40,
  }
});