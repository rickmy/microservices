package Bienestar.Estudiantil.api_citas.medicalAppos;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class MedicalAppo {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String reasonForAppointment;
    private String medicalObservations;
    private Boolean condition;
    private Integer patientId;
    private Integer doctorId;
    private Integer treatmentId;
    private Integer symptomId;
    private Integer diagnosticId;
    private Integer scheduleId;

}  
