package Bienestar.Estudiantil.api_citas.Schedules;
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
@RequestMapping("api/schedule")
@CrossOrigin({"*"})

public class ScheduleController {

 @Autowired ScheduleService scheduleService;

 @GetMapping("/")
 public List<Schedule> findAll(){
 return scheduleService.findAll();
 }

 @GetMapping("/{id}")
 public Schedule findById(@PathVariable Long id){
 return scheduleService.findById(id);
 }

 @PostMapping("/")
 public Schedule save(@RequestBody Schedule entity){
 return scheduleService.save(entity);
 }

 @PutMapping("/")
 public Schedule update(@RequestBody Schedule entity){
 return scheduleService.save(entity);
 }

 @DeleteMapping("/{id}/")
 public void deleteById(@PathVariable Long id){
 scheduleService.deleteById(id);
 }
 
}