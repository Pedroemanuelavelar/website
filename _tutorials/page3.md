---
layout: tutorial
title: Tutorial
name: Chaining requests
active_page: page3
---
### Python Code

You can add Python code to the API specification by using the syntax:

```yaml
${{my_pyhon_code}}
```

For example

```yaml
body:
  uuid: 5c5af4f2-2265-4e6c-94b4-d681c1648c38
  name: Tarik
  yearsOfExperience: ${{2 + 5}}
  languages:
    - ruby
      go
  newOpportunities: false
```

What I can use inside the `${{}}` syntax?
Basically any python code that **can run inside an `eval` python command**.
A short list of modules will be already available for you. They are all the imports of
[this file](https://github.com/scanapi/scanapi/blob/master/scanapi/evaluators/code_evaluator.py#L1).

### Chaining Requests

Inside the request scope, you can save the results of the resulted response to use in the next
requests. For example:

```yaml
requests:
  - name: list_all
    method: get
    vars:
      dev_id: ${{response.json()[2]["uuid"]}}
```

The dev_id variable will receive the `uuid` value of the 3rd result from the devs_list_all request

It the response is

```json
[
    {
        "uuid": "68af402f-1084-40a4-b9b2-6bb5c2d11559",
        "name": "Anna",
        "yearsOfExperience": 5,
        "languages": [
            "python",
            "c"
        ],
        "newOpportunities": true
    },
    {
        "uuid": "0d1bd106-c585-4d6b-b3a4-d72dedf7190e",
        "name": "Louis",
        "yearsOfExperience": 3,
        "languages": [
            "java"
        ],
        "newOpportunities": true
    },
    {
        "uuid": "129e8cb2-d19c-41ad-9921-cea329bed7f0",
        "name": "Marcus",
        "yearsOfExperience": 4,
        "languages": [
            "c"
        ],
        "newOpportunities": false
    }
]
```

The dev_id variable will receive the value `129e8cb2-d19c-41ad-9921-cea329bed7f0`

### API specification in multiple files

With `!include`, it is possible to build your API specification in multiple files.

For example, these two files

```yaml
# api.yaml
api:
  endpoints:
    - name: scanapi-demo
      path: ${BASE_URL}
      requests: !include include.yaml
```

```yaml
# include.yaml
- name: health
  path: /health/
```

would generate:

```yaml
api:
  endpoints:
    - name: scanapi-demo
      path: ${BASE_URL}
      requests:
        - name: health
          path: /health/
```

### Configuration File

If you want to configure the ScanAPI with a file, you can create a `.scanapi.yaml` file in the root
of your project

```yaml
project_name: DemoAPI # This will be rendered in the Report Title.
spec_path: my_path/api.yaml # API specification file path
output_path: my_path/my-report.html # Report output path.
template: my_template.jinja # Custom report template path.
```

### Hiding sensitive information

If you want to omit sensitive information in the report, you can configure it in the `.scanapi.yaml`
file.

```yaml
report:
  hide-request:
    headers:
      - Authorization
```

The following configuration will print all the headers values for the `Authorization` key for all
the request as `SENSITIVE_INFORMATION` in the report.

In the same way you can omit sensitive information from response.

```yaml
report:
  hide-response:
    headers:
      - Authorization
```

Available attributes to hide: `headers`, `body` and `url`.

## Contributing

Collaboration is super welcome! We prepared the [CONTRIBUTING.md][contributing-file] file to help
you in the first steps. Every little bit of help counts! Feel free to create new GitHub issues and
interact here.

Let's built it together 🚀

[contributing-file]: https://github.com/scanapi/scanapi/blob/master/CONTRIBUTING.md
[pip-installation]: https://pip.pypa.io/en/stable/installing/
[scanapi-examples]: https://github.com/scanapi/examples
