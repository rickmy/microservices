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
    private Date attentionDate;
    private String serviceTime;
    private String reasonForAppointment;
    private String medicalObservations;
    private Boolean condition;
    private Integer patientId;
    private Integer doctorId;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "medical_appo_id")
    private List<Treatment> treatments = new ArrayList<>();

    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "medical_appo_id")
    private List<Symptom> symptoms = new ArrayList<>();


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "medical_appo_id")
    private List<Diagnostic> diagnostics = new ArrayList<>();

}   