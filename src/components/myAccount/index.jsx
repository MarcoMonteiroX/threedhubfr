import { useState, useEffect } from 'react';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import api from '../../services/api';
import * as Styled from './styles';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';

export const MyAccount = ({ onClose }) => {
    const [accountData, setAccountData] = useState({
        nome: '',
        email: '',
        telefone: '',
        instituicao: '',
    });

    const [passwordData, setPasswordData] = useState({
        senha: '',
    });

    const getUserEmailFromToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            return decoded.email;
        }
        return null;
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const email = getUserEmailFromToken();
            if (!email) {
                console.error('Usuário não autenticado.');
                return;
            }
            try {
                const response = await api.get(`/usuarios/email/${email}`);
                setAccountData(response.data);
            } catch (error) {
                console.error('Erro ao carregar dados do usuário', error);
            }
        };
        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'senha') {
            setPasswordData({ ...passwordData, [name]: value });
        } else {
            setAccountData({ ...accountData, [name]: value });
        }
    };

    const handleSubmit = async () => {
        try {
            await api.put(`/usuarios/${accountData.id}`, { ...accountData, senha: passwordData.senha });
            alert('Informações atualizadas com sucesso!');
            onClose();
        } catch (error) {
            console.error('Erro ao atualizar informações', error);
            alert('Erro ao atualizar informações.');
        }
    };
    return (
        <Styled.Container>
            <img src="assets/Voltar.png" alt="Voltar" onClick={onClose} />
            <Header
                title="Minha conta"
                description="Para atualizar sua conta, altere os campos a seguir:"
            />
            <Styled.Form>
                <Input name="Nome completo">
                    <input type="text" name="nome" value={accountData.nome} onChange={handleChange} />
                </Input>
                <Input name="Email">
                    <input type="email" name="email" value={accountData.email} readOnly />
                </Input>
                <Input name="Número de Telefone">
                    <input type="number" name="telefone" value={accountData.telefone} onChange={handleChange} />
                </Input>
                <Input name="Instituição onde trabalha">
                    <input type="text" name="instituicao" value={accountData.instituicao} onChange={handleChange} />
                </Input>
                <Input name="Senha">
                    <input type="password" name="senha" value={passwordData.senha} onChange={handleChange} required />
                </Input>
                <Button>
                    <button type="button" onClick={handleSubmit}>Alterar Informações</button>
                </Button>
            </Styled.Form>
        </Styled.Container>
    );
};
MyAccount.propTypes = {
    onClose: PropTypes.func.isRequired,
};