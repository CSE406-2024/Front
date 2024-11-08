import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../../components/GradientBackground';
import { Button } from '../../components/ui/button';
import { typography } from '../../styles/typography';

function Recommendation({ navigation, route }) {
    const { situation } = route.params;

    const handleConfirm = () => {
        // 확인 로직 구현
        navigation.navigate('AiPick');
    };

    const handleCancel = () => {
        navigation.navigate('AiPick');
    };

    const handleRecommend = () => {
        // 재추천 로직 구현
        // API 호출 등을 여기서 수행
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={[styles.title, typography.title]}>추천 결과</Text>
                    
                    <View style={styles.contentContainer}>
                        <Text style={styles.situationText}>입력하신 상황: {situation}</Text>
                        {/* 여기에 추천 결과 표시 */}
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button onPress={handleConfirm} style={styles.button}>
                            확인
                        </Button>
                        <Button onPress={handleCancel} variant="outline" style={styles.button}>
                            취소
                        </Button>
                        <Button onPress={handleRecommend} variant="secondary" style={styles.button}>
                            재추천
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Recommendation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        marginTop: 100,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 40,
    },
    contentContainer: {
        paddingHorizontal: 20,
        flex: 1,
    },
    situationText: {
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        gap: 10,
    },
    button: {
        marginVertical: 5,
    }
});