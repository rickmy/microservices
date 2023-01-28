package Bienestar.Estudiantil.api_citas.Diagnostic;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(name = "bff.diagnosticos", url = "http://localhost:8000/api/diagnostic")

public interface DiagnosticClient {

    @GetMapping("/{id}/")
    DiagnosticDTO findById(@PathVariable("id") Long id);
}
