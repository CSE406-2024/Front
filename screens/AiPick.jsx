import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../components/GradientBackground';
import { typography } from '../styles/typography'; // typography import 추가

function AiPick() {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={[styles.title, typography.title]}>AI's Pick</Text>
                    <View style={styles.situationContainer}>
                        <Text style={styles.situationText}>상황 입력</Text>
                    </View> 
                </View>
            </SafeAreaView>
        </GradientBackground>
      
    );
}

export default AiPick;

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
