# Camera Jovi — Sprint 4

Projeto desenvolvido pelo grupo **Da Facul** para a entrega conjunta das disciplinas de Front-End Design e Web Development.

O Camera Jovi propõe uma experiência de câmera para smartphones que se adapta às preferências de cada pessoa. A aplicação é uma evolução direta da landing page criada na Sprint 03, agora migrada para React, componentizada e integrada a uma API pública.

## Links do projeto

- Repositório da Sprint 4: <https://github.com/leonardog738/camerajovi_react>
- Projeto original da Sprint 3: <https://github.com/leonardog738/amerajovi>
- Deploy na Vercel: <https://camerajovi-react-5gyy.vercel.app/>

## Funcionalidades

- Landing page responsiva para desktop, tablet e celular;
- navegação por seções com menu adaptado para dispositivos móveis;
- apresentação da solução, público-alvo, galeria e equipe;
- consumo da API pública do GitHub nos cards dos integrantes;
- formulário de contato que prepara uma mensagem no WhatsApp;
- autenticação demonstrativa utilizando LocalStorage;
- rotas públicas e rota privada;
- protótipo interativo incorporado do Figma;
- estados de carregamento e falha da API;

## Tecnologias utilizadas

- **React** — construção e componentização da interface;
- **Vite** — servidor de desenvolvimento e build de produção;
- **Tailwind CSS** — estilização e responsividade;
- **Hooks nativos** — `useState`, `useEffect`, `useMemo` e `useContext`;
- **GitHub REST API** — dados públicos dos integrantes;
- **Vercel** — plataforma prevista para o deploy.

## Pré-requisitos

Para instalar e executar o projeto em outra máquina, é necessário ter:

- Git;
- Node.js 20 ou superior;
- npm 10 ou superior;
- conexão com a internet para carregar as fontes, o protótipo do Figma e os dados da API do GitHub.

Confira as versões instaladas:

```bash
node --version
npm --version
git --version
```

## Como executar o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite mostrará o endereço local no terminal. Por padrão, ele costuma ser:

```text
http://localhost:5173
```

Mantenha o terminal aberto enquanto estiver usando a aplicação. Para encerrar o servidor, pressione `Ctrl + C`.

## Integrantes

Os nomes completos e RMs estão disponíveis no arquivo obrigatório [`INTEGRANTES.TXT`](./INTEGRANTES.TXT).
