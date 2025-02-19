import P from 'prop-types';
import * as Styled from './styles';
import { Button } from '../button';
import { Header } from '../header';
import { Input } from '../input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreatePassword = ({ handleClick }) => {
  const navigate = useNavigate();
  const [passwordData, setPasswordData] = useState({
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordData.senha.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres.');
      return;
    }
    if (passwordData.senha !== passwordData.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }
    handleClick(passwordData);
  };

  return (
    <Styled.Container>
      <img src="assets/Voltar.png" alt="Voltar" onClick={() => { navigate('/') }} />
      <Header
        title="Criar senha"
        descripton="A senha deve ter no mínimo 8 caracteres, incluindo números, símbolos e letras maiúsculas e minúsculas."
      />
      <Styled.Form>
        <Input name="Senha">
          <input type="password" name="senha" value={passwordData.senha} onChange={handleChange} required />
        </Input>
        <Input name="Confirmar Senha">
          <input type="password" name="confirmarSenha" value={passwordData.confirmarSenha} onChange={handleChange} required />
        </Input>
        <Button>
          <button type="button" onClick={handleSubmit}>Criar Senha</button>
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
};

CreatePassword.propTypes = {
  handleClick: P.func.isRequired,
};
