package Bienestar.Estudiantil.api_citas.Doctors;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

 @Autowired DoctorRepository doctorRepository;

 public Doctor save(Doctor entity){

 return doctorRepository.save(entity);

 }

 public Doctor findById( Long id){

 return doctorRepository.findById(id).orElse(new Doctor());

 }

 public void deleteById(Long id){

    
 doctorRepository.deleteById(id);

 }

 public List<Doctor> findAll(){

 return doctorRepository.findAll();

 }

}

