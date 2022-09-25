package poo.src.one.dio.me.polimorfismo;

public class RodarAplicacao {

    public static void main(String[] args) {
        /* 
        ClasseMae[] classes = new ClasseMae[]{new ClasseFilha1(), new ClasseFilha2(), new ClasseMae()};
        for (ClasseMae classe: classes){
            classe.metodo1();
        }
        System.out.println(" ");

        for (ClasseMae classe: classes){
            classe.metodo2();
        }
        System.out.println(" ");

        ClasseFilha2 classeFilha2 = new ClasseFilha2();
        classeFilha2.metodo2();
        
        int i = 1234;
        int vezes = 0;
        while(i>=99){
            if(i%4==0) 
                i--;
            i = i/3;
            vezes++;
        }
        System.out.println(i);
        System.out.println(vezes);
        */
        int numero = 1; 
        int soma = 0;
        while (numero < 5){
            soma = soma + numero;
            numero = numero + 1; 
        }
        System.out.println(soma);
    }
    
}
