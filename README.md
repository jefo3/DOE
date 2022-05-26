# Projeto Integrado II

## SOBRE O REPOSITÓRIO
Repositório para armazenar o projeto desenvolvido na cadeira de projeto integrado, ministrada pelo professor Camilo Camilo Almendra. 

## PARTICIPANTES
  - Felipe Raulino Lemos - 471963
  - Jeferson Gonçalves Noronha Soriano - 471110
  - Vitória Moreira de Souza - 469959

## SOBRE O DOE
Uma plataforma em que os usuários pudessem cadastrar
itens que eles desejam doar. Sendo assim, todos os outros usuários da plataforma
conseguiriam visualizar o material a ser doado e se comunicar com o doador para
pedir a doação assim invertendo a lógica de como funciona hoje em dia, sendo o
doador a pessoa que publica o item a ser doado e o beneficiado que entra em
contato, resolvendo até o problema que é de pessoas que precisam de ajuda e tem
vergonha de pedir expondo para todos sua fragilidade.

## REQUISITOS E COMO RODAR O PROJETO
Se faz necessario ter instalado:
- docker-compose
- wsl2
nas pasta do back-end, no terminal digitar o seguinte comando:
- docker-compose up -d
agora na ferramenta de administração de banco de dados de sua preferencia,
indicamos usar o dbeaver https://dbeaver.io/download/
1. Abra uma nova conexão, e preencha as info, de acordo com o que esta definido arquivo docker-compose.yml 

## BANCO DE DADOS
BANCO DE DADOS
	Criar corretamente um banco de dados estruturado exige planejamento. O mais importante é planejar como os dados serão salvos e depois recuperados para tornar esse processo o mais fácil possível, pensando nisso que resolvemos utilizar o postgresql, um banco relacional, isso de dar principalmente por o sistema ter dados bem estruturados, com dados por serem fáceis de serem identificados e organizados e padronizados.
## MODELAGEM DO BANCO
<img src="Documentos\bancodedados.jpg"/>

## FEATURES IMPLEMENTADAS
- CRUD simples do usuário (Cadastro, Alteração e Remoção)
  1. Cadastro do usuário na plataforma.
  2. Login do usuário na plataforma.
  3. Edição das informações do usuário na plataforma.
  4. Exclusão da conta do usuário na plataforma.

- CRUD simples do objetos/bens(Cadastro, Listagem, Remoção e Alteração).
  1. Definição de hábitos do usuário, na plataforma.
  2. Listagem dos hábitos do usuário, cadastrados na plataforma.
  3. Edição dos hábitos do usuário, cadastrados na plataforma.

- Criação de categorias.
   1. roupas
   2. objetos
   3. brinquedo
   4. comida e mais

- Filtragem dos “postes” a partir das categorias.

## LINK DO TRELLO
https://trello.com/b/nV6WwdiN/doe

## LINK Do VÍDEO DA SEGUNDA ENTREGA
https://www.youtube.com/watch?v=IiQKBljSVvg

## LiNK DO PROTOTIPO
Figma: https://www.figma.com/file/HlUOTB3FVvkBPO0lTMw3RC/Doe?node-id=0%3A1
