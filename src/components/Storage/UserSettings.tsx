import AsyncStorage from "@react-native-async-storage/async-storage";

// Spara data i AsyncStorage
export const saveData = async () => {
  try {
    await AsyncStorage.setItem("userTheme", "dark");
  } catch (error) {
    console.error("Error:", error);
  }
};

// Hämta data från AsyncStorage
export const fetchData = async () => {
  try {
    const userTheme = await AsyncStorage.getItem("userTheme");
    console.log("Users theme:", userTheme);
    return userTheme;
  } catch (error) {
    console.error("Error:", error);
  }
};
