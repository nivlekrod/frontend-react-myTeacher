import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listProfessores, setListProfessores] = useState<Professor[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null)
    const [message, setMessage] = useState('');


    useEffect(() => {
        ApiService.get('/teachers').then((response) => {
            setListProfessores(response.data)
        })
    }, []);

    useEffect(() => {
        clearForm();
    }, [selectedProfessor])

    function bookAClass() {
        if (selectedProfessor !== null) {
            if (validateClass()) {
                ApiService.post('/teachers/' + selectedProfessor.id + '/aulas', {
                    name,
                    email
                }).then(() => {
                    setSelectedProfessor(null);
                    setMessage('Cadastrado com sucesso');
                }).catch((error) => {
                    setMessage(error.response?.data.message);
                });
            } else {
                setMessage('Preencha os dados corretamente');
            }
        }
    }

    function validateClass() {
        return name.length > 0 && email.length > 0;
    }

    function clearForm() {
        setName('');
        setEmail('')
    }

    return {
        listProfessores,
        name,
        setName,
        email,
        setEmail,
        selectedProfessor,
        setSelectedProfessor,
        bookAClass,
        message,
        setMessage
    }
}