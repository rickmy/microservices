package Bienestar.Estudiantil.api_citas.Doctors;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
