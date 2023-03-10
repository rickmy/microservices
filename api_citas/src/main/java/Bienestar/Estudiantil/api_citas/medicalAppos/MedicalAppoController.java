package Bienestar.Estudiantil.api_citas.medicalAppos;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/medicalAppo")
@CrossOrigin({"*"})

public class MedicalAppoController {

 @Autowired MedicalAppoService medicalAppoService;

 @GetMapping("/")
 public List<MedicalAppo> findAll(){
  return medicalAppoService.findAll();
 }
 @GetMapping("/{id}/")
 public MedicalAppo findById(@PathVariable Long id){
  return medicalAppoService.findById(id);
 }
 @PostMapping("/")
 public MedicalAppo save(@RequestBody MedicalAppo entity){
  return medicalAppoService.save(entity);
 }
 @PutMapping("/")
 public MedicalAppo update(@RequestBody MedicalAppo entity){
  return medicalAppoService.save(entity);
 }

 @DeleteMapping("/{id}/")
 public void deleteById(@PathVariable Long id){
  medicalAppoService.deleteById(id);
 }

}

