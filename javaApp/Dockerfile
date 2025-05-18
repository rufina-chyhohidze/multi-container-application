FROM gradle:8.5-jdk21 AS builder
WORKDIR /app
COPY . .
RUN ./gradlew bootJar -x test


FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]

#FROM eclipse-temurin:21-jdk
#WORKDIR /app
#COPY . .
#RUN ./gradlew bootJar -x test
#CMD java -jar build/libs/javaApp-0.0.1-SNAPSHOT.jar


