package Bienestar.Estudiantil.api_citas.Follows;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Follow {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)

 private Long id;
 private Integer patientId;
 private Integer docotrId;
 private String observations;
 private Boolean condition;
 
}
