package Bienestar.Estudiantil.api_citas.Specialties;
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
@RequestMapping("api/specialty")
@CrossOrigin({"*"})

public class SpecialtyController {

 @Autowired SpecialtyService specialtyService;

 @GetMapping("/")
 public List<Specialty> findAll(){
 return specialtyService.findAll();
 }

 @GetMapping("/{id}")
 public Specialty findById(@PathVariable Long id){
 return specialtyService.findById(id);
 }

 @PostMapping("/")
 public Specialty save(@RequestBody Specialty entity){
 return specialtyService.save(entity);
 }

 @PutMapping("/")
 public Specialty update(@RequestBody Specialty entity){
 return specialtyService.save(entity);
 }

 @DeleteMapping("/{id}/")
 public void deleteById(@PathVariable Long id){
 specialtyService.deleteById(id);
 }
 
}
