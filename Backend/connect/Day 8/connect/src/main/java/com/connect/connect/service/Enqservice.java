package com.connect.connect.service;

import com.connect.connect.dto.Enqdto;
import com.connect.connect.entity.Enqentity;
import com.connect.connect.mapper.Enqmapper;
import com.connect.connect.repository.Enqrepo;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Enqservice {

    private final Enqrepo enqrepo;

    public Enqservice(Enqrepo enqrepo) {
        this.enqrepo = enqrepo;
    }

    public List<Enqdto> getAllServices() {
        List<Enqentity> services = enqrepo.findAll();
        return services.stream()
                .map(Enqmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Enqdto getServiceByName(String name) {
        Enqentity enqentity = enqrepo.findByName(name);
        return Enqmapper.maptoServicedto(enqentity);
    }

    public Enqdto createService(Enqdto servicedto) {
        Enqentity enqentity = Enqmapper.maptoServiceentity(servicedto);
        enqentity = enqrepo.save(enqentity);
        return Enqmapper.maptoServicedto(enqentity);
    }
    @Transactional

    public Enqdto updateServiceByName(String name, Enqdto updatedServicedto) {
        Enqentity existingService = enqrepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setCourse(updatedServicedto.getCourse());
            existingService.setMessage(updatedServicedto.getMessage());
           ;
            
            existingService = enqrepo.save(existingService);
            return Enqmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }
@Transactional
    public void deleteServiceByName(String name) {
        enqrepo.deleteByName(name);
    }
}
