package facturacion.api_factura.MedicalAppo;
import jakarta.annotation.sql.DataSourceDefinition;
import lombok.Data;
@Data
public class MedicalAppoDTO {
    private Long id;
    private String completeName;
    private String dni;
    private String email;
    private String sex;
    private String nameSymptom;
    private String nameTreatment;
    private String nameDiagnostic;
}
