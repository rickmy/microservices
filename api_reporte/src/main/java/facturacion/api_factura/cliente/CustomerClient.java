package facturacion.api_factura.cliente;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;




@FeignClient(name = "bff.citas", url = "http://localhost:8080/api/medicalAppo")
public interface CustomerClient {

    @GetMapping("/{id}/")
    CustomerDTO findCustomerById(@PathVariable("id") Long id);
}



