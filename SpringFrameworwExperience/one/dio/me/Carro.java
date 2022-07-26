package one.dio.me;
/*
 Bootcamp - Exercício de introdução POO
*/

public class Carro {
    int capacidade;
    String modelo;
    String cor;

    Carro(){
    }

    Carro(String cor, String modelo, int capacidadeTanque){
        this.cor = cor;
        this.modelo = modelo;
        this.capacidade = capacidadeTanque;
    }
    
    public int getCapacidade() {
        return capacidade;
    }
    public void setCapacidade(int capacidade) {
        this.capacidade = capacidade;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public String getCor() {
        return cor;
    }
    public void setCor(String cor) {
        this.cor = cor;
    }
   
    double totalValorTanque(double valorCombustivel){
        return capacidade * valorCombustivel;
    }


}


