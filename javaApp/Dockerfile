

FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY . .
RUN ./gradlew bootJar -x test
CMD java -jar build/libs/javaApp-0.0.1-SNAPSHOT.jar


## Stage 1: Build Spring Boot app using Gradle
#FROM gradle:8.5-jdk17 AS build
#WORKDIR /app
#COPY . .
##RUN #./gradlew bootJar
#
## Stage 2: Run with Temurin base JRE (cross-platform)
#FROM eclipse-temurin:21-jre
#WORKDIR /app
#COPY --from=build /app/build/libs/*.jar ./app.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "app.jar"]
