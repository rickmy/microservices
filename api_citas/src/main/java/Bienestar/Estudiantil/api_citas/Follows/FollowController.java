package Bienestar.Estudiantil.api_citas.Follows;
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
@RequestMapping("api/follow")
@CrossOrigin({"*"})

public class FollowController {

 @Autowired FollowService followService;

 @GetMapping("/")
 public List<Follow> findAll(){
 return followService.findAll();
 }

 @GetMapping("/{id}")
 public Follow findById(@PathVariable Long id){
 return followService.findById(id);
 }

 @PostMapping("/")
 public Follow save(@RequestBody Follow entity){
 return followService.save(entity);
 }

 @PutMapping("/")
 public Follow update(@RequestBody Follow entity){
 return followService.save(entity);
 }

 @DeleteMapping("/{id}/")
 public void deleteById(@PathVariable Long id){
 followService.deleteById(id);
 }
 
}
