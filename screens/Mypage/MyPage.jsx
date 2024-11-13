import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GradientBackground } from '../../components/GradientBackground';
import { typography } from '../../styles/typography';

const windowWidth = Dimensions.get('window').width;

function MyPage({ navigation }) {
    const userEmail = 'useremail@naver.com';
    const userName = 'OO님';

    const handleLogout = () => {
        Alert.alert(
            '로그아웃',  // 제목
            '정말 로그아웃 하시겠습니까?',  // 메시지
            [
                {
                    text: '취소',
                    style: 'cancel',
                },
                {
                    text: '확인',
                    onPress: async () => {
                        try {
                            // 로그인된 사용자 정보 제거
                            await AsyncStorage.removeItem('loggedInUser');
                            
                            // 로그아웃 성공 메시지 표시
                            Alert.alert('알림', '로그아웃 되었습니다.');
                            
                            // 로그인 페이지로 이동
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            });
                        } catch (error) {
                            Alert.alert('오류 발생', '로그아웃 중 문제가 발생했습니다.');
                        }
                    },
                    style: 'destructive', // iOS에서 빨간색으로 표시됨
                },
            ],
            { cancelable: false } // 바깥 영역 터치로 닫기 방지
        );
    };
    
    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.profileContainer}>
                        <MaterialIcons name="account-circle" size={60} color="#666666" />
                        <Text style={[styles.userName, typography.title]}>{userName}</Text>
                        <Text style={styles.userEmail}>{userEmail}</Text>
                    </View>

                    <View style={styles.menuContainer}>
                        <View style={styles.menuRow}>
                            <TouchableOpacity 
                                style={styles.menuCard}
                                onPress={() => navigation.navigate('MyPageInfo')}
                            >
                                <MaterialIcons name="person" size={24} color="#666666" />
                                <Text style={styles.menuText}>개인 정보</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.menuCard}
                                onPress={() => navigation.navigate('MyPageRoutine')}
                            >
                                <MaterialCommunityIcons name="clock-time-four" size={24} color="#666666" />
                                <Text style={styles.menuText}>루틴 모음</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.menuRow}>
                            <TouchableOpacity 
                                style={styles.menuCard}
                                onPress={() => navigation.navigate('MyPageAI')}
                            >
                                <MaterialCommunityIcons name="robot" size={24} color="#666666" />
                                <Text style={styles.menuText}>AI 스피커</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.menuCard}
                                onPress={handleLogout}
                            >
                                <MaterialIcons name="settings" size={24} color="#666666" />
                                <Text style={styles.menuText}>로그아웃</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    profileContainer: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 40,
    },
    userName: {
        fontSize: 24,
        color: '#333333',
        marginTop: 10,
    },
    userEmail: {
        fontSize: 16,
        color: '#666666',
        marginTop: 5,
    },
    menuContainer: {
        paddingHorizontal: 20,
    },
    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    menuCard: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        width: (windowWidth - 60) / 2,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    menuText: {
        fontSize: 16,
        color: '#666666',
        marginTop: 10,
    },
});