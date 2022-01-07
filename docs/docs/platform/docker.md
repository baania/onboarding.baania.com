---
title: Docker
---

## Docker commands
```bash
docker pull python:3.7

docker run --rm python:3.7 "ls"
docker run --rm -it python:3.7 /bin/bash

docker images
docker container
```

## Building
```dockerfile title="Dockerfile"
FROM python:3.7

RUN pip install fastapi[all]

WORKDIR /app
COPY * ./

EXPOSE 8000
ENTRYPOINT ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0"]
```

```python title="main.py"
from fastapi import FastAPI
import redis

app = FastAPI()


@app.get("/")
async def root():
    #r = redis.Redis(host='redis', port=6379, db=0)
    #r.set("key", "value")

    return {"message": "Hello World"}
```

### Commands
```bash
docker build . -t myimages
docker run --rm -p 8000:8000 myimage
docker run --rm -p 8000:8000 -v /Users/vpanusuwan/projects/docker-demo:/app myimage

docker ps
docker exec -it 0dbd899f1538 /bin/bash
```

## Compose
```yaml title="docker-compose.yml"
version: "3"
services:
  main:
    image: myimage
    #build: .
    volumes:
    - ".:/app"
    ports:
    - "8000:8000"
  redis:
    image: "redis:6.0.8"
```

### Commands
```bash
docker-compose build
docker-compose up
docker-compose ps
docker-compose exec main /bin/bash
```

## Hub
```bash
docker tag myimage docker.io/varokas/myimage:0.01
docker login
docker push docker.io/varokas/myimage:0.01
```

## Login to private repo
```bash
docker pull $AWS_ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com/$IMAGE_NAME:$TAG

aws ecr --region ap-southeast-1 --profile $PROFILE_NAME get-login-password | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.ap-southeast-1.amazonaws.com
```
