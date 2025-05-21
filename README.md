# Rufina-Chyhohidze ACS 202 Infrastructure3 project 

## Getting started

1. To start application, just download as zip, unzip the project 
2. open the project, and run 'docker compose up' in root of the directory where 'docker-compose.yml' is located.
3. access the following links:
- https://rufina-infra3.duckdns.org → Java backend with database 
- https://rufina-infra3.duckdns.org/ml/hello -> python app
- https://rufina-infra3.duckdns.org/node/greet -> node app
  To run locally, create a .env in root directory (IF YOU DONT HAVE IT, NORMALLY YOU SHOULD HAVE IT), and put this there:

```env
SUBDOMAIN=rufina-infra3
TOKEN=e9865963-48c1-49bc-9c1b-6a5bc6267c1b
IPWEB=127.0.0.1
#127.0.0.1
#4.180.149.210 its just my thing 
```
##  What I've included in this project?

This project includes multiple components all running in containers:

- **Java Spring Boot App (`javaApp`)**  
  This is the main backend that serves notes through a simple API.

- **Python Flask App (`pythonApp`)**  
  Just a minimal microservice with a `ml/hello` route to test connectivity.

- **Node.js App (`nodeApp`)**  
  A fun little Express.js server that responds with a custom message on `node/greet`.

- **PostgreSQL (`rufinachy_db`)**  
  A lightweight database container (Postgres 17 Alpine) used by the Java app.

- **Nginx Reverse Proxy**  
  Handles incoming requests and routes them to the right backend based on path. Also enforces HTTPS.

- **Certbot**  
  Automatically requests an SSL certificate from Let’s Encrypt using DNS verification with DuckDNS.

- **DuckDNS**  
  Keeps my public IP updated for the domain `rufina-infra3.duckdns.org`.

---
## SSL Setup

I used **Certbot with the DNS DuckDNS plugin** to get a **wildcard SSL certificate** for `*.duckdns.org`. The certificate and keys are mounted into the Nginx container using bind mounts. I confirmed DNS ownership manually by updating the TXT record and checking with `dig`.

## Docker Highlights

- Used **multi-stage build** for the Java app to keep image size minimal.
- **Alpine images** for Python and Node apps (so they’re super lightweight).
- Shared Docker **network** between services: `rufina_java_postgres_network`.
- Used **named volume** `rufinachy_db_data` for persistent Postgres storage.
- Declared and loaded **environment variables** from `.env` file (SUBDOMAIN, TOKEN, IPWEB).

##  Git 

- I pushed everything to GitLab:  
  [`gitlab.com/kdg-ti/infrastructure-3/2024-25/acs202/rufina-chyhohidze`](https://gitlab.com/kdg-ti/infrastructure-3/2024-25/acs202/rufina-chyhohidze)

- There is possibility to download and zip the project from  VM using `scp` or just by git tool .
