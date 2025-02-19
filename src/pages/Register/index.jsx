import { useState } from 'react';
import * as Styled from './styles';
import { HeaderContainer } from '../../components/headerContainer';
import { CreateAccount } from '../../components/createAccount';
import { CreatePassword } from '../../components/createPassword';
import api from '../../services/api';

export const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    instituicao: '',
    senha: '',
    tipo_usuario: 'cliente',
  });
  const [isMounted, setIsMounted] = useState('Account');
  const handleClickComponent = (step, data) => {
    if (data) {
      setFormData((prev) => ({ ...prev, ...data }));
    }
    setIsMounted(step);
  };
  const handleRegister = async (passwordData) => {
    try {
      const userData = { ...formData, senha: passwordData.senha };
      await api.post('/usuarios', userData);
      const loginResponse = await api.post('/auth/login', {
        email: userData.email,
        senha: userData.senha,
      });
      localStorage.setItem('token', loginResponse.data.access_token);
      setTimeout(() => {
        window.location.replace('/home');
      }, 500);
    } catch (error) {
      alert('Erro ao cadastrar: ' + error.response?.data?.message || error.message);
    }
  };

  let component;
  switch (isMounted) {
    case 'Account':
      component = <CreateAccount handleClick={handleClickComponent} />;
      break;
    case 'Password':
      component = <CreatePassword handleClick={handleRegister} />;
      break;
    default:
      break;
  }
  return (
    <Styled.Container>
      <HeaderContainer isMenu={false} />
      {component}
    </Styled.Container>
  );
};
