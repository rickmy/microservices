package Bienestar.Estudiantil.api_citas.Patient;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(name = "bff.pacientes", url = "http://localhost:3000/api/patients")

public interface PatientClient {

    @GetMapping("/{id}/")
    PatientDTO findById(@PathVariable("id") Long id);
}
