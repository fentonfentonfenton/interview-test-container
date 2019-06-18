# Interview Test Container Node.js Docker Fork

* Install by cloning this fork and switching to the fenton branch, or just cloning that specific branch. `cd` in
* run ```docker-compose up  --build``` & visit 127.0.0.1:8080 or wtvr in your browser or ```curl``` it, etc.
* edit /src/app.js locally and if you refresh the browser, `nodemon` watches for your change. I could put something in to autorefresh the browser, too.
* i'd need to play with the docker-compose and package.json files to add in envs / local / build - unelss there is a better way
* I haven't looked into linked/sidecar containers
* I haven't consired security, or know how to right now.
* I'd want to use a lightweight base container to limit the size, and limit the number of steps in the docker/compose files. But I don't see the benefit of doing that this second



## Criteria

* Must not amend application structure
* Must be containerised
* Must be accessible locally via port 8080

## Considerations

* Should be able to start locally with one command
* Should be able to update application in real time when running locally
* Should not conflict with other projects that may be building at the same time
* Should consider different environments (i.e. local, build, deploy)
* Should consider container patterns (i.e. linked/sidecar containers)
* Should consider container security
* Should consider container efficiencies (i.e. image size, run time)

## Discussion points

These are points to think about and to discuss at the next interview stage.

* Secrets management (passwords, tokens, etc)
* Infrastructure to host application
* Infrastructure provisioning
