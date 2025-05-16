package rufina.infra;

import rufina.infra.config.DotenvInitializer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;



@Slf4j
@SpringBootApplication
public class JavaAppApplication {
    public static void main(String[] args) {
        new SpringApplicationBuilder(JavaAppApplication.class)
                .initializers(new DotenvInitializer())
                .run(args);
    }



}
