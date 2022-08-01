package poo.src.one.dio.me.pessoa;

/* Pessoa
 * Polimorfismo x Sobscrever
 * Abstração, Upcasts, DownCasts
 * 
 */

public class RodarAplicacao {

    public static void main(String[] args) throws Exception {

        Funcionario funcionario = new Funcionario();

        //Upcast
        Funcionario gerente = new Gerente();
        Funcionario faxineiro = new Faxineiro();
        Funcionario vendedor = new Vendedor();

        //Downcast de forma explícita
        // e deve ser evitado
        //Vendedor vendedor2 = (Vendedor) new Funcionario();

    }
}

