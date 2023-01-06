package Bienestar.Estudiantil.api_citas.Schedules;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

 public List<Schedule> findAll();

}
