#FROM ubuntu:latest
#LABEL authors="rufinachyhohidze"
#
#ENTRYPOINT ["top", "-b"]
FROM certbot/certbot
RUN pip install certbot-dns-duckdns
