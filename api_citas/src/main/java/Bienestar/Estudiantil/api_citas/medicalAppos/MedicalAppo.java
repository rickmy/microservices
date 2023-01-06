package Bienestar.Estudiantil.api_citas.medicalAppos;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
 
}
