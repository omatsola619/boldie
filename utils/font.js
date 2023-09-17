import { useFonts } from 'expo-font';
import { 
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_600SemiBold, 
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black
} from '@expo-google-fonts/poppins';
import { Zeyada_400Regular } from '@expo-google-fonts/zeyada';
import { 
    RobotoCondensed_300Light,
    RobotoCondensed_400Regular, 
    RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed';



export const useCustomFonts = () => {
    const [fontsLoaded] = useFonts({
        'Poppins_200': Poppins_200ExtraLight,
        'Poppins_300': Poppins_300Light,
        'Poppins_400': Poppins_400Regular, 
        'Poppins_500': Poppins_500Medium, 
        'Poppins_600': Poppins_600SemiBold, 
        'Poppins_700': Poppins_700Bold,
        'Poppins_800': Poppins_800ExtraBold,
        'Poppins_900': Poppins_900Black,
        'Zeyada': Zeyada_400Regular,
        'Roboto_300': RobotoCondensed_300Light,
        'Roboto_400': RobotoCondensed_400Regular,
        'Roboto_700': RobotoCondensed_700Bold,
      });

  return fontsLoaded;
};