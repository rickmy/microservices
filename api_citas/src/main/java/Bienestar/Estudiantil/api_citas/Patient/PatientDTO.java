package Bienestar.Estudiantil.api_citas.Patient;

import lombok.Data;

@Data
public class PatientDTO {
    private Long id;
    private String completeName;
    private String dni;
    private String email;
    private String sex;
    
}