package Bienestar.Estudiantil.api_citas.Schedules;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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