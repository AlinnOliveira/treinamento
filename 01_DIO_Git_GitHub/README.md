# 1º DESAFIO GIT e GIT HUB

//Data: 19/06/2022
- Criar um repositório remoto distribuído usando o Git e GitHub
- Organizar da melhor forma o material de estudo

## Conectando com o repositório via SSH

   1- ssh-keygen -t ed25519 -C /e-mail/

   2- entrar com uma senha
   
   3- Entrar na pasta onde estão as chaves: cd /Users/<user>/.ssh
   
   4- ls
   
   5- VER O QUE HÁ NO ARQUIVO: cat /nome da chava pública/
   
   6- copiar a chave e e-mail e COLAR NO GitHub - chaves SSH
## Passos:
1- Git Bash Here: pasta local (workspace)

2- git init: iniciando o processo local de versionamento

3- git config: git config --global user.email
   git config --global user.name
   
4- git add *

5- git commit -m "texto de descrição do commit"

6- git status

7- git remote add origin "/caminho https do repositório/"

8- git remote - v: (lista os diretórios remotos) 

9- git push origin master (master é a branch que estamos enviando o nosso código)

