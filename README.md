# SAMI-API

Para Rodar o código: 
```

$ git clone https://github.com/cesarvspr/SAMI-API

$ cd SAMI-API

$ docker build . -t <your-username>/sami-api

$ docker run -p <PREFFERED PORT>:3000 cesarvspr/sami-api 

```
#### Rotas possíveis

- GET /beneficiaries
- GET /beneficiaries/:id
- POST /beneficiaries
- PUT /beneficiaries/:id
- DELETE /beneficiaries/:id


## Testes:


### GET Method
```
curl --request GET \ --url http://localhost:3000/beneficiaries
```
### GET SINGLE Method
Lembrar de trocar < id > por um id válido encontrado no método GET.
```
curl --request GET \
  --url http://localhost:3000/beneficiaries/<id>
```

### POST Method
```
curl --request POST \
  --url http://localhost:3000/beneficiaries \
  --header 'Content-Type: application/json' \
  --data '{
	"name":"CESAR",
	"rg":"2005",
	"birthday": "29/07/1980",
	"plan": "standard",
	"cpf": "05920345678",
	"dependents":"1"
	
}'

```

### PUT Method
Lembrar de trocar < id > por um id válido encontrado no método GET.
```
curl --request PUT \
  --url http://localhost:3000/beneficiaries/<id> \
  --header 'Content-Type: application/json' \
  --data '{
	"plan": "premium"
}'
```


### DELETE Method
Lembrar de trocar < id > por um id válido encontrado no método GET.
```
curl --request DELETE \
  --url http://localhost:3000/beneficiaries/<id>
```
