package Bienestar.Estudiantil.api_citas.Patients;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

 @Autowired PatientRepository patientRepository;
 public Patient save(Patient entity){
 return patientRepository.save(entity);
 }

 public Patient findById( Long id){

 return patientRepository.findById(id).orElse(new Patient());

 }

 public void deleteById(Long id){

    
 patientRepository.deleteById(id);

 }

 public List<Patient> findAll(){

 return patientRepository.findAll();

 }

}
