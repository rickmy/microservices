package Bienestar.Estudiantil.api_citas.Doctors;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Doctor {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
 private Long id;
 private String firsName;
 private String secondName;
 private String lastName;
 private String motherLastName;
 private String identificationCard;
 private String email;
 private String  code;
 private Boolean condition;
 private Integer specialtyId;

}
