---
title: Kubernetes
---


## First Time Config

1. Install kubectl + Google Cloud SDK
2. Add kubectl component
```bash
gcloud components install kubectl
```

3. Configure Kube config
```bash
aws eks --profile $PROFILE --region ap-southeast-1 update-kubeconfig --name $CLUSTER_NAME
```

4. Switch to context
```bash
kubectl config use-context $KUBERNETES_CLUSTER_ARN
```

5. Check that it is working
```bash
kubectl get service
```

## Use Dashboard

1. Create Proxy
```
kubectl proxy
```

2. Get Tokens
```bash
$ kubectl -n kube-system describe secret $TOKEN_NAME
or
$ kubectl -n kube-system get secret $$TOKEN_NAME -o jsonpath="{ .data.token }" | base64 --decode
```

3. Browse
```
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#!/login
```

### Commands
```bash
$ kubectl get nodes
$ kubectl get pods
$ kubectl get pod -o wide

$ kubectl port-forward service/dagster 3001:3000
$ kubectl logs dagster-747d6c5db6-n56b8 dagster
```
