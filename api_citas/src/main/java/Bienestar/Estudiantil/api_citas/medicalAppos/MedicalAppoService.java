package Bienestar.Estudiantil.api_citas.medicalAppos;

import java.util.List;

import Bienestar.Estudiantil.api_citas.Diagnostic.DiagnosticClient;
import Bienestar.Estudiantil.api_citas.Diagnostic.DiagnosticDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import Bienestar.Estudiantil.api_citas.Patient.PatientClient;
import Bienestar.Estudiantil.api_citas.Patient.PatientDTO;
import Bienestar.Estudiantil.api_citas.Schedules.Schedule;
import Bienestar.Estudiantil.api_citas.Schedules.ScheduleService;
import Bienestar.Estudiantil.api_citas.Symptom.SymptomClient;
import Bienestar.Estudiantil.api_citas.Symptom.SymptomDTO;
import Bienestar.Estudiantil.api_citas.Treatment.TreatmentClient;
import Bienestar.Estudiantil.api_citas.Treatment.TreatmentDTO;
import Bienestar.Estudiantil.api_citas.medicalAppos.DTO.MedicalAppoDTO;
import feign.Response;
import Bienestar.Estudiantil.api_citas.medicalAppos.DTO.CreateMedicalAppoDTO;

@Service
public class MedicalAppoService {

 @Autowired MedicalAppoRepository medicalAppoRepository;
 @Autowired PatientClient patientClient;
 @Autowired SymptomClient symptomClient;
 @Autowired TreatmentClient treatmentClient;
 @Autowired DiagnosticClient diagnosticClient;
 @Autowired ScheduleService scheduleService;

 public MedicalAppo save(MedicalAppo entity){
 return medicalAppoRepository.save(entity);
 }

 public MedicalAppo findById( Long id){

 return medicalAppoRepository.findById(id).orElse(null);

 }

 public MedicalAppoDTO findByIdReport( Long id){

    MedicalAppo medicalAppoDb= medicalAppoRepository.findById(id).orElse(null);
    System.out.print(medicalAppoDb);
    PatientDTO patientDTO=patientClient.findById(medicalAppoDb.getPatientId()); 
    SymptomDTO symptomDTO=symptomClient.findById(medicalAppoDb.getSymptomId());
    TreatmentDTO treatmentDTO=treatmentClient.findById(medicalAppoDb.getTreatmentId());
    DiagnosticDTO diagnosticDTO=diagnosticClient.findById(medicalAppoDb.getDiagnosticId());

    
    MedicalAppoDTO medicalAppoDTO = new MedicalAppoDTO(
        medicalAppoDb.getId(),
        patientDTO.getCompleteName(),
        patientDTO.getDni(),
        patientDTO.getEmail(),
        patientDTO.getSex(),
        symptomDTO.getName(),
        treatmentDTO.getName(),
        diagnosticDTO.getName()
    );
    return medicalAppoDTO;
    
}

 public void deleteById(Long id){
    MedicalAppo medicalAppo = this.findById(id);
    medicalAppo.setCondition(false);
    
 medicalAppoRepository.save(medicalAppo);
return;
 }
 
 public ResponseEntity<MedicalAppo> create(CreateMedicalAppoDTO entity){
    PatientDTO patientDTO = patientClient.findById(entity.getPatientId());
    if(patientDTO == null){
        return ResponseEntity.badRequest().build();
    }
     Long longvalue = (long) entity.getScheduleId();//convertidor de id de long a integer

    Schedule scheduleDB = scheduleService.findById(longvalue);
    if(scheduleDB == null){
        return ResponseEntity.badRequest().build();
    }
    MedicalAppo medicalAppoEntity = new MedicalAppo();
    medicalAppoEntity.setPatientId(entity.getPatientId());
    medicalAppoEntity.setDoctorId(entity.getDoctorId());
    medicalAppoEntity.setReasonForAppointment(entity.getReasonForAppointment());
    medicalAppoEntity.setScheduleId(entity.getScheduleId());
    medicalAppoEntity.setCondition(true);
    medicalAppoRepository.save(medicalAppoEntity);
    return ResponseEntity.ok(medicalAppoEntity);

 }

 public List<MedicalAppo> findAll(){

 return medicalAppoRepository.findByCondition(true);

 }

}
