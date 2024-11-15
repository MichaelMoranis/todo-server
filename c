[33mcommit b670f2dc6f2b0ee1f6ef052487b2539c170c66da[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Fri Nov 15 16:40:05 2024 -0300

    removendo prefixo users das rotas

[33mcommit f76c9a6fcde2a22fab6971e02633051f5c41e165[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Fri Nov 15 15:42:04 2024 -0300

    separação de codigo por responsabilidade - criação de pastas para melhor organização

[33mcommit 3235187b8fcf81ddcc6709834462d94b73a33886[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Fri Nov 15 10:58:34 2024 -0300

    corrijindo erros de cors com addhooks 02

[33mcommit 8cd4d862890f5ae1e630870fcce685d07c2ff9ef[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Fri Nov 15 10:58:18 2024 -0300

    corrijindo erros de cors com addhooks

[33mcommit 2138ed25d91cb789eb6c6fbb66ea3729306c0997[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Fri Nov 15 10:35:45 2024 -0300

    corrijindo rota get listinput

[33mcommit 5a0ed8b17f8764da0750481b98738b3bbf524cfe[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Fri Nov 15 09:22:00 2024 -0300

    incluindo rota no cors para chamadas banco de dados

[33mcommit 9c9b5333fb5abec81bf7ee48b8377cd5c489f317[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Fri Nov 15 08:05:57 2024 -0300

    corrige erro de cors para adicionar itens na lista

[33mcommit 0bd85a62db1e1d7d5bd21793f5f5b4553239234d[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Thu Nov 14 20:03:06 2024 -0300

    adicionando rota para teste nova no cors

[33mcommit 69f5865f3a98fe3345b344dd17e04b7196b749f7[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Thu Nov 14 19:58:53 2024 -0300

    adicionando rota para teste nova

[33mcommit a7fe00ac25fba8f5ddb30936430b969fd0ff3677[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Thu Nov 14 19:39:29 2024 -0300

    add: adicionando rota do server hospedado no render

[33mcommit 684d9b2ef8e7810fa7b4cc1ea5348302e708c7bc[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Thu Nov 14 19:31:01 2024 -0300

    feat: adiciona autenticação basica completa com jwt e bcrypt

[33mcommit af6c8bb7b137a526a99f75ce5e059f0ef02cf552[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Tue Nov 12 18:27:33 2024 -0300

    feat(aut): adição de tabelas de usuarios, adição de rotas para usuarios se registrarem, adição de funcão de atualização de itens na lista

[33mcommit 89517f68e62175156cf29bf825ec5fd877c2cb71[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sat Nov 9 23:19:31 2024 -0300

    feat(auth): add /register route and users table
    
    - Implemented a new POST route at /register for user registration.
    - Added a users table with fields for id, username, email, password, and created_at.
    - Integrated the createUser function to insert new user records into the database.
    - Configured CORS to allow requests from specified origins, including local and production frontend URLs.
    
    This commit sets up the foundation for user authentication and registration.

[33mcommit 2379cb7b26971450f40f6cf0ae23eb81d8ab25bc[m
Author: Michael Moranis <97197020+MichaelMoranis@users.noreply.github.com>
Date:   Sat Aug 24 10:36:16 2024 -0300

    Update README.md

[33mcommit 1b38576256a6da41b94325c60f9eac3371151afb[m
Author: Michael Moranis <97197020+MichaelMoranis@users.noreply.github.com>
Date:   Wed Aug 21 21:18:05 2024 -0300

    Create README.md
    
    adicionando readme no meu projeto

[33mcommit 06f0289c1fb2af982b85582280c696a8d5097c0d[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Wed Aug 21 20:54:13 2024 -0300

    removendo logs para melhorar otimização

[33mcommit c92171bf0c442ae1980a567a7b4a7e4a180ca8ad[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 28 21:24:56 2024 -0300

    erro: porta com numero errado corrigida

[33mcommit e2ea1442fb3409b814085706bed5980dda60d72d[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 28 16:13:56 2024 -0300

    correcting: multiplas origens com fastify cors

[33mcommit 030ac1154c158cf4d683104eb0bd7dae07008868[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 28 13:29:57 2024 -0300

    access: adicionando rota de desenvolvimento

[33mcommit 46b745b54ae577d19cc572d3530e39113a5fd66d[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 28 10:17:59 2024 -0300

    access: somente para https://app-tarefa.vercel.app

[33mcommit 2a81885c45ce2ee7f25efec8f896d428654a5aa5[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 28 10:15:55 2024 -0300

    access: somente para app-tarefa.vercel.app

[33mcommit 51f4aa4cd742f6bebcda1eef1a415e9f64366078[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 28 10:03:19 2024 -0300

    access: permitindo todos os acessos

[33mcommit a5f5c867c3fb5c1fa6192bcaa871d36e19b6abb0[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 28 09:25:19 2024 -0300

    erro: corrigindo permissao com o cors atualizada

[33mcommit be37f6bf97ff53500ecc30462d9f5e5aaf0ab5d1[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 28 08:37:07 2024 -0300

    erro: corrigindo permissao com o cors

[33mcommit 9ad6d9b7b10112c658df936549cda0df4a391ffe[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sat Jul 27 17:58:59 2024 -0300

    feature: adicionando endoint app-tarefa.vercel.app

[33mcommit a99f6b62731023f896deba0d94b6b85925cf1011[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sat Jul 27 17:24:13 2024 -0300

    feature: corrigindo funcao de deletar item

[33mcommit 5e2928f141ab98cadc50b0a94f9c5a1a87eb6665[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Wed Jul 24 19:50:37 2024 -0300

    corrijindo erro de envio de dados unxpected end to of json input

[33mcommit d7a5e7fc2ee0565397640c4b3bb0f15258afdef9[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Mon Jul 22 21:53:45 2024 -0300

    corrijindo erro na criacao da tabela

[33mcommit e758d7ac83342cb8afe98f2affa14191d2ba2888[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 21 20:32:20 2024 -0300

    corrijindo url do cors

[33mcommit 2a339936506305ca784449316e2c89a7d09bc29f[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 21 18:13:36 2024 -0300

    add to fix error cors with url

[33mcommit 25601ca479dcf1df1bff7478ba25f85afffea4a2[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sun Jul 21 18:04:06 2024 -0300

    add to fix error cors with @fastify/cors

[33mcommit 7285a1c1202dffe8dde8d79746863e5485bf4020[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sat Jul 20 12:32:04 2024 -0300

    add port host2

[33mcommit f59b391c17dc156b83655c1ba98eeaf1a4f0f9ed[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sat Jul 20 12:15:39 2024 -0300

    add port host: 0.0.0.0

[33mcommit f853057baab8a6d8d5942201b7e00a1103768528[m
Author: michaelmoranis <michaelmoranesul@gmail.com>
Date:   Sat Jul 20 11:58:11 2024 -0300

    API Node com Postgres
