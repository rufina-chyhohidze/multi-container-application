package rufina.infra.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class NoteMvcController {

    public String notes() {
        return "index";
    }

}
