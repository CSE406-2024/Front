import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../../components/GradientBackground';
import { typography } from '../../styles/typography'; // typography import 추가

function MyPage() {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={[styles.title, typography.title]}>MyPage</Text>
                </View>
            </SafeAreaView> 
        </GradientBackground>
    );
}

export default MyPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        marginTop: 100,
    },
    situationContainer: {
        flex: 1,
        alignItems: 'center',
        alignItems: 'center',
        marginTop: 20,  // 추가
    },
    situationText: {
        color: '#0f0f0f',
        fontSize: 25,
    }
});

//여기서 이제 따로따로 하면 좋지 않을까 싶긴해. stacknavigator로 이후의 페이지들 ㅇㅇ