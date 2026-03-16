# 📱 Checkpoint 01 — Formulário de Cadastro em React Native

## 📚 Descrição do Projeto

Este projeto foi desenvolvido como parte do **Checkpoint 01** da disciplina de desenvolvimento mobile.
O objetivo é criar um aplicativo utilizando **React Native** que permita ao usuário preencher um formulário de cadastro simples e visualizar os dados informados na própria tela após o envio.

O aplicativo foi desenvolvido utilizando **Expo** para facilitar a execução e testes da aplicação.

---

## 🎯 Objetivo

Desenvolver uma aplicação mobile que:

* Apresente um formulário de cadastro
* Permita a entrada de informações pelo usuário
* Armazene os dados utilizando **Hooks**
* Exiba as informações preenchidas após o envio

---

## 🧩 Tecnologias Utilizadas

* React Native
* Expo
* JavaScript
* Node.js

---

## 📱 Estrutura da Interface

A aplicação utiliza os seguintes componentes principais do React Native:

* **SafeAreaView** → Container principal da aplicação
* **View** → Organização dos elementos na tela
* **Text** → Exibição de títulos e informações
* **TextInput** → Entrada de dados do usuário
* **Button** → Envio do formulário

---

## 📝 Campos do Formulário

O formulário possui os seguintes campos:

* Nome
* Curso
* Disciplina
* Descrição / Apresentação pessoal (2 a 3 linhas)

Cada campo possui um **placeholder** indicando a informação que deve ser preenchida.

---

## ⚙️ Gerenciamento de Estado

O aplicativo utiliza o **Hook useState** para controlar os valores digitados pelo usuário.

Estados utilizados:

* `nome`
* `curso`
* `disciplina`
* `descricao`

Essas variáveis armazenam os dados digitados no formulário.

---

## 🔄 useEffect

O **Hook useEffect** é utilizado para executar uma ação quando o aplicativo é iniciado.

Exemplo de uso:

* Exibir uma mensagem no console indicando que o aplicativo foi carregado.

---

## 📤 Funcionamento da Aplicação

1. O usuário abre o aplicativo
2. O formulário de cadastro é exibido
3. O usuário preenche os campos solicitados
4. O usuário pressiona o botão de envio
5. Os dados preenchidos são exibidos organizados na tela

---

## 🎨 Estilização

A interface utiliza **StyleSheet** para aplicar estilos básicos como:

* Tamanho de texto
* Espaçamentos e margens
* Organização dos campos
* Aparência do botão

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone LINK_DO_REPOSITORIO
```

### 2️⃣ Acessar a pasta do projeto

```bash
cd cp1Mobile
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Executar o projeto

```bash
npx expo start
```

Depois disso, é possível rodar o aplicativo:

* no celular usando **Expo Go**
* em um emulador
* ou no navegador com **web**

---

## 🎥 Demonstração

Um vídeo de até **5 minutos** demonstrando o funcionamento da aplicação foi gravado conforme solicitado na atividade.

Link do vídeo:

```
COLOCAR_LINK_DO_VIDEO_AQUI
```

---

## 📂 Repositório do Projeto

Link do repositório no GitHub:

```
https://github.com/Waidemannm/Development-Mobile.git
```

---

## 👨‍💻 Autor

Moisés Waidemann 

Projeto desenvolvido para fins acadêmicos no curso da **FIAP**.
