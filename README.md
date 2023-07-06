# Clean Boilerplate NodeJs API

Este é um template base para criar novos projetos pessoais utilizando a Clean Architecture. A Clean Architecture é uma abordagem de desenvolvimento de software que visa separar as preocupações e manter um código limpo, modular e altamente testável.

``` 
📁 Meu Projeto
├── 📁 domain
│   ├── 📁 entities
│   └── 📁 usecases
├── 📁 infra
│   ├── 📁 db
│   ├── 📁 helper
│   ├── 📁 repositories
│   └── 📄 ...
├── 📁 main
│   ├── 📁 config
│   ├── 📁 adapters
│   ├── 📁 factories
│   └── 📄 ...
├── 📁 presentation
│   ├── 📁 controller
│   ├── 📁 helpers
│   ├── 📁 errors
│   └── 📄 ...
└── 📄 ...

```
A estrutura deste projeto segue os princípios da Clean Architecture e consiste em diferentes camadas, cada uma com sua responsabilidade específica. Aqui está uma visão geral da estrutura:

- A pasta presentation contém os casos de interação com usuário orquestrando as interações entre as camadas de caso de uso e infra e manipulando os dados.
- A main é onde a aplicação deve vai ser inciada, nela contem configuração do servidor, composição entre objetos e rotas.
- A pasta domain contém as regras de negocios da sua aplicação, ela deve ser reponsavel por lidar as entidades e casos de uso da aplicação.
- A pasta infra é responsável por lidar com a persistência de dados, acesso a APIs externas e outras tarefas de infraestrutura.

# Como Começar

Para criar um novo projeto baseado nesse template, você pode seguir estes passos:

- Clone este repositório para o seu ambiente de desenvolvimento local.
- Renomeie a pasta raiz do projeto para o nome do seu novo projeto.
- Remova o conteúdo do arquivo README.md atual e substitua pelo seu próprio conteúdo.
- Comece a implementar as funcionalidades do seu projeto dentro das respectivas pastas (application, domain, infrastructure e interface).
- Personalize o arquivo LICENSE de acordo com as necessidades do seu projeto.
- Documente o seu projeto e suas funcionalidades dentro deste README.md, incluindo instruções de como configurar e executar o projeto, bem como qualquer outra informação relevante.
