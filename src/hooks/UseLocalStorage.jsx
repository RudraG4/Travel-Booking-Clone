import { useState } from "react";

/** Custom Hook useLocalStorage */
export default function useLocalStorage(key, defaultValue) {
  const getOrSetDefaultValue = (key, defaultValue) => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      localStorage.setItem(key, JSON.stringify(defaultValue));
    } catch (e) {
      console.log("Error retrieving local value " + e);
    }
    return defaultValue;
  };

  const [value, setStoredValue] = useState(() =>
    getOrSetDefaultValue(key, defaultValue)
  );

  const setValue = (newValue) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (e) {
      console.log("Error setting local value");
    }
    setStoredValue(newValue);
  };

  return [value, setValue];
}
