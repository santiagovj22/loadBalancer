# loadBalancer
Short example to explain in a simple way how we can build a load balancer using nginx and docker.  
for this part We are using the Least connection method for load balance


## Requirements
  - docker version 19.03.13
  - node version v14.15.0
  
## Steps
Build the docker images
  
 - `docker build -t server-app:1.0.0 .`  
 - `cd gateway && docker build -t gateway:1.0.0 .`
  
Run the numbers of containers/servers wich do you want(for this example we will use four container/servers  
  - `docker run -d -p 4001:4000 --name server-01 -e "server=one" server-app:1.0.0`  
  - `docker run -d -p 4002:4000 --name server-02 -e "server=two" server-app:1.0.0`    
  - `docker run -d -p 4003:4000 --name server-03 -e "server=three" server-app:1.0.0`
  - `docker run -d -p 4004:4000 --name server-04 -e "server=four" server-app:1.0.0`
  
Run the load balancer container  
  - `docker run -p 4000:80 -d gateway:1.0.0`
