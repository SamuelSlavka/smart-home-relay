# smart-home-relay

A simple express js relay server that collects esp measurements and forwards them to main server.

Esp code is in repo: SamuelSlavka/smart-home-esp.

## deployment

    docker pull samsla/smart-home-relay:latest
    docker rm -f smart-home-relay
    docker run --env-file .env-relay -d --name smart-home-relay --network host samsla/smart-home-relay
