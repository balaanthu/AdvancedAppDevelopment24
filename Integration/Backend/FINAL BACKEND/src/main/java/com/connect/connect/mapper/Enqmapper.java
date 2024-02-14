package com.connect.connect.mapper;

import com.connect.connect.dto.Enqdto;
import com.connect.connect.entity.Enqentity;

public class Enqmapper {

    public static Enqdto maptoServicedto(Enqentity enqentity) {
        // Implement the mapping logic
        return new Enqdto(
                enqentity.getId(),
                enqentity.getName(),
                enqentity.getEmail(),
                enqentity.getCourse(),
                enqentity.getMessage()
                
        );
    }

    public static Enqentity maptoServiceentity(Enqdto enqdto) {
        // Implement the mapping logic
        return new Enqentity(
                enqdto.getId(),
                enqdto.getName(),
                enqdto.getEmail(),
                enqdto.getCourse(),
                enqdto.getMessage()
            
        );
    }
}