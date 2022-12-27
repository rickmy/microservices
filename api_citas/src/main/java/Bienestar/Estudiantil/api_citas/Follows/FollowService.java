package Bienestar.Estudiantil.api_citas.Follows;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FollowService {

 @Autowired FollowRepository followRepository;

 public Follow save(Follow entity){
 return followRepository.save(entity);
 }

 public Follow findById( Long id){

 return followRepository.findById(id).orElse(new Follow());

 }

 public void deleteById(Long id){

    
 followRepository.deleteById(id);

 }

 public List<Follow> findAll(){

 return followRepository.findAll();

 }

}

