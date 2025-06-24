## Nome do padrão: Adapter (Adaptador)
## Categoria:
Estrutural
## Intenção:
Permitir que interfaces incompatíveis trabalhem juntas convertendo a interface de uma classe em outra esperada pelos clientes.
## Problema:
Você quer reutilizar uma classe existente, mas sua interface não é compatível com o sistema atual.
## Solução:
Criar uma classe adaptadora que “traduz” a interface da classe existente para a interface que o cliente espera.
## Estrutura UML:
![image](https://github.com/user-attachments/assets/d95e1fbb-e9ba-4a0f-b739-58f45203610f)
## Exemplos no mundo real:
-	Um adaptador de tomada (220V para 110V).
-	Um conversor de cabo HDMI para VGA.

## Pontos fortes:
-	Permite reaproveitar código existente.
-	Facilita integração com bibliotecas.

## Pontos fracos:
-	Pode adicionar complexidade desnecessária se mal aplicado.
-	Muitos adaptadores podem dificultar a manutenção.

## Quando usar:
-	Quando deseja usar uma classe existente, ela não possui a interface necessária.
## 2. Código fonte: sem e com Adapter
## Versão sem o padrão:
![image](https://github.com/user-attachments/assets/180d3319-ab83-4866-954c-d544396a0674)
## Versão com Adapter:
![image](https://github.com/user-attachments/assets/40c98199-077d-4d12-a34b-d68d1546e7c8)
## 3. Conclusões
O padrão Adapter provou ser uma solução eficaz para integrar classes passadas em sistemas modernos. Ele permite que o código seja reutilizado de forma elegante, mantendo a compatibilidade com novas interfaces. No entanto, se usado em excesso ou sem planejamento, pode gerar uma complexidade desnecessária no projeto.

