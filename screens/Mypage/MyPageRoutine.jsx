import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GradientBackground } from '../../components/GradientBackground';
import { typography } from '../../styles/typography';

function MyPageRoutine() {
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={[styles.title, typography.title]}>루틴 모음</Text>
                    <View style={styles.contentContainer}>
                        <View style={styles.card}>
                            <Text style={styles.label}>상황 검색</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="상황을 검색하시오."
                                placeholderTextColor="#999"
                            />
                            <View style={styles.routineContainer}>
                                <View style={styles.routineItem}>
                                    <Text style={styles.routineTime}>제택 루틴(02:00)</Text>
                                    <Text style={styles.routineDesc}>조명 켜기, 노트북 켜기</Text>
                                    <TouchableOpacity style={styles.settingButton}>
                                        <Text style={styles.settingText}>설정</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.routineItem}>
                                    <Text style={styles.routineTime}>제택 루틴(17:00)</Text>
                                    <Text style={styles.routineDesc}>조명 켜기, 노트북 켜기, 에어컨 켜기</Text>
                                    <TouchableOpacity style={styles.settingButton}>
                                        <Text style={styles.settingText}>설정</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default MyPageRoutine;

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
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
    },
    routineContainer: {
        gap: 15,
    },
    routineItem: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: 15,
    },
    routineTime: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    routineDesc: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    settingButton: {
        backgroundColor: '#E8E8E8',
        padding: 5,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    settingText: {
        fontSize: 12,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: '#333',
    },
});