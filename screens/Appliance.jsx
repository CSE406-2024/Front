import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../components/GradientBackground';
import { typography } from '../styles/typography'; // typography import 추가

function Appliance() {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={[styles.title, typography.title]}>가전기기 관리</Text>
                    <View style={styles.situationContainer}>
                        <Text style={styles.situationText}>가전 등록</Text>
                    </View>
                    
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Appliance;

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
