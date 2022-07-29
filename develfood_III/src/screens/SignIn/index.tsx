import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'
import { Alert, Animated, Image, Keyboard, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { 
  Container, 
  Content, 
  Form, 
  ForgotPassword, 
  CreateAccountButton, 
  ContentImage 
} from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { PasswordInput } from '../../components/PasswordInput'
import Logo from '../../assets/logo.png';
import Image2 from '../../assets/img.png';
import burguer from '../../assets/burguer.png';
import pizza from '../../assets/pizza.png';
import { isEmail } from '../../utils'

export function SignIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const animated = useRef(new Animated.Value(0)).current;
  const theme = useTheme();

  async function handleSignIn() {
      setLoading(true)
      const emailValido = 'email@teste.com'
      const senhaValida = '123456'
      setTimeout(() => {
        if (!isEmail(email)) {
          Alert.alert('Email invalido!')
        } else {
          if (emailValido === email && senhaValida === password) {
            Alert.alert('Login realizado!')
          } else {
            Alert.alert('Senha invalida ou Email invalido!')
          }
        }
        setLoading(false)
      }, 3000);
      // navigation.navigate("Home");
  }

  useEffect(() => {
    const keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
      Animated.timing(animated, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      }).start();
    })

    const keyboadHide = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(animated, {
        toValue: 10,
        duration: 150,
        useNativeDriver: true
      }).start();
    })

    return () => {
      keyboardShow.remove(),
      keyboadHide.remove()
    }
  }, [])

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Animated.View style={{width: '100%', transform: [ { translateY: animated} ] }}>
            <ContentImage>
              <Image resizeMode='contain' source={burguer} />
              <Image resizeMode='contain' source={pizza} />
            </ContentImage>
            </Animated.View>

            <StatusBar
              barStyle='dark-content'
              backgroundColor={theme.colors.secundary}
              translucent
            />

            <Image style={{ marginBottom: 12, marginTop: -32 }} resizeMode='contain' source={Logo} />
            <Content>
              <Form>
                <Input 
                  iconName='mail'
                  placeholder='exemplo@email.com'
                  keyboardType='email-address'
                  autoCorrect={false}
                  autoCapitalize='none'
                  onChangeText={setEmail}
                  value={email}
                />

                <PasswordInput 
                  iconName='lock'
                  placeholder='senha'
                  autoCorrect={false}
                  autoCapitalize='none'
                  onChangeText={setPassword}
                  value={password}
                />
              </Form>
              <ForgotPassword>
                <TouchableOpacity onPress={() => console.log('Esqueci')}>
                  <Label color={theme.colors.label} title='Esqueci minha senha'/>  
                </TouchableOpacity>
              </ForgotPassword>
              <Button 
                title='Entrar' 
                onPress={handleSignIn} 
                disabled={password.length < 6}
                loading={loading}
              />
              <CreateAccountButton>
                <Label color={theme.colors.label} title='Não possui cadastro? '/>
                <TouchableOpacity onPress={() => console.log('Cadastre-se')}>
                  <Label color={theme.colors.primary} title=' Cadastre-se aqui!'/>
                </TouchableOpacity>
              </CreateAccountButton>
            </Content>
            <Image resizeMode='contain' source={Image2} />
          </Container>
      </TouchableWithoutFeedback>
    </>
  )
}