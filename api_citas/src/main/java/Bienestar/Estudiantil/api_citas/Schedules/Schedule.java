package Bienestar.Estudiantil.api_citas.Schedules;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Schedule {

 @Id
 @GeneratedValue(strategy = GenerationType.AUTO)

 private Long id;
 private Date availableDate;
 private String availableTime;
 private Boolean condition;
 private Integer doctorId;
  
}