import * as Styled from './styles';
import { useState } from 'react';
import api from '../../services/api';
import { Input } from '../input';
import { SelectInput } from '../selectInput';
import { Button } from '../button';

export const CreateOrder = ({ onClose }) => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        justificativa: '',
        cor: '',
        quantidade: '',
        material: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Usuário não autenticado');
                return;
            }

            const response = await api.post('/pedidos', formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Pedido criado com sucesso!');
            onClose();
        } catch (error) {
            alert('Erro ao criar pedido: ' + (error.response?.data?.message || error.message));
        }
    };
    return (
        <Styled.Container>
            <img src="assets/Voltar.png" alt="Voltar" onClick={onClose} />
            <Styled.Form>
                <Input name="Nome do pedido">
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                </Input>
                <Input name="Descrição">
                    <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} required />
                </Input>
                <Input name="Justificativa">
                    <input type="text" name="justificativa" value={formData.justificativa} onChange={handleChange} required />
                </Input>
                <SelectInput
                    name="cor"
                    options={[' ', 'Cinza', 'Verde']}
                    value={formData.cor}
                    onChange={handleChange}
                />
                <Input name="Quantidade">
                    <input type="number" name="quantidade" value={formData.quantidade} onChange={handleChange} required />
                </Input>

                <SelectInput
                    name="material"
                    options={[' ', 'ABS', 'PLA']}
                    value={formData.material}
                    onChange={handleChange}
                />
                <Button>
                    <button type="button" onClick={handleSubmit}>Realizar pedido</button>
                </Button>
            </Styled.Form>
        </Styled.Container>
    );
};