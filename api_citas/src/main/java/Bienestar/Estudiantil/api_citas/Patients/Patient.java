package Bienestar.Estudiantil.api_citas.Patients;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Patient {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)
 private Long id;
 private String firs_Name;
 private String second_name;
 private String last_name;
 private String mother_last_name;
 private String identification_card;
 private String email;
 private String phone;
 private String home_address;
 private String sex;
 private Boolean condition;
 private Date birth_date;
 
}