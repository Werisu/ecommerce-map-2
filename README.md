# Setup do Projeto

## Link no Github

#### ecommerce-mentoria-2​

```
git clone https://github.com/andrewarosario/ecommerce-mentoria-2
cd ecommerce-mentoria-2
npm install
```

​

## Servir o projeto localmente

```
npm start
```

Ou

```
npx nx serve
```

​
O projeto será servido por padrão em http://localhost:4200/.

## Executar tarefas independentes

```
npx nx <NOME_DA_TAREFA> <NOME_DO_MODULO>
```

​
Exemplos:

```
npx nx test ecommerce
npx nx lint modules-layout
```

​

## Visualizar Dependency Graph

```
npx nx graph
```

​

### Executar tarefas somente do que foi afetado

```
npx nx affected:<NOME_DA_TAREFA>
```

​
Exemplos:

```
npx nx affected:test
npx nx affected:graph
```
