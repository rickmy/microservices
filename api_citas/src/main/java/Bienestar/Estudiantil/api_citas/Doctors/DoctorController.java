package Bienestar.Estudiantil.api_citas.Doctors;
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
@RequestMapping("api/doctor")
@CrossOrigin({"*"})

public class DoctorController {

 @Autowired DoctorService doctorService;

 @GetMapping("/")
 public List<Doctor> findAll(){
 return doctorService.findAll();
 }

 @GetMapping("/{id}")
 public Doctor findById(@PathVariable Long id){
 return doctorService.findById(id);
 }

 @PostMapping("/")
 public Doctor save(@RequestBody Doctor entity){
 return doctorService.save(entity);
 }

 @PutMapping("/")
 public Doctor update(@RequestBody Doctor entity){
 return doctorService.save(entity);
 }

 @DeleteMapping("/{id}/")
 public void deleteById(@PathVariable Long id){
 doctorService.deleteById(id);
 }
 
}