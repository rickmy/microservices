package Bienestar.Estudiantil.api_citas.Schedules;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScheduleService {

 @Autowired ScheduleRepository scheduleRepository;
 public Schedule save(Schedule entity){
 return scheduleRepository.save(entity);
 }

 public Schedule findById( Long id){
 return scheduleRepository.findById(id).orElse(new Schedule());

 }

 public void deleteById(Long id){

    
 scheduleRepository.deleteById(id);

 }

 public List<Schedule> findAll(){

 return scheduleRepository.findAll();

 }

}
