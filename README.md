# API for companhia_aerea

## Description

1. Considere a descrição de um sistema de venda de passagens aéreas dado abaixo:
* Para um passageiro são registrados o número do documento de identidade e o seu nome;
* Um avião é caracterizado por um número de série único e por um modelo;
* Um assento é uma posição única em um avião, identificada por um código. Um assento é da classe econômica ou executiva;
* Um avião possui vários assentos e pode ser usado em vários voos.
* Um voo é identificado por um número e utiliza: um avião, um piloto, um aeroporto de partida e outro de chegada;
* Um passageiro pode reservar um assento em um voo.
 
## ER Diagram
![ER_Companhia_Aerea (1)](https://user-images.githubusercontent.com/36215435/148659924-bab69054-d0f4-44f9-8bba-d6011ec41dc1.jpg)

## Running the application

1. Connect to your MySQL database 
* database=companhia_aerea
* host=localhost
* port=3306
* user=root
* password=root

2. Run the following commands: `yarn typeorm migration:run` and then `yarn run dev`

3. The application will be running on localhost:3306 as informed on console:

![Capturar](https://user-images.githubusercontent.com/36215435/148659868-b5715a85-2519-468c-b112-cc598197fbb5.PNG)
