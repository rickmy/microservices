package Bienestar.Estudiantil.api_citas.Specialties;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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