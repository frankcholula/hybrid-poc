# Hybrid Architecture PoC
This is a poc to simulate hybrid architecture written by [Monte Carlo Data](https://www.montecarlodata.com/blog-data-software-as-a-service-the-case-for-a-hybrid-deployment-architecture/) to test the feasibility of a software agent running in a customer-dedicated, isolated VPC.

## Proposal
1. Createa dockerized MERN application to simulate customer's environment.
2. Create a grpc service and agent along with a graphQL interface as a control plane for customer metadata and service healthchecks.
3. Deploy the two applications in two separate VPC's with k8s.

## Diagram
```mermaid
flowchart LR
    NHI(NHI External Service) --> NHI-front
    subgraph HOSTPITAL A
        NHI-front(NHI Frontend) --> aiphas-ui(AIPHAS UI)
        db[(Database)]
        subgraph Backend
            agent(AGENT) --> aiphas-backend(AIPHAS BACKEND)
        end
        aiphas-backend --> db
        aiphas-backend --> aiphas-ui
    end
    subgraph AIPHAS CLOUD
        aiphas-backend --Backend streams metadata back to Agent API--> agent-api(AGENT API)
        agent --Agent Polls API for work--> agent-api
        agent-ui(AGENT UI)
        agent-api --> future-aiphas-service((FUTURE AIPHAS SERVICES))
        agent-api --> meta-db(META DATABASE)
        meta-db --> monitor(MONITORING/ALERT SYSTEM)
    end
    future-aiphas-service --> chatgpt((CHATGPT))
```
