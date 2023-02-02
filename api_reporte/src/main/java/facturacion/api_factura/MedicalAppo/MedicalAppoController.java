package facturacion.api_factura.MedicalAppo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperPrint;


@Tag(name = "Controlador de reporte")
@RestController
@RequestMapping("api/report")
@CrossOrigin({"*"})
public class MedicalAppoController {
@Autowired MedicalAppoService medicalAppoService;

    @Operation(summary = "Obtiene un reporte de historia clinica")
    @GetMapping("/medicalAppo/{id}/")
    public ResponseEntity<byte[]> getMedicalAppoReporte(@PathVariable long id) throws JRException {

		JasperPrint reporte = medicalAppoService.getMedicalAppoReporte(id);
        
        if (reporte==null)
            return new ResponseEntity<byte[]>(null, null, HttpStatus.NOT_FOUND);
        

		HttpHeaders headers = new HttpHeaders();
		// set the PDF format
		headers.setContentType(MediaType.APPLICATION_PDF);
		headers.setContentDispositionFormData("filename", "reporteHistoriaClinica.pdf");
		// create the report in PDF format
		return new ResponseEntity<byte[]>(JasperExportManager.exportReportToPdf(reporte), headers, HttpStatus.OK);

	}

    
}
