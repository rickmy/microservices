package Bienestar.Estudiantil.api_citas.Patients;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Patient {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
 private Long id;
 private String firsName;
 private String secondName;
 private String lastName;
 private String motherLastName;
 private String identificationCard;
 private String email;
 private String phone;
 private String homeAddress;
 private String sex;
 private Boolean condition;
 private Date birthDate;
 
}