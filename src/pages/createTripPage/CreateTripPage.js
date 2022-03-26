import axios from "axios";
import React from "react";
import { URL_BASE } from "../../constants/urlBase.js";
import { useForm } from "../../hooks/handleInput.js"
import { contentType } from "../../constants/headers.js";
import { useProtectedPage } from "../../hooks/protectedPage.js";
import ButtonBackPage from "../../components/buttonBackPage/ButtonBackPage.js";
import { MainContainer, Form, InputType, TextDescriptionArea, SubmitButton } from "./Styles.js";

export default function CreateTripPage () {
    useProtectedPage();
    const {form, onChangeForm, cleanFields} = useForm(
        {
            name: "",
            planet: "",
            date: "",
            description: "",
            durationInDays: ""
        }
    );

    let today = new Date().toISOString().split("T")[0];

    const createTrip = async (event) => {
        event.preventDefault();

        if (form.planet === "" || form.planet === "Escolha um planeta") {
            alert("Por favor, escolha um planeta!");
        } else {
            const headersConfig = {
                headers: {
                    contentType,
                    auth: localStorage.getItem("token")
                }
            };

            const selectedDate = form.date.split("-")
            const formatedDate = `${selectedDate[2]}/${selectedDate[1]}/${selectedDate[0]}`

            const body = {
                ...form,
                date: formatedDate,
                durationInDays: Number(form.durationInDays)
            }

            console.log(body)

            try {
                const response = await axios.post(`${URL_BASE}/trips`, body, headersConfig);
                alert("Novo destino espacial criado com sucesso!")
                cleanFields();
            } catch (error) {
                alert("Desculpe-nos! Algum erro ocorreu ao criar um novo destino. Por favor, tente novamente mais tarde.")
            };
        };
    };

    return (
        <MainContainer>
            <h2>Criar um novo Destino</h2>
            <Form onSubmit={createTrip}>
                <fieldset>
                    <label for="tripName">Título:</label>
                    <InputType
                        id="tripName"
                        name={"name"}
                        value={form.name}
                        onChange={onChangeForm}
                        placeholder="Título do destino"
                        pattern={"^[a-zA-Z\u00C0-\u00FF ]{5,}$"}
                        title={"Mínimo 5 caracteres"}
                        required                
                    />
                    <label for="planet">Planeta:</label>
                    <select
                        id="planet"
                        name={"planet"}
                        value={form.planet}
                        onChange={onChangeForm}
                        required
                    >
                        <option>Escolha um planeta</option>
                        <option>Mercúrio</option>
                        <option>Vênus</option>
                        <option>Terra</option>
                        <option>Marte</option>
                        <option>Júpter</option>
                        <option>Saturno</option>
                        <option>Urano</option>
                        <option>Netuno</option>
                        <option>Plutão</option>
                    </select>
                    <label id="description">Descrição:</label>         
                    <TextDescriptionArea
                        id="description"
                        rows={"2"}
                        cols={"20"}
                        name={"description"}
                        value={form.description}
                        onChange={onChangeForm}
                        placeholder="Descrição sobre a viagem ..."
                        pattern={"^[a-zA-Z\u00C0-\u00FF ]{30,}$"}
                        title={"Mínimo 30 caracteres"}
                        required                
                    />
                    <label for="duration">Duração:</label>
                    <InputType
                        id="duration"
                        name={"durationInDays"}
                        value={form.durationInDays}
                        onChange={onChangeForm}
                        placeholder="Duração da viagem em dias"
                        type={"number"}
                        min={50}
                        required                
                    />
                    <label for="date">Prazo de inscrição:</label>
                    <InputType
                        id="date"
                        name={"date"}
                        value={form.date}
                        onChange={onChangeForm}
                        placeholder="dd/mm/aaaa"
                        type={"date"}
                        min={today}
                        title={"Escolha uma data no futuro"}
                        required                
                    />
                    <SubmitButton>Criar</SubmitButton>
                </fieldset>
            </Form>
            <ButtonBackPage />
        </MainContainer>
    );
};