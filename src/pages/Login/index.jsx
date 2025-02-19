import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import * as Styled from './styles';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Link } from 'react-router';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', { email, senha });
      localStorage.setItem('token', response.data.access_token);
      navigate('/home');
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <Styled.Container>
      <img src="assets/Logo.svg" alt="logo do ThreeD-Hub" />
      <Styled.Form>
        <Input name="E-mail">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Input>
        <Input name="Senha">
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </Input>
        <Button>
          <Link onClick={handleLogin}>Realizar login</Link>
        </Button>
      </Styled.Form>
      <Link to="/register">Não possui conta? Crie uma agora!</Link>
    </Styled.Container>
  );
};