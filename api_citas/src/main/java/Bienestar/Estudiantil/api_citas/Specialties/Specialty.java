package Bienestar.Estudiantil.api_citas.Specialties;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Specialty {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)

 private Long id;
 private String especialtyName;
 private Boolean condition;
 
}
