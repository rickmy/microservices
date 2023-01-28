package Bienestar.Estudiantil.api_citas.Patients;
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
@RequestMapping("api/patient")
@CrossOrigin({"*"})

public class PatientController {

 @Autowired PatientService patientService;

 @GetMapping("/")
 public List<Patient> findAll(){
 return patientService.findAll();
 }

 @GetMapping("/{id}")
 public Patient findById(@PathVariable Long id){
 return patientService.findById(id);
 }

 @PostMapping("/")
 public Patient save(@RequestBody Patient entity){
 return patientService.save(entity);
 }

 @PutMapping("/")
 public Patient update(@RequestBody Patient entity){
 return patientService.save(entity);
 }

 @DeleteMapping("/{id}/")
 public void deleteById(@PathVariable Long id){
 patientService.deleteById(id);
 }
 
}