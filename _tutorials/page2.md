---
layout: tutorial
title: Tutorial
name: Creating custom templates
active_page: page2
---

## Documentation

### ScanAPI CLI

```
$ scanapi --help
Usage: scanapi [OPTIONS] [SPEC_PATH]

  Automated Testing and Documentation for your REST API. SPEC_PATH argument
  is the API specification file path.

Options:
  -o, --output-path PATH          Report output path.
  -c, --config-path PATH          Configuration file path.
  -t, --template PATH             Custom report template path.
  -ll, --log-level [DEBUG|INFO|WARNING|ERROR|CRITICAL]
                                  Set the debug logging level for the program.
  -h, --help                      Show this message and exit.
```

### Syntax - API Specification Keys

| KEY              | Description                                                                                         | Type   | Scopes                            |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------ | --------------------------------- |
| api              | It is reserver word that marks the root of the specification and must not appear in any other place | dict   | root                              |
| assert           | The test assertion                                                                                  | dict   | tests                             |
| body             | The HTTP body of the request                                                                        | dict   | request                           |
| endpoints        | It represents a list of API endpoints                                                               | list   | endpoint                          |
| headers          | The HTTP headers                                                                                    | dict   | endpoint, request                 |
| method           | The HTTP method of the request (GET, POST, PUT, PATCH or DELETE). If not set, GET will be used      | string | request                           |
| name             | An identifier                                                                                       | string | endpoint, request, test           |
| params           | The HTTP query parameters                                                                           | dict   | endpoint, request                 |
| path             | A part of the URL path that will be concatenated with possible other paths                          | string | endpoint, request                 |
| requests         | It represents a list of HTTP requests                                                               | list   | endpoint                          |
| tests            | It represents a list of tests to run against a HTTP response of a request                           | list   | request                           |
| vars             | Key used to define your custom variables to be used along the specification                         | dict   | endpoint, request                 |
| ${custom var}    | A syntax to get the value of the custom variables defined at key `vars`                             | string | request - after `vars` definition |
| ${ENV_VAR}       | A syntax to get the value of an environment variable                                                | string | endpoint, request                 |
| ${{python_code}} | A syntax to get the value of a Python code expression                                               | string | request                           |


### Environment Variables

You can use environment variables in your API spec file with the syntax

```yaml
${MY_ENV_VAR}
```

For example:

```bash
$ export BASE_URL="http://demo.scanapi.dev/api/"
```

```yaml
api:
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

### Custom Variables

You can create custom variables using the syntax:

```yaml
requests:
  - name: my_request
    ...
    vars:
      my_variable_name: my_variable_value
```

And in the next requests you can access them using the syntax:


```yaml
${my_variable_name}
```