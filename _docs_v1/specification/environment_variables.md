---
layout: docs
title: ScanAPI - Documentation

page_name: Environment Variables
active_page: environment_variables

section: Specification
index: 3
---

# Environment Variables

You can use environment variables in your API spec file with the syntax

```yaml
${MY_ENV_VAR}
```

For example:

```bash
$ export BASE_URL="http://demo.scanapi.dev/api/"
```

```yaml
endpoints:
  - name: scanapi-demo
    path: ${BASE_URL}
    requests:
      - name: health
        method: get
        path: /health/
```

ScanAPI would call the following `http://demo.scanapi.dev/api/health/` then.

**Heads up: the variable name must be in upper case.**
