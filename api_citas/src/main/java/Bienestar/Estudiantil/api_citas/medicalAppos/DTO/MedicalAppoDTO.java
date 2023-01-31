package Bienestar.Estudiantil.api_citas.medicalAppos.DTO;

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

    public MedicalAppoDTO(Long id, String completeName, String dni, String email, String sex
    , String nameSymptom, String nameTreatment, String nameDiagnostic) {
        this.id = id;
        this.completeName=completeName;
        this.dni=dni;
        this.email=email;
        this.sex=sex;
        this.nameSymptom=nameSymptom;
        this.nameDiagnostic=nameDiagnostic;
        this.nameTreatment=nameTreatment;
    }

}
