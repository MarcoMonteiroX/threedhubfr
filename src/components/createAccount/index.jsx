import P from 'prop-types';
import * as Styled from './styles';
import { Button } from '../button';
import { Header } from '../header';
import { Input } from '../input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateAccount = ({ handleClick }) => {
  const navigate = useNavigate();
  const [accountData, setAccountData] = useState({
    nome: '',
    email: '',
    telefone: '',
    instituicao: '',
  });

  const handleChange = (e) => {
    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };

  return (
    <Styled.Container>
      <img src="assets/Voltar.png" alt="Voltar" onClick={() => { navigate('/') }} />
      <Header
        title="Criar conta"
        descripton="Para criar sua conta, preencha os campos a seguir:"
      />
      <Styled.Form>
        <Input name="Nome completo">
          <input type="text" name="nome" value={accountData.nome} onChange={handleChange} required />
        </Input>
        <Input name="Email">
          <input type="email" name="email" value={accountData.email} onChange={handleChange} required />
        </Input>
        <Input name="Número de Telefone">
          <input type="tel" name="telefone" value={accountData.telefone} onChange={handleChange} />
        </Input>
        <Input name="Instituição onde trabalha">
          <input type="text" name="instituicao" value={accountData.instituicao} onChange={handleChange} />
        </Input>
        <Button>
          <button onClick={() => handleClick('Password', accountData)}>Criar Conta</button>
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
};

CreateAccount.propTypes = {
  handleClick: P.func.isRequired,
};
