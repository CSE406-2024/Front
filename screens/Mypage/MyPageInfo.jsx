import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../../components/GradientBackground';
import { typography } from '../../styles/typography';

function MyPageInfo() {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={[styles.title, typography.title]}>개인 정보</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.card}>
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>상황 검색</Text>
                                
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default MyPageInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 20,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
});