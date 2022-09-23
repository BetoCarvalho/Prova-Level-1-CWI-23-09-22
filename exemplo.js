peso = 90
altura = 1.70
IMC = (peso /(altura*altura))

console.log ("Seu IMC", IMC)

conceito = ""
grau = 0

if(IMC <= 18.49)
{conceito = "Magreza"
  grau = 0}

else if (IMC >= 18.50 && IMC <= 24.99 )
{conceito = "Normal" 
  grau = 0}

else if (IMC >= 25.00 && IMC <= 29.99)
{conceito = "Sobrepeso"
  grau = 1}

else if (IMC >= 30.00 && IMC <= 39.99)
{conceito = "Obesidade"
  grau = 2}

else if (IMC >= 40.00)
{conceito = "Obesidade Grave"
grau = 3}

console.log ("sua classiicação foi",conceito)

if (grau > 0) {
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")

    if (grau == 3) {
        console.log("É importante procurar um médico para avaliar sua saúde.")}
}


