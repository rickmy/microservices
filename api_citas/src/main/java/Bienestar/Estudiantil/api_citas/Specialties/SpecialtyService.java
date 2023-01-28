package Bienestar.Estudiantil.api_citas.Specialties;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpecialtyService {

 @Autowired SpecialtyRepository specialtyRepository;
 public Specialty save(Specialty entity){
 return specialtyRepository.save(entity);
 }

 public Specialty findById( Long id){

 return specialtyRepository.findById(id).orElse(new Specialty());

 }

 public void deleteById(Long id){

    
 specialtyRepository.deleteById(id);

 }

 public List<Specialty> findAll(){

 return specialtyRepository.findAll();

 }

}

