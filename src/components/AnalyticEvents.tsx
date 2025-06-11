import analytics from '@react-native-firebase/analytics'
import { Alert } from 'react-native'

export const AnalyticEvent =async (name:string, payload:any) => {
    try {
        await analytics().logEvent(name, payload);
        console.log(`Analytics event logged: ${name}`, payload);
    }catch (error){
        console.log(error);
    };

}