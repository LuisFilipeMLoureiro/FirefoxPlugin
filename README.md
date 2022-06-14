# FirefoxPlugin - MyLittleSpy
Luís Filipe Loureiro e Murilo Menezes


Por meio de JavaScript foi construído uma extensão para o navegador Firefox que capta o número de cookies presente na tab atual, o uso de local storage e o número de domínios terceiros que são acessados.
Assim, foi pensado como uma ferramenta objetiva e fácil de ser usada para que o usuário sempre tenha ciência do que está por trás dos sites acessados.

Por fim, o grupo criou um total score que baseado na seguinte fórmula: score = [1/(N_cookies + N_dominios + N_storage)] * 1000  permitindo, assim, que o usuário possa comparar o nível de segurança entre diferentes sites de forma simples.

Para ir além, o grupo colocou o score em prática. A partir de sites populares, foi analisado se há alguma correlação entre o nosso score de segurança e o número de visitas ao mês. O estudo revelou um R^2 alto, de 0.89, indicando que os sites mais visitados são também aqueles com melhores notas de segurança;

![Alt text](icons/grafico0.png?raw=true "Gráfico")
