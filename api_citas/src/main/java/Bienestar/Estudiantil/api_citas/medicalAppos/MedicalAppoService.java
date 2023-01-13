package Bienestar.Estudiantil.api_citas.medicalAppos;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalAppoService {

 @Autowired MedicalAppoRepository medicalAppoRepository;

 public MedicalAppo save(MedicalAppo entity){
 return medicalAppoRepository.save(entity);
 }

 public MedicalAppo findById( Long id){

 return medicalAppoRepository.findById(id).orElse(new MedicalAppo());

 }

 public void deleteById(Long id){

    
 medicalAppoRepository.deleteById(id);

 }

 public List<MedicalAppo> findAll(){

 return medicalAppoRepository.findAll();

 }

}
