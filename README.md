
# Instalar e Configurar o Prettier

1. Instale o `prettier` no projeto:

   - ```bash
     npm i -D prettier
     ```

2. Instale a extensão do `prettier` no VSCode;

   - **ID da extensão:** `esbenp.prettier-vscode`

3. Crie uma pasta na raiz do projeto chama `.vscode` com um novo arquivo chamado `settings.json`

4. Coloque o seguinte conteúdo no arquivo `settings.json`:

   - ```json
     {
         "editor.codeActionsOnSave": {
             "source.fixAll": true
         },
         "files.eol": "\n",
         "editor.defaultFormatter": "esbenp.prettier-vscode",
         "[javascript]": {
             "editor.defaultFormatter": "esbenp.prettier-vscode"
         }
     }
     ```

5. Hora de testar o `prettier`, digite algo no `src/main.js` e salve com o `Ctrl + S`

6. Habilite o auto save do VSCode, clicando em  `File > Auto Save`.

   - Note que o auto save não formata o código, só quando usamos o `Ctrl + S` diretamente.

## Modificando estilização padrão do Prettier

1. Crie um arquivo na raiz do projeto chamado `.prettierrc.json` e coloque o seguinte conteúdo:

   - ```json
     {
      "trailingComma": "all",
      "singleQuote": true,
      "endOfLine": "lf",
      "tabWidth": 4,
      "arrowParens": "avoid",
      "printWidth": 80
     }
     ```

2. Com o arquivo de configuração do `prettier` estando no formato JSON é possível usar o atalho `Ctrl + Espaço` para ter um autocomplete com os nomes das chaves que o `prettier` aceita;

3. Volte para o arquivo `main.js` e apenas salve com o `Ctrl + S`;
   
   - Note que o `quote` muda de aspas duplas para aspas simples.
