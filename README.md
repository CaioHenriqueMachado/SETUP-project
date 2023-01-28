# SETUP-project
Projeto visando usar NodeJs, ReacJs, e ReactNative

Criando o projeto

{npm init -y}

Para node interpretar typescript:
{npm install typescript -D}

Pacote typescript:
{npx tsc --init}

Para rodar o código:
{npm install tsx -D}

Para rodar código:
{npx tsx .\src\server.ts}
Após inserir no package.json script para simplificar:
{npm run dev}


fastify substituindo o antigo express
{npm install fastify}

Prisma o melhor e atual ORM
{npm install -D prisma}
{npm install @prisma/client}
{npx prisma init --datasource-provider SQLite}

Rodar as migrates:
{npx prisma migrate dev}

Visualizar banco de dados:
{npx prisma studio}

Configurando CORS
Para aplicação consiga consumir dados do Backend
{npm install @fastify/cors}

Para ver diagrama do banco de dados:
prisma erd generation
{npm i -D prisma-erd-generator @mermaid-js/mermaid-cli}
rodar "npx prisma generate"

Seed prisma, ferramenta para criar dados para desenvolvimento
{rodar npx prisma db seed}


valida campos do frontend
{npm i zod}

lib pra trabalhar com datas
{npm i dayjs}



// PARA FRONTEND

Criar projeto:
{npm create vite@latest}

{npx tailwindcss init -p}

lib de ícone
{npm  i phosphor-react}

lib de data
{npm i dayjs}
















// PARA MOBILE
Criando projeto com typescript configurado.
{npx create-expo-app mobile --template}
obs mobile é a pasta raiz


instalar fontes expo
{npx expo install expo-font @expo-google-fonts/inter}

iniciar expo
{npx expo start}


Será usado o native Wind
{npm i nativewind}
{npm i npm i tailwindcss --save-dev}

criar arquivo tailwind com comando:
{npx tailwindcss init}

native não suprta SVG, lib para lidar com svg
{npx expo install react-native-svg}
para usar o svg:
{npm i react-native-svg-transformer --save-dev}

lib de data
{npm install dayjs}