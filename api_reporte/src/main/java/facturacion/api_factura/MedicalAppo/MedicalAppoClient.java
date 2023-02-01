package facturacion.api_factura.MedicalAppo;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;




@FeignClient(name = "bff.citas", url = "http://localhost:8080/api/medicalAppo/reportMedical/")
public interface MedicalAppoClient {

    @GetMapping("/{id}/")
    MedicalAppoDTO findById(@PathVariable("id") Long id);
}



