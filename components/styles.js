//Estilos globales
import styled from "styled-components";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import constants from "expo-constants";

const StatusBarHeight = constants.statusBarHeight;
//Colores

export const Colores = {
  primary: "#fff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colores;

// Estilos para un contenedor

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 1}px;
  background-color: ${primary};
`;
// Estilos para contenedor secundario
export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
// Estilos para logo
export const PageLogo = styled.Image`
  width: 300px;
  height: 300px;
`;

//Estilos para titulos
export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;
// Estilos para subtitulos

export const PageSubtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

//Estilos para formulario

export const StyledFormArea = styled.View`
  width: 90%;
`;

//Estilos input form

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

// Estilos para label
export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

//Esstilos para el icono
export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;
//Estilos de lista React
export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

//Estilos para boton

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${green};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.google == true &&
    `
    padding:25px;

  `}
`;
//Estilos para botones
export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

//Box para colocar var del form
export const MesgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;
//Linea separadora
export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight}
  margin-vertical: 10px;
`;
//Estilos para contenedor Extra
export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

//Estilos para texto contenido en contenedor anterior
export const ExtraText = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${tertiary};
  font.size: 15px;
`;
