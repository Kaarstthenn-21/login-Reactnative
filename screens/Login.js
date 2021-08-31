import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
// Importamos estilos de componentes nativos react native
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  PageSubtitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  MesgBox,
  Line,
} from "../components/styles";

// Formik
import { Formik } from "formik";
//Icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
//Colores
import { brand, darkLight, primary } from "./../components/styles";
import styled from "styled-components";
const Login = () => {
  // Creamos estado para monitorear cuando se coloca una contraseña y colocar un icono
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <StyledContainer>
      <StatusBar />
      <InnerContainer>
        <PageLogo
          resizeMode="cover"
          source={require("./../assets/img/90c248808c5e13e7b4d172b51fc28d0e.jpg")}
        />
        <PageSubtitle>Login</PageSubtitle>
        {/* Formulario de login */}
        <Formik
          // Inicializa valores del form
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              {/* Componente View/ TouchableOpacity */}
              <MyTextInput
                // Pasamos params y props al componente
                label="Email"
                icon="mail"
                placeholder="Kaarstthen@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Contraseña"
                icon="lock"
                placeholder="*  *  *  *  *  *  *  *  *  *  *  *  *  *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                // Establece el valor de entrada segura, inicializa en true
                secureText={hidePassword}
                isPassword={true}
                //Pasamos el estado como parametros al componente
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MesgBox>...</MesgBox>
              <StyledButton>
                <ButtonText onPress={handleSubmit}>Login</ButtonText>
              </StyledButton>
              <Line />
              <StyledButton>
                {/* Logo de Google */}
                <Fontisto name="google" color={"#fff"} size={25} />
                <ButtonText>Sign in with google</ButtonText>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};
//Desestructurar la var de entrada
const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {/* Habilitar estado para poner pre visualizador de contraseña */}
      {/* Para manejarlo usaremos hooks */}
      {isPassword && (
        // Establecemos a traves del evento on press el cambio de estado
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          {/* Condicionamos al icono con operadores ternarios para establecer si aparece o no el icono al ingresar una contraseña */}
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
