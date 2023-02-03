package Bienestar.Estudiantil.api_citas.medicalAppos.DTO;

import java.lang.reflect.Constructor;

import lombok.Data;

@Data
public class CreateMedicalAppoDTO {
    private Integer scheduleId; 
    private Integer doctorId;
    private String reasonForAppointment;
    private Integer patientId;
    
    public CreateMedicalAppoDTO(String reasonForAppoinmet,Integer scheduleId,Integer docotrId,Integer patientId) {
        
        this.scheduleId=scheduleId;
        this.doctorId=docotrId;
        this.patientId=patientId;
        this.reasonForAppointment=reasonForAppoinmet;
    }
}



