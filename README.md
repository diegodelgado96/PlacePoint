# PlacePoint 

## Guía de ejecución
Clona el repositorio usando el siguiente link o ssh:

    git clone https://github.com/diegodelgado96/PlacePoint.git()
    or
    git clonegit@github.com:diegodelgado96/PlacePoint.git

## Levanta los contenedores:

escribir el siguiente comando. 

    docker-compose up --build

    - asegurarse de encontrarse en la carpeta raíz del proyecto

## Accede a la API y frontend:

    Backend: http://localhost:8000/api/locations    
    Frontend: http://localhost:3000

### Probar la API Key:

- La API KEY ya esta configurada en el proyecto, tener en cuenta que para este caso las variables de entorno o archivo .env no esta ignorado para garantizar el funcionamiento del proyecto, pero en un entorno real de desarrollo si deben ser ignorados