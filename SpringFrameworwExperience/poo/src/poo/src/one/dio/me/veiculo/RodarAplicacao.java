package poo.src.one.dio.me.veiculo;

public class RodarAplicacao {
    public static void main(String[] args) throws Exception {

        Carro carro1 = new Carro();
        carro1.setCapacidade(52);
        carro1.setCor("Verde");
        carro1.setModelo("Pálio");

        System.out.println(carro1.getCapacidade());
        System.out.println(carro1.getCor());
        System.out.println(carro1.getModelo());
        System.out.println(carro1.totalValorTanque(6.5));

        Carro carro2 = new Carro("Azul", "Jeep", 47);
        System.out.println(carro2.getCapacidade());
        System.out.println(carro2.getCor());
        System.out.println(carro2.getModelo());
        System.out.println(carro2.totalValorTanque(6.5));

        //System.out.println("Hello, World!");
    }
}
