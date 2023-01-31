package Bienestar.Estudiantil.api_citas.Symptom;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(name = "bff.sintomas", url = "http://localhost:8000/api/symptom")

public interface SymptomClient {

    @GetMapping("/{id}/")
    SymptomDTO findById(@PathVariable("id") Integer id);
}
