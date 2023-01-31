package Bienestar.Estudiantil.api_citas.medicalAppos;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Bienestar.Estudiantil.api_citas.Diagnostic.DiagnosticClient;
import Bienestar.Estudiantil.api_citas.Diagnostic.DiagnosticDTO;
import Bienestar.Estudiantil.api_citas.Patient.PatientClient;
import Bienestar.Estudiantil.api_citas.Patient.PatientDTO;
import Bienestar.Estudiantil.api_citas.Symptom.SymptomClient;
import Bienestar.Estudiantil.api_citas.Symptom.SymptomDTO;
import Bienestar.Estudiantil.api_citas.Treatment.TreatmentClient;
import Bienestar.Estudiantil.api_citas.Treatment.TreatmentDTO;
import Bienestar.Estudiantil.api_citas.medicalAppos.DTO.MedicalAppoDTO;

@Service
public class MedicalAppoService {

 @Autowired MedicalAppoRepository medicalAppoRepository;
 @Autowired PatientClient patientClient;
 @Autowired SymptomClient symptomClient;
 @Autowired TreatmentClient treatmentClient;
 @Autowired DiagnosticClient diagnosticClient;

 public MedicalAppo save(MedicalAppo entity){
 return medicalAppoRepository.save(entity);
 }

 public MedicalAppo findById( Long id){

 return medicalAppoRepository.findById(id).orElse(new MedicalAppo());

 }

 public MedicalAppoDTO findByIdReport( Long id){

    MedicalAppo medicalAppoDb= medicalAppoRepository.findById(id).orElse(new MedicalAppo());
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

    
 medicalAppoRepository.deleteById(id);

 }

 public List<MedicalAppo> findAll(){

 return medicalAppoRepository.findAll();

 }

}
