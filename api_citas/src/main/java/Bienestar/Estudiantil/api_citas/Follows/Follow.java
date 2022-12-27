package Bienestar.Estudiantil.api_citas.Follows;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
