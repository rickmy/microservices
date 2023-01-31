package Bienestar.Estudiantil.api_citas.Treatment;


import org.springframework.cloud.openfeign.FeignClient;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(name = "bff.tratamientos", url = "http://localhost:8000/api/treatment")

public interface TreatmentClient {

    @GetMapping("/{id}/")
    TreatmentDTO findById(@PathVariable("id") Integer id);
}
