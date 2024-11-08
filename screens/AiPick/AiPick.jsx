

// import { useState } from 'react';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import { GradientBackground } from '../../components/GradientBackground';
// import { Button } from '../../components/ui/button';
// import { Input } from '../../components/ui/input';
// import { LoadingOverlay } from '../../components/ui/loading-overlay';
// import { typography } from '../../styles/typography';

// function AiPick() {
//     const [situation, setSituation] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async () => {
//         if (!situation.trim()) return;
        
//         setLoading(true);
//         try {
//             // API 호출 또는 다음 단계로 진행하는 로직
//             // 테스트를 위한 지연 시뮬레이션
//             await new Promise(resolve => setTimeout(resolve, 2000));
//             console.log('제출된 상황:', situation);
//             // navigation.navigate('NextScreen', { situation });
//         } catch (error) {
//             console.error('Error:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <GradientBackground>
//             <SafeAreaView style={styles.container}>
//                 <View style={styles.container}>
//                     <Text style={[styles.title, typography.title]}>AI's Pick</Text>
                    
//                     <View style={styles.inputContainer}>
//                         <Input 
//                             label="상황 입력"
//                             placeholder="상황을 입력해주세요"
//                             multiline
//                             numberOfLines={4}
//                             textAlignVertical="center"
//                             value={situation}
//                             onChangeText={setSituation}
//                             editable={!loading}
//                         />
//                     </View>

//                     <View style={styles.buttonContainer}>
//                         <Button 
//                             onPress={handleSubmit}
//                             disabled={!situation.trim() || loading}
//                         >
//                             확인
//                         </Button>
//                     </View>

//                     <LoadingOverlay visible={loading} />
//                 </View>
//             </SafeAreaView>
//         </GradientBackground>
//     );
// }

// export default AiPick;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     title: {
//         textAlign: 'center',
//         marginTop: 100,
//         fontSize: 40,
//         fontWeight: 'bold',
//         color: '#1F2937',
//         marginBottom: 40,
//     },
//     inputContainer: {
//         paddingHorizontal: 20,
//         marginTop: 20,
//     },
//     buttonContainer: {
//         paddingHorizontal: 20,
//         marginTop: 20,
//     }
// });

import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../../components/GradientBackground';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { LoadingOverlay } from '../../components/ui/loading-overlay';
import { typography } from '../../styles/typography';

function AiPick({ navigation }) {
    const [situation, setSituation] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!situation.trim()) return;
        
        setLoading(true);
        try {
            // API 호출 또는 다음 단계로 진행하는 로직
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('제출된 상황:', situation);
            navigation.navigate('Recommendation', { situation });
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <GradientBackground>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={[styles.title, typography.title]}>AI's Pick</Text>
                    
                    <View style={styles.inputContainer}>
                        <Input 
                            label="상황 입력"
                            placeholder="상황을 입력해주세요"
                            multiline
                            numberOfLines={4}
                            textAlignVertical="center"
                            value={situation}
                            onChangeText={setSituation}
                            editable={!loading}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button 
                            onPress={handleSubmit}
                            disabled={!situation.trim() || loading}
                        >
                            확인
                        </Button>
                    </View>

                    <LoadingOverlay visible={loading} />
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
        fontSize: 40,
        fontWeight: 'bold',
        color: '#0F172A',
        marginBottom: 40,
    },
    inputContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    }
});