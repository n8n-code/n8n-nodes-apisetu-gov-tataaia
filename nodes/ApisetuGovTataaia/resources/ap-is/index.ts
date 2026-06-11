import type { INodeProperties } from 'n8n-workflow';

export const apIsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					]
				}
			},
			"options": [
				{
					"name": "Licer",
					"value": "Licer",
					"action": "Insurance Policy - Life",
					"description": "API to verify Insurance Policy - Life.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/licer/certificate"
						}
					}
				},
				{
					"name": "Prcpt",
					"value": "Prcpt",
					"action": "Premium Receipt",
					"description": "API to verify Premium Receipt.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/prcpt/certificate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /licer/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Licer"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"FullName\": \"Sunil Kumar\",\n  \"UDF1\": \"C000000013\",\n  \"UDF2\": \"21-11-2006\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Licer"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Licer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Licer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Licer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Licer"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Licer"
					]
				}
			}
		},
		{
			"displayName": "POST /prcpt/certificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Prcpt"
					]
				}
			}
		},
		{
			"displayName": "Certificate Parameters",
			"name": "certificateParameters",
			"type": "json",
			"default": "{\n  \"FullName\": \"Sunil Kumar\",\n  \"PI_DOB\": \"28-01-2016\",\n  \"PI_FIN_YEAR\": \"Previous Year, Current Year\",\n  \"PI_POLICYNBR\": \"C000000217\"\n}",
			"routing": {
				"send": {
					"property": "certificateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Prcpt"
					]
				}
			}
		},
		{
			"displayName": "Consent Artifact",
			"name": "consentArtifact",
			"type": "string",
			"default": {
				"consent": {
					"consentId": "ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",
					"data": {},
					"dataConsumer": {},
					"dataProvider": {},
					"permission": {
						"dateRange": {},
						"frequency": {}
					},
					"purpose": {},
					"user": {}
				},
				"signature": {}
			},
			"routing": {
				"send": {
					"property": "consentArtifact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Prcpt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Format",
			"name": "format",
			"type": "options",
			"default": "pdf",
			"description": "The format of the certificate in response.",
			"options": [
				{
					"name": "PDF",
					"value": "pdf"
				}
			],
			"routing": {
				"send": {
					"property": "format",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Prcpt"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
			"name": "txnId",
			"type": "string",
			"default": "f7f1469c-29b0-4325-9dfc-c567200a70f7",
			"description": "A unique transaction id for this request in UUID format. It is used for tracking the request.",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Prcpt"
					]
				}
			}
		},
		{
			"displayName": "X APISETU APIKEY (Header)",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apiKey (header: X-APISETU-APIKEY)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-APIKEY": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Prcpt"
					]
				}
			}
		},
		{
			"displayName": "X APISETU CLIENTID (Header)",
			"name": "security_clientid",
			"type": "string",
			"default": "",
			"description": "API key for clientId (header: X-APISETU-CLIENTID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-APISETU-CLIENTID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"AP Is"
					],
					"operation": [
						"Prcpt"
					]
				}
			}
		},
];
