package facturacion.api_factura.cliente;

import java.sql.Date;

import lombok.Data;

@Data
public class CustomerDTO {
    private Long id;
    private String firsName;
    private String dni;
    private String email;
 
}
