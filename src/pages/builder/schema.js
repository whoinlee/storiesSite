export const builderSchema = [
  {
    "total": 7,
    "items": [
      {
        "namespace": {
          "name": "alerting",
          "version": 1
        },
        "name": "health",
        "kind": "extension",
        "displayName": "Health Status",
        "description": "Extension for entity to map health rule to status and entity health status across health rules. Individual health rule attribute will be added dynamically.",
        "extends": {},
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "health.status": {
              "type": "long",
              "enum": [],
              "description": "Current health status across all health rule configurations for this entity. Possible values are 0 (Normal), 1 (Unknown), 2 (Warning) and 3 (Critical)."
            }
          }
        },
        "metricTypes": [
          "alerting:health.status"
        ],
        "eventTypes": [
          "alerting:healthrule.violation"
        ]
      },
      {
        "namespace": {
          "name": "biq",
          "version": 1
        },
        "name": "biq_extension",
        "kind": "extension",
        "displayName": "BiQ metrics extension",
        "description": "Extension for entity to add BiQ metrics.",
        "extends": {
          "apm": [
            "business_transaction"
          ]
        },
        "metricTypes": [
          "biq:total_cart_value",
          "biq:average_cart_value",
          "biq:carts_sold"
        ],
        "eventTypes": [
          "biq:biq_event"
        ]
      },
      {
        "namespace": {
          "name": "brostatus",
          "version": 1
        },
        "name": "brostatus_extension",
        "kind": "extension",
        "displayName": "Bro Status Extension",
        "description": "Extension for creating bro status metric and event on apm entities",
        "extends": {
          "apm": [
            "service_instance",
            "service"
          ]
        },
        "metricTypes": [
          "brostatus:status"
        ],
        "eventTypes": [
          "brostatus:broevent"
        ]
      },
      {
        "namespace": {
          "name": "health",
          "version": 1
        },
        "name": "overall_health",
        "kind": "extension",
        "displayName": "Overall Health Status",
        "description": "Extension for entity to map health rule to Status",
        "extends": {},
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "status": {
              "type": "long",
              "enum": [],
              "description": "Overall health status across alerting:health.status and troubleshooting:anomaly_health. Possible values are 0 (Normal), 1 (Unknown), 2 (Warning) and 3 (Critical)."
            }
          }
        },
        "metricTypes": [
          "health:status"
        ]
      },
      {
        "namespace": {
          "name": "ignite",
          "version": 1
        },
        "name": "ignite_extension",
        "kind": "extension",
        "displayName": "Ignite Extension",
        "description": "Ignite risk and efficiency assessment extension",
        "extends": {
          "k8s": [
            "deployment"
          ]
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "total": {
              "type": "string",
              "enum": [],
              "description": "Overall current health status of this entity"
            }
          }
        },
        "eventTypes": [
          "ignite:report"
        ]
      },
      {
        "namespace": {
          "name": "logs",
          "version": 1
        },
        "name": "log_extension",
        "kind": "extension",
        "displayName": "Log event and count metric extension",
        "description": "Extension for entity to add log event and log count metric.",
        "extends": {},
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "dummy": {
              "type": "string",
              "enum": [],
              "description": "Getting null pointer exception without defining at least one attribute"
            }
          }
        },
        "metricTypes": [
          "logs:log_records"
        ],
        "eventTypes": [
          "logs:generic_record"
        ]
      },
      {
        "namespace": {
          "name": "troubleshooting",
          "version": 1
        },
        "name": "anomaly",
        "kind": "extension",
        "displayName": "Anomaly Extension",
        "description": "Extension for Anomaly",
        "extends": {},
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "model_training_status": {
              "type": "string",
              "enum": [],
              "description": "Model Training Status [UNKNOWN ,IN_TRAINING, READY, NOT_AVAILABLE] for the entity"
            },
            "ad_config": {
              "type": "boolean",
              "enum": [],
              "description": "AD Configuration (enable/disable) for the entity"
            }
          }
        },
        "metricTypes": [
          "troubleshooting:anomaly_health"
        ],
        "eventTypes": [
          "troubleshooting:cogeng_ad_event"
        ]
      }
    ]
  },
  {
    "total": 10,
    "items": [
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "aggregates_of",
        "kind": "association",
        "displayName": "AGGREGATION",
        "isContainment": false,
        "isHierarchical": true,
        "cardinality": "ONE_TO_MANY"
      },
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "consists_of",
        "kind": "association",
        "displayName": "COMPOSITION",
        "isContainment": true,
        "isHierarchical": true,
        "cardinality": "ONE_TO_MANY"
      },
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "has",
        "kind": "association",
        "displayName": "HAS",
        "isContainment": false,
        "isHierarchical": false,
        "cardinality": "ONE_TO_MANY"
      },
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "interaction_context",
        "kind": "association",
        "displayName": "Interaction Context",
        "isContainment": false,
        "isHierarchical": false,
        "cardinality": "MANY_TO_ONE"
      },
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "interaction_from",
        "kind": "association",
        "displayName": "Interaction From",
        "isContainment": false,
        "isHierarchical": false,
        "cardinality": "MANY_TO_ONE"
      },
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "interaction_to",
        "kind": "association",
        "displayName": "Interaction To",
        "isContainment": false,
        "isHierarchical": false,
        "cardinality": "MANY_TO_ONE"
      },
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "interaction_upstream",
        "kind": "association",
        "displayName": "Interaction Upstream",
        "isContainment": false,
        "isHierarchical": false,
        "cardinality": "MANY_TO_ONE"
      },
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "is_a",
        "kind": "association",
        "displayName": "IS-A",
        "isContainment": false,
        "isHierarchical": false,
        "cardinality": "ONE_TO_ONE"
      },
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "relates_to",
        "kind": "association",
        "displayName": "ASSOCIATION",
        "isContainment": false,
        "isHierarchical": false,
        "cardinality": "MANY_TO_MANY"
      },
      {
        "namespace": {
          "name": "common",
          "version": 1
        },
        "name": "uses",
        "kind": "association",
        "displayName": "USES",
        "isContainment": false,
        "isHierarchical": false,
        "cardinality": "MANY_TO_ONE"
      }
    ]
  },
  {
    "total": 12,
    "items": [
      {
        "namespace": {
          "name": "alerting",
          "version": 1
        },
        "name": "healthrule.violation",
        "kind": "event",
        "displayName": "Alerting Healthrule Violation events",
        "description": "These are the events generated by Alerting for health rule violations",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "config_name": {
              "type": "string",
              "enum": []
            },
            "violation_start_time": {
              "type": "long",
              "enum": []
            },
            "violation_status": {
              "type": "string",
              "enum": [
                "OPEN",
                "CLOSED"
              ]
            },
            "entity_id": {
              "type": "string",
              "enum": []
            },
            "event_type_code": {
              "type": "string",
              "enum": []
            },
            "violation_severity": {
              "type": "string",
              "enum": [
                "NORMAL",
                "UNKNOWN",
                "WARNING",
                "CRITICAL"
              ]
            },
            "violation_duration": {
              "type": "long",
              "enum": []
            },
            "violation_id": {
              "type": "string",
              "enum": []
            },
            "violation_type": {
              "type": "string",
              "enum": []
            },
            "event_id": {
              "type": "string",
              "enum": []
            },
            "event_type": {
              "type": "string",
              "enum": []
            },
            "entity_type": {
              "type": "string",
              "enum": []
            },
            "config_id": {
              "type": "string",
              "enum": []
            },
            "event_details": {
              "type": "object",
              "properties": {
                "rollup_details": {
                  "type": "object",
                  "properties": {
                    "child_entities": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "child_entity_type": {
                            "type": "string",
                            "enum": []
                          },
                          "child_entity_id": {
                            "type": "string",
                            "enum": []
                          },
                          "correlated_violation_id": {
                            "type": "string",
                            "enum": []
                          }
                        }
                      }
                    },
                    "violation_count": {
                      "type": "long",
                      "enum": []
                    },
                    "threshold_value": {
                      "type": "long",
                      "enum": []
                    },
                    "threshold_type": {
                      "type": "string",
                      "enum": []
                    }
                  }
                },
                "condition_details": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "missing_data": {
                        "type": "string",
                        "enum": []
                      },
                      "data_points": {
                        "type": "string",
                        "enum": []
                      },
                      "baseline_mean": {
                        "type": "string",
                        "enum": []
                      },
                      "expression": {
                        "type": "string",
                        "enum": []
                      },
                      "violation_count": {
                        "type": "string",
                        "enum": []
                      },
                      "baseline_std_dev": {
                        "type": "string",
                        "enum": []
                      },
                      "expression_value": {
                        "type": "string",
                        "enum": []
                      },
                      "result": {
                        "type": "long",
                        "enum": []
                      },
                      "threshold_value": {
                        "type": "string",
                        "enum": []
                      },
                      "triggering_metric_func": {
                        "type": "string",
                        "enum": []
                      },
                      "name": {
                        "type": "string",
                        "enum": []
                      },
                      "threshold_type": {
                        "type": "string",
                        "enum": [
                          "static",
                          "baseline"
                        ]
                      },
                      "trigger_metric_id": {
                        "type": "string",
                        "enum": []
                      },
                      "eval_win_size": {
                        "type": "string",
                        "enum": []
                      },
                      "triggering_value": {
                        "type": "string",
                        "enum": []
                      }
                    }
                  }
                }
              }
            },
            "violation_end_time": {
              "type": "long",
              "enum": []
            },
            "event_time": {
              "type": "long",
              "enum": []
            }
          }
        }
      },
      {
        "namespace": {
          "name": "audit",
          "version": 1
        },
        "name": "assign_tenant",
        "kind": "event",
        "displayName": "Assign access to tenant event",
        "description": "Assign principal to a tenant audit event",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "actor.details": {
              "type": "object",
              "description": "Details of the principal who performed the action resulting in this event",
              "properties": {
                "actor.display_name": {
                  "type": "string",
                  "description": "Display name of the principal who performed this action",
                  "enum": []
                },
                "client": {
                  "type": "object",
                  "description": "Details of the client used by the principal while performing this action",
                  "properties": {
                    "geography": {
                      "type": "object",
                      "description": "Location details of the principal",
                      "properties": {
                        "country": {
                          "type": "string",
                          "description": "Country name of the actor",
                          "enum": []
                        },
                        "city": {
                          "type": "string",
                          "description": "City name of the actor",
                          "enum": []
                        },
                        "latitude": {
                          "type": "string",
                          "description": "Latitude of the actor with precision of 4 decimal places",
                          "enum": []
                        },
                        "postal_code": {
                          "type": "string",
                          "description": "Postal code of the actor",
                          "enum": []
                        },
                        "longitude": {
                          "type": "string",
                          "description": "Longitude of the actor with precision of 4 decimal places",
                          "enum": []
                        }
                      }
                    },
                    "ip_address": {
                      "type": "string",
                      "description": "IP address of the principal",
                      "enum": []
                    },
                    "user_agent": {
                      "type": "string",
                      "description": "Raw user agent string indicating the OS and web client of the principal",
                      "enum": []
                    }
                  }
                },
                "actor.id": {
                  "type": "string",
                  "description": "ID of the user/agent/service principal",
                  "enum": []
                },
                "session_id": {
                  "type": "string",
                  "description": "Session ID during which this action was performed",
                  "enum": []
                },
                "actor.type": {
                  "type": "string",
                  "description": "Type of principal",
                  "enum": []
                },
                "actor.name": {
                  "type": "string",
                  "description": "Unique name of the principal who performed this action",
                  "enum": []
                }
              }
            },
            "event.outcome.reason": {
              "type": "string",
              "description": "Reason for the outcome of this audit event, especially useful in case of failures",
              "enum": []
            },
            "event.id": {
              "type": "string",
              "description": "ID of the audit event",
              "enum": []
            },
            "event.outcome": {
              "type": "string",
              "description": "Outcome of this audit event",
              "enum": [
                "SUCCESS",
                "FAILURE"
              ]
            }
          }
        }
      },
      {
        "namespace": {
          "name": "audit",
          "version": 1
        },
        "name": "remove_tenant",
        "kind": "event",
        "displayName": "Remove access to tenant event",
        "description": "Remove principal from a tenant audit event",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "actor.details": {
              "type": "object",
              "description": "Details of the principal who performed the action resulting in this event",
              "properties": {
                "actor.display_name": {
                  "type": "string",
                  "description": "Display name of the principal who performed this action",
                  "enum": []
                },
                "client": {
                  "type": "object",
                  "description": "Details of the client used by the principal while performing this action",
                  "properties": {
                    "geography": {
                      "type": "object",
                      "description": "Location details of the principal",
                      "properties": {
                        "country": {
                          "type": "string",
                          "description": "Country name of the actor",
                          "enum": []
                        },
                        "city": {
                          "type": "string",
                          "description": "City name of the actor",
                          "enum": []
                        },
                        "latitude": {
                          "type": "string",
                          "description": "Latitude of the actor with precision of 4 decimal places",
                          "enum": []
                        },
                        "postal_code": {
                          "type": "string",
                          "description": "Postal code of the actor",
                          "enum": []
                        },
                        "longitude": {
                          "type": "string",
                          "description": "Longitude of the actor with precision of 4 decimal places",
                          "enum": []
                        }
                      }
                    },
                    "ip_address": {
                      "type": "string",
                      "description": "IP address of the principal",
                      "enum": []
                    },
                    "user_agent": {
                      "type": "string",
                      "description": "Raw user agent string indicating the OS and web client of the principal",
                      "enum": []
                    }
                  }
                },
                "actor.id": {
                  "type": "string",
                  "description": "ID of the user/agent/service principal",
                  "enum": []
                },
                "session_id": {
                  "type": "string",
                  "description": "Session ID during which this action was performed",
                  "enum": []
                },
                "actor.type": {
                  "type": "string",
                  "description": "Type of principal",
                  "enum": []
                },
                "actor.name": {
                  "type": "string",
                  "description": "Unique name of the principal who performed this action",
                  "enum": []
                }
              }
            },
            "event.outcome.reason": {
              "type": "string",
              "description": "Reason for the outcome of this audit event, especially useful in case of failures",
              "enum": []
            },
            "event.id": {
              "type": "string",
              "description": "ID of the audit event",
              "enum": []
            },
            "event.outcome": {
              "type": "string",
              "description": "Outcome of this audit event",
              "enum": [
                "SUCCESS",
                "FAILURE"
              ]
            }
          }
        }
      },
      {
        "namespace": {
          "name": "biq",
          "version": 1
        },
        "name": "biq_event",
        "kind": "event",
        "displayName": "BiQ Event",
        "description": "Generic BiQ event. The attributes are attached to it dynamically and contains custom otel attributes at the trace level for BiQ use-cases. It is associated with an APM BT via extension",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "name": {
              "type": "string",
              "description": "Name of the event.",
              "enum": []
            }
          }
        }
      },
      {
        "namespace": {
          "name": "brostatus",
          "version": 1
        },
        "name": "broevent",
        "kind": "event",
        "displayName": "Bro Status Event",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "status": {
              "type": "string",
              "enum": []
            }
          }
        }
      },
      {
        "namespace": {
          "name": "ignite",
          "version": 1
        },
        "name": "report",
        "kind": "event",
        "displayName": "Ignite events",
        "description": "These are events generated by Ignite for k8s workloads",
        "attributeDefinitions": {
          "optimized": [
            "reason",
            "severity",
            "reliability_risk",
            "efficiency_rate",
            "details.numbers"
          ],
          "attributes": {
            "severity": {
              "type": "string",
              "enum": []
            },
            "reason": {
              "type": "string",
              "enum": []
            },
            "efficiency_rate": {
              "type": "double",
              "enum": []
            },
            "reliability_risk": {
              "type": "string",
              "enum": []
            },
            "description": {
              "type": "string",
              "enum": []
            },
            "details": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "code": {
                    "type": "string",
                    "enum": []
                  },
                  "numbers": {
                    "type": "array",
                    "items": "double"
                  },
                  "message": {
                    "type": "string",
                    "enum": []
                  }
                }
              }
            }
          }
        }
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "native_event",
        "kind": "event",
        "displayName": "Kubernetes native and generated event",
        "description": "Native event generated and reported on data collected from k8s control plane",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "severity": {
              "type": "string",
              "enum": []
            },
            "reason": {
              "type": "string",
              "enum": []
            },
            "subtype": {
              "type": "string",
              "description": "k8s event collection and generation method",
              "enum": [
                "native",
                "custom"
              ]
            },
            "description": {
              "type": "string",
              "enum": []
            }
          }
        }
      },
      {
        "namespace": {
          "name": "logs",
          "version": 1
        },
        "name": "generic_record",
        "kind": "event",
        "displayName": "Generic log record",
        "description": "Generic log record, where attributes are discovered dynamically based on the customer supplied parsing logic",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "severity": {
              "type": "string",
              "enum": []
            }
          }
        }
      },
      {
        "namespace": {
          "name": "sum",
          "version": 1
        },
        "name": "page_details",
        "kind": "event",
        "displayName": "Synthetic Web Page Details",
        "description": "Synthetic Web Page Details",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "visual_complete_time": {
              "type": "long",
              "enum": []
            },
            "fully_loaded_time": {
              "type": "long",
              "enum": []
            },
            "page_error_code": {
              "type": "long",
              "enum": []
            },
            "dom_elements": {
              "type": "long",
              "enum": []
            }
          }
        }
      },
      {
        "namespace": {
          "name": "sum",
          "version": 1
        },
        "name": "resource_details",
        "kind": "event",
        "displayName": "Synthetic Network Resource Details",
        "description": "Synthetic Network Resource Details",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "dns_time": {
              "type": "long",
              "enum": []
            },
            "download_time": {
              "type": "long",
              "enum": []
            },
            "connect_time": {
              "type": "long",
              "enum": []
            },
            "error_code": {
              "type": "string",
              "enum": []
            }
          }
        }
      },
      {
        "namespace": {
          "name": "sum",
          "version": 1
        },
        "name": "session_details",
        "kind": "event",
        "displayName": "Session Details for a job measurement",
        "description": "Session Details for a job measurement",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "duration": {
              "type": "double",
              "enum": []
            },
            "page_navigations": {
              "type": "long",
              "enum": []
            },
            "resource_errors": {
              "type": "long",
              "enum": []
            }
          }
        }
      },
      {
        "namespace": {
          "name": "troubleshooting",
          "version": 1
        },
        "name": "cogeng_ad_event",
        "kind": "event",
        "displayName": "AD events",
        "description": "These are events generated from Cogeng Anomaly Detection",
        "attributeDefinitions": {
          "optimized": [],
          "attributes": {
            "config_name": {
              "type": "string",
              "description": "The name of the configuration applied on the entity",
              "enum": []
            },
            "entity_name": {
              "type": "string",
              "description": "The name of the entity on which violation recorded.",
              "enum": []
            },
            "model_sensitivity": {
              "type": "string",
              "enum": [
                "TEST",
                "LOW",
                "MEDIUM",
                "HIGH"
              ]
            },
            "violation_start_time": {
              "type": "long",
              "description": "The start time of this violation. It is in millisec.",
              "enum": []
            },
            "violation_status": {
              "type": "string",
              "description": "The status of the violation. It can be open, closed or cancelled.",
              "enum": [
                "OPEN",
                "CLOSED",
                "CANCELLED"
              ]
            },
            "entity_id": {
              "type": "string",
              "description": "The id of the entity on which event recorded.",
              "enum": []
            },
            "violation_severity": {
              "type": "string",
              "description": "The gives the severity of the violation.",
              "enum": [
                "NORMAL",
                "UNKNOWN",
                "WARNING",
                "CRITICAL"
              ]
            },
            "violation_duration": {
              "type": "long",
              "description": "The duration of this violation upto this event timestamp. It is in millisec.",
              "enum": []
            },
            "violation_id": {
              "type": "string",
              "description": "It is the alarm id.",
              "enum": []
            },
            "violation_type": {
              "type": "string",
              "description": "This signifies the type of event AD/HR.",
              "enum": [
                "troubleshooting"
              ]
            },
            "event_id": {
              "type": "string",
              "description": "The unique id of the transition in the violation.",
              "enum": []
            },
            "event_type": {
              "type": "string",
              "description": "Event types are - com.appdynamics.anomaly.created_warning.v1,com.appdynamics.anomaly.created_critical.v1,com.appdynamics.anomaly.upgraded.v1,com.appdynamics.anomaly.downgraded.v1,com.appdynamics.anomaly.closed_warning.v1,com.appdynamics.anomaly.cancelled_warning.v1,com.appdynamics.anomaly.cancelled_critical.v1",
              "enum": []
            },
            "entity_type": {
              "type": "string",
              "description": "The type of entity on which violation recorded.it has format of {namespace:entityType}",
              "enum": []
            },
            "config_id": {
              "type": "string",
              "description": "The id of the configuration applied on the entity",
              "enum": []
            },
            "rca_result": {
              "type": "object",
              "properties": {
                "object_list": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "prop": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "tail_entity_name": {
                              "type": "string",
                              "enum": []
                            },
                            "tail_entity_id": {
                              "type": "string",
                              "enum": []
                            },
                            "head_entity_name": {
                              "type": "string",
                              "enum": []
                            },
                            "originating_entity_name": {
                              "type": "string",
                              "enum": []
                            },
                            "thread_task": {
                              "type": "string",
                              "enum": []
                            },
                            "head_entity_id": {
                              "type": "string",
                              "enum": []
                            },
                            "originating_entity_id": {
                              "type": "string",
                              "enum": []
                            },
                            "exit_call_type": {
                              "type": "string",
                              "enum": []
                            }
                          }
                        }
                      },
                      "qualified_id": {
                        "type": "string",
                        "enum": []
                      }
                    }
                  }
                },
                "list_of_suspected_cause_paths": {
                  "type": "array",
                  "items": "string"
                },
                "suspected_object_summaries": {
                  "type": "array",
                  "description": "This object contains deviating metrics and summary information of root cause objects",
                  "items": {
                    "type": "object",
                    "properties": {
                      "suspected_object_summary": {
                        "type": "string",
                        "enum": []
                      },
                      "qualified_id": {
                        "type": "string",
                        "enum": []
                      },
                      "deviating_metrics": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "metric_name": {
                              "type": "string",
                              "enum": []
                            },
                            "sensitivity": {
                              "type": "long",
                              "enum": []
                            },
                            "standard_deviation": {
                              "type": "double",
                              "enum": []
                            },
                            "value": {
                              "type": "double",
                              "description": "Metric Value at the time of deviation",
                              "enum": []
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "top_impact_object": {
                  "type": "object",
                  "description": "This object contains deviating metrics and summary information of top impacted object on which anomaly is generated.",
                  "properties": {
                    "top_impacted_object_summary": {
                      "type": "string",
                      "enum": []
                    },
                    "qualified_id": {
                      "type": "string",
                      "enum": []
                    },
                    "deviating_metrics": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "metric_name": {
                            "type": "string",
                            "enum": []
                          },
                          "sensitivity": {
                            "type": "long",
                            "enum": []
                          },
                          "standard_deviation": {
                            "type": "double",
                            "enum": []
                          },
                          "value": {
                            "type": "double",
                            "description": "Metric Value at the time of deviation",
                            "enum": []
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "anomaly_type": {
              "type": "string",
              "description": "It is to show what metric type was rootcause of the anomaly.",
              "enum": []
            },
            "violation_end_time": {
              "type": "long",
              "description": "The end time of this violation. It is in millisec.",
              "enum": []
            },
            "event_time": {
              "type": "long",
              "description": "The timestamp of the transition captured as event in given violation. It is in millisec.",
              "enum": []
            }
          }
        }
      }
    ]
  },
  {
    "total": 93,
    "items": [
      {
        "name": "backend",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Backend",
        "metricTypes": [
          "apm:calls_min",
          "apm:response_time",
          "apm:errors_min"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [
            "backend.name"
          ],
          "optimized": [
            "backend.name"
          ],
          "attributes": {
            "backend.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the backend"
            }
          }
        }
      },
      {
        "name": "business_transaction",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Business Transaction",
        "metricTypes": [
          "apm:calls_min",
          "apm:response_time",
          "apm:errors_min"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 1440,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [
            "bt.name",
            "service.name",
            "service.namespace"
          ],
          "optimized": [
            "bt.name",
            "service.name",
            "service.namespace"
          ],
          "attributes": {
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "The name of the service that started this BT"
            },
            "bt.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the business transaction"
            },
            "service.namespace": {
              "type": "string",
              "enum": [],
              "description": "The namespace of the service that started this BT"
            }
          }
        }
      },
      {
        "name": "database_backend",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Database Backend",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "db.port": {
              "type": "long",
              "enum": [],
              "description": "Port of the backend"
            },
            "db.host": {
              "type": "string",
              "enum": [],
              "description": "Host of the backend"
            }
          }
        },
        "parentType": "apm:backend"
      },
      {
        "name": "http_backend",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "HTTP Backend",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "http.port": {
              "type": "long",
              "enum": [],
              "description": "Port of the backend"
            },
            "http.host": {
              "type": "string",
              "enum": [],
              "description": "Host of the backend"
            }
          }
        },
        "parentType": "apm:backend"
      },
      {
        "name": "instance_endpoint",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Instance Endpoint",
        "metricTypes": [
          "apm:calls_min",
          "apm:response_time",
          "apm:errors_min"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [
            "endpoint.name",
            "service.instance.id",
            "service.name",
            "service.namespace"
          ],
          "optimized": [
            "endpoint.name",
            "service.instance.id",
            "service.name",
            "service.namespace"
          ],
          "attributes": {
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service that owns the instance that created the endpoint"
            },
            "endpoint.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service endpoint"
            },
            "service.instance.id": {
              "type": "string",
              "enum": [],
              "description": "ID of the service instance that created this endpoint"
            },
            "service.namespace": {
              "type": "string",
              "enum": [],
              "description": "Namespace for the service that owns the instance that created the endpoint"
            }
          }
        }
      },
      {
        "name": "jvm_instance",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "JVM Instance",
        "metricTypes": [
          "apm:process.runtime.jvm.memory.usage",
          "apm:process.runtime.jvm.memory.committed",
          "apm:process.runtime.jvm.memory.init",
          "apm:process.runtime.jvm.memory.limit",
          "apm:process.runtime.jvm.classes.loaded",
          "apm:process.runtime.jvm.classes.unloaded",
          "apm:process.runtime.jvm.classes.current_loaded",
          "apm:runtime.jvm.gc.time",
          "apm:runtime.jvm.gc.count",
          "apm:process.runtime.jvm.threads.count",
          "apm:process.runtime.jvm.system.cpu.utilization",
          "apm:process.runtime.jvm.cpu.utilization"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 1440
        },
        "attributeDefinitions": {
          "required": [
            "service.instance.id",
            "service.name",
            "service.namespace",
            "process.pid"
          ],
          "optimized": [
            "service.instance.id",
            "service.name",
            "service.namespace",
            "process.pid"
          ],
          "attributes": {
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service"
            },
            "service.instance.id": {
              "type": "string",
              "enum": [],
              "description": "ID of the service instance"
            },
            "process.command_line": {
              "type": "string",
              "enum": [],
              "description": "The java process startup properties"
            },
            "process.pid": {
              "type": "long",
              "enum": [],
              "description": "The process ID of this jvm"
            },
            "service.namespace": {
              "type": "string",
              "enum": [],
              "description": "Namespace for the service"
            }
          }
        },
        "associationTypes": {
          "common:is_a": [
            "apm:service_instance"
          ]
        }
      },
      {
        "name": "messaging_backend",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Messaging Backend",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 1440,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "messaging.system": {
              "type": "string",
              "enum": [],
              "description": "Messaging system (i.e. jms, kafka, etc.)"
            },
            "messaging.destination_kind": {
              "type": "string",
              "enum": [],
              "description": "kind of the message (queue, topic, etc.)"
            },
            "messaging.destination": {
              "type": "string",
              "enum": [],
              "description": "Destination of the message (topic or queue name)"
            }
          }
        },
        "parentType": "apm:backend"
      },
      {
        "name": "request",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "APM Request",
        "metricTypes": [
          "apm:calls_min",
          "apm:response_time",
          "apm:errors_min"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [
            "request.type",
            "request.async"
          ],
          "optimized": [
            "request.type",
            "request.async"
          ],
          "attributes": {
            "request.type": {
              "type": "string",
              "enum": [],
              "description": "Type of the request (e.g. HTTP, JMS)"
            },
            "request.async": {
              "type": "boolean",
              "enum": [],
              "description": "Boolean indicating if this request is async"
            }
          }
        },
        "parentType": "common:interaction",
        "associationTypes": {
          "common:aggregates_of": [
            "apm:request"
          ]
        }
      },
      {
        "name": "service",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Service",
        "metricTypes": [
          "apm:calls_min",
          "apm:response_time",
          "apm:errors_min"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 1440,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [
            "service.name",
            "service.namespace"
          ],
          "optimized": [
            "service.name",
            "service.namespace"
          ],
          "attributes": {
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service"
            },
            "service.namespace": {
              "type": "string",
              "enum": [],
              "description": "Namespace for the service"
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "apm:service_endpoint",
            "apm:business_transaction"
          ],
          "common:aggregates_of": [
            "apm:service_instance"
          ]
        }
      },
      {
        "name": "service_endpoint",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Service Endpoint",
        "metricTypes": [
          "apm:calls_min",
          "apm:response_time",
          "apm:errors_min"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 1440,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [
            "endpoint.name",
            "service.name",
            "service.namespace"
          ],
          "optimized": [
            "endpoint.name",
            "service.name",
            "service.namespace"
          ],
          "attributes": {
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "The name of the service that started this BT"
            },
            "endpoint.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service endpoint"
            },
            "service.namespace": {
              "type": "string",
              "enum": [],
              "description": "The namespace of the service that started this BT"
            }
          }
        },
        "associationTypes": {
          "common:aggregates_of": [
            "apm:instance_endpoint"
          ]
        }
      },
      {
        "name": "service_instance",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Service Instance",
        "metricTypes": [
          "apm:calls_min",
          "apm:response_time",
          "apm:errors_min"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [
            "service.instance.id",
            "service.name",
            "service.namespace"
          ],
          "optimized": [
            "service.instance.id",
            "service.name",
            "service.namespace"
          ],
          "attributes": {
            "telemetry.sdk.language": {
              "type": "string",
              "enum": [],
              "description": "The programming language of the monitored service instance"
            },
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service"
            },
            "service.version": {
              "type": "string",
              "enum": [],
              "description": "The application version this instance is running"
            },
            "service.instance.id": {
              "type": "string",
              "enum": [],
              "description": "ID of the service instance"
            },
            "container.id": {
              "type": "string",
              "enum": [],
              "description": "The ID of the container this instance is running on"
            },
            "service.namespace": {
              "type": "string",
              "enum": [],
              "description": "Namespace for the service"
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "apm:instance_endpoint"
          ],
          "common:is_a": [
            "apm:jvm_instance"
          ]
        }
      },
      {
        "name": "unknown_backend",
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Unknown Backend",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "apm:backend"
      },
      {
        "name": "auditable_object",
        "namespace": {
          "name": "audit",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Auditable Object",
        "description": "Base entity type for all the objects that are subject to auditing",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "audit.object.id"
          ],
          "optimized": [
            "audit.object.id"
          ],
          "attributes": {
            "audit.object.id": {
              "type": "string",
              "enum": [],
              "description": "Platform generated ID string to uniquely identify the audited object"
            }
          }
        },
        "associationTypes": {}
      },
      {
        "name": "user_principal",
        "namespace": {
          "name": "audit",
          "version": 1
        },
        "kind": "entity",
        "displayName": "User Principal",
        "description": "Represents a user object",
        "eventTypes": [
          "audit:assign_tenant",
          "audit:remove_tenant"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "audit.user.name",
            "audit.user.display_name"
          ],
          "optimized": [
            "audit.user.name"
          ],
          "attributes": {
            "audit.user.display_name": {
              "type": "string",
              "enum": [],
              "description": "Display name of the user"
            },
            "audit.user.name": {
              "type": "string",
              "enum": [],
              "description": "Login username or email ID"
            }
          }
        },
        "parentType": "audit:auditable_object",
        "associationTypes": {}
      },
      {
        "name": "application_load_balancer",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS Application Load Balancer",
        "metricTypes": [
          "aws:load_balancer.http.3xx.requests",
          "aws:load_balancer.http.4xx.requests",
          "aws:load_balancer.http.5xx.requests",
          "aws:load_balancer.http.500.requests",
          "aws:load_balancer.http.502.requests",
          "aws:load_balancer.http.503.requests",
          "aws:load_balancer.http.504.requests",
          "aws:application_load_balancer.active.connections",
          "aws:load_balancer.client.tls_negotiation_errors",
          "aws:application_load_balancer.http.fixed_responses",
          "aws:application_load_balancer.http.redirects",
          "aws:application_load_balancer.new.connections",
          "aws:application_load_balancer.non_sticky.requests",
          "aws:load_balancer.processed.bytes",
          "aws:application_load_balancer.http.url_limit_exceeded.redirects",
          "aws:application_load_balancer.rejected.connections",
          "aws:load_balancer.requests",
          "aws:application_load_balancer.rule_evaluations",
          "aws:load_balancer.http.backend.2xx.requests",
          "aws:load_balancer.http.backend.3xx.requests",
          "aws:load_balancer.http.backend.4xx.requests",
          "aws:load_balancer.http.backend.5xx.requests",
          "aws:load_balancer.backend.connection_errors",
          "aws:load_balancer.backend.duration",
          "aws:load_balancer.backend.tls_negotiation_errors",
          "aws:load_balancer.consumed_lcus"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "aws.application_load_balancer.ipaddress.type": {
              "type": "string",
              "enum": [],
              "description": "IP Address type (dualstack or ipv4)"
            }
          }
        },
        "parentType": "aws:load_balancer"
      },
      {
        "name": "aurora_cluster",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS Aurora Cluster",
        "metricTypes": [
          "aws:aurora_cluster.storage.used.usage",
          "aws:aurora_cluster.storage.read.io_sec",
          "aws:aurora_cluster.storage.write.io_sec",
          "aws:aurora_cluster.active.transactions",
          "aws:aurora_cluster.blocked.transactions",
          "aws:aurora_cluster.buffer_cache.hits",
          "aws:aurora_cluster.commit.duration",
          "aws:aurora_cluster.commit.operations_sec",
          "aws:aurora_cluster.delete.duration",
          "aws:aurora_cluster.delete.operations_sec",
          "aws:aurora_cluster.insert.duration",
          "aws:aurora_cluster.insert.operations_sec",
          "aws:aurora_cluster.select.duration",
          "aws:aurora_cluster.select.operations_sec",
          "aws:aurora_cluster.update.duration",
          "aws:aurora_cluster.update.operations_sec",
          "aws:aurora_cluster.ddl.duration",
          "aws:aurora_cluster.ddl.operations_sec",
          "aws:aurora_cluster.dml.duration",
          "aws:aurora_cluster.dml.operations_sec",
          "aws:aurora_cluster.deadlocks_sec",
          "aws:aurora_cluster.network.io_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "aws.aurora_cluster.reader_endpoint": {
              "type": "string",
              "enum": [],
              "description": "The reader endpoint for a DB cluster."
            }
          }
        },
        "parentType": "cloud:database_cluster"
      },
      {
        "name": "aurora_instance",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS Aurora Instance",
        "metricTypes": [
          "aws:aurora_instance.active.transactions",
          "aws:aurora_instance.blocked.transactions",
          "aws:aurora_instance.buffer_cache.hits",
          "aws:aurora_instance.commit.duration",
          "aws:aurora_instance.commit.operations_sec",
          "aws:aurora_instance.delete.duration",
          "aws:aurora_instance.delete.operations_sec",
          "aws:aurora_instance.insert.duration",
          "aws:aurora_instance.insert.operations_sec",
          "aws:aurora_instance.select.duration",
          "aws:aurora_instance.select.operations_sec",
          "aws:aurora_instance.update.duration",
          "aws:aurora_instance.update.operations_sec",
          "aws:aurora_instance.ddl.duration",
          "aws:aurora_instance.ddl.operations_sec",
          "aws:aurora_instance.dml.duration",
          "aws:aurora_instance.dml.operations_sec",
          "aws:aurora_instance.deadlocks_sec",
          "aws:aurora_instance.network.io_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "aws.aurora_instance.ca_certificate_identifier": {
              "type": "string",
              "enum": [],
              "description": "The identifier of the CA certificate for the DB."
            }
          }
        },
        "parentType": "cloud:database_instance"
      },
      {
        "name": "classic_load_balancer",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": " AWS Classic Load Balancer",
        "metricTypes": [
          "aws:load_balancer.http.4xx.requests",
          "aws:load_balancer.http.5xx.requests",
          "aws:load_balancer.requests",
          "aws:load_balancer.http.backend.2xx.requests",
          "aws:load_balancer.http.backend.3xx.requests",
          "aws:load_balancer.http.backend.4xx.requests",
          "aws:load_balancer.http.backend.5xx.requests",
          "aws:load_balancer.backend.connection_errors",
          "aws:load_balancer.backend.duration",
          "aws:classic_load_balancer.spillover.requests",
          "aws:classic_load_balancer.pending.requests",
          "aws:classic_load_balancer.estimated_processed.bytes"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "load_balancer.to_be_removed": {
              "type": "string",
              "enum": [],
              "description": "To Be Removed."
            }
          }
        },
        "parentType": "aws:load_balancer"
      },
      {
        "name": "database_instance",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS Database Instance",
        "metricTypes": [
          "aws:database_instance.sessions.active",
          "aws:database_instance.sessions.cpu.active",
          "aws:database_instance.sessions.non_cpu.active"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "aws.database_instance.arn": {
              "type": "string",
              "enum": [],
              "description": "The Amazon Resource Name (ARN) for the database."
            },
            "aws.database_instance.ca_certificate_identifier": {
              "type": "string",
              "enum": [],
              "description": "The identifier of the CA certificate for the DB."
            },
            "aws.database_instance.storage_type": {
              "type": "string",
              "enum": [],
              "description": "The storage type of the database."
            },
            "aws.database_instance.iops": {
              "type": "long",
              "enum": [],
              "description": "The Provisioned IOPS value for the database."
            },
            "aws.database_instance.secondary_availability_zone": {
              "type": "string",
              "enum": [],
              "description": "Secondary Availability Region for a DB with multi-AZ support."
            },
            "aws.database_instance.monitoring_interval": {
              "type": "long",
              "enum": [],
              "description": "The interval in seconds between points when Enhanced Monitoring metrics are collected for the DB instance."
            },
            "aws.database_instance.is_multi_az": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates if the database is a Multi-AZ deployment."
            },
            "aws.database_instance.instance_class": {
              "type": "string",
              "enum": [],
              "description": "Name of the compute and memory capacity class of the DB instance"
            }
          }
        },
        "parentType": "cloud:database_instance"
      },
      {
        "name": "ebs",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS EBS",
        "metricTypes": [
          "aws:ebs.read.io_sec",
          "aws:ebs.write.io_sec",
          "aws:ebs.read.operations_sec",
          "aws:ebs.write.operations_sec",
          "aws:ebs.read.operation_time",
          "aws:ebs.write.operation_time",
          "aws:ebs.idle_time",
          "aws:ebs.pending.operations",
          "aws:ebs.io.utilization",
          "aws:ebs.consumed.operations"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "aws.ebs.iops"
          ],
          "attributes": {
            "aws.ebs.iops": {
              "type": "long",
              "enum": [],
              "description": "The number of I/O operations per second (IOPS) that are provisioned for the EBS volume."
            },
            "aws.ebs.attachment.names": {
              "type": "string",
              "enum": [],
              "description": "The EBS volume attachement device names."
            },
            "aws.ebs.attachment.states": {
              "type": "string",
              "enum": [],
              "description": "The EBS volume attachment states (attaching | attached | detaching )."
            }
          }
        },
        "parentType": "cloud:disk"
      },
      {
        "name": "ec2",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS EC2",
        "metricTypes": [
          "aws:ec2.status_check.failure"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "aws.ec2.is_ena_supported": {
              "type": "boolean",
              "enum": [],
              "description": "True/False - Specifies whether enhanced networking with ENA is enabled."
            },
            "aws.ec2.is_source_dest_check_enabled": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates whether source/destination checking is enabled."
            },
            "aws.ec2.iam_instance_profile.arn": {
              "type": "string",
              "enum": [],
              "description": "Instance Profile associated with the instance."
            },
            "aws.ec2.is_detailed_monitoring_enabled": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates whether detailed monitoring is enabled. Otherwise, basic monitoring is enabled."
            },
            "aws.ec2.is_ebs_optimized": {
              "type": "boolean",
              "enum": [],
              "description": "True/False - Indicates whether the instance is optimized for Amazon EBS I/O."
            }
          }
        },
        "parentType": "cloud:host"
      },
      {
        "name": "load_balancer",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS Load Balancer",
        "metricTypes": [
          "aws:load_balancer.healthy.hosts",
          "aws:load_balancer.unhealthy.hosts"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "aws.load_balancer.arn": {
              "type": "string",
              "enum": [],
              "description": "The Amazon Resource Name (ARN) of the load balancer"
            }
          }
        },
        "parentType": "cloud:load_balancer"
      },
      {
        "name": "maria_db",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS RDS MariaDB",
        "metricTypes": [
          "aws:database_instance.lvm.read.operations_sec",
          "aws:database_instance.lvm.write.operations_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "aws:database_instance"
      },
      {
        "name": "mysql",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS RDS MySql",
        "metricTypes": [
          "aws:database_instance.lvm.read.operations_sec",
          "aws:database_instance.lvm.write.operations_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "aws:database_instance"
      },
      {
        "name": "network_load_balancer",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS Network Load Balancer",
        "metricTypes": [
          "aws:load_balancer.client.tls_negotiation_errors",
          "aws:load_balancer.processed.bytes",
          "aws:network_load_balancer.active_flows",
          "aws:network_load_balancer.tcp.active_flows",
          "aws:network_load_balancer.tls.active_flows",
          "aws:network_load_balancer.udp.active_flows",
          "aws:load_balancer.consumed_lcus",
          "aws:network_load_balancer.new_flows",
          "aws:network_load_balancer.tcp.client.resets",
          "aws:network_load_balancer.tcp.elb.resets",
          "aws:network_load_balancer.tcp.backend.resets",
          "aws:load_balancer.backend.tls_negotiation_errors"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "aws.network_load_balancer.ipaddress.type": {
              "type": "string",
              "enum": [],
              "description": "IP Address type (dualstack or ipv4)"
            }
          }
        },
        "parentType": "aws:load_balancer"
      },
      {
        "name": "oracle",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS RDS Oracle",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "aws:database_instance"
      },
      {
        "name": "postgresql",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS RDS Postgresql",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "aws:database_instance"
      },
      {
        "name": "sql_server",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS RDS SQL Server",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "aws:database_instance"
      },
      {
        "name": "vpc",
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AWS VPC",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "aws.vpc.instance_tenancy": {
              "type": "string",
              "enum": [],
              "description": "The allowed tenancy of instances launched into the VPC."
            }
          }
        },
        "parentType": "cloud:network"
      },
      {
        "name": "database_instance",
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Azure Database Instance",
        "metricTypes": [
          "azure:database_instance.io.utilization"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "azure.resource.id",
            "azure.resource.group"
          ],
          "attributes": {
            "azure.resource.group": {
              "type": "string",
              "enum": [],
              "description": "The resource group of the database."
            },
            "azure.resource.id": {
              "type": "string",
              "enum": [],
              "description": "The fully qualified resource ID for the database."
            }
          }
        },
        "parentType": "cloud:database_instance"
      },
      {
        "name": "disk",
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Azure Disk",
        "metricTypes": [
          "azure:disk.read.io_sec",
          "azure:disk.read.operations_sec",
          "azure:disk.write.io_sec",
          "azure:disk.write.operations_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "azure.disk.name",
            "azure.resource.id",
            "azure.resource.group"
          ],
          "attributes": {
            "azure.disk.sku.tier": {
              "type": "string",
              "enum": [],
              "description": "The disks sku tier."
            },
            "azure.resource.group": {
              "type": "string",
              "enum": [],
              "description": "The resource group of the disk."
            },
            "azure.resource.id": {
              "type": "string",
              "enum": [],
              "description": "The fully qualified resource ID for the disk."
            },
            "azure.disk.name": {
              "type": "string",
              "enum": [],
              "description": "Resource name."
            },
            "azure.disk.max_shares": {
              "type": "long",
              "enum": [],
              "description": "The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time."
            },
            "azure.disk.tier": {
              "type": "string",
              "enum": [],
              "description": "Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/en-us/pricing/details/managed-disks/. Does not apply to Ultra disks."
            },
            "azure.disk.sku.name": {
              "type": "string",
              "enum": [
                "Standard_LRS",
                "Premium_LRS",
                "StandardSSD_LRS",
                "UltraSSD_LRS"
              ],
              "description": "The disks sku name."
            },
            "azure.disk.network_access_policy": {
              "type": "string",
              "enum": [],
              "description": "Policy for accessing the disk via network."
            }
          }
        },
        "parentType": "cloud:disk"
      },
      {
        "name": "ip",
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Azure IP Address",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "internal.loadbalancer_frontend_config_id"
          ],
          "optimized": [
            "internal.loadbalancer_frontend_config_id"
          ],
          "attributes": {
            "azure.resource.group": {
              "type": "string",
              "enum": [],
              "description": "The resource group of the IP address."
            },
            "azure.resource.id": {
              "type": "string",
              "enum": [],
              "description": "The fully qualified resource ID for IP address."
            },
            "cloud.region": {
              "type": "string",
              "enum": [],
              "description": "The geographical region the resource is running."
            },
            "cloud.account.id": {
              "type": "string",
              "enum": [],
              "description": "The cloud account ID the resource is assigned to."
            },
            "internal.is_private_ip": {
              "type": "boolean",
              "enum": [],
              "description": "Flag to indicate a private IP."
            },
            "internal.azure.ip_address": {
              "type": "string",
              "enum": [],
              "description": "IP address"
            },
            "cloud.platform": {
              "type": "string",
              "enum": [],
              "description": "The cloud platform in use."
            },
            "cloud.availability_zone": {
              "type": "string",
              "enum": [],
              "description": "Availability zone represents the zone where the resource is running. "
            },
            "internal.loadbalancer_frontend_config_id": {
              "type": "string",
              "enum": [],
              "description": "Frontend IP config of a load balancer. This is an internal attribute to uniquely identify private ip address."
            }
          }
        }
      },
      {
        "name": "load_balancer",
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Azure Load Balancer",
        "metricTypes": [
          "azure:load_balancer.health_probe_status",
          "azure:load_balancer.data_path_availability",
          "azure:load_balancer.snat_ports.allocation",
          "azure:load_balancer.snat_ports.usage",
          "azure:load_balancer.transmit.packets",
          "azure:load_balancer.processed.bytes",
          "azure:load_balancer.snat_connections_count",
          "azure:load_balancer.transmit.syn_packets"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "azure.resource.id",
            "azure.resource.group"
          ],
          "attributes": {
            "azure.resource.group": {
              "type": "string",
              "enum": [],
              "description": "The resource group of the load balancer."
            },
            "azure.load_balancer.sku_name": {
              "type": "string",
              "enum": [],
              "description": "The name of the load balancer SKU."
            },
            "azure.resource.id": {
              "type": "string",
              "enum": [],
              "description": "The fully qualified resource ID for the load balancer."
            },
            "azure.load_balancer.private_ip_addresses": {
              "type": "string",
              "enum": [],
              "description": "The private IP address of the load balancer."
            },
            "azure.load_balancer.public_ip_addresses": {
              "type": "string",
              "enum": [],
              "description": "The public IP addresses of the load balancer."
            },
            "azure.load_balancer.sku_tier": {
              "type": "string",
              "enum": [],
              "description": "The tier of the load balancer SKU."
            }
          }
        },
        "parentType": "cloud:load_balancer",
        "associationTypes": {
          "common:has": [
            "azure:ip"
          ]
        }
      },
      {
        "name": "postgresql",
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Azure Postgres Database",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "azure:database_instance"
      },
      {
        "name": "sql_database",
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AZURE SQL DATABASE",
        "metricTypes": [
          "azure:sql_database.dtu.limit",
          "azure:sql_database.dtu.utilization",
          "azure:sql_database.dwu.limit",
          "azure:sql_database.dwu.utilization",
          "azure:sql_database.data_read_io.utilization",
          "azure:sql_database.queries.queued",
          "azure:sql_database.workers.utilization",
          "azure:sql_database.xtp.storage.utilization",
          "azure:sql_database.sessions.utilization"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "azure.resource.id",
            "azure.resource.group"
          ],
          "attributes": {
            "azure.sql_database.kind": {
              "type": "string",
              "enum": [],
              "description": "Version of the DB type with version,ex:v12.0"
            },
            "azure.resource.group": {
              "type": "string",
              "enum": [],
              "description": "The resource group of the sql database."
            },
            "azure.sql_database.sku.tier": {
              "type": "string",
              "enum": [],
              "description": "The SKU tier of the db server"
            },
            "azure.resource.id": {
              "type": "string",
              "enum": [],
              "description": "The fully qualified resource ID for the sql database."
            },
            "azure.sql_database.type": {
              "type": "string",
              "enum": [],
              "description": "Type of the database"
            },
            "azure.sql_database.created_at": {
              "type": "string",
              "format": "date-time",
              "enum": [],
              "description": "The date and time when the database instance was created."
            },
            "azure.sql_database.state": {
              "type": "string",
              "enum": [],
              "description": "State of the sql database"
            },
            "azure.sql_database.sku.name": {
              "type": "string",
              "enum": [],
              "description": "The SKU name of the db server."
            }
          }
        },
        "parentType": "cloud:database"
      },
      {
        "name": "sql_server",
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "kind": "entity",
        "displayName": "AZURE SQL SERVER",
        "metricTypes": [
          "azure:sql_server.dtu.limit",
          "azure:sql_server.dtu.utilization",
          "azure:sql_server.dwu.limit",
          "azure:sql_server.dwu.utilization",
          "azure:sql_server.data_read_io.utilization",
          "azure:sql_server.queries.queued",
          "azure:sql_server.workers.utilization",
          "azure:sql_server.xtp.storage.utilization",
          "azure:sql_server.sessions.utilization"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "azure.sql_server.db_version": {
              "type": "string",
              "enum": [],
              "description": "The sql database type version."
            }
          }
        },
        "parentType": "azure:database_instance"
      },
      {
        "name": "vm",
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Azure VM",
        "metricTypes": [
          "azure:vm.network.receive.flows",
          "azure:vm.network.transmit.flows"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "azure.vm.is_vmss_instance"
          ],
          "attributes": {
            "azure.vm.priority": {
              "type": "string",
              "enum": [],
              "description": "The priority for the virtual machine."
            },
            "azure.resource.group": {
              "type": "string",
              "enum": [],
              "description": "The resource group of the vm."
            },
            "azure.resource.id": {
              "type": "string",
              "enum": [],
              "description": "The fully qualified resource ID for the vm."
            },
            "azure.vm.identity.principal_id": {
              "type": "string",
              "enum": [],
              "description": "The principal id of virtual machine identity."
            },
            "azure.vm.is_vmss_instance": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates whether vm belongs to a Virtual Machine Scale Sets."
            }
          }
        },
        "parentType": "cloud:host"
      },
      {
        "name": "vnet",
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Azure Virtual Network",
        "metricTypes": [
          "azure:vnet.ping.duration",
          "azure:vnet.ping.failed"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "azure.resource.group",
            "azure.vnet.name",
            "azure.resource.id"
          ],
          "attributes": {
            "azure.resource.group": {
              "type": "string",
              "enum": [],
              "description": "The name of the resource group this vnet belongs to."
            },
            "azure.resource.id": {
              "type": "string",
              "enum": [],
              "description": "The fully qualified resource ID for the vnet."
            },
            "azure.vnet.bgp_community_string": {
              "type": "string",
              "enum": [],
              "description": "Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this vnet"
            },
            "azure.vnet.flow_timeout": {
              "type": "long",
              "enum": [],
              "description": "The FlowTimeout value (in minutes) for the vnet"
            },
            "azure.vnet.is_ddos_protection_enabled": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates if DDoS protection is enabled for all the protected resources in the vnet."
            },
            "azure.vnet.name": {
              "type": "string",
              "enum": [],
              "description": "The name of the Virtual Network."
            },
            "azure.vnet.is_vm_protection_enabled": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates if VM protection is enabled for all the subnets in the vnet."
            }
          }
        },
        "parentType": "cloud:network"
      },
      {
        "name": "database",
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Database",
        "description": "A cloud managed database which contains tables.",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "cloud.provider",
            "cloud.account.id",
            "cloud.region",
            "cloud.availability_zone",
            "cloud.platform",
            "cloud.database.id"
          ],
          "attributes": {
            "cloud.provider": {
              "type": "string",
              "enum": [],
              "description": "Name of the cloud provider."
            },
            "cloud.region": {
              "type": "string",
              "enum": [],
              "description": "The geographical region the resource is running."
            },
            "cloud.account.id": {
              "type": "string",
              "enum": [],
              "description": "The cloud account ID the resource is assigned to."
            },
            "cloud.database.max_allocated_storage": {
              "type": "long",
              "enum": [],
              "description": "The upper limit, in bytes, to which cloud provider can automatically scale the storage of the database."
            },
            "cloud.database.id": {
              "type": "string",
              "enum": [],
              "description": "Unique database ID assigned by the cloud provider."
            },
            "cloud.platform": {
              "type": "string",
              "enum": [],
              "description": "The cloud platform in use."
            },
            "cloud.database.allocated_storage": {
              "type": "long",
              "enum": [],
              "description": "Allocated storage size specified in bytes."
            },
            "cloud.availability_zone": {
              "type": "string",
              "enum": [],
              "description": "Availability zone represents the zone where the resource is running. "
            }
          }
        },
        "parentType": "infra:database"
      },
      {
        "name": "database_cluster",
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Cloud Database Cluster",
        "description": "A cloud managed database cluster.",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "cloud.provider",
            "cloud.account.id",
            "cloud.region",
            "cloud.availability_zone",
            "cloud.platform",
            "cloud.database_cluster.id",
            "cloud.database_cluster.state"
          ],
          "attributes": {
            "cloud.database_cluster.endpoint.hosted_zone_id": {
              "type": "string",
              "enum": [],
              "description": "The ID of the database cluster's hosted zone."
            },
            "cloud.database_cluster.backup_retention_period": {
              "type": "long",
              "enum": [],
              "description": "The number of days for which automated backups are retained."
            },
            "cloud.region": {
              "type": "string",
              "enum": [],
              "description": "The geographical region the resource is running."
            },
            "cloud.database_cluster.created_at": {
              "type": "string",
              "format": "date-time",
              "enum": [],
              "description": "The time when the database cluster was created."
            },
            "cloud.database_cluster.state": {
              "type": "string",
              "enum": [],
              "description": "The current state of the database cluster."
            },
            "cloud.availability_zone": {
              "type": "string",
              "enum": [],
              "description": "Availability zone represents the zone where the resource is running. "
            },
            "cloud.database_cluster.allocated_storage": {
              "type": "long",
              "enum": [],
              "description": "Allocated storage size specified in bytes."
            },
            "cloud.provider": {
              "type": "string",
              "enum": [],
              "description": "Name of the cloud provider."
            },
            "cloud.database_cluster.is_storage_encrypted": {
              "type": "boolean",
              "enum": [],
              "description": "Specifies whether the database cluster's storage is encrypted."
            },
            "cloud.network.id": {
              "type": "string",
              "enum": [],
              "description": "The ID of the network that the database cluster is running in."
            },
            "cloud.account.id": {
              "type": "string",
              "enum": [],
              "description": "The cloud account ID the resource is assigned to."
            },
            "cloud.subnet.ids": {
              "type": "string",
              "enum": [],
              "description": "The IDs of the subnets for the database cluster."
            },
            "cloud.database_cluster.id": {
              "type": "string",
              "enum": [],
              "description": "Unique database cluster ID assigned by the cloud provider."
            },
            "cloud.database_cluster.security_groups": {
              "type": "string",
              "enum": [],
              "description": "The security groups of the database cluster."
            },
            "cloud.platform": {
              "type": "string",
              "enum": [],
              "description": "The cloud platform in use."
            }
          }
        },
        "parentType": "infra:database_cluster"
      },
      {
        "name": "database_instance",
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Cloud Database Instance",
        "description": "A cloud managed database instance.",
        "metricTypes": [
          "cloud:database_instance.cpu.balance.credits",
          "cloud:database_instance.cpu.used.credits"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "cloud.provider",
            "cloud.account.id",
            "cloud.region",
            "cloud.availability_zone",
            "cloud.platform",
            "cloud.database_instance.id",
            "cloud.database_instance.state"
          ],
          "attributes": {
            "cloud.database_instance.max_allocated_storage": {
              "type": "long",
              "enum": [],
              "description": "The upper limit, in bytes, to which cloud provider can automatically scale the storage of the database."
            },
            "cloud.database_instance.id": {
              "type": "string",
              "enum": [],
              "description": "Unique database instance ID assigned by the cloud provider."
            },
            "cloud.region": {
              "type": "string",
              "enum": [],
              "description": "The geographical region the resource is running."
            },
            "cloud.database_instance.backup_retention_period": {
              "type": "long",
              "enum": [],
              "description": "The number of days for which automated backups are retained."
            },
            "cloud.database_instance.endpoint.hosted_zone_id": {
              "type": "string",
              "enum": [],
              "description": "The ID of the database instance's hosted zone."
            },
            "cloud.database_instance.state": {
              "type": "string",
              "enum": [],
              "description": "The current state of the database instance."
            },
            "cloud.database_instance.created_at": {
              "type": "string",
              "format": "date-time",
              "enum": [],
              "description": "The date and time when the database instance was created."
            },
            "cloud.availability_zone": {
              "type": "string",
              "enum": [],
              "description": "Availability zone represents the zone where the resource is running. "
            },
            "cloud.provider": {
              "type": "string",
              "enum": [],
              "description": "Name of the cloud provider."
            },
            "cloud.network.id": {
              "type": "string",
              "enum": [],
              "description": "The ID of the network that the database instance is running in."
            },
            "cloud.account.id": {
              "type": "string",
              "enum": [],
              "description": "The cloud account ID the resource is assigned to."
            },
            "cloud.database_instance.security_groups": {
              "type": "string",
              "enum": [],
              "description": "The security groups of the database instance."
            },
            "cloud.subnet.ids": {
              "type": "string",
              "enum": [],
              "description": "The IDs of the subnets for the database instance."
            },
            "cloud.database_instance.allocated_storage": {
              "type": "long",
              "enum": [],
              "description": "Allocated storage size specified in bytes."
            },
            "cloud.database_instance.is_storage_encrypted": {
              "type": "boolean",
              "enum": [],
              "description": "Specifies whether the database instance's storage is encrypted."
            },
            "cloud.platform": {
              "type": "string",
              "enum": [],
              "description": "The cloud platform in use."
            }
          }
        },
        "parentType": "infra:database_instance"
      },
      {
        "name": "disk",
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Cloud Disk",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "cloud.disk.id"
          ],
          "optimized": [
            "cloud.provider",
            "cloud.account.id",
            "cloud.region",
            "cloud.availability_zone",
            "cloud.platform",
            "cloud.disk.id",
            "cloud.disk.state",
            "cloud.disk.type",
            "cloud.disk.is_encrypted"
          ],
          "attributes": {
            "cloud.provider": {
              "type": "string",
              "enum": [],
              "description": "Name of the cloud provider."
            },
            "cloud.disk.size": {
              "type": "long",
              "enum": [],
              "description": "The size of the disk, in bytes."
            },
            "cloud.region": {
              "type": "string",
              "enum": [],
              "description": "The geographical region the resource is running."
            },
            "cloud.account.id": {
              "type": "string",
              "enum": [],
              "description": "The cloud account ID the resource is assigned to."
            },
            "host.ids": {
              "type": "string",
              "enum": [],
              "description": "The IDs of Hosts the disk is attached to."
            },
            "cloud.disk.is_encrypted": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates whether the volume is encrypted."
            },
            "cloud.disk.id": {
              "type": "string",
              "enum": [],
              "description": "Unique disk ID."
            },
            "cloud.disk.state": {
              "type": "string",
              "enum": [],
              "description": "The state of the disk."
            },
            "cloud.platform": {
              "type": "string",
              "enum": [],
              "description": "The cloud platform in use."
            },
            "cloud.disk.created_at": {
              "type": "string",
              "enum": [],
              "description": "The data and time when the disk was created, in date-time format."
            },
            "cloud.disk.type": {
              "type": "string",
              "enum": [],
              "description": "The type of the disk."
            },
            "cloud.availability_zone": {
              "type": "string",
              "enum": [],
              "description": "Availability zone represents the zone where the resource is running. "
            }
          }
        }
      },
      {
        "name": "host",
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Cloud Host",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "cloud.provider",
            "cloud.account.id",
            "cloud.region",
            "cloud.availability_zone",
            "cloud.platform",
            "cloud.network.id",
            "cloud.subnet.id",
            "cloud.host.type"
          ],
          "attributes": {
            "cloud.host.public_dns_names": {
              "type": "string",
              "enum": [],
              "description": "Public dns names for the instance."
            },
            "cloud.host.private_ip_addresses": {
              "type": "string",
              "enum": [],
              "description": "Private ip addresses for the instance."
            },
            "cloud.host.type": {
              "type": "string",
              "enum": [],
              "description": "The type of the instance."
            },
            "cloud.host.private_dns_names": {
              "type": "string",
              "enum": [],
              "description": "Private dns names for the instance."
            },
            "cloud.host.network_interface.ids": {
              "type": "string",
              "enum": [],
              "description": "The IDs of the network interfaces attached to the instance."
            },
            "cloud.host.launch_time": {
              "type": "string",
              "enum": [],
              "description": "The time the instance was launched, in date-time format."
            },
            "cloud.host.image.offer": {
              "type": "string",
              "enum": [],
              "description": "The image offer of the instance."
            },
            "cloud.availability_zone": {
              "type": "string",
              "enum": [],
              "description": "Availability zone represents the zone where the resource is running. "
            },
            "cloud.host.state.name": {
              "type": "string",
              "enum": [],
              "description": "The state of the instance."
            },
            "cloud.host.placement_group_name": {
              "type": "string",
              "enum": [],
              "description": "The name of the placement group for the instance."
            },
            "cloud.host.security_groups": {
              "type": "string",
              "enum": [],
              "description": "The security groups of the instance."
            },
            "cloud.platform": {
              "type": "string",
              "enum": [],
              "description": "The cloud platform in use."
            },
            "cloud.host.image.version": {
              "type": "string",
              "enum": [],
              "description": "The image version of the instance."
            },
            "cloud.region": {
              "type": "string",
              "enum": [],
              "description": "The geographical region the resource is running."
            },
            "cloud.subnet.id": {
              "type": "string",
              "enum": [],
              "description": "The ID of the subnet for the instance."
            },
            "cloud.host.ssh_key_name": {
              "type": "string",
              "enum": [],
              "description": "The name of the key pair used when the instance was launched."
            },
            "cloud.host.image.publisher": {
              "type": "string",
              "enum": [],
              "description": "The image sku of the instance."
            },
            "cloud.disk.ids": {
              "type": "string",
              "enum": [],
              "description": "Cloud disk IDs attached to the instance."
            },
            "cloud.host.hypervisor": {
              "type": "string",
              "enum": [],
              "description": "The hypervisor type of the instance."
            },
            "cloud.provider": {
              "type": "string",
              "enum": [],
              "description": "Name of the cloud provider."
            },
            "cloud.network.id": {
              "type": "string",
              "enum": [],
              "description": "The ID of the network that the instance is running in."
            },
            "cloud.account.id": {
              "type": "string",
              "enum": [],
              "description": "The cloud account ID the resource is assigned to."
            },
            "cloud.host.root_device_volume.type": {
              "type": "string",
              "enum": [],
              "description": "The root device type used by the instance."
            },
            "cloud.host.root_device_volume.name": {
              "type": "string",
              "enum": [],
              "description": "The device name of the root device volume."
            },
            "cloud.host.state.transition_reason": {
              "type": "string",
              "enum": [],
              "description": "The reason for the most recent state transition."
            },
            "cloud.host.image.sku": {
              "type": "string",
              "enum": [],
              "description": "The image publisher the instance."
            },
            "cloud.host.public_ip_addresses": {
              "type": "string",
              "enum": [],
              "description": "Public ip addresses for the instance."
            },
            "cloud.host.image.id": {
              "type": "string",
              "enum": [],
              "description": "The ID of the image used to launch the instance."
            }
          }
        },
        "parentType": "infra:host",
        "associationTypes": {
          "common:relates_to": [
            "cloud:disk"
          ]
        }
      },
      {
        "name": "load_balancer",
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Cloud Load Balancer",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "cloud.load_balancer.id"
          ],
          "optimized": [
            "cloud.provider",
            "cloud.account.id",
            "cloud.region",
            "cloud.availability_zone",
            "cloud.platform",
            "cloud.load_balancer.id",
            "cloud.subnet.ids",
            "cloud.network.id"
          ],
          "attributes": {
            "cloud.region": {
              "type": "string",
              "enum": [],
              "description": "The geographical region the resource is running."
            },
            "cloud.load_balancer.created_at": {
              "type": "string",
              "enum": [],
              "description": "The time the load balancer was created, in date-time format."
            },
            "cloud.load_balancer.type": {
              "type": "string",
              "enum": [],
              "description": "The type of load balancer"
            },
            "cloud.availability_zone": {
              "type": "string",
              "enum": [],
              "description": "Availability zone represents the zone where the resource is running. "
            },
            "cloud.provider": {
              "type": "string",
              "enum": [],
              "description": "Name of the cloud provider."
            },
            "cloud.network.id": {
              "type": "string",
              "enum": [],
              "description": "Network ID of the load balancer"
            },
            "cloud.account.id": {
              "type": "string",
              "enum": [],
              "description": "The cloud account ID the resource is assigned to."
            },
            "host.ids": {
              "type": "string",
              "enum": [],
              "description": "The IDs of the hosts for the load balancer."
            },
            "cloud.subnet.ids": {
              "type": "string",
              "enum": [],
              "description": "Subnet IDs of the load balancer"
            },
            "cloud.load_balancer.state": {
              "type": "string",
              "enum": [],
              "description": "The state of the load balancer"
            },
            "cloud.load_balancer.security_groups": {
              "type": "string",
              "enum": [],
              "description": "The IDs of the security groups for the load balancer"
            },
            "cloud.load_balancer.name": {
              "type": "string",
              "enum": [],
              "description": "The name of the load balancer"
            },
            "cloud.platform": {
              "type": "string",
              "enum": [],
              "description": "The cloud platform in use."
            },
            "cloud.load_balancer.id": {
              "type": "string",
              "enum": [],
              "description": "Unique load balancer ID."
            }
          }
        },
        "associationTypes": {
          "common:relates_to": [
            "cloud:host"
          ]
        }
      },
      {
        "name": "network",
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Cloud Network",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "cloud.network.id"
          ],
          "optimized": [
            "cloud.provider",
            "cloud.account.id",
            "cloud.region",
            "cloud.platform",
            "cloud.network.id",
            "cloud.network.provisioning_state"
          ],
          "attributes": {
            "cloud.provider": {
              "type": "string",
              "enum": [],
              "description": "Name of the cloud provider."
            },
            "cloud.region": {
              "type": "string",
              "enum": [],
              "description": "The geographical region the resource is running."
            },
            "cloud.network.id": {
              "type": "string",
              "enum": [],
              "description": "Unique cloud network ID."
            },
            "cloud.network.dhcp_options": {
              "type": "string",
              "enum": [],
              "description": "The DHCP Options for the network. This includes the DNS servers available in the network."
            },
            "cloud.account.id": {
              "type": "string",
              "enum": [],
              "description": "The cloud account ID the resource is assigned to."
            },
            "cloud.network.cidr_blocks": {
              "type": "string",
              "enum": [],
              "description": "The IP address ranges in CIDR notation that can be on this network."
            },
            "cloud.network.provisioning_state": {
              "type": "string",
              "enum": [],
              "description": "The provisioning state of the network."
            },
            "cloud.platform": {
              "type": "string",
              "enum": [],
              "description": "The cloud platform in use."
            }
          }
        },
        "associationTypes": {
          "common:has": [
            "cloud:database_instance",
            "cloud:host",
            "cloud:database",
            "cloud:load_balancer"
          ]
        }
      },
      {
        "name": "interaction",
        "namespace": {
          "name": "common",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Interaction",
        "description": "The parent type for all interactions",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 1440,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [
            "interaction.context.id",
            "interaction.from.id",
            "interaction.to.id"
          ],
          "optimized": [
            "interaction.context.id",
            "interaction.from.id",
            "interaction.to.id"
          ],
          "attributes": {
            "interaction.from.id": {
              "type": "string",
              "enum": [],
              "description": "ID of the 'from' entity for this interaction"
            },
            "interaction.context.id": {
              "type": "string",
              "enum": [],
              "description": "ID of the context entity for this interaction"
            },
            "interaction.upstream.id": {
              "type": "string",
              "enum": [],
              "description": "ID of the upstream interaction"
            },
            "interaction.to.id": {
              "type": "string",
              "enum": [],
              "description": "ID of the 'to' entity for this interaction"
            }
          }
        },
        "associationTypes": {
          "common:interaction_from": [
            "common:*"
          ],
          "common:interaction_upstream": [
            "common:interaction"
          ],
          "common:interaction_context": [
            "common:*"
          ],
          "common:interaction_to": [
            "common:*"
          ]
        }
      },
      {
        "name": "cluster",
        "namespace": {
          "name": "db",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Database Cluster",
        "description": "This entity represents the database cluster",
        "metricTypes": [
          "db:elapsed_time",
          "db:execution_count",
          "db:average_response_time",
          "db:wait_time",
          "db:wait_time_ratio",
          "db:cpu_time",
          "db:cpu_time_ratio",
          "db:logical_reads",
          "db:logical_writes",
          "db:physical_reads",
          "db:buffer_cache_hit_ratio"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "db.cluster.name",
            "db.database.type"
          ],
          "optimized": [
            "db.cluster.name",
            "db.database.type"
          ],
          "attributes": {
            "db.database.type": {
              "type": "string",
              "enum": [],
              "description": "Type of the database. For example: sqlserver"
            },
            "db.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the database cluster. For example: aws-rds-cluster1"
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "db:instance"
          ]
        }
      },
      {
        "name": "instance",
        "namespace": {
          "name": "db",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Database Instance",
        "description": "This entity represents the database instance",
        "metricTypes": [
          "db:status",
          "db:elapsed_time",
          "db:execution_count",
          "db:average_response_time",
          "db:wait_time",
          "db:wait_time_ratio",
          "db:cpu_time",
          "db:cpu_time_ratio",
          "db:logical_reads",
          "db:logical_writes",
          "db:physical_reads",
          "db:buffer_cache_hit_ratio",
          "db:disk_write_io_sec",
          "db:disk_read_io_sec",
          "db:disk_read_latency",
          "db:disk_write_latency",
          "db:database_connections",
          "db:maximum_database_connections",
          "db:database_sessions",
          "db:cpu_utilization",
          "db:memory_used",
          "db:maximum_memory",
          "db:storage_used",
          "db:maximum_storage"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "db.database.type",
            "db.host.name",
            "db.host.port"
          ],
          "optimized": [
            "db.cluster.name",
            "db.database.type",
            "db.host.name",
            "db.host.port"
          ],
          "attributes": {
            "db.database.type": {
              "type": "string",
              "enum": [],
              "description": "Type of the database. For example: sqlserver"
            },
            "db.host.port": {
              "type": "string",
              "enum": [],
              "description": "Port of the database host where the database instance is running. For example: 1443"
            },
            "db.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the database cluster. For example: aws-rds-cluster1"
            },
            "db.host.name": {
              "type": "string",
              "enum": [],
              "description": "Database host name where database instance is running. For example: aws-rds-instance-write"
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "db:query"
          ]
        }
      },
      {
        "name": "query",
        "namespace": {
          "name": "db",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Database Query",
        "description": "This entity represents a query running inside a database instance",
        "metricTypes": [
          "db:elapsed_time",
          "db:execution_count",
          "db:average_response_time",
          "db:wait_time",
          "db:wait_time_ratio",
          "db:cpu_time",
          "db:cpu_time_ratio",
          "db:logical_reads",
          "db:logical_writes",
          "db:physical_reads",
          "db:buffer_cache_hit_ratio",
          "db:rows_scanned",
          "db:rows_updated",
          "db:rows_returned",
          "db:memory_usage",
          "db:disk_write_io_sec",
          "db:disk_read_io_sec",
          "db:disk_read_latency",
          "db:disk_write_latency"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "db.query.id",
            "db.database.type",
            "db.host.name",
            "db.host.port"
          ],
          "optimized": [
            "db.query.id",
            "db.cluster.name",
            "db.database.type",
            "db.host.name",
            "db.host.port"
          ],
          "attributes": {
            "db.database.type": {
              "type": "string",
              "enum": [],
              "description": "Type of the database. For example: sqlserver"
            },
            "db.query.id": {
              "type": "string",
              "enum": [],
              "description": "Id of the query. For example: 7a300cbc-761c-476a-acea-c0c6e2cd398f"
            },
            "db.host.port": {
              "type": "string",
              "enum": [],
              "description": "Port of the database host port. For example: 1443"
            },
            "db.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the database cluster. For example: aws-rds-cluster1"
            },
            "db.host.name": {
              "type": "string",
              "enum": [],
              "description": "Host name of the database host name. For example: aws-rds-instance-write"
            },
            "db.query.text": {
              "type": "string",
              "enum": [],
              "description": "Text of the query. For example: SELECT id, name FROM users WHERE name = ?"
            },
            "db.query.type": {
              "type": "string",
              "enum": [],
              "description": "Type of the query. For example: read"
            }
          }
        }
      },
      {
        "name": "app_group",
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Application Group",
        "metricTypes": [
          "eum:calls_min",
          "eum:network_response_time",
          "eum:http_errors_min",
          "eum:network_errors_min"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 43200,
          "purgeTtlInMinutes": 129600
        },
        "attributeDefinitions": {
          "required": [
            "eum.app_key"
          ],
          "optimized": [
            "eum.app_key",
            "eum.display_name"
          ],
          "attributes": {
            "eum.app_key": {
              "type": "string",
              "enum": [],
              "description": "The Application key"
            },
            "eum.display_name": {
              "type": "string",
              "enum": [],
              "description": "The display name for the application group "
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "eum:application"
          ]
        }
      },
      {
        "name": "application",
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Application",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 43200,
          "purgeTtlInMinutes": 129600
        },
        "attributeDefinitions": {
          "required": [
            "eum.app_key",
            "eum.app_name",
            "eum.agent_type",
            "eum.platform"
          ],
          "optimized": [
            "eum.app_key",
            "eum.app_name",
            "eum.agent_type",
            "eum.platform",
            "eum.display_name"
          ],
          "attributes": {
            "eum.app_key": {
              "type": "string",
              "enum": [],
              "description": "Application key"
            },
            "eum.agent_type": {
              "type": "string",
              "enum": [
                "Browser",
                "Android",
                "iOS",
                "Cordova",
                "Flutter",
                "React-Native",
                "Xamarin"
              ],
              "description": "Agent type (browser, react-native, flutter, Android, iOS)"
            },
            "eum.display_name": {
              "type": "string",
              "enum": [],
              "description": "Application display name"
            },
            "eum.platform": {
              "type": "string",
              "enum": [
                "Android",
                "iOS"
              ],
              "description": "Operating system (iOS/Android)"
            },
            "eum.app_name": {
              "type": "string",
              "enum": [],
              "description": "Application name"
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "eum:network_request"
          ]
        }
      },
      {
        "name": "mobile_application",
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Mobile Application",
        "metricTypes": [
          "eum:calls_min",
          "eum:normal_calls_min",
          "eum:slow_calls_min",
          "eum:network_response_time",
          "eum:stall_calls_min",
          "eum:very_slow_calls_min",
          "eum:http_errors_min",
          "eum:network_errors_min",
          "eum:network_request_content_length",
          "eum:network_response_content_length"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 43200,
          "purgeTtlInMinutes": 129600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "eum:application",
        "associationTypes": {}
      },
      {
        "name": "network_request",
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Network Request",
        "metricTypes": [
          "eum:calls_min",
          "eum:normal_calls_min",
          "eum:slow_calls_min",
          "eum:network_response_time",
          "eum:stall_calls_min",
          "eum:very_slow_calls_min",
          "eum:http_errors_min",
          "eum:network_errors_min",
          "eum:network_request_content_length",
          "eum:network_response_content_length"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 43200,
          "purgeTtlInMinutes": 129600
        },
        "attributeDefinitions": {
          "required": [
            "eum.app_key",
            "eum.app_name",
            "eum.agent_type",
            "eum.platform",
            "http.url",
            "http.method"
          ],
          "optimized": [
            "eum.app_key",
            "eum.app_name",
            "eum.agent_type",
            "eum.platform",
            "http.url",
            "http.method"
          ],
          "attributes": {
            "eum.app_key": {
              "type": "string",
              "enum": [],
              "description": "The application key"
            },
            "eum.agent_type": {
              "type": "string",
              "enum": [
                "Android",
                "iOS",
                "Cordova",
                "Flutter",
                "React-Native",
                "Xamarin"
              ],
              "description": "Device agent type (browser, react-native, flutter, Android, iOS)"
            },
            "http.url": {
              "type": "string",
              "enum": [],
              "description": "Network request url endpoint"
            },
            "http.method": {
              "type": "string",
              "enum": [],
              "description": "Http method of the request (GET/POST)"
            },
            "eum.platform": {
              "type": "string",
              "enum": [
                "Android",
                "iOS"
              ],
              "description": "Device operating system (iOS/Android)"
            },
            "eum.app_name": {
              "type": "string",
              "enum": [],
              "description": "The application name"
            }
          }
        }
      },
      {
        "name": "request",
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "kind": "entity",
        "displayName": "EUM Request",
        "metricTypes": [
          "eum:calls_min",
          "eum:normal_calls_min",
          "eum:slow_calls_min",
          "eum:network_response_time",
          "eum:stall_calls_min",
          "eum:very_slow_calls_min",
          "eum:http_errors_min",
          "eum:network_errors_min"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 43200,
          "purgeTtlInMinutes": 129600
        },
        "attributeDefinitions": {
          "required": [
            "request.type"
          ],
          "optimized": [
            "request.type"
          ],
          "attributes": {
            "request.type": {
              "type": "string",
              "enum": [],
              "description": "Type of the request (e.g. HTTP, HTTPS, gRPC etc.)"
            }
          }
        },
        "parentType": "common:interaction",
        "associationTypes": {
          "common:aggregates_of": [
            "eum:request"
          ]
        }
      },
      {
        "name": "container",
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Container",
        "metricTypes": [
          "infra:container.cpu.load_10s",
          "infra:container.cpu.throttled_time",
          "infra:container.cpu.throttled_count",
          "infra:container.cpu.used.utilization",
          "infra:container.cpu.usage",
          "infra:container.cpu.user.utilization",
          "infra:container.cpu.system.utilization",
          "infra:container.memory.limit",
          "infra:container.memory.used.usage",
          "infra:container.memory.used.utilization",
          "infra:container.memory.cached.usage",
          "infra:container.memory.ws.usage",
          "infra:container.memory.rss.usage",
          "infra:container.filesystem.limit",
          "infra:container.filesystem.free.usage",
          "infra:container.filesystem.used.usage",
          "infra:container.filesystem.used.utilization",
          "infra:container.filesystem.read.io_sec",
          "infra:container.filesystem.write.io_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "container.id"
          ],
          "optimized": [
            "container.id",
            "host.name",
            "container.runtime",
            "container.image.name",
            "container.short_id",
            "container.name",
            "internal.container.encapsulating_object_id"
          ],
          "attributes": {
            "container.created_at": {
              "type": "long",
              "enum": [],
              "description": "Container creation time as unix timestamp in ms"
            },
            "container.cpu_limit": {
              "type": "double",
              "enum": [],
              "description": "Container CPU limit in cores"
            },
            "container.runtime": {
              "type": "string",
              "enum": [],
              "description": "The container runtime managing this container"
            },
            "k8s.namespace.name": {
              "type": "string",
              "enum": [],
              "description": "Name of namespace for pod where container is located"
            },
            "container.name": {
              "type": "string",
              "enum": [],
              "description": "Container Name"
            },
            "k8s.pod.name": {
              "type": "string",
              "enum": [],
              "description": "Name of pod where container is located"
            },
            "container.image.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the image the container was built on"
            },
            "container.memory_limit": {
              "type": "long",
              "enum": [],
              "description": "Container memory limit in bytes"
            },
            "internal.container.encapsulating_object_id": {
              "type": "string",
              "enum": [],
              "description": "ID used internally for correlation to the encapsulating object (e.g. pod)"
            },
            "host.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the host where container is located"
            },
            "container.short_id": {
              "type": "string",
              "enum": [],
              "description": "Short Container Id (12 chars)"
            },
            "container.id": {
              "type": "string",
              "enum": [],
              "description": "Full ID of the container"
            }
          }
        },
        "associationTypes": {
          "common:has": [
            "apm:service_instance"
          ]
        }
      },
      {
        "name": "database",
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Database",
        "description": "A generic database which contains tables.",
        "metricTypes": [
          "infra:database.queries.active",
          "infra:database.storage.used.utilization",
          "infra:database.cpu.utilization",
          "infra:database.connections.failed",
          "infra:database.memory.used.utilization",
          "infra:database.storage.limit",
          "infra:database.cache.utilization",
          "infra:database.cpu.limit",
          "infra:database.deadlock"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "database.host",
            "database.port",
            "database.name"
          ],
          "optimized": [
            "database.host",
            "database.port",
            "database.name",
            "database.instance_name"
          ],
          "attributes": {
            "database.instance_name": {
              "type": "string",
              "enum": [],
              "description": "Name of the database instance. For example: aws-rds-instance-1."
            },
            "database.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the database. For example: master"
            },
            "database.host": {
              "type": "string",
              "enum": [],
              "description": "Database host name where database instance is running. For example: aws-rds-instance-write"
            },
            "database.port": {
              "type": "long",
              "enum": [],
              "description": "Port of the database host where the database instance is running. For example: 1443"
            }
          }
        }
      },
      {
        "name": "database_cluster",
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Database Cluster",
        "description": "A generic database cluster.",
        "metricTypes": [
          "infra:database.cpu.utilization",
          "infra:database.connections",
          "infra:database.connections.failed",
          "infra:database.memory.free.usage",
          "infra:database.memory.used.utilization",
          "infra:database.paging.used.usage",
          "infra:database.network.receive.io_sec",
          "infra:database.network.transmit.io_sec",
          "infra:database.storage.free.usage",
          "infra:database.storage.used.utilization",
          "infra:database.disk.read.operations_sec",
          "infra:database.disk.read.operation_time",
          "infra:database.disk.read.io_sec",
          "infra:database.disk.write.operations_sec",
          "infra:database.disk.write.operation_time",
          "infra:database.disk.write.io_sec",
          "infra:database.disk.binary_logs.usage",
          "infra:database.disk.transaction_logs.usage",
          "infra:database.disk.transaction_logs.generation_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "database_cluster.host",
            "database_cluster.port"
          ],
          "optimized": [
            "database_cluster.host",
            "database_cluster.port",
            "database_cluster.name",
            "database_cluster.type"
          ],
          "attributes": {
            "database_cluster.port": {
              "type": "long",
              "enum": [],
              "description": "Port on the database host that the databases cluster is listening on. For example: 1443."
            },
            "database_cluster.host": {
              "type": "string",
              "enum": [],
              "description": "Database host name where database cluster is running. For example: aws-rds-instance-write."
            },
            "database_cluster.database_name": {
              "type": "string",
              "enum": [],
              "description": "Name of the initial database of this DB cluster that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster."
            },
            "database_cluster.character_set_name": {
              "type": "string",
              "enum": [],
              "description": "The name of the character set that this cluster is associated with. For example: SQL_Latin1_General_CP1_CI_AS"
            },
            "database_cluster.type": {
              "type": "string",
              "enum": [
                "mysql",
                "aurora-mysql",
                "postgres",
                "aurora-postgresql",
                "mariadb",
                "sqlserver",
                "sqlserver-ex",
                "sqlserver-ee",
                "oracle",
                "neptune"
              ],
              "description": "The type of the database engine. For example: sqlserver."
            },
            "database_cluster.name": {
              "type": "string",
              "enum": [],
              "description": "User-supplied DB cluster name or identifier. For example: aws-rds-cluster1."
            },
            "database_cluster.database_instance_names": {
              "type": "string",
              "enum": [],
              "description": "A comma-separated list of user-supplied DB instance names or identifiers. For example: [aws-instance-1, aws-instance-2, aws-instance-3]."
            },
            "database_cluster.version": {
              "type": "string",
              "enum": [],
              "description": "The database engine version. For example: 5.7.mysql_aurora.2.04.2."
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "infra:database_instance"
          ]
        }
      },
      {
        "name": "database_instance",
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Database Instance",
        "description": "A generic database instance.",
        "metricTypes": [
          "infra:database.queries.active",
          "infra:database.cache.utilization",
          "infra:database.cpu.limit",
          "infra:database.cpu.utilization",
          "infra:database.connections",
          "infra:database.connections.failed",
          "infra:database.deadlock",
          "infra:database.memory.free.usage",
          "infra:database.memory.used.utilization",
          "infra:database.paging.used.usage",
          "infra:database.network.receive.io_sec",
          "infra:database.network.transmit.io_sec",
          "infra:database.storage.free.usage",
          "infra:database.storage.limit",
          "infra:database.storage.used.utilization",
          "infra:database.disk.read.operations_sec",
          "infra:database.disk.read.operation_time",
          "infra:database.disk.read.io_sec",
          "infra:database.disk.write.operations_sec",
          "infra:database.disk.write.operation_time",
          "infra:database.disk.write.io_sec",
          "infra:database.disk.pending.operations",
          "infra:database.disk.binary_logs.usage",
          "infra:database.disk.transaction_logs.usage",
          "infra:database.disk.transaction_logs.generation_sec",
          "infra:database.replica.lag",
          "infra:database.lvm.read.operations_sec",
          "infra:database.lvm.write.operations_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "database_instance.host",
            "database_instance.port"
          ],
          "optimized": [
            "database_instance.cluster_name",
            "database_instance.type",
            "database_instance.host",
            "database_instance.port",
            "database_instance.name",
            "database_instance.is_primary",
            "database_instance.is_replica",
            "database_instance.replica.primary_instance_name"
          ],
          "attributes": {
            "database_instance.port": {
              "type": "long",
              "enum": [],
              "description": "Port on the database host that the databases instance is listening on. For example: 1443."
            },
            "database_instance.cluster_name": {
              "type": "string",
              "enum": [],
              "description": "Name of the database cluster. For example: aws-rds-cluster1"
            },
            "database_instance.database_name": {
              "type": "string",
              "enum": [],
              "description": "Name of the initial database of this DB instance that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster."
            },
            "database_instance.name": {
              "type": "string",
              "enum": [],
              "description": "User-supplied DB instance name or identifier. For example: aws-rds-instance-write."
            },
            "database_instance.replica.primary_instance_name": {
              "type": "string",
              "enum": [],
              "description": "The user-supplied name or identifier of the primary (source) DB instance if this DB instance is a read replica. For example: aws-rds-instance-write."
            },
            "database_instance.is_replica": {
              "type": "boolean",
              "enum": [],
              "description": "Specifies if the running instance is a replica or not. For example: true"
            },
            "database_instance.type": {
              "type": "string",
              "enum": [
                "mysql",
                "aurora-mysql",
                "postgres",
                "aurora-postgresql",
                "mariadb",
                "sqlserver",
                "sqlserver-ex",
                "sqlserver-ee",
                "oracle",
                "neptune"
              ],
              "description": "The type of the database engine. For example: sqlserver."
            },
            "database_instance.version": {
              "type": "string",
              "enum": [],
              "description": "The database engine version. For example: 5.7.mysql_aurora.2.04.2."
            },
            "database_instance.is_primary": {
              "type": "boolean",
              "enum": [],
              "description": "Specifies if the running instance acts as primary or secondary. For example: true"
            },
            "database_instance.character_set_name": {
              "type": "string",
              "enum": [],
              "description": "The name of the character set that this instance is associated with. For example: SQL_Latin1_General_CP1_CI_AS"
            },
            "database_instance.host": {
              "type": "string",
              "enum": [],
              "description": "Database host name where database instance is running. For example: aws-rds-instance-write."
            },
            "database_instance.replica.instance_names": {
              "type": "string",
              "enum": [],
              "description": "A comma-separated list of user-supplied names or identifiers of the read replicas. For example: [aws-rds-instance-read-replica-1, aws-rds-instance-read-replica-2]."
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "infra:database"
          ],
          "common:has": [
            "infra:database_instance"
          ]
        }
      },
      {
        "name": "disk",
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Disk",
        "metricTypes": [
          "infra:system.disk.device.read.io_sec",
          "infra:system.disk.device.write.io_sec",
          "infra:system.disk.device.read.operations_sec",
          "infra:system.disk.device.write.operations_sec",
          "infra:system.disk.device.io.utilization",
          "infra:system.disk.device.read.operation_time",
          "infra:system.disk.device.write.operation_time",
          "infra:system.disk.device.service.operation_time",
          "infra:system.disk.device.queue.operation_time"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "host.id",
            "disk.device"
          ],
          "optimized": [
            "disk.device"
          ],
          "attributes": {
            "host.id": {
              "type": "string",
              "enum": [],
              "description": "Unique ID of the host that this disk is installed on. For Cloud, this must be the instance_id assigned by the cloud provider."
            },
            "disk.device": {
              "type": "string",
              "enum": [],
              "description": "Monitored disk device identifier"
            }
          }
        }
      },
      {
        "name": "filesystem",
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "kind": "entity",
        "displayName": "FileSystem",
        "metricTypes": [
          "infra:system.filesystem.mountpoint.limit",
          "infra:system.filesystem.mountpoint.free.usage",
          "infra:system.filesystem.mountpoint.used.usage",
          "infra:system.filesystem.mountpoint.used.utilization"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "host.id",
            "filesystem.mount_point"
          ],
          "optimized": [
            "filesystem.mount_point"
          ],
          "attributes": {
            "filesystem.type": {
              "type": "string",
              "enum": [],
              "description": "Type of mounted filesystem"
            },
            "filesystem.readonly": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates if filesystem is mounted as read-only"
            },
            "filesystem.mount_point": {
              "type": "string",
              "enum": [],
              "description": "Mount point identifier of monitored filesystem"
            },
            "host.id": {
              "type": "string",
              "enum": [],
              "description": "Unique ID of the host that this filesystem is mounted to. For Cloud, this must be the instance_id assigned by the cloud provider."
            },
            "filesystem.device": {
              "type": "string",
              "enum": [],
              "description": "Device that is mounted"
            }
          }
        }
      },
      {
        "name": "host",
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Host",
        "metricTypes": [
          "infra:system.cpu.load_1m",
          "infra:system.cpu.load_5m",
          "infra:system.cpu.load_15m",
          "infra:system.cpu.used.utilization",
          "infra:system.cpu.user.utilization",
          "infra:system.cpu.system.utilization",
          "infra:system.cpu.iowait.utilization",
          "infra:system.cpu.stolen.utilization",
          "infra:system.memory.limit",
          "infra:system.memory.free.usage",
          "infra:system.memory.free.utilization",
          "infra:system.memory.available.usage",
          "infra:system.memory.used.usage",
          "infra:system.memory.used.utilization",
          "infra:system.memory.buffer.usage",
          "infra:system.memory.slab.usage",
          "infra:system.memory.cached.usage",
          "infra:system.paging.limit",
          "infra:system.paging.free.usage",
          "infra:system.paging.free.utilization",
          "infra:system.paging.used.usage",
          "infra:system.paging.used.utilization",
          "infra:system.paging.in.operations_sec",
          "infra:system.paging.out.operations_sec",
          "infra:system.paging.swap.in.operations_sec",
          "infra:system.paging.swap.out.operations_sec",
          "infra:system.paging.faults_sec",
          "infra:system.disk.read.io_sec",
          "infra:system.disk.write.io_sec",
          "infra:system.disk.read.operations_sec",
          "infra:system.disk.write.operations_sec",
          "infra:system.disk.io.utilization",
          "infra:system.filesystem.limit",
          "infra:system.filesystem.free.usage",
          "infra:system.filesystem.used.usage",
          "infra:system.filesystem.used.utilization",
          "infra:system.network.receive.io",
          "infra:system.network.receive.io_sec",
          "infra:system.network.receive.packets",
          "infra:system.network.receive.packets_sec",
          "infra:system.network.transmit.io",
          "infra:system.network.transmit.io_sec",
          "infra:system.network.transmit.packets",
          "infra:system.network.transmit.packets_sec",
          "infra:system.network.receive.errors_min",
          "infra:system.network.transmit.errors_min",
          "infra:system.network.receive.dropped",
          "infra:system.network.receive.dropped_sec",
          "infra:system.network.transmit.dropped",
          "infra:system.network.transmit.dropped_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "host.id"
          ],
          "optimized": [
            "host.id",
            "host.name",
            "os.type",
            "host.arch",
            "host.vcpu_count",
            "host.total_memory",
            "host.display_name",
            "internal.node.correlation.id"
          ],
          "attributes": {
            "os.description": {
              "type": "string",
              "enum": [],
              "description": "OS release which is currently installed on monitored host"
            },
            "host.total_swap_memory": {
              "type": "long",
              "enum": [],
              "description": "Total amount of swap memory in bytes"
            },
            "host.logical_cpu_count": {
              "type": "long",
              "enum": [],
              "description": "Number of CPU logical cores"
            },
            "host.arch": {
              "type": "string",
              "enum": [],
              "description": "OS architecture which is currently installed on monitored host"
            },
            "host.vcpu_count": {
              "type": "long",
              "enum": [],
              "description": "Available vCPU on host"
            },
            "os.type": {
              "type": "string",
              "enum": [],
              "description": "OS Name which is currently installed on monitored host"
            },
            "host.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the monitored host"
            },
            "host.id": {
              "type": "string",
              "enum": [],
              "description": "Unique ID of the host. For Cloud, this must be the instance_id assigned by the cloud provider."
            },
            "internal.node.correlation.id": {
              "type": "string",
              "enum": [],
              "description": "ID used internally for correlation to Kubernetes node"
            },
            "host.display_name": {
              "type": "string",
              "enum": [],
              "description": "Host display name"
            },
            "host.total_memory": {
              "type": "long",
              "enum": [],
              "description": "Total physical/RAM memory size in bytes"
            },
            "host.physical_cpu_count": {
              "type": "long",
              "enum": [],
              "description": "Number of CPU physical cores"
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "infra:disk",
            "infra:network_interface",
            "infra:filesystem"
          ],
          "common:has": [
            "infra:container"
          ]
        }
      },
      {
        "name": "network_interface",
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Network Interface",
        "metricTypes": [
          "infra:system.network.device.receive.io",
          "infra:system.network.device.receive.io_sec",
          "infra:system.network.device.receive.packets",
          "infra:system.network.device.receive.packets_sec",
          "infra:system.network.device.transmit.io",
          "infra:system.network.device.transmit.io_sec",
          "infra:system.network.device.transmit.packets",
          "infra:system.network.device.transmit.packets_sec",
          "infra:system.network.device.receive.errors_min",
          "infra:system.network.device.transmit.errors_min",
          "infra:system.network.device.receive.dropped",
          "infra:system.network.device.receive.dropped_sec",
          "infra:system.network.device.transmit.dropped",
          "infra:system.network.device.transmit.dropped_sec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "host.id",
            "network_interface.name"
          ],
          "optimized": [
            "network_interface.name"
          ],
          "attributes": {
            "network_interface.ipv4_addresses": {
              "type": "string",
              "enum": [],
              "description": "IPv4 addresses assigned to the network interface"
            },
            "network_interface.enabled": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates whether the network interface is enabled"
            },
            "network_interface.plugged": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates the physical link state of the network interface"
            },
            "network_interface.operational": {
              "type": "boolean",
              "enum": [],
              "description": "Indicates the operational state of the network interface"
            },
            "network_interface.ipv6_addresses": {
              "type": "string",
              "enum": [],
              "description": "IPv6 addresses assigned to the network interface"
            },
            "network_interface.name": {
              "type": "string",
              "enum": [],
              "description": "Name of monitored network interface"
            },
            "network_interface.duplex": {
              "type": "string",
              "enum": [],
              "description": "Duplex value. Possible values are half, full, and unknown."
            },
            "host.id": {
              "type": "string",
              "enum": [],
              "description": "Unique ID of the host that this network interface belongs to. For Cloud, this must be the instance_id assigned by the cloud provider."
            },
            "network_interface.mac": {
              "type": "string",
              "enum": [],
              "description": "Hardware address assigned to the network interface"
            },
            "network_interface.speed": {
              "type": "long",
              "enum": [],
              "description": "Speed capability in megabits per second"
            },
            "network_interface.mtu": {
              "type": "double",
              "enum": [],
              "description": "MTU value in bytes"
            }
          }
        }
      },
      {
        "name": "cluster",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Cluster",
        "metricTypes": [
          "k8s:cpu.usage",
          "k8s:cpu.limits",
          "k8s:cpu.requests",
          "k8s:memory.usage",
          "k8s:memory.limits",
          "k8s:memory.requests",
          "k8s:storage.limits",
          "k8s:storage.requests",
          "k8s:cpu.allocatable",
          "k8s:memory.allocatable",
          "k8s:storage.allocatable",
          "k8s:pods.allocatable",
          "k8s:memory.pressure",
          "k8s:disk.pressure",
          "k8s:pid.pressure",
          "k8s:network.unavailable",
          "k8s:kube.ready",
          "k8s:resource_quota.cpu.requests",
          "k8s:resource_quota.cpu.requests.usage",
          "k8s:resource_quota.cpu.limits",
          "k8s:resource_quota.cpu.limits.usage",
          "k8s:resource_quota.memory.requests",
          "k8s:resource_quota.memory.requests.usage",
          "k8s:resource_quota.memory.limits",
          "k8s:resource_quota.memory.limits.usage",
          "k8s:resource_quota.pvc.requests",
          "k8s:resource_quota.pvc.requests.usage",
          "k8s:resource_quota.storage.requests",
          "k8s:resource_quota.storage.requests.usage",
          "k8s:pods.running",
          "k8s:pods.pending",
          "k8s:pods.failed",
          "k8s:pods.succeeded",
          "k8s:pods.unknown",
          "k8s:cpu.limits.usage",
          "k8s:cpu.requests.usage",
          "k8s:memory.limits.usage",
          "k8s:memory.requests.usage",
          "k8s:native_events"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "k8s.cluster.name"
          ],
          "optimized": [
            "k8s.cluster.name"
          ],
          "attributes": {
            "k8s.version": {
              "type": "string",
              "enum": [],
              "description": "Kubernetes version"
            },
            "k8s.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the kubernetes cluster"
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "k8s:namespace",
            "k8s:node"
          ]
        }
      },
      {
        "name": "cronjob",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "CronJob",
        "metricTypes": [
          "k8s:job.completed"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "k8s.cronjob.successful_jobs_history_limit": {
              "type": "long",
              "enum": [],
              "description": "The number of successful finished jobs to retain."
            },
            "k8s.cronjob.last_schedule_time": {
              "type": "long",
              "enum": [],
              "description": "When cronjob was last scheduled in unix epoch time"
            },
            "k8s.cronjob.failed_jobs_history_limit": {
              "type": "long",
              "enum": [],
              "description": "The number of failed finished jobs to retain."
            },
            "k8s.cronjob.schedule": {
              "type": "string",
              "enum": [],
              "description": "Configured schedule of the CronJob"
            }
          }
        },
        "parentType": "k8s:workload",
        "associationTypes": {
          "common:consists_of": [
            "k8s:managed_job"
          ],
          "common:has": [
            "k8s:pod"
          ]
        }
      },
      {
        "name": "daemonset",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "DaemonSet",
        "metricTypes": [
          "k8s:replicas.desired",
          "k8s:replicas.ready",
          "k8s:replicas.available",
          "k8s:replicas.unavailable",
          "k8s:replicas.scheduled",
          "k8s:replicas.misscheduled"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "k8s:workload",
        "associationTypes": {}
      },
      {
        "name": "deployment",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Deployment",
        "metricTypes": [
          "k8s:replicas.desired",
          "k8s:replicas.ready",
          "k8s:replicas.updated",
          "k8s:replicas.available",
          "k8s:replicas.unavailable"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "k8s.deployment.available": {
              "type": "string",
              "enum": [],
              "description": "Denotes whether minimum replicas are up and running"
            },
            "k8s.deployment.paused": {
              "type": "boolean",
              "enum": [],
              "description": "Denotes whether deployment is paused or not"
            },
            "k8s.deployment.replica_failure": {
              "type": "string",
              "enum": [],
              "description": "Denotes whether one of its pod failed to be created or deleted"
            },
            "k8s.deployment.progressing": {
              "type": "string",
              "enum": [],
              "description": "Denotes whether deployment rollout is progressing or not"
            }
          }
        },
        "parentType": "k8s:workload",
        "associationTypes": {
          "common:consists_of": [
            "k8s:managed_replicaset"
          ],
          "common:has": [
            "k8s:pod"
          ]
        }
      },
      {
        "name": "ingress",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Ingress",
        "metricTypes": [
          "k8s:http.server.duration",
          "k8s:http.server.active_requests",
          "k8s:http.server.2xx.requests",
          "k8s:http.server.3xx.requests",
          "k8s:http.server.4xx.requests",
          "k8s:http.server.5xx.requests",
          "k8s:http.server.500.requests",
          "k8s:http.server.501.requests",
          "k8s:http.server.502.requests",
          "k8s:http.server.503.requests",
          "k8s:http.server.504.requests"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "k8s.ingress.name",
            "load_balancer.dnsname",
            "load_balancer.ip"
          ],
          "attributes": {
            "load_balancer.dnsname": {
              "type": "string",
              "enum": [],
              "description": "DNS name of load balancer associated with the ingress"
            },
            "load_balancer.ip": {
              "type": "string",
              "enum": [],
              "description": "IP of the load balancer associated with the ingress"
            },
            "k8s.ingress_class.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the Ingress class"
            },
            "k8s.ingress.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the Ingress"
            },
            "k8s.ingress.controller.type": {
              "type": "string",
              "enum": [],
              "description": "Type of the ingress controller linked to ingress"
            }
          }
        },
        "parentType": "k8s:namespaced_object",
        "associationTypes": {
          "common:uses": [
            "cloud:load_balancer"
          ],
          "common:relates_to": [
            "k8s:service"
          ]
        }
      },
      {
        "name": "job",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Job",
        "metricTypes": [
          "k8s:jobs.active",
          "k8s:jobs.failed",
          "k8s:jobs.succeeded",
          "k8s:job.completed"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {
            "k8s.job.start_time": {
              "type": "long",
              "enum": [],
              "description": "When the job was started in unix epoch time"
            },
            "k8s.job.completion_time": {
              "type": "long",
              "enum": [],
              "description": "When the job was completed in unix epoch time"
            }
          }
        },
        "parentType": "k8s:workload",
        "associationTypes": {}
      },
      {
        "name": "managed_job",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Managed Job",
        "description": "Jobs created by a cronjob",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "k8s:job",
        "associationTypes": {}
      },
      {
        "name": "managed_replicaset",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Managed ReplicaSet",
        "description": "ReplicaSets created by a deployment",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "k8s:replicaset",
        "associationTypes": {}
      },
      {
        "name": "namespace",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Namespace",
        "metricTypes": [
          "k8s:cpu.usage",
          "k8s:cpu.limits",
          "k8s:cpu.requests",
          "k8s:memory.usage",
          "k8s:memory.limits",
          "k8s:memory.requests",
          "k8s:storage.limits",
          "k8s:storage.requests",
          "k8s:resource_quota.cpu.requests",
          "k8s:resource_quota.cpu.requests.usage",
          "k8s:resource_quota.cpu.limits",
          "k8s:resource_quota.cpu.limits.usage",
          "k8s:resource_quota.memory.requests",
          "k8s:resource_quota.memory.requests.usage",
          "k8s:resource_quota.memory.limits",
          "k8s:resource_quota.memory.limits.usage",
          "k8s:resource_quota.pvc.requests",
          "k8s:resource_quota.pvc.requests.usage",
          "k8s:resource_quota.storage.requests",
          "k8s:resource_quota.storage.requests.usage",
          "k8s:pods.running",
          "k8s:pods.pending",
          "k8s:pods.failed",
          "k8s:pods.succeeded",
          "k8s:pods.unknown",
          "k8s:cpu.limits.usage",
          "k8s:cpu.requests.usage",
          "k8s:memory.limits.usage",
          "k8s:memory.requests.usage"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "k8s:namespaced_object",
        "associationTypes": {
          "common:consists_of": [
            "k8s:workload",
            "k8s:service",
            "k8s:ingress",
            "k8s:pvc",
            "k8s:resource_quota"
          ],
          "common:has": [
            "k8s:pod"
          ]
        }
      },
      {
        "name": "namespaced_object",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Namespaced Object",
        "description": "Base entity type for all the entities in a namespace",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "k8s.namespace.name"
          ],
          "attributes": {
            "k8s.namespace.name": {
              "type": "string",
              "enum": [],
              "description": "Name of namespace"
            }
          }
        },
        "parentType": "k8s:object",
        "associationTypes": {}
      },
      {
        "name": "node",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Node",
        "metricTypes": [
          "k8s:cpu.allocatable",
          "k8s:memory.allocatable",
          "k8s:storage.allocatable",
          "k8s:pods.allocatable",
          "k8s:memory.pressure",
          "k8s:disk.pressure",
          "k8s:pid.pressure",
          "k8s:network.unavailable",
          "k8s:kube.ready"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "k8s.node.name",
            "host.id",
            "internal.host.correlation.id"
          ],
          "attributes": {
            "k8s.node.schedulable": {
              "type": "boolean",
              "enum": [],
              "description": "Whether the node is schedulable or not"
            },
            "k8s.node.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the node"
            },
            "k8s.node.role": {
              "type": "string",
              "enum": [],
              "description": "Assigned role of the node - master or worker"
            },
            "k8s.node.internal_ip": {
              "type": "string",
              "enum": [],
              "description": "Internal IP of the node"
            },
            "k8s.kubelet.version": {
              "type": "string",
              "enum": [],
              "description": "Kubelet version"
            },
            "k8s.node.created_at": {
              "type": "long",
              "enum": [],
              "description": "When the node was created in unix epoch time"
            },
            "k8s.kubeproxy.version": {
              "type": "string",
              "enum": [],
              "description": "Kubeproxy version"
            },
            "k8s.node.container.runtime": {
              "type": "string",
              "enum": [],
              "description": "Container runtime running on the node"
            },
            "internal.host.correlation.id": {
              "type": "string",
              "enum": [],
              "description": "Correlation ID for association with host"
            },
            "host.id": {
              "type": "string",
              "enum": [],
              "description": "Instance id of the machine"
            }
          }
        },
        "parentType": "k8s:object",
        "associationTypes": {
          "common:is_a": [
            "infra:host"
          ],
          "common:has": [
            "k8s:pod"
          ]
        }
      },
      {
        "name": "object",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Kubernetes Object",
        "description": "Base entity type for all the entities in the cluster",
        "eventTypes": [
          "k8s:native_event"
        ],
        "metricTypes": [
          "k8s:native_events"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "k8s.cluster.name",
            "k8s.object.uid"
          ],
          "optimized": [
            "k8s.cluster.name",
            "k8s.object.uid"
          ],
          "attributes": {
            "k8s.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the kubernetes cluster"
            },
            "k8s.object.uid": {
              "type": "string",
              "enum": [],
              "description": "Kubernetes generated UID string to uniquely identify k8s objects in space and time"
            }
          }
        },
        "associationTypes": {}
      },
      {
        "name": "pod",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Pod",
        "metricTypes": [
          "k8s:cpu.usage",
          "k8s:cpu.limits",
          "k8s:cpu.requests",
          "k8s:cpu.throttled_count",
          "k8s:memory.usage",
          "k8s:memory.limits",
          "k8s:memory.requests",
          "k8s:pods.running",
          "k8s:pods.pending",
          "k8s:pods.failed",
          "k8s:pods.succeeded",
          "k8s:pods.unknown",
          "k8s:pod.restarts"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "k8s.pod.name",
            "k8s.workload.name",
            "k8s.workload.kind",
            "k8s.deployment.name",
            "k8s.cronjob.name",
            "internal.container.encapsulating_object_id"
          ],
          "attributes": {
            "k8s.pod.has_liveness_probe": {
              "type": "boolean",
              "enum": [],
              "description": "Whether pod has liveness probe defined or not"
            },
            "k8s.pod.ip": {
              "type": "string",
              "enum": [],
              "description": "IP address of the pod"
            },
            "k8s.pod.resources.requests.memory": {
              "type": "double",
              "enum": [],
              "description": "Total memory requests in MB of the pod"
            },
            "k8s.cronjob.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the cronjob which created the pod"
            },
            "k8s.pod.has_readiness_probe": {
              "type": "boolean",
              "enum": [],
              "description": "Whether pod has readiness probe defined or not"
            },
            "k8s.node.internal_ip": {
              "type": "string",
              "enum": [],
              "description": "Internal IP of the node"
            },
            "k8s.pod.privileged": {
              "type": "boolean",
              "enum": [],
              "description": "Whether pod is privileged or not"
            },
            "k8s.workload.kind": {
              "type": "string",
              "enum": [],
              "description": "Kind of the pod's owner workload. This can be one of 'ReplicaSet', 'StatefulSet', 'DaemonSet' and 'Job'"
            },
            "k8s.pod.status": {
              "type": "string",
              "enum": [],
              "description": "Pod's phase"
            },
            "k8s.node.name": {
              "type": "string",
              "enum": [],
              "description": "Node on which the pod is running"
            },
            "k8s.workload.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the pod's owner workload"
            },
            "k8s.pod.resources.limits.cpu": {
              "type": "double",
              "enum": [],
              "description": "Total cpu limits in cores of the pod"
            },
            "k8s.pod.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the pod"
            },
            "k8s.deployment.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the deployment which created the pod"
            },
            "k8s.pod.resources.requests.cpu": {
              "type": "double",
              "enum": [],
              "description": "Total cpu requests in cores of the pod"
            },
            "internal.container.encapsulating_object_id": {
              "type": "string",
              "enum": [],
              "description": "Correlation ID for association with container"
            },
            "k8s.pod.resources.limits.memory": {
              "type": "double",
              "enum": [],
              "description": "Total memory limits in MB of the pod"
            }
          }
        },
        "parentType": "k8s:namespaced_object",
        "associationTypes": {
          "common:consists_of": [
            "infra:container"
          ],
          "common:relates_to": [
            "k8s:pvc"
          ]
        }
      },
      {
        "name": "pv",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Persistent Volume",
        "metricTypes": [
          "k8s:storage.limits"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "k8s.pv.name",
            "k8s.pv.volume.source",
            "k8s.pv.volume.id"
          ],
          "attributes": {
            "k8s.pv.volume.id": {
              "type": "string",
              "enum": [],
              "description": "Unique identifier of the volume"
            },
            "k8s.pv.phase": {
              "type": "string",
              "enum": [],
              "description": "Current phase of the persistent volume"
            },
            "k8s.pv.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the persistent volume"
            },
            "k8s.pv.volume.source": {
              "type": "string",
              "enum": [],
              "description": "Provider of the volume"
            },
            "k8s.csi_driver.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the CSI Driver"
            },
            "k8s.storage_class.name": {
              "type": "string",
              "enum": [],
              "description": "Storage class of the persistent volume"
            }
          }
        },
        "parentType": "k8s:object",
        "associationTypes": {
          "common:is_a": [
            "cloud:disk"
          ]
        }
      },
      {
        "name": "pvc",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Persistent Volume Claim",
        "metricTypes": [
          "k8s:storage.limits",
          "k8s:storage.requests"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "k8s.pvc.name",
            "k8s.pv.name"
          ],
          "attributes": {
            "k8s.pv.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the associated pv"
            },
            "k8s.storage_class.name": {
              "type": "string",
              "enum": [],
              "description": "Storage class of PVC"
            },
            "k8s.pvc.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the pvc"
            },
            "k8s.pvc.phase": {
              "type": "string",
              "enum": [],
              "description": "Current phase of pvc"
            }
          }
        },
        "parentType": "k8s:namespaced_object",
        "associationTypes": {
          "common:is_a": [
            "k8s:pv"
          ]
        }
      },
      {
        "name": "replicaset",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "ReplicaSet",
        "metricTypes": [
          "k8s:replicas.ready",
          "k8s:replicas.desired"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "k8s:workload",
        "associationTypes": {}
      },
      {
        "name": "resource_quota",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "ResourceQuota",
        "metricTypes": [
          "k8s:resource_quota.cpu.requests",
          "k8s:resource_quota.cpu.requests.usage",
          "k8s:resource_quota.cpu.limits",
          "k8s:resource_quota.cpu.limits.usage",
          "k8s:resource_quota.memory.requests",
          "k8s:resource_quota.memory.requests.usage",
          "k8s:resource_quota.memory.limits",
          "k8s:resource_quota.memory.limits.usage",
          "k8s:resource_quota.storage.requests",
          "k8s:resource_quota.storage.requests.usage",
          "k8s:resource_quota.pvc.requests",
          "k8s:resource_quota.pvc.requests.usage"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "k8s.resource_quota.name"
          ],
          "attributes": {
            "k8s.resource_quota.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the ResourceQuota"
            }
          }
        },
        "parentType": "k8s:namespaced_object"
      },
      {
        "name": "service",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "K8s Service",
        "metricTypes": [
          "k8s:http.server.duration",
          "k8s:http.server.active_requests",
          "k8s:http.server.2xx.requests",
          "k8s:http.server.3xx.requests",
          "k8s:http.server.4xx.requests",
          "k8s:http.server.5xx.requests",
          "k8s:http.server.500.requests",
          "k8s:http.server.501.requests",
          "k8s:http.server.502.requests",
          "k8s:http.server.503.requests",
          "k8s:http.server.504.requests"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "k8s.service.name",
            "load_balancer.ip",
            "load_balancer.dnsname"
          ],
          "attributes": {
            "load_balancer.dnsname": {
              "type": "string",
              "enum": [],
              "description": "DNS name of the load balancer"
            },
            "load_balancer.ip": {
              "type": "string",
              "enum": [],
              "description": "IP of the load balancer"
            },
            "k8s.service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service"
            },
            "k8s.service.session_affinity": {
              "type": "string",
              "enum": [],
              "description": "Session affinity of the service"
            },
            "k8s.service.cluster_ip": {
              "type": "string",
              "enum": [],
              "description": "Cluster IP of the service"
            },
            "k8s.service.type": {
              "type": "string",
              "enum": [],
              "description": "Service type specified for the service"
            }
          }
        },
        "parentType": "k8s:namespaced_object",
        "associationTypes": {
          "common:is_a": [
            "cloud:load_balancer"
          ],
          "common:relates_to": [
            "k8s:pod"
          ]
        }
      },
      {
        "name": "statefulset",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "StatefulSet",
        "metricTypes": [
          "k8s:replicas.desired",
          "k8s:replicas.ready",
          "k8s:replicas.updated",
          "k8s:replicas.current"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "k8s:workload",
        "associationTypes": {}
      },
      {
        "name": "unmanaged_job",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Unmanaged Job",
        "description": "Jobs not created by a cronjob",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "k8s:job",
        "associationTypes": {}
      },
      {
        "name": "unmanaged_replicaset",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Unmanaged ReplicaSet",
        "description": "ReplicaSets not created by a deployment",
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [],
          "attributes": {}
        },
        "parentType": "k8s:replicaset",
        "associationTypes": {}
      },
      {
        "name": "workload",
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Workload",
        "metricTypes": [
          "k8s:cpu.usage",
          "k8s:cpu.limits",
          "k8s:cpu.requests",
          "k8s:memory.usage",
          "k8s:memory.limits",
          "k8s:memory.requests",
          "k8s:pods.running",
          "k8s:pods.pending",
          "k8s:pods.failed",
          "k8s:pods.succeeded",
          "k8s:pods.unknown",
          "k8s:cpu.limits.usage",
          "k8s:cpu.requests.usage",
          "k8s:memory.limits.usage",
          "k8s:memory.requests.usage"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [],
          "optimized": [
            "k8s.workload.name",
            "k8s.workload.kind",
            "k8s.workload.owner.name"
          ],
          "attributes": {
            "k8s.workload.resources.limits.memory": {
              "type": "double",
              "enum": [],
              "description": "Total memory limits in MB of the pods in the workload"
            },
            "k8s.workload.owner.name": {
              "type": "string",
              "enum": [],
              "description": "Owner name of workload if exists. Applicable to workloads of type job and replicaset"
            },
            "k8s.workload.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the workload"
            },
            "k8s.workload.resources.requests.cpu": {
              "type": "double",
              "enum": [],
              "description": "Total cpu requests in cores of the pods in the workload"
            },
            "k8s.workload.kind": {
              "type": "string",
              "enum": [],
              "description": "Type of the workload"
            },
            "k8s.workload.resources.requests.memory": {
              "type": "double",
              "enum": [],
              "description": "Total memory requests in MB of the pods in the workload"
            },
            "k8s.workload.resources.limits.cpu": {
              "type": "double",
              "enum": [],
              "description": "Total cpu limits in cores of the pods in the workload"
            }
          }
        },
        "parentType": "k8s:namespaced_object",
        "associationTypes": {
          "common:consists_of": [
            "k8s:pod"
          ]
        }
      },
      {
        "name": "broker",
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Broker",
        "metricTypes": [
          "kafka:kafka_server_kafkaserver_total_brokerstate_value",
          "kafka:kafka_server_replicamanager_total_underreplicatedpartitions_value",
          "kafka:kafka_server_replicamanager_total_isrshrinkspersec_count",
          "kafka:kafka_server_replicamanager_total_isrexpandspersec_count",
          "kafka:kafka_controller_kafkacontroller_activecontrollercount_value",
          "kafka:kafka_controller_kafkacontroller_offlinepartitionscount_value",
          "kafka:kafka_controller_controllerstats_leaderelectionrateandtimems_count",
          "kafka:kafka_controller_controllerstats_uncleanleaderelectionspersec_count",
          "kafka:kafka_server_delayedoperationpurgatory_purgatorysize_produce_value",
          "kafka:kafka_server_delayedoperationpurgatory_purgatorysize_fetch_value",
          "kafka:kafka_server_brokertopicmetrics_bytesinpersec_count",
          "kafka:kafka_server_brokertopicmetrics_bytesoutpersec_count",
          "kafka:kafka_server_brokertopicmetrics_total_bytesoutpersec_count",
          "kafka:kafka_server_brokertopicmetrics_total_bytesinpersec_count",
          "kafka:kafka_server_brokertopicmetrics_messagesinpersec_count",
          "kafka:kafka_server_brokertopicmetrics_total_messagesinpersec_count",
          "kafka:kafka_network_requestmetrics_requestspersec_count",
          "kafka:kafka_server_brokertopicmetrics_totalproducerequestspersec_count",
          "kafka:kafka_server_brokertopicmetrics_totalfetchrequestspersec_count",
          "kafka:kafka_server_brokertopicmetrics_failedproducerequestspersec_count",
          "kafka:kafka_server_brokertopicmetrics_failedfetchrequestspersec_count",
          "kafka:kafka_server_replicamanager_total_partitioncount_value",
          "kafka:kafka_server_replicamanager_total_leadercount_value",
          "kafka:kafka_network_requestmetrics_totaltimems_produce_count",
          "kafka:kafka_network_requestmetrics_totaltimems_fetchconsumer_count",
          "kafka:kafka_network_requestmetrics_totaltimems_fetchfollower_count",
          "kafka:kafka_log_log_size",
          "kafka:kafka_log_logflushstats_logflushrateandtimems_count",
          "kafka:java_lang_memory_heapmemoryusage_committed",
          "kafka:java_lang_memory_heapmemoryusage_used",
          "kafka:java_lang_threading_daemonthreadcount",
          "kafka:java_lang_threading_threadcount",
          "kafka:java_lang_operatingsystem_openfiledescriptorcount",
          "kafka:java_lang_operatingsystem_maxfiledescriptorcount",
          "kafka:kafka_server_zookeepersyncconnectspersec",
          "kafka:kafka_server_zookeeperexpirespersec",
          "kafka:kafka_server_zookeeperreadonlyconnectspersec",
          "kafka:kafka_server_zookeeperdisconnectspersec"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "service.instance.id",
            "kafka.cluster.name",
            "prometheus.exporter_type",
            "k8s.cluster.name"
          ],
          "optimized": [
            "service.instance.id",
            "kafka.cluster.name",
            "prometheus.exporter_type",
            "k8s.cluster.name",
            "k8s.pod.uid"
          ],
          "attributes": {
            "net.host.name": {
              "type": "string",
              "enum": [],
              "description": "Ip address of host"
            },
            "k8s.container.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the container"
            },
            "k8s.namespace.name": {
              "type": "string",
              "enum": [],
              "description": "Name of namespace"
            },
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service"
            },
            "k8s.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the kubernetes cluster."
            },
            "k8s.pod.uid": {
              "type": "string",
              "enum": [],
              "description": "Id of the pod"
            },
            "k8s.statefulset.name": {
              "type": "string",
              "enum": [],
              "description": "Name of statefulset"
            },
            "prometheus.exporter_type": {
              "type": "string",
              "enum": [],
              "description": "Prometheus Exporter type identifier."
            },
            "k8s.node.name": {
              "type": "string",
              "enum": [],
              "description": "Node on which the pod is running"
            },
            "k8s.pod.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the pod"
            },
            "service.instance.id": {
              "type": "string",
              "enum": [],
              "description": "Id of the service instance"
            },
            "net.host.port": {
              "type": "string",
              "enum": [],
              "description": "Port number exposed by the service"
            },
            "kafka.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Unique Kafka Cluster name in the Kubernetes cluster."
            }
          }
        },
        "associationTypes": {
          "common:is_a": [
            "k8s:pod"
          ]
        }
      },
      {
        "name": "cluster",
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Cluster",
        "metricTypes": [
          "kafka:kafka_brokers",
          "kafka:kafka_cluster_messagesinpersec_count",
          "kafka:kafka_cluster_bytesinpersec_count",
          "kafka:kafka_cluster_bytesoutpersec_count"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "kafka.cluster.name",
            "prometheus.exporter_type",
            "k8s.cluster.name"
          ],
          "optimized": [
            "kafka.cluster.name",
            "prometheus.exporter_type",
            "k8s.cluster.name"
          ],
          "attributes": {
            "net.host.name": {
              "type": "string",
              "enum": [],
              "description": "Ip address of host"
            },
            "k8s.container.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the container"
            },
            "k8s.namespace.name": {
              "type": "string",
              "enum": [],
              "description": "Name of namespace"
            },
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service"
            },
            "k8s.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the kubernetes cluster"
            },
            "k8s.pod.uid": {
              "type": "string",
              "enum": [],
              "description": "Id of the pod"
            },
            "prometheus.exporter_type": {
              "type": "string",
              "enum": [],
              "description": "Prometheus Exporter type identifier"
            },
            "k8s.replicaset.uid": {
              "type": "string",
              "enum": [],
              "description": "Id of the replicaset"
            },
            "k8s.node.name": {
              "type": "string",
              "enum": [],
              "description": "Node on which the pod is running"
            },
            "k8s.pod.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the pod"
            },
            "service.instance.id": {
              "type": "string",
              "enum": [],
              "description": "Id of the service instance"
            },
            "net.host.port": {
              "type": "string",
              "enum": [],
              "description": "Port number exposed by the service"
            },
            "kafka.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Unique Kafka Cluster name in the Kubernetes cluster."
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "kafka:broker",
            "kafka:topic"
          ]
        }
      },
      {
        "name": "consumergroup",
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "kind": "entity",
        "displayName": "ConsumerGroup",
        "metricTypes": [
          "kafka:kafka_consumergroup_current_offset_sum",
          "kafka:kafka_consumergroup_lag_sum",
          "kafka:kafka_consumergroup_members"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "kafka.consumergroup",
            "kafka.cluster.name",
            "prometheus.exporter_type",
            "k8s.cluster.name"
          ],
          "optimized": [
            "kafka.consumergroup",
            "kafka.topic",
            "kafka.cluster.name",
            "prometheus.exporter_type",
            "k8s.cluster.name"
          ],
          "attributes": {
            "net.host.name": {
              "type": "string",
              "enum": [],
              "description": "Ip address of host"
            },
            "k8s.container.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the container"
            },
            "k8s.namespace.name": {
              "type": "string",
              "enum": [],
              "description": "Name of namespace"
            },
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service"
            },
            "k8s.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the kubernetes cluster."
            },
            "k8s.pod.uid": {
              "type": "string",
              "enum": [],
              "description": "Id of the pod"
            },
            "prometheus.exporter_type": {
              "type": "string",
              "enum": [],
              "description": "Prometheus Exporter type identifier."
            },
            "k8s.replicaset.uid": {
              "type": "string",
              "enum": [],
              "description": "Id of the replicaset"
            },
            "k8s.node.name": {
              "type": "string",
              "enum": [],
              "description": "Node on which the pod is running"
            },
            "k8s.pod.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the pod"
            },
            "service.instance.id": {
              "type": "string",
              "enum": [],
              "description": "Id of the service instance"
            },
            "net.host.port": {
              "type": "string",
              "enum": [],
              "description": "Port number exposed by the service"
            },
            "kafka.topic": {
              "type": "string",
              "enum": [],
              "description": "Name of the Topic."
            },
            "kafka.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Unique Kafka Cluster name in the Kubernetes cluster."
            },
            "kafka.consumergroup": {
              "type": "string",
              "enum": [],
              "description": "Name of the Consumer Group."
            }
          }
        }
      },
      {
        "name": "topic",
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Topic",
        "metricTypes": [
          "kafka:kafka_topic_partition_replicas",
          "kafka:kafka_topic_partition_under_replicated_partition",
          "kafka:kafka_topic_partitions"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "kafka.topic",
            "kafka.cluster.name",
            "prometheus.exporter_type",
            "k8s.cluster.name"
          ],
          "optimized": [
            "kafka.topic",
            "kafka.cluster.name",
            "prometheus.exporter_type",
            "k8s.cluster.name"
          ],
          "attributes": {
            "net.host.name": {
              "type": "string",
              "enum": [],
              "description": "Ip address of host"
            },
            "k8s.container.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the container"
            },
            "k8s.namespace.name": {
              "type": "string",
              "enum": [],
              "description": "Name of namespace"
            },
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service"
            },
            "k8s.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the kubernetes cluster."
            },
            "k8s.pod.uid": {
              "type": "string",
              "enum": [],
              "description": "Id of the pod"
            },
            "prometheus.exporter_type": {
              "type": "string",
              "enum": [],
              "description": "Prometheus Exporter type identifier."
            },
            "k8s.replicaset.uid": {
              "type": "string",
              "enum": [],
              "description": "Id of the replicaset"
            },
            "k8s.node.name": {
              "type": "string",
              "enum": [],
              "description": "Node on which the pod is running"
            },
            "k8s.pod.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the pod"
            },
            "service.instance.id": {
              "type": "string",
              "enum": [],
              "description": "Id of the service instance"
            },
            "net.host.port": {
              "type": "string",
              "enum": [],
              "description": "Port number exposed by the service"
            },
            "kafka.topic": {
              "type": "string",
              "enum": [],
              "description": "Name of the Topic."
            },
            "kafka.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Unique Kafka Cluster name in the Kubernetes cluster."
            }
          }
        },
        "associationTypes": {
          "common:has": [
            "kafka:consumergroup"
          ]
        }
      },
      {
        "name": "instance",
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Instance",
        "metricTypes": [
          "redis:redis_blocked_clients",
          "redis:redis_commands_duration_seconds_total",
          "redis:redis_commands_processed_total",
          "redis:redis_commands_total",
          "redis:redis_config_maxclients",
          "redis:redis_connected_clients",
          "redis:redis_connected_slaves",
          "redis:redis_connected_slave_lag_seconds",
          "redis:redis_connected_slave_offset_bytes",
          "redis:redis_connections_received_total",
          "redis:redis_cpu_sys_children_seconds_total",
          "redis:redis_cpu_sys_seconds_total",
          "redis:redis_cpu_user_children_seconds_total",
          "redis:redis_cpu_user_seconds_total",
          "redis:redis_db_avg_ttl_seconds",
          "redis:redis_db_keys",
          "redis:redis_db_keys_expiring",
          "redis:redis_evicted_keys_total",
          "redis:redis_expired_keys_total",
          "redis:redis_instance_info",
          "redis:redis_keyspace_hits_total",
          "redis:redis_keyspace_misses_total",
          "redis:redis_master_last_io_seconds_ago",
          "redis:redis_master_link_up",
          "redis:redis_master_sync_in_progress",
          "redis:redis_mem_fragmentation_ratio",
          "redis:redis_memory_max_bytes",
          "redis:redis_memory_used_bytes",
          "redis:redis_memory_used_dataset_bytes",
          "redis:redis_memory_used_lua_bytes",
          "redis:redis_memory_used_overhead_bytes",
          "redis:redis_memory_used_scripts_bytes",
          "redis:redis_net_input_bytes_total",
          "redis:redis_net_output_bytes_total",
          "redis:redis_pubsub_channels",
          "redis:redis_pubsub_patterns",
          "redis:redis_rdb_changes_since_last_save",
          "redis:redis_rdb_last_save_timestamp_seconds",
          "redis:redis_rejected_connections_total",
          "redis:redis_slave_info",
          "redis:redis_slowlog_length",
          "redis:redis_up",
          "redis:redis_uptime_in_seconds"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 525600
        },
        "attributeDefinitions": {
          "required": [
            "k8s.cluster.name",
            "prometheus.exporter_type",
            "service.instance.id"
          ],
          "optimized": [
            "k8s.cluster.name",
            "k8s.pod.uid",
            "prometheus.exporter_type",
            "service.instance.id"
          ],
          "attributes": {
            "net.host.name": {
              "type": "string",
              "enum": [],
              "description": "IP address of host"
            },
            "k8s.container.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the container"
            },
            "k8s.namespace.name": {
              "type": "string",
              "enum": [],
              "description": "Name of namespace"
            },
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the service"
            },
            "k8s.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the kubernetes cluster"
            },
            "redis.mode": {
              "type": "string",
              "enum": [],
              "description": "Mode of the Redis instance ('standalone', 'sentinel', or 'cluster')"
            },
            "k8s.pod.uid": {
              "type": "string",
              "enum": [],
              "description": "UID of the pod"
            },
            "redis.version": {
              "type": "string",
              "enum": [],
              "description": "Version of the Redis instance"
            },
            "k8s.statefulset.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the StatefulSet"
            },
            "prometheus.exporter_type": {
              "type": "string",
              "enum": [],
              "description": "Prometheus Exporter type identifier"
            },
            "k8s.node.name": {
              "type": "string",
              "enum": [],
              "description": "Node on which the pod is running"
            },
            "k8s.pod.name": {
              "type": "string",
              "enum": [],
              "description": "Name of the pod"
            },
            "service.instance.id": {
              "type": "string",
              "enum": [],
              "description": "Id of the service instance"
            },
            "net.host.port": {
              "type": "string",
              "enum": [],
              "description": "Port number exposed by the service"
            },
            "redis.role": {
              "type": "string",
              "enum": [],
              "description": "Role of the Redis instance"
            }
          }
        },
        "associationTypes": {
          "common:is_a": [
            "k8s:pod"
          ]
        }
      },
      {
        "name": "otel_collector",
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "kind": "entity",
        "displayName": "OTEL Collector",
        "metricTypes": [
          "self_telemetry:otelcol_exporter_send_failed_requests",
          "self_telemetry:otelcol_exporter_send_failed_metric_points",
          "self_telemetry:otelcol_exporter_send_failed_spans",
          "self_telemetry:otelcol_exporter_sent_metric_points",
          "self_telemetry:otelcol_exporter_sent_spans",
          "self_telemetry:otelcol_exporter_sent_log_records",
          "self_telemetry:otelcol_exporter_send_failed_log_records",
          "self_telemetry:otelcol_exporter_enqueue_failed_spans",
          "self_telemetry:otelcol_exporter_enqueue_failed_metric_points",
          "self_telemetry:otelcol_exporter_enqueue_failed_log_records",
          "self_telemetry:otelcol_process_uptime",
          "self_telemetry:otelcol_processor_accepted_spans",
          "self_telemetry:otelcol_processor_refused_spans",
          "self_telemetry:otelcol_processor_dropped_spans",
          "self_telemetry:otelcol_processor_accepted_metric_points",
          "self_telemetry:otelcol_processor_refused_metric_points",
          "self_telemetry:otelcol_processor_dropped_metric_points",
          "self_telemetry:otelcol_processor_accepted_log_records",
          "self_telemetry:otelcol_processor_refused_log_records",
          "self_telemetry:otelcol_processor_dropped_log_records",
          "self_telemetry:otelcol_processor_batch_batch_size_trigger_send",
          "self_telemetry:otelcol_processor_batch_timeout_trigger_send",
          "self_telemetry:otelcol_receiver_accepted_metric_points",
          "self_telemetry:otelcol_receiver_refused_metric_points",
          "self_telemetry:otelcol_receiver_accepted_spans",
          "self_telemetry:otelcol_receiver_refused_spans",
          "self_telemetry:otelcol_receiver_accepted_log_records",
          "self_telemetry:otelcol_receiver_refused_log_records",
          "self_telemetry:otelcol_process_cpu_seconds",
          "self_telemetry:otelcol_process_runtime_total_alloc_bytes",
          "self_telemetry:ootelcol_exporter_queue_size",
          "self_telemetry:otelcol_process_memory_rss",
          "self_telemetry:otelcol_process_runtime_heap_alloc_bytes",
          "self_telemetry:otelcol_process_runtime_total_sys_memory_bytes"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 180,
          "purgeTtlInMinutes": 4200
        },
        "attributeDefinitions": {
          "required": [
            "service.namespace",
            "service.instance.id",
            "service.name"
          ],
          "optimized": [],
          "attributes": {
            "service.name": {
              "type": "string",
              "enum": [],
              "description": "Service Name for the running collector, by default it is the Prometheus job name that provides the collector self-telemetry metrics"
            },
            "service.version": {
              "type": "string",
              "enum": [],
              "description": "The version for the otel collector."
            },
            "service.instance.id": {
              "type": "string",
              "enum": [],
              "description": "Service instance id for the running collector, by default it is a random UUID generated when the collector starts."
            },
            "otel.collector.description": {
              "type": "string",
              "enum": [],
              "description": "Build description of the running Opentelemetry Collector"
            },
            "k8s.cluster.name": {
              "type": "string",
              "enum": [],
              "description": "Kubernetes Cluster Name which is the key to k8s.cluster entity"
            },
            "net.host.port": {
              "type": "string",
              "enum": [],
              "description": "Prometheus target host and port for the collector self-telemetry metrics,"
            },
            "k8s.pod.uid": {
              "type": "string",
              "enum": [],
              "description": "Kubernetes Pod uid which is the key to k8s.pod entity"
            },
            "http.scheme": {
              "type": "string",
              "enum": [],
              "description": "Http scheme used for scrapping Prometheus target that provides collector self-telemetry metrics."
            },
            "service.namespace": {
              "type": "string",
              "enum": [],
              "description": "Service Namespace for the collector, user can specify it. By default it is 'otelcol'."
            },
            "target": {
              "type": "string",
              "enum": [],
              "description": "Prometheus target for the collector self-telemetry metrics."
            },
            "telemetry.sdk.name": {
              "type": "string",
              "enum": [],
              "description": "The sdk used for instrumenting the otel collector."
            }
          }
        },
        "associationTypes": {
          "common:uses": [
            "k8s:pod",
            "apm:service_instance"
          ]
        }
      },
      {
        "name": "page",
        "namespace": {
          "name": "sum",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Page",
        "eventTypes": [
          "sum:page_details"
        ],
        "metricTypes": [
          "sum:average_vct_per_page"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 10080,
          "purgeTtlInMinutes": 4320
        },
        "attributeDefinitions": {
          "required": [
            "sum.page.title",
            "sum.schedule.id"
          ],
          "optimized": [
            "sum.page.title"
          ],
          "attributes": {
            "sum.page.title": {
              "type": "string",
              "enum": [],
              "description": "Page title"
            },
            "sum.page.url": {
              "type": "string",
              "enum": [],
              "description": "Page url"
            },
            "sum.schedule.id": {
              "type": "string",
              "enum": [],
              "description": "Synth schedule id"
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "sum:resource"
          ]
        }
      },
      {
        "name": "resource",
        "namespace": {
          "name": "sum",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Resource",
        "eventTypes": [
          "sum:resource_details"
        ],
        "metricTypes": [
          "sum:average_download_time_per_resource"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 10080,
          "purgeTtlInMinutes": 4320
        },
        "attributeDefinitions": {
          "required": [
            "sum.request.url",
            "sum.schedule.id",
            "sum.page.title"
          ],
          "optimized": [
            "sum.request.url"
          ],
          "attributes": {
            "sum.request.url": {
              "type": "string",
              "enum": [],
              "description": "resource request url"
            },
            "sum.page.title": {
              "type": "string",
              "enum": [],
              "description": "Page title"
            },
            "sum.page.url": {
              "type": "string",
              "enum": [],
              "description": "Page url"
            },
            "sum.schedule.id": {
              "type": "string",
              "enum": [],
              "description": "Synth schedule id"
            }
          }
        }
      },
      {
        "name": "schedule",
        "namespace": {
          "name": "sum",
          "version": 1
        },
        "kind": "entity",
        "displayName": "Schedule",
        "eventTypes": [
          "sum:session_details"
        ],
        "metricTypes": [
          "sum:average_duration_per_job"
        ],
        "lifecycleConfiguration": {
          "retentionTtlInMinutes": 43200,
          "purgeTtlInMinutes": 129600
        },
        "attributeDefinitions": {
          "required": [
            "sum.schedule.id"
          ],
          "optimized": [
            "sum.schedule.id"
          ],
          "attributes": {
            "sum.schedule.id": {
              "type": "string",
              "enum": [],
              "description": "Synth schedule id"
            }
          }
        },
        "associationTypes": {
          "common:consists_of": [
            "sum:page"
          ]
        }
      }
    ]
  },
  {
    "total": 511,
    "items": [
      {
        "namespace": {
          "name": "alerting",
          "version": 1
        },
        "name": "health.status",
        "kind": "metric",
        "displayName": "Alerting Health Status",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "calls_min",
        "kind": "metric",
        "displayName": "Calls Per Minute",
        "description": "Rate of calls to this entity in the last minute",
        "category": "rate",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{calls}/min"
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "errors_min",
        "kind": "metric",
        "displayName": "Errors Per Minute",
        "description": "Rate of calls with errors to this entity in the last minute",
        "category": "rate",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}/min"
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.classes.current_loaded",
        "kind": "metric",
        "displayName": "Classes Currently Loaded",
        "description": "Classes currently loaded in JVM.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": false,
        "type": "long",
        "unit": "{classes}"
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.classes.loaded",
        "kind": "metric",
        "displayName": "Classes Loaded",
        "description": "Number of classes loaded in lifetime of JVM",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "long",
        "unit": "{classes}"
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.classes.unloaded",
        "kind": "metric",
        "displayName": "Classes Unloaded",
        "description": "Number of classes unloaded in lifetime of JVM",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "long",
        "unit": "{classes}"
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.cpu.utilization",
        "kind": "metric",
        "displayName": "JVM CPU Utilization",
        "description": "The percentage of CPU used by the JVM.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "1"
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.memory.committed",
        "kind": "metric",
        "displayName": "Memory Committed",
        "description": "Bytes committed in a given JVM memory pool.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "attributeDefinitions": {
          "attributes": {
            "pool": {
              "type": "string",
              "description": "Memory pool"
            },
            "type": {
              "type": "string",
              "description": "heap vs non-heap"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.memory.init",
        "kind": "metric",
        "displayName": "Initial Memory",
        "description": "Bytes allocated for initialization in a given JVM memory pool.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "attributeDefinitions": {
          "attributes": {
            "pool": {
              "type": "string",
              "description": "Memory pool"
            },
            "type": {
              "type": "string",
              "description": "heap vs non-heap"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.memory.limit",
        "kind": "metric",
        "displayName": "Maximum Memory",
        "description": "Maximum bytes that can be allocated to a given JVM memory pool.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "attributeDefinitions": {
          "attributes": {
            "pool": {
              "type": "string",
              "description": "Memory pool"
            },
            "type": {
              "type": "string",
              "description": "heap vs non-heap"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.memory.usage",
        "kind": "metric",
        "displayName": "Memory Used",
        "description": "Bytes used in a given JVM memory area.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "attributeDefinitions": {
          "attributes": {
            "pool": {
              "type": "string",
              "description": "Memory pool"
            },
            "type": {
              "type": "string",
              "description": "heap vs non-heap"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.system.cpu.utilization",
        "kind": "metric",
        "displayName": "JVM System CPU Utilization",
        "description": "The percentage of CPU used by the system the JVM is running on.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "1"
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "process.runtime.jvm.threads.count",
        "kind": "metric",
        "displayName": "Number of threads in JVM",
        "description": "Thread currently executing in JVM by daemon.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": false,
        "type": "long",
        "unit": "{threads}",
        "attributeDefinitions": {
          "attributes": {
            "daemon": {
              "type": "string",
              "description": "Daemon name"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "response_time",
        "kind": "metric",
        "displayName": "Average Response Time",
        "description": "Average Response Time calculated from span duration for this entity",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ns"
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "runtime.jvm.gc.count",
        "kind": "metric",
        "displayName": "Garbage Collection Count",
        "description": "The number of collections that have occurred for a given JVM garbage collector.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "long",
        "unit": "{collections}",
        "attributeDefinitions": {
          "attributes": {
            "gc": {
              "type": "string",
              "description": "Garbage Collector strategy"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "apm",
          "version": 1
        },
        "name": "runtime.jvm.gc.time",
        "kind": "metric",
        "displayName": "Garbage Collection Time",
        "description": "Time spent in a given JVM garbage collector in milliseconds.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "long",
        "unit": "ms",
        "attributeDefinitions": {
          "attributes": {
            "gc": {
              "type": "string",
              "description": "Garbage Collector strategy"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "application_load_balancer.active.connections",
        "kind": "metric",
        "displayName": "Active Connection Count",
        "description": "The total number of concurrent TCP connections active from clients to the load balancer and from the load balancer to targets",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{connections}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "application_load_balancer.http.fixed_responses",
        "kind": "metric",
        "displayName": "Fixed HTTP Response Count",
        "description": "The number of fixed-response actions that were successful",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{responses}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "application_load_balancer.http.redirects",
        "kind": "metric",
        "displayName": "HTTP Redirect Count",
        "description": "The number of redirect actions that were successful",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{redirects}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "application_load_balancer.http.url_limit_exceeded.redirects",
        "kind": "metric",
        "displayName": "HTTP Redirect URL Limit Exceeded Count",
        "description": "The number of redirect actions that couldn't be completed because the URL in the response location header is larger than 8K",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{redirects}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "application_load_balancer.new.connections",
        "kind": "metric",
        "displayName": "New Connection Count",
        "description": "The total number of new TCP connections established from clients to the load balancer and from the load balancer to targets",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{connections}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "application_load_balancer.non_sticky.requests",
        "kind": "metric",
        "displayName": "Non Sticky Request Count",
        "description": "The number of requests where the load balancer chose a new target because it couldn't use an existing sticky session",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "application_load_balancer.rejected.connections",
        "kind": "metric",
        "displayName": "Rejected Connection Count",
        "description": "The number of connections that were rejected because the load balancer had reached its maximum number of connections",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{connections}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "application_load_balancer.rule_evaluations",
        "kind": "metric",
        "displayName": "Rule Evaluations",
        "description": "The number of rules processed by the load balancer",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{rules}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.active.transactions",
        "kind": "metric",
        "displayName": "Active Transactions",
        "description": "(Aurora MySQL) The average number of current transactions executing on an Aurora database instance per second. By default, Aurora doesn't enable this metric. To begin measuring this value, set innodb_monitor_enable='all' in the DB parameter group for a specific DB instance.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{transactions}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.blocked.transactions",
        "kind": "metric",
        "displayName": "Blocked Transactions",
        "description": "(Aurora MySQL) The average number of transactions in the database that are blocked per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{transactions}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.buffer_cache.hits",
        "kind": "metric",
        "displayName": "Buffer Cache Hit Ratio",
        "description": "The percentage of requests that are served by the buffer cache.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.commit.duration",
        "kind": "metric",
        "displayName": "Commit Latency",
        "description": "The average duration of commit operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.commit.operations_sec",
        "kind": "metric",
        "displayName": "Commit Throughput",
        "description": "The average number of commit operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.ddl.duration",
        "kind": "metric",
        "displayName": "DDL Latency",
        "description": "The average duration of DDL operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.ddl.operations_sec",
        "kind": "metric",
        "displayName": "DDL Throughput",
        "description": "The average number of DDL operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.deadlocks_sec",
        "kind": "metric",
        "displayName": "Deadlocks",
        "description": "The average number of deadlocks in the database per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{deadlocks}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.delete.duration",
        "kind": "metric",
        "displayName": "Delete Latency",
        "description": "The average duration of delete operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.delete.operations_sec",
        "kind": "metric",
        "displayName": "Delete Throughput",
        "description": "The average number of delete operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.dml.duration",
        "kind": "metric",
        "displayName": "DML Latency",
        "description": "The average duration of DML operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.dml.operations_sec",
        "kind": "metric",
        "displayName": "DML Throughput",
        "description": "The average number of DML operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.insert.duration",
        "kind": "metric",
        "displayName": "Insert Latency",
        "description": "The average duration of insert operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.insert.operations_sec",
        "kind": "metric",
        "displayName": "Insert Throughput",
        "description": "The average number of insert operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.network.io_sec",
        "kind": "metric",
        "displayName": "Network Throughput",
        "description": "The amount of network throughput both received from and transmitted to clients by each instance.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.select.duration",
        "kind": "metric",
        "displayName": "Select Latency",
        "description": "The average duration of select operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.select.operations_sec",
        "kind": "metric",
        "displayName": "Select Throughput",
        "description": "The average number of select operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.storage.read.io_sec",
        "kind": "metric",
        "displayName": "Volume Read IOPs",
        "description": "The number of billed read I/O operations from a cluster volume. Billed read operations are calculated at the cluster volume level, aggregated from all instances in the Aurora DB cluster.",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          300
        ]
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.storage.used.usage",
        "kind": "metric",
        "displayName": "Volume Bytes Used",
        "description": "The amount of storage used by your Aurora DB instance. This value affects the cost of the Aurora DB cluster.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.storage.write.io_sec",
        "kind": "metric",
        "displayName": "Volume Write IOPs",
        "description": "The number of billed write I/O operations from a cluster volume. Billed write operations are calculated at the cluster volume level, aggregated from all instances in the Aurora DB cluster.",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          300
        ]
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.update.duration",
        "kind": "metric",
        "displayName": "Update Latency",
        "description": "The average duration of update operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_cluster.update.operations_sec",
        "kind": "metric",
        "displayName": "Update Throughput",
        "description": "The average number of update operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.active.transactions",
        "kind": "metric",
        "displayName": "Active Transactions",
        "description": "(Aurora MySQL) The average number of current transactions executing on an Aurora database instance per second. By default, Aurora doesn't enable this metric. To begin measuring this value, set innodb_monitor_enable='all' in the DB parameter group for a specific DB instance.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{transactions}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.blocked.transactions",
        "kind": "metric",
        "displayName": "Blocked Transactions",
        "description": "(Aurora MySQL) The average number of transactions in the database that are blocked per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{transactions}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.buffer_cache.hits",
        "kind": "metric",
        "displayName": "Buffer Cache Hit Ratio",
        "description": "The percentage of requests that are served by the buffer cache.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.commit.duration",
        "kind": "metric",
        "displayName": "Commit Latency",
        "description": "The average duration of commit operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.commit.operations_sec",
        "kind": "metric",
        "displayName": "Commit Throughput",
        "description": "The average number of commit operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.ddl.duration",
        "kind": "metric",
        "displayName": "DDL Latency",
        "description": "The average duration of DDL operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.ddl.operations_sec",
        "kind": "metric",
        "displayName": "DDL Throughput",
        "description": "The average number of DDL operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.deadlocks_sec",
        "kind": "metric",
        "displayName": "Deadlocks",
        "description": "The average number of deadlocks in the database per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{deadlocks}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.delete.duration",
        "kind": "metric",
        "displayName": "Delete Latency",
        "description": "The average duration of delete operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.delete.operations_sec",
        "kind": "metric",
        "displayName": "Delete Throughput",
        "description": "The average number of delete operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.dml.duration",
        "kind": "metric",
        "displayName": "DML Latency",
        "description": "The average duration of DML operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.dml.operations_sec",
        "kind": "metric",
        "displayName": "DML Throughput",
        "description": "The average number of DML operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.insert.duration",
        "kind": "metric",
        "displayName": "Insert Latency",
        "description": "The average duration of insert operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.insert.operations_sec",
        "kind": "metric",
        "displayName": "Insert Throughput",
        "description": "The average number of insert operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.network.io_sec",
        "kind": "metric",
        "displayName": "Network Throughput",
        "description": "The amount of network throughput both received from and transmitted to clients by each instance.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.select.duration",
        "kind": "metric",
        "displayName": "Select Latency",
        "description": "The average duration of select operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.select.operations_sec",
        "kind": "metric",
        "displayName": "Select Throughput",
        "description": "The average number of select operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.update.duration",
        "kind": "metric",
        "displayName": "Update Latency",
        "description": "The average duration of update operations.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "aurora_instance.update.operations_sec",
        "kind": "metric",
        "displayName": "Update Throughput",
        "description": "The average number of update operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "classic_load_balancer.estimated_processed.bytes",
        "kind": "metric",
        "displayName": "Estimated Processed Bytes",
        "description": "The estimated number of bytes processed by an Application Load Balancer",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "classic_load_balancer.pending.requests",
        "kind": "metric",
        "displayName": "Surge Queue Length",
        "description": "The total number of requests (HTTP listener) or connections (TCP listener) that are pending routing to a healthy instance",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "classic_load_balancer.spillover.requests",
        "kind": "metric",
        "displayName": "Spillover Count",
        "description": "The total number of requests that were rejected because the surge queue is full",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "database_instance.lvm.read.operations_sec",
        "kind": "metric",
        "displayName": "LVM Read IOPS",
        "description": "The average number of LVM disk read I/O operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "database_instance.lvm.write.operations_sec",
        "kind": "metric",
        "displayName": "LVM Write IOPS",
        "description": "The average number of LVM disk write I/O operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "database_instance.sessions.active",
        "kind": "metric",
        "displayName": "DB Load",
        "description": "The number of active sessions for the DB engine. This metric is reported only if Performance Insights is enabled and this load on the database ",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{sessions}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "database_instance.sessions.cpu.active",
        "kind": "metric",
        "displayName": "DB Load CPU",
        "description": "The number of active sessions where the wait event type is CPU. This metric is reported only if Performance Insights is enabled and this load on the database ",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{sessions}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "database_instance.sessions.non_cpu.active",
        "kind": "metric",
        "displayName": "DB Load Non Cpu",
        "description": "The number of active sessions where the wait event type is not CPU. This metric is reported only if Performance Insights is enabled and this load on the database ",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{sessions}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.consumed.operations",
        "kind": "metric",
        "displayName": "Volume Consumed Read Write Ops",
        "description": "Used with Provisioned IOPS SSD volumes only. The total amount of read and write operations (normalized to 256K capacity units) consumed in a specified period of time.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.idle_time",
        "kind": "metric",
        "displayName": "Volume Ideal Time",
        "description": "The total number of seconds in a specified period of time when no read or write operations were submitted. This metric is not supported with Multi-Attach enabled volumes.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.io.utilization",
        "kind": "metric",
        "displayName": "Volume Throughput Percentage",
        "description": "Used with Provisioned IOPS SSD volumes only. The percentage of I/O operations per second (IOPS) delivered of the total IOPS provisioned for an Amazon EBS volume. This metric is not supported with Multi-Attach enabled volumes.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.pending.operations",
        "kind": "metric",
        "displayName": "Volume Queue Length",
        "description": "The number of read and write operation requests waiting to be completed in a specified period of time.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.read.io_sec",
        "kind": "metric",
        "displayName": "Volume Read Bytes",
        "description": "Bytes/sec read from disk.",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.read.operations_sec",
        "kind": "metric",
        "displayName": "Volume Read Operations",
        "description": "Number of read IOs performed on a disk.",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.read.operation_time",
        "kind": "metric",
        "displayName": "Volume Total Read Time",
        "description": "The total number of seconds spent by all read operations that completed in a specified period of time. This metric is not supported with Multi-Attach enabled volumes.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.write.io_sec",
        "kind": "metric",
        "displayName": "Volume Write Bytes",
        "description": "Bytes/sec written to disk.",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.write.operations_sec",
        "kind": "metric",
        "displayName": "Volume Write Operations",
        "description": "Number of write IOs performed on a disk.",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ebs.write.operation_time",
        "kind": "metric",
        "displayName": "Volume Total Write Time",
        "description": "The total number of seconds spent by all write operations that completed in a specified period of time. This metric is not supported with Multi-Attach enabled volumes.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "ec2.status_check.failure",
        "kind": "metric",
        "displayName": "Status Check Failed",
        "description": "Reports whether the instance has passed both the instance status check and the system status check in the last minute. This metric can be either 0 (passed) or 1 (failed).",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "1"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.backend.connection_errors",
        "kind": "metric",
        "displayName": "Backend/Target Connection Errors",
        "description": "The number of connections that were not successfully established between the load balancer and the registered instances or targets.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.backend.duration",
        "kind": "metric",
        "displayName": "Backend/Target Response Time",
        "description": "The total time elapsed from the time the load balancer sent the request to a registered instance or target until the instance or target started to send the response headers",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.backend.tls_negotiation_errors",
        "kind": "metric",
        "displayName": "Backend/Target TLS Negotiation Error Count",
        "description": "The number of TLS connections initiated by the load balancer that did not establish a session with the registered instance or target",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.client.tls_negotiation_errors",
        "kind": "metric",
        "displayName": "Client TLS Negotiation Error Count",
        "description": "The number of TLS connections initiated by the client that did not establish a session with the load balancer due to a TLS error",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.consumed_lcus",
        "kind": "metric",
        "displayName": "Consumed LCUs",
        "description": "The number of load balancer capacity units (LCU) used by the load balancer",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{lcus}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.healthy.hosts",
        "kind": "metric",
        "displayName": "Healthy Host Count",
        "description": "The number of targets that are considered healthy",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{hosts}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.3xx.requests",
        "kind": "metric",
        "displayName": "HTTP 3xx Count",
        "description": "Number of HTTP requests resulting in 3xx response code",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.4xx.requests",
        "kind": "metric",
        "displayName": "HTTP 4xx Count",
        "description": "Number of HTTP requests resulting in 4xx response code",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.500.requests",
        "kind": "metric",
        "displayName": "HTTP 500 Count",
        "description": "Number of HTTP requests resulting in 500 response code",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.502.requests",
        "kind": "metric",
        "displayName": "HTTP 502 Count",
        "description": "Number of HTTP requests resulting in 502 response code",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.503.requests",
        "kind": "metric",
        "displayName": "HTTP 503 Count",
        "description": "Number of HTTP requests resulting in 503 response code",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.504.requests",
        "kind": "metric",
        "displayName": "HTTP 504 Count",
        "description": "Number of HTTP requests resulting in 504 response code",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.5xx.requests",
        "kind": "metric",
        "displayName": "HTTP 5xx Count",
        "description": "Number of HTTP requests resulting in 5xx response code",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.backend.2xx.requests",
        "kind": "metric",
        "displayName": "HTTP Backend/Target 2xx Codes",
        "description": "The number of HTTP 2xx response codes generated by registered instances or targets.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.backend.3xx.requests",
        "kind": "metric",
        "displayName": "HTTP Backend/Target 3xx Codes",
        "description": "The number of HTTP 3xx response codes generated by registered instances or targets.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.backend.4xx.requests",
        "kind": "metric",
        "displayName": "HTTP Backend/Target 4xx Codes",
        "description": "The number of HTTP 4xx response codes generated by registered instances or targets.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.http.backend.5xx.requests",
        "kind": "metric",
        "displayName": "HTTP Backend/Target 5xx Codes",
        "description": "The number of HTTP 5xx response codes generated by registered instances or targets.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.processed.bytes",
        "kind": "metric",
        "displayName": "Processed Bytes",
        "description": "The total number of bytes processed by the load balancer over IPv4 and IPv6",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.requests",
        "kind": "metric",
        "displayName": "Request Count",
        "description": "The number of requests processed over IPv4 and IPv6",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "load_balancer.unhealthy.hosts",
        "kind": "metric",
        "displayName": "Unhealthy Host Count",
        "description": "The number of targets that are considered unhealthy",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{hosts}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "network_load_balancer.active_flows",
        "kind": "metric",
        "displayName": "Active Flow Count",
        "description": "The total number of concurrent flows (or connections) from clients to targets",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{flows}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "network_load_balancer.new_flows",
        "kind": "metric",
        "displayName": "New Flow Count",
        "description": "The total number of new flows (or connections) established from clients to targets in the time period",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{flows}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "network_load_balancer.tcp.active_flows",
        "kind": "metric",
        "displayName": "Active TCP Flow Count",
        "description": "The total number of concurrent TCP flows (or connections) from clients to targets",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{flows}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "network_load_balancer.tcp.backend.resets",
        "kind": "metric",
        "displayName": "TCP Backend/Target Reset Count",
        "description": "The total number of reset (RST) packets sent from a target or registered instance to a client",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "network_load_balancer.tcp.client.resets",
        "kind": "metric",
        "displayName": "TCP Client Reset Count",
        "description": "The total number of reset (RST) packets sent from a client to a target",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "network_load_balancer.tcp.elb.resets",
        "kind": "metric",
        "displayName": "TCP Reset Count",
        "description": "The total number of reset (RST) packets generated by the load balancer",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "network_load_balancer.tls.active_flows",
        "kind": "metric",
        "displayName": "Active TLS Flow Count",
        "description": "The total number of concurrent TLS flows (or connections) from clients to targets",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{flows}"
      },
      {
        "namespace": {
          "name": "aws",
          "version": 1
        },
        "name": "network_load_balancer.udp.active_flows",
        "kind": "metric",
        "displayName": "Active UDP Flow Count",
        "description": "The total number of concurrent UDP flows (or connections) from clients to targets",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{flows}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "database_instance.io.utilization",
        "kind": "metric",
        "displayName": "IO Utilization",
        "description": "The percent of io in use.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "disk.read.io_sec",
        "kind": "metric",
        "displayName": "Disk Read Bytes",
        "description": "Bytes/sec read from disk.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "disk.read.operations_sec",
        "kind": "metric",
        "displayName": "Disk Read Operations",
        "description": "Number of read IOs performed on a disk.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "disk.write.io_sec",
        "kind": "metric",
        "displayName": "Disk Write Bytes",
        "description": "Bytes/sec written to disk.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "disk.write.operations_sec",
        "kind": "metric",
        "displayName": "Disk Write Operations",
        "description": "Number of write IOs performed on a disk.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "load_balancer.data_path_availability",
        "kind": "metric",
        "displayName": "Load Balancer Data Path Availability",
        "description": "Load Balancer Data Path Availability",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "load_balancer.health_probe_status",
        "kind": "metric",
        "displayName": "Load Balancer Health Probe Status",
        "description": "Load Balancer health probe status",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "load_balancer.processed.bytes",
        "kind": "metric",
        "displayName": "Processed Bytes",
        "description": "Total number of bytes that are sent or received by the load balancer.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "load_balancer.snat_connections_count",
        "kind": "metric",
        "displayName": "SNAT Connection Count",
        "description": "Total number of new SNAT connections created.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{connections}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "load_balancer.snat_ports.allocation",
        "kind": "metric",
        "displayName": "Allocated SNAT Ports",
        "description": "Total Number of SNAT ports allocated.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{ports}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "load_balancer.snat_ports.usage",
        "kind": "metric",
        "displayName": "Used SNAT Ports",
        "description": "Total number of SNAT ports used.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{ports}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "load_balancer.transmit.packets",
        "kind": "metric",
        "displayName": "Packets Count",
        "description": "Total number of packets that are transmitted by the load balancer.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "load_balancer.transmit.syn_packets",
        "kind": "metric",
        "displayName": "SYN Count",
        "description": "Total number of SYN Packets transmitted.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_database.data_read_io.utilization",
        "kind": "metric",
        "displayName": "Data IO percentage",
        "description": "Data IO percentage",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_database.dtu.limit",
        "kind": "metric",
        "displayName": "DTU Limit",
        "description": "DTU Limit. Applies to DTU-based databases.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{dtus}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_database.dtu.utilization",
        "kind": "metric",
        "displayName": "DTU used",
        "description": "DTU Percentage. Applies to DTU-based databases.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_database.dwu.limit",
        "kind": "metric",
        "displayName": "DWU Limit",
        "description": "DWU limit. Applies only to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{dwus}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_database.dwu.utilization",
        "kind": "metric",
        "displayName": "DWU used",
        "description": "DWU percentage. Applies only to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_database.queries.queued",
        "kind": "metric",
        "displayName": "Queued queries",
        "description": "Queued queries across all workload groups. Applies only to data warehouses.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{queries}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_database.sessions.utilization",
        "kind": "metric",
        "displayName": "Sessions Percentage",
        "description": "Sessions percentage. Not applicable to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_database.workers.utilization",
        "kind": "metric",
        "displayName": "Workers Utilization",
        "description": "Workers percentage. Not applicable to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_database.xtp.storage.utilization",
        "kind": "metric",
        "displayName": "In-Memory OLTP Storage Utilization",
        "description": "In-Memory OLTP storage percent. Not applicable to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_server.data_read_io.utilization",
        "kind": "metric",
        "displayName": "Data IO percentage",
        "description": "Data IO percentage",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_server.dtu.limit",
        "kind": "metric",
        "displayName": "DTU Limit",
        "description": "DTU Limit. Applies to DTU-based databases.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{dtus}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_server.dtu.utilization",
        "kind": "metric",
        "displayName": "DTU used",
        "description": "DTU Percentage. Applies to DTU-based databases.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_server.dwu.limit",
        "kind": "metric",
        "displayName": "DWU Limit",
        "description": "DWU limit. Applies only to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{dwus}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_server.dwu.utilization",
        "kind": "metric",
        "displayName": "DWU used",
        "description": "DWU percentage. Applies only to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_server.queries.queued",
        "kind": "metric",
        "displayName": "Queued queries",
        "description": "Queued queries across all workload groups. Applies only to data warehouses.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{queries}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_server.sessions.utilization",
        "kind": "metric",
        "displayName": "Sessions Percentage",
        "description": "Sessions percentage. Not applicable to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_server.workers.utilization",
        "kind": "metric",
        "displayName": "Workers percentage",
        "description": "Workers percentage. Not applicable to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "sql_server.xtp.storage.utilization",
        "kind": "metric",
        "displayName": "In-Memory OLTP storage percent",
        "description": "In-Memory OLTP storage percent. Not applicable to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "vm.network.receive.flows",
        "kind": "metric",
        "displayName": "Inbound Flows",
        "description": "Inbound Flows are number of current flows in the outbound direction.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{flows}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "vm.network.transmit.flows",
        "kind": "metric",
        "displayName": "Outbound Flows",
        "description": "Outbound Flows are number of current flows in the outbound direction.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{flows}"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "vnet.ping.duration",
        "kind": "metric",
        "displayName": "Round trip time for Pings to a VM",
        "description": "Round trip time for Pings sent to a destination VM in MilliSeconds.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "azure",
          "version": 1
        },
        "name": "vnet.ping.failed",
        "kind": "metric",
        "displayName": "Failed Pings to a VM",
        "description": "Percent of number of failed Pings to total sent Pings of a destination VM.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "biq",
          "version": 1
        },
        "name": "average_cart_value",
        "kind": "metric",
        "displayName": "Average cart value",
        "description": "Average of the value of all the carts sold",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{currency}"
      },
      {
        "namespace": {
          "name": "biq",
          "version": 1
        },
        "name": "carts_sold",
        "kind": "metric",
        "displayName": "Number of carts sold",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{count}"
      },
      {
        "namespace": {
          "name": "biq",
          "version": 1
        },
        "name": "total_cart_value",
        "kind": "metric",
        "displayName": "Total cart value",
        "description": "Sum of the value of all the carts sold",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{currency}"
      },
      {
        "namespace": {
          "name": "brostatus",
          "version": 1
        },
        "name": "status",
        "kind": "metric",
        "displayName": "Bro Status Metric",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "name": "database_instance.cpu.balance.credits",
        "kind": "metric",
        "displayName": "CPU Credit Balance",
        "description": "The number of CPU credits available for the instance to spend to burst beyond its baseline CPU utilization. Applicable to Flexible Server",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{credits}"
      },
      {
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "name": "database_instance.cpu.used.credits",
        "kind": "metric",
        "displayName": "CPU Credit Usage",
        "description": "(T2 instances) The number of CPU credits spent by the instance for CPU utilization.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{credits}",
        "ingestGranularities": [
          300
        ]
      },
      {
        "namespace": {
          "name": "cloud",
          "version": 1
        },
        "name": "system.cpu.balance.credits",
        "kind": "metric",
        "displayName": "CPU Credit Balance",
        "description": "The number of credits available for the instance to spend to burst beyond its baseline CPU utilization. Only available on burstable cloud instances.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{credits}",
        "ingestGranularities": [
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "average_response_time",
        "kind": "metric",
        "displayName": "Average Response Time",
        "description": "Average Response Time calculated from (Elapsed Time metric / Execution count) in a given time range",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "buffer_cache_hit_ratio",
        "kind": "metric",
        "displayName": "Buffer cache hit ratio",
        "description": "It's the ratio of the data pages found and read from the SQL Server buffer cache and all data page requests",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "cpu_time",
        "kind": "metric",
        "displayName": "CPU Time",
        "description": "Amount of cpu time taken by query to execute.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "cpu_time_ratio",
        "kind": "metric",
        "displayName": "CPU time ratio",
        "description": "Total time spent by query on the CPU over total elapsed time for a specified time period.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "cpu_utilization",
        "kind": "metric",
        "displayName": "CPU utilization",
        "description": "Percentage of CPU utilized by the database instance.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "database_connections",
        "kind": "metric",
        "displayName": "Database connections",
        "description": "Number of database connections created with the database in the given time range.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{connections}",
        "attributeDefinitions": {
          "attributes": {
            "db.connection.state": {
              "type": "string",
              "description": "State of the Database connection"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "database_sessions",
        "kind": "metric",
        "displayName": "Database sessions",
        "description": "The number of sessions for the Database instance.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{sessions}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "disk_read_io_sec",
        "kind": "metric",
        "displayName": "Disk Read Bytes",
        "description": "Bytes/sec read from disk.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "disk_read_latency",
        "kind": "metric",
        "displayName": "Disk read latency",
        "description": "The average amount of time taken per disk read operation.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "disk_write_io_sec",
        "kind": "metric",
        "displayName": "Disk Write Bytes",
        "description": "Bytes/sec written to disk.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "disk_write_latency",
        "kind": "metric",
        "displayName": "Disk write latency",
        "description": "The average amount of time taken per disk write operation.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "elapsed_time",
        "kind": "metric",
        "displayName": "Elapsed Time",
        "description": "Total elapsed time of a query",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "s",
        "attributeDefinitions": {
          "attributes": {
            "db.client.id": {
              "type": "string",
              "description": "Database client id"
            },
            "db.user.id": {
              "type": "string",
              "description": "Database user id"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "execution_count",
        "kind": "metric",
        "displayName": "Execution Count",
        "description": "Number of times the query has been executed",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{executions}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "logical_reads",
        "kind": "metric",
        "displayName": "Logical Reads",
        "description": "Number of logical read operations performed while executing a query",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{reads}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "logical_writes",
        "kind": "metric",
        "displayName": "Logical Writes",
        "description": "Number of logical write operations performed while executing a query",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{writes}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "maximum_database_connections",
        "kind": "metric",
        "displayName": "Maximum database connections",
        "description": "Maximum number of database connections allowed with the database.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{connections}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "maximum_memory",
        "kind": "metric",
        "displayName": "Maximum memory",
        "description": "Maximum amount of memory available to be consumed",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "maximum_storage",
        "kind": "metric",
        "displayName": "Maximum storage",
        "description": "Maximum amount of storage available to be consumed",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "memory_usage",
        "kind": "metric",
        "displayName": "Memory usage",
        "description": "The memory usage by a query in a given time range.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "memory_used",
        "kind": "metric",
        "displayName": "Memory usage",
        "description": "Memory used by the database instance.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "physical_reads",
        "kind": "metric",
        "displayName": "Physical Reads",
        "description": "Number of physical(disk) read operations performed while executing a query",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{reads}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "rows_returned",
        "kind": "metric",
        "displayName": "Rows Returned",
        "description": "Total number of rows returned",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{rows}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "rows_scanned",
        "kind": "metric",
        "displayName": "Rows Scanned",
        "description": "Total number of rows scanned",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{rows}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "rows_updated",
        "kind": "metric",
        "displayName": "Rows Updated",
        "description": "Total number of rows updated",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{rows}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "status",
        "kind": "metric",
        "displayName": "Status",
        "description": "Provides information about the up/down status of an entity.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{status}"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "storage_used",
        "kind": "metric",
        "displayName": "Storage usage",
        "description": "Storage used by the database instance.",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "wait_time",
        "kind": "metric",
        "displayName": "Wait Time",
        "description": "Amount of time taken by the query while being in different wait-states",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "s",
        "attributeDefinitions": {
          "attributes": {
            "db.wait_state": {
              "type": "string",
              "description": "Database wait state name"
            },
            "db.client.id": {
              "type": "string",
              "description": "Database client id"
            },
            "db.user.id": {
              "type": "string",
              "description": "Database user id"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "db",
          "version": 1
        },
        "name": "wait_time_ratio",
        "kind": "metric",
        "displayName": "Wait time ratio",
        "description": "Total time spent by the query, waiting for locks/resources over total elapsed time for a specified time period.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "calls_min",
        "kind": "metric",
        "displayName": "Requests Per Minute",
        "category": "rate",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{calls}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "http_errors_min",
        "kind": "metric",
        "displayName": "Http Errors Per Minute",
        "category": "rate",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "network_errors_min",
        "kind": "metric",
        "displayName": "Network Errors Per Minute",
        "category": "rate",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "network_request_content_length",
        "kind": "metric",
        "displayName": "Network Request Content Length",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "network_response_content_length",
        "kind": "metric",
        "displayName": "Network Response Content Length",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "network_response_time",
        "kind": "metric",
        "displayName": "Average Network Response Time",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "ms",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "normal_calls_min",
        "kind": "metric",
        "displayName": "Normal Requests (response time < 50ms) Per Minute",
        "category": "rate",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{calls}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "slow_calls_min",
        "kind": "metric",
        "displayName": "Slow Requests (response time 50~200ms) Per Minute",
        "category": "rate",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{calls}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "stall_calls_min",
        "kind": "metric",
        "displayName": "Stalled Requests (response time > 500ms) Per Minute",
        "category": "rate",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{calls}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "eum",
          "version": 1
        },
        "name": "very_slow_calls_min",
        "kind": "metric",
        "displayName": "Very Slow Requests (response time 200ms ~ 500ms) Per Minute",
        "category": "rate",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{calls}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "health",
          "version": 1
        },
        "name": "status",
        "kind": "metric",
        "displayName": "Alerting Overall Health Status across alerting and troubleshooting",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.cpu.load_10s",
        "kind": "metric",
        "displayName": "Container Load 10 Seconds",
        "description": "Container Load, presented as an average over the last 10 seconds",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.cpu.system.utilization",
        "kind": "metric",
        "displayName": "Container CPU System Utilization",
        "description": "Percentage of time the CPU was busy processing kernel code from the container processes",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.cpu.throttled_count",
        "kind": "metric",
        "displayName": "Container CPU Throttled Count",
        "description": "Number of scheduled CPU periods where the container CPU was throttled",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{periods}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.cpu.throttled_time",
        "kind": "metric",
        "displayName": "Container CPU Throttled Time",
        "description": "Total amount of time the container CPU was throttled",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.cpu.usage",
        "kind": "metric",
        "displayName": "Container CPU Core Usage",
        "description": "Amount of CPU cores used by the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.cpu.used.utilization",
        "kind": "metric",
        "displayName": "Container CPU Used Utilization",
        "description": "Utilization of available CPUs by the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.cpu.user.utilization",
        "kind": "metric",
        "displayName": "Container CPU User Utilization",
        "description": "Percentage of time the CPU was busy processing non-kernel code from the container processes",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.filesystem.free.usage",
        "kind": "metric",
        "displayName": "Container FileSystem Free",
        "description": "Amount of storage space that is not consumed by the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.filesystem.limit",
        "kind": "metric",
        "displayName": "Container FileSystem Total",
        "description": "Amount of storage space that can be consumed by the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.filesystem.read.io_sec",
        "kind": "metric",
        "displayName": "Container FileSystem IO Read/sec",
        "description": "Amount of data per second read by the container from all disks",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.filesystem.used.usage",
        "kind": "metric",
        "displayName": "Container FileSystem Used",
        "description": "Amount of storage space that is consumed by the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.filesystem.used.utilization",
        "kind": "metric",
        "displayName": "Container FileSystem Used Utilization",
        "description": "Percentage of storage space that is consumed by the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.filesystem.write.io_sec",
        "kind": "metric",
        "displayName": "Container FileSystem IO Written/sec",
        "description": "Amount of data per second written by the container to all disks",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.memory.cached.usage",
        "kind": "metric",
        "displayName": "Container Cached Memory",
        "description": "Amount of page cache memory used by the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.memory.limit",
        "kind": "metric",
        "displayName": "Container Memory Total",
        "description": "Total amount of memory for the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.memory.rss.usage",
        "kind": "metric",
        "displayName": "Container Memory RSS",
        "description": "Total amount of anonymous and swap cache memory (includes transparent huge pages)",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.memory.used.usage",
        "kind": "metric",
        "displayName": "Container Memory Used",
        "description": "Amount of memory used by the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.memory.used.utilization",
        "kind": "metric",
        "displayName": "Container Memory Used Utilization",
        "description": "Percentage of memory used by the container",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "container.memory.ws.usage",
        "kind": "metric",
        "displayName": "Container Memory Working Set",
        "description": "Total amount of working set memory, this includes recently accessed memory, dirty memory, and kernel memory",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.cache.utilization",
        "kind": "metric",
        "displayName": "Cache used percentage",
        "description": "Cache used percentage. Applies only to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.connections",
        "kind": "metric",
        "displayName": "Database Connections",
        "description": "The number of client network connections to the database instance.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{connections}"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.connections.failed",
        "kind": "metric",
        "displayName": "Failed Database Connections",
        "description": "The number of failed connections to the database instance.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{connections}"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.cpu.limit",
        "kind": "metric",
        "displayName": "CPU limit",
        "description": "CPU limit. Applies to vCore-based databases.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.cpu.utilization",
        "kind": "metric",
        "displayName": "CPU Utilization",
        "description": "The percentage of CPU utilization.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.deadlock",
        "kind": "metric",
        "displayName": "Deadlocks",
        "description": "Deadlocks. Not applicable to data warehouses.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{deadlocks}"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.binary_logs.usage",
        "kind": "metric",
        "displayName": "Binary Log Disk Usage",
        "description": "The amount of disk space occupied by binary (server) logs.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.pending.operations",
        "kind": "metric",
        "displayName": "Disk Queue Depth",
        "description": "The number of outstanding I/Os (read/write requests) waiting to access the disk per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.read.io_sec",
        "kind": "metric",
        "displayName": "Read Throughput",
        "description": "The average number of bytes read from disk per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.read.operations_sec",
        "kind": "metric",
        "displayName": "Read IOPS",
        "description": "The average number of disk read I/O operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.read.operation_time",
        "kind": "metric",
        "displayName": "Read Latency",
        "description": "The average amount of time taken per disk I/O operation.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.transaction_logs.generation_sec",
        "kind": "metric",
        "displayName": "Transaction Logs Generation",
        "description": "The size of transaction logs generated per second. Applies to PostgreSQL.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.transaction_logs.usage",
        "kind": "metric",
        "displayName": "Transaction Logs Disk Usage",
        "description": "The disk space used by transaction logs. Applies to PostgreSQL.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.write.io_sec",
        "kind": "metric",
        "displayName": "Write Throughput",
        "description": "The average number of bytes written to disk per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.write.operations_sec",
        "kind": "metric",
        "displayName": "Write IOPS",
        "description": "The average number of disk write I/O operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.disk.write.operation_time",
        "kind": "metric",
        "displayName": "Write Latency",
        "description": "The average amount of time taken per disk I/O operation.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.lvm.read.operations_sec",
        "kind": "metric",
        "displayName": "LVM Read IOPS",
        "description": "The average number of LVM disk read I/O operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.lvm.write.operations_sec",
        "kind": "metric",
        "displayName": "LVM Write IOPS",
        "description": "The average number of LVM disk write I/O operations per second.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.memory.free.usage",
        "kind": "metric",
        "displayName": "Freeable Memory",
        "description": "The amount of free random access memory immediately available.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.memory.used.utilization",
        "kind": "metric",
        "displayName": "Memory Usage",
        "description": "The percent of memory in use.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.network.receive.io_sec",
        "kind": "metric",
        "displayName": "Network Receive Throughput",
        "description": "The incoming (receive) network traffic on the server across all active connections",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.network.transmit.io_sec",
        "kind": "metric",
        "displayName": "Network Transmit Throughput",
        "description": "The outgoing (send) network traffic on the server across all active connections",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.paging.used.usage",
        "kind": "metric",
        "displayName": "Swap Usage",
        "description": "The amount of swap space used on the DB instance.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.queries.active",
        "kind": "metric",
        "displayName": "Active queries",
        "description": "Active queries across all workload groups. Applies only to data warehouses.",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{queries}"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.replica.lag",
        "kind": "metric",
        "displayName": "Replica Lag",
        "description": "For read replica configurations, the amount of time a read replica DB instance lags behind the source DB instance. For Multi-AZ deployments, it measures the difference in time between the latest transaction on the writer DB instance and the latest applied transaction on a reader DB instance. This metric applies to MariaDB, Microsoft SQL Server, Oracle, MySQL, and PostgreSQL read replicas.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.storage.free.usage",
        "kind": "metric",
        "displayName": "Free Storage Space",
        "description": "The amount of free storage space.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.storage.limit",
        "kind": "metric",
        "displayName": "Data storage space allocated",
        "description": "Allocated data storage. Not applicable to data warehouses.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "database.storage.used.utilization",
        "kind": "metric",
        "displayName": "Storage Utilization",
        "description": "The percentage of server log storage in use.",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%"
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.cpu.iowait.utilization",
        "kind": "metric",
        "displayName": "CPU IOWait Utilization",
        "description": "Percentage of CPU time spent waiting for an I/O request",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.cpu.load_15m",
        "kind": "metric",
        "displayName": "Load 15 minutes",
        "description": "CPU Load, presented as an average over the last 15 minutes",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.cpu.load_1m",
        "kind": "metric",
        "displayName": "Load 1 minute",
        "description": "CPU Load, presented as an average over the last 1 minute",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.cpu.load_5m",
        "kind": "metric",
        "displayName": "Load 5 minutes",
        "description": "CPU Load, presented as an average over the last 5 minutes",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.cpu.stolen.utilization",
        "kind": "metric",
        "displayName": "CPU Stolen Utilization",
        "description": "Percentage of time a virtual CPU waits for a real CPU while the hypervisor is servicing another virtual processor",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.cpu.system.utilization",
        "kind": "metric",
        "displayName": "CPU System Utilization",
        "description": "Percentage of time the CPU was busy processing kernel code",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.cpu.used.utilization",
        "kind": "metric",
        "displayName": "CPU Used Utilization",
        "description": "Percentage of time the CPU was busy processing system or user requests",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.cpu.user.utilization",
        "kind": "metric",
        "displayName": "CPU User Utilization",
        "description": "Percentage of time the CPU was busy processing non-kernel code",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.device.io.utilization",
        "kind": "metric",
        "displayName": "Disk Device Avg IO Utilization",
        "description": "Average time spent processing read/write requests out of the reported time period for the specified disk device",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.device.queue.operation_time",
        "kind": "metric",
        "displayName": "Disk Device Avg Queue Time",
        "description": "Average time that a read or write request is in the queue before it gets processed across the specified disk device",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.device.read.io_sec",
        "kind": "metric",
        "displayName": "Disk Device IO Read/sec",
        "description": "Amount of data per second read from the specified disk device",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.device.read.operations_sec",
        "kind": "metric",
        "displayName": "Disk Device Reads/sec",
        "description": "Number of read operations per second on the specified disk device",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.device.read.operation_time",
        "kind": "metric",
        "displayName": "Disk Device Avg Read Time",
        "description": "Average time required to service a read request across the specified disk device",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.device.service.operation_time",
        "kind": "metric",
        "displayName": "Disk Device Avg Service Time",
        "description": "Average time spent performing read and write operations across the specified disk device",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.device.write.io_sec",
        "kind": "metric",
        "displayName": "Disk Device IO Written/sec",
        "description": "Amount of data per second written to the specified disk device",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.device.write.operations_sec",
        "kind": "metric",
        "displayName": "Disk Device Writes/sec",
        "description": "Number of write operations per second on the specified disk device",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.device.write.operation_time",
        "kind": "metric",
        "displayName": "Disk Device Avg Write Time",
        "description": "Average time required to service a write request across the specified disk device",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "ms",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.io.utilization",
        "kind": "metric",
        "displayName": "Disk Avg IO Utilization",
        "description": "Average time spent processing read/write requests out of the reported time period for all disk devices",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.read.io_sec",
        "kind": "metric",
        "displayName": "Disk IO Read/sec",
        "description": "Amount of data per second read from all disk devices",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.read.operations_sec",
        "kind": "metric",
        "displayName": "Disk Reads/sec",
        "description": "Number of read operations per second performed on all disk devices",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.write.io_sec",
        "kind": "metric",
        "displayName": "Disk IO Written/sec",
        "description": "Amount of data per second written to all disk devices",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.disk.write.operations_sec",
        "kind": "metric",
        "displayName": "Disk Writes/sec",
        "description": "Number of write operations per second performed on all disk devices",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.filesystem.free.usage",
        "kind": "metric",
        "displayName": "FileSystem Free",
        "description": "Amount of unused or free space across all mount points",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.filesystem.limit",
        "kind": "metric",
        "displayName": "FileSystem Total",
        "description": "Amount of storage space available (used and free) across all mount points",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.filesystem.mountpoint.free.usage",
        "kind": "metric",
        "displayName": "FileSystem Free",
        "description": "Amount of unused or free space on the selected volume at the specified mount point",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.filesystem.mountpoint.limit",
        "kind": "metric",
        "displayName": "FileSystem Total",
        "description": "Amount of storage space available (used and free) at the specified mount point",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.filesystem.mountpoint.used.usage",
        "kind": "metric",
        "displayName": "FileSystem Used",
        "description": "Amount of storage space in use on the selected volume at the specified mount point",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.filesystem.mountpoint.used.utilization",
        "kind": "metric",
        "displayName": "FileSystem Used Utilization",
        "description": "Percentage of storage space in use on the selected volume at the specified mount point",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.filesystem.used.usage",
        "kind": "metric",
        "displayName": "FileSystem Used",
        "description": "Amount of storage space in use across all mount points",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.filesystem.used.utilization",
        "kind": "metric",
        "displayName": "FileSystem Used Utilization",
        "description": "Percentage of storage space in use across all mount points",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.memory.available.usage",
        "kind": "metric",
        "displayName": "Memory Available",
        "description": "Amount of memory available for starting new applications, without swapping",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.memory.buffer.usage",
        "kind": "metric",
        "displayName": "Buffer Memory",
        "description": "Amount of memory in buffer cache",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.memory.cached.usage",
        "kind": "metric",
        "displayName": "Cached Memory",
        "description": "Amount of memory in the page cache",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.memory.free.usage",
        "kind": "metric",
        "displayName": "Memory Free",
        "description": "Amount of physical memory free",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.memory.free.utilization",
        "kind": "metric",
        "displayName": "Memory Free Utilization",
        "description": "Percentage of memory free",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.memory.limit",
        "kind": "metric",
        "displayName": "Memory Total",
        "description": "Total amount of memory",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.memory.slab.usage",
        "kind": "metric",
        "displayName": "Slab Memory",
        "description": "Amount of memory used by the kernel to cache data structures for its own use",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.memory.used.usage",
        "kind": "metric",
        "displayName": "Memory Used",
        "description": "Amount of memory used",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.memory.used.utilization",
        "kind": "metric",
        "displayName": "Memory Used Utilization",
        "description": "Percentage of memory used",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.receive.dropped",
        "kind": "metric",
        "displayName": "Network Interface Incoming Packets Dropped",
        "description": "Number of incoming data packets dropped by the selected network interface",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.receive.dropped_sec",
        "kind": "metric",
        "displayName": "Network Interface Incoming Packets Dropped/sec",
        "description": "Number of incoming data packets per second dropped by the selected network interface",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.receive.errors_min",
        "kind": "metric",
        "displayName": "Network Interface Incoming Errors/min",
        "description": "Number of incoming packet errors the network interface incurs every minute",
        "category": "rate",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}/min",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.receive.io",
        "kind": "metric",
        "displayName": "Network Interface IO Incoming",
        "description": "Volume of data received by the selected network interface",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.receive.io_sec",
        "kind": "metric",
        "displayName": "Network Interface IO Incoming/sec",
        "description": "Amount of data per second received by the selected network interface",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.receive.packets",
        "kind": "metric",
        "displayName": "Network Interface Incoming Packets",
        "description": "Number of packets received by the selected network interface",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.receive.packets_sec",
        "kind": "metric",
        "displayName": "Network Interface Incoming Packets/sec",
        "description": "Number of data packets per second received by the selected network interface",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.transmit.dropped",
        "kind": "metric",
        "displayName": "Network Interface Outgoing Packets Dropped",
        "description": "Number of outgoing data packets dropped by the selected network interface",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.transmit.dropped_sec",
        "kind": "metric",
        "displayName": "Network Interface Outgoing Packets Dropped/Sec",
        "description": "Number of outgoing data packets per second dropped by the selected network interface",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.transmit.errors_min",
        "kind": "metric",
        "displayName": "Network Interface Outgoing Errors/min",
        "description": "Number of outgoing packet errors the network interface incurs every minute",
        "category": "rate",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}/min",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.transmit.io",
        "kind": "metric",
        "displayName": "Network Interface IO Outgoing",
        "description": "Volume of data sent by the selected network interface",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.transmit.io_sec",
        "kind": "metric",
        "displayName": "Network Interface IO Outgoing/sec",
        "description": "Volume of data sent per second by the selected network interface",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.transmit.packets",
        "kind": "metric",
        "displayName": "Network Interface Outgoing Packets",
        "description": "Number of packets sent by the selected network interface",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.device.transmit.packets_sec",
        "kind": "metric",
        "displayName": "Network Interface Outgoing Packets/sec",
        "description": "Number of data packets sent per second by the selected network interface",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.receive.dropped",
        "kind": "metric",
        "displayName": "Network Incoming Packets Dropped",
        "description": "Number of incoming data packets dropped by all monitored network interfaces",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.receive.dropped_sec",
        "kind": "metric",
        "displayName": "Network Incoming Packets Dropped/sec",
        "description": "Number of incoming data packets per second dropped by all monitored network interfaces",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.receive.errors_min",
        "kind": "metric",
        "displayName": "Network Incoming Errors/min",
        "description": "Number of incoming packet errors the network incurs every minute",
        "category": "rate",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}/min",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.receive.io",
        "kind": "metric",
        "displayName": "Network IO Incoming",
        "description": "Volume of data received by all monitored network interfaces",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.receive.io_sec",
        "kind": "metric",
        "displayName": "Network IO Incoming/sec",
        "description": "Amount of data per second received by all monitored network interfaces",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.receive.packets",
        "kind": "metric",
        "displayName": "Network Incoming Packets",
        "description": "Number of packets received by all monitored network interfaces",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.receive.packets_sec",
        "kind": "metric",
        "displayName": "Network Incoming Packets/sec",
        "description": "Number of data packets per second received by all monitored network interfaces",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.transmit.dropped",
        "kind": "metric",
        "displayName": "Network Outgoing Packets Dropped",
        "description": "Number of outgoing data packets dropped by all monitored network interfaces",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.transmit.dropped_sec",
        "kind": "metric",
        "displayName": "Network Outgoing Packets Dropped/Sec",
        "description": "Number of outgoing data packets per second dropped by all monitored network interfaces",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.transmit.errors_min",
        "kind": "metric",
        "displayName": "Network Outgoing Errors/min",
        "description": "Number of outgoing packet errors the network incurs every minute",
        "category": "rate",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{errors}/min",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.transmit.io",
        "kind": "metric",
        "displayName": "Network IO Outgoing",
        "description": "Volume of data sent by all monitored network interfaces",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.transmit.io_sec",
        "kind": "metric",
        "displayName": "Network IO Outgoing/sec",
        "description": "Volume of data sent per second by all monitored network interfaces",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.transmit.packets",
        "kind": "metric",
        "displayName": "Network Outgoing Packets",
        "description": "Number of packets sent by all monitored network interfaces",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.network.transmit.packets_sec",
        "kind": "metric",
        "displayName": "Network Outgoing Packets/sec",
        "description": "Number of data packets sent per second by all monitored network interfaces",
        "category": "rate_per_sec",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{packets}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.faults_sec",
        "kind": "metric",
        "displayName": "Page Faults/sec",
        "description": "Number of page faults per second for the system",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{faults}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.free.usage",
        "kind": "metric",
        "displayName": "Swap Memory Free",
        "description": "Amount of swap space free",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.free.utilization",
        "kind": "metric",
        "displayName": "Swap Memory Free Utilization",
        "description": "Percentage of free swap space",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.in.operations_sec",
        "kind": "metric",
        "displayName": "Pages Paged In/sec",
        "description": "Paging-in rate to memory",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.limit",
        "kind": "metric",
        "displayName": "Swap Memory Total",
        "description": "Total amount of allocated swap space",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.out.operations_sec",
        "kind": "metric",
        "displayName": "Pages Paged Out/sec",
        "description": "Paging-out rate from memory",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.swap.in.operations_sec",
        "kind": "metric",
        "displayName": "Pages Swapped In/sec",
        "description": "Swapping rate of pages from disks",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.swap.out.operations_sec",
        "kind": "metric",
        "displayName": "Pages Swapped Out/sec",
        "description": "Swapping rate of pages to disks",
        "category": "rate_per_sec",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{operations}/s",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.used.usage",
        "kind": "metric",
        "displayName": "Swap Memory Used",
        "description": "Amount of swap space used",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "infra",
          "version": 1
        },
        "name": "system.paging.used.utilization",
        "kind": "metric",
        "displayName": "Swap Memory Used Utilization",
        "description": "Percentage of available swap space used",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "%",
        "ingestGranularities": [
          10,
          20,
          30,
          60,
          300
        ]
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "cpu.allocatable",
        "kind": "metric",
        "displayName": "CPU Allocatable",
        "description": "Maximum CPU cores available for pods",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "cpu.limits",
        "kind": "metric",
        "displayName": "CPU Limits",
        "description": "Maximum cpu cores allowed",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "cpu.limits.usage",
        "kind": "metric",
        "displayName": "CPU Limits Usage",
        "description": "Number of cpu cores used when limits specified",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "cpu.requests",
        "kind": "metric",
        "displayName": "CPU Requests",
        "description": "Minimum cpu cores required",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "cpu.requests.usage",
        "kind": "metric",
        "displayName": "CPU Requests Usage",
        "description": "Number of cpu cores used when requests specified",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "cpu.throttled_count",
        "kind": "metric",
        "displayName": "CPU Throttle Count",
        "description": "Number of scheduled CPU periods where the container CPU was throttled",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{periods}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "cpu.usage",
        "kind": "metric",
        "displayName": "CPU Cores Usage",
        "description": "Number of cpu cores used",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "disk.pressure",
        "kind": "metric",
        "displayName": "Disk Pressure",
        "description": "Indicates kubelet is under pressure due to insufficient disk",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "1"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.2xx.requests",
        "kind": "metric",
        "displayName": "Requests 2xx Count",
        "description": "Number of requests with 2xx http code",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.3xx.requests",
        "kind": "metric",
        "displayName": "Requests 3xx Count",
        "description": "Number of requests with 3xx http code",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.4xx.requests",
        "kind": "metric",
        "displayName": "Requests 4xx Count",
        "description": "Number of requests with 4xx http code",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.500.requests",
        "kind": "metric",
        "displayName": "Requests 500 Count",
        "description": "Number of requests with 500 http code",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.501.requests",
        "kind": "metric",
        "displayName": "Requests 501 Count",
        "description": "Number of requests with 501 http code",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.502.requests",
        "kind": "metric",
        "displayName": "Requests 502 Count",
        "description": "Number of requests with 502 http code",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.503.requests",
        "kind": "metric",
        "displayName": "Requests 503 Count",
        "description": "Number of requests with 503 http code",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.504.requests",
        "kind": "metric",
        "displayName": "Requests 504 Count",
        "description": "Number of requests with 504 http code",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.5xx.requests",
        "kind": "metric",
        "displayName": "Requests 5xx Count",
        "description": "Number of requests with 5xx http code",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.active_requests",
        "kind": "metric",
        "displayName": "request.count",
        "description": "Number of requests",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "http.server.duration",
        "kind": "metric",
        "displayName": "Request Duration",
        "description": "Total request time taken by all sampled requests",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "job.completed",
        "kind": "metric",
        "displayName": "Job Completed",
        "description": "Indicates whether job is complete",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "1"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "jobs.active",
        "kind": "metric",
        "displayName": "Jobs Active",
        "description": "Number of active job replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{jobs}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "jobs.failed",
        "kind": "metric",
        "displayName": "Jobs Failed",
        "description": "Number of failed job replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{jobs}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "jobs.succeeded",
        "kind": "metric",
        "displayName": "Jobs Succeeded",
        "description": "Number of succeeded job replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{jobs}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "kube.ready",
        "kind": "metric",
        "displayName": "Kube Ready",
        "description": "Indicates whether kubelet is ready",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "1"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "memory.allocatable",
        "kind": "metric",
        "displayName": "Memory Allocatable",
        "description": "Maximum memory available for pods",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "memory.limits",
        "kind": "metric",
        "displayName": "Memory Limits",
        "description": "Maximum amount of memory allowed to be consumed",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "memory.limits.usage",
        "kind": "metric",
        "displayName": "Memory Limits Usage",
        "description": "Total memory used when limits specified",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "memory.pressure",
        "kind": "metric",
        "displayName": "Memory Pressure",
        "description": "Indicates kubelet is under pressure due to insufficient memory",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "1"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "memory.requests",
        "kind": "metric",
        "displayName": "Memory Requests",
        "description": "Minimum amount of memory required",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "memory.requests.usage",
        "kind": "metric",
        "displayName": "Memory Requests Usage",
        "description": "Total memory used when requests specified",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "memory.usage",
        "kind": "metric",
        "displayName": "Memory Usage",
        "description": "Total memory used",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "native_events",
        "kind": "metric",
        "displayName": "Native k8s events count",
        "description": "Number of native k8s events",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": true,
        "type": "long",
        "unit": "{events}",
        "attributeDefinitions": {
          "attributes": {
            "severity": {
              "type": "string",
              "description": "severity of the event"
            },
            "reason": {
              "type": "string",
              "description": "Event reason"
            },
            "entity.type": {
              "type": "string",
              "description": "type of the affected entity on which event was reported"
            }
          }
        }
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "network.unavailable",
        "kind": "metric",
        "displayName": "Network Unavailable",
        "description": "Indicates network for node is not correctly configured",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "1"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "pid.pressure",
        "kind": "metric",
        "displayName": "Pid Pressure",
        "description": "Indicates kubelet is under pressure due to insufficient number of PIDs",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "1"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "pod.restarts",
        "kind": "metric",
        "displayName": "Pod Restarts",
        "description": "Number of pod restarts",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": true,
        "type": "long",
        "unit": "{restarts}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "pods.allocatable",
        "kind": "metric",
        "displayName": "Pods Allocatable",
        "description": "Maximum number of pods which can be run",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{pods}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "pods.failed",
        "kind": "metric",
        "displayName": "Pods Failed",
        "description": "Number of failed pods",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{pods}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "pods.pending",
        "kind": "metric",
        "displayName": "Pods Pending",
        "description": "Number of pending pods",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{pods}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "pods.running",
        "kind": "metric",
        "displayName": "Pods Running",
        "description": "Number of running pods",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{pods}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "pods.succeeded",
        "kind": "metric",
        "displayName": "Pods Succeeded",
        "description": "Number of succeeded pods",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{pods}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "pods.unknown",
        "kind": "metric",
        "displayName": "Pods Unknown",
        "description": "Number of pods in unknown state",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{pods}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "replicas.available",
        "kind": "metric",
        "displayName": "Replicas Available",
        "description": "Number of available replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{replicas}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "replicas.current",
        "kind": "metric",
        "displayName": "Replicas Current",
        "description": "Number of replicas having desired current spec",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{replicas}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "replicas.desired",
        "kind": "metric",
        "displayName": "Replicas Desired",
        "description": "Number of desired replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{replicas}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "replicas.misscheduled",
        "kind": "metric",
        "displayName": "Replicas Misscheduled",
        "description": "Number of mis-scheduled replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{replicas}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "replicas.ready",
        "kind": "metric",
        "displayName": "Replicas Ready",
        "description": "Number of ready replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{replicas}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "replicas.scheduled",
        "kind": "metric",
        "displayName": "Replicas Scheduled",
        "description": "Number of scheduled replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{replicas}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "replicas.unavailable",
        "kind": "metric",
        "displayName": "Replicas Unavailable",
        "description": "Number of unavailable replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{replicas}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "replicas.updated",
        "kind": "metric",
        "displayName": "Replicas Updated",
        "description": "Number of replicas having desired spec",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "{replicas}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.cpu.limits",
        "kind": "metric",
        "displayName": "CPU Quota Limits",
        "description": "Maximum allowed sum of all CPU limits",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.cpu.limits.usage",
        "kind": "metric",
        "displayName": "CPU Quota Limits Usage",
        "description": "Total cpu cores used when resource quota limits configured",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.cpu.requests",
        "kind": "metric",
        "displayName": "CPU Quota Requests",
        "description": "Maximum allowed sum of all CPU requests",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.cpu.requests.usage",
        "kind": "metric",
        "displayName": "CPU Quota Requests Usage",
        "description": "Total cpu cores used when resource quota request configured",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "{cores}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.memory.limits",
        "kind": "metric",
        "displayName": "Memory Quota Limits",
        "description": "Maximum allowed sum of all memory limits",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.memory.limits.usage",
        "kind": "metric",
        "displayName": "Memory Quota Limits Usage",
        "description": "Total memory used when resource quota limits configured",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.memory.requests",
        "kind": "metric",
        "displayName": "Memory Quota Requests",
        "description": "Maximum allowed sum of all memory requests",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.memory.requests.usage",
        "kind": "metric",
        "displayName": "Memory Quota Requests Usage",
        "description": "Total memory used when resource quota request configured",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.pvc.requests",
        "kind": "metric",
        "displayName": "PVC Quota Requests",
        "description": "Total pvc requests allowed",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{pvcs}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.pvc.requests.usage",
        "kind": "metric",
        "displayName": "PVC Quota Requests Usage",
        "description": "Number of pvc requests used when resource quota is configured",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "{pvcs}"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.storage.requests",
        "kind": "metric",
        "displayName": "Storage Quota Requests",
        "description": "Maximum allowed sum of storage requests",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "resource_quota.storage.requests.usage",
        "kind": "metric",
        "displayName": "Storage Quota Requests Usage",
        "description": "Total storage request used when storage quota configured ",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "storage.allocatable",
        "kind": "metric",
        "displayName": "Storage Allocatable",
        "description": "Maximum storage available for pods",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "storage.limits",
        "kind": "metric",
        "displayName": "PV Storage Limit",
        "description": "Maximum amount of storage capacity provisioned",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "k8s",
          "version": 1
        },
        "name": "storage.requests",
        "kind": "metric",
        "displayName": "PVC Storage Requests",
        "description": "Minimum amount of storage required",
        "category": "sum",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "long",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "java_lang_memory_heapmemoryusage_committed",
        "kind": "metric",
        "displayName": "Committed Heapmemory",
        "description": "Committed heapmemory",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "java_lang_memory_heapmemoryusage_used",
        "kind": "metric",
        "displayName": "Used Heapmemory",
        "description": "Used heapmemory",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "java_lang_operatingsystem_maxfiledescriptorcount",
        "kind": "metric",
        "displayName": "Max File Descriptor Count",
        "description": "java.lang:name=null,type=OperatingSystem,attribute=MaxFileDescriptorCount",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{descriptors}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "java_lang_operatingsystem_openfiledescriptorcount",
        "kind": "metric",
        "displayName": "Open File Descriptor Count",
        "description": "java.lang:name=null,type=OperatingSystem,attribute=OpenFileDescriptorCount",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{descriptors}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "java_lang_threading_daemonthreadcount",
        "kind": "metric",
        "displayName": "Daemon Thread Count",
        "description": "Daemon thread count",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{threads}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "java_lang_threading_threadcount",
        "kind": "metric",
        "displayName": "Thread Count",
        "description": "Thread count",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{threads}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_brokers",
        "kind": "metric",
        "displayName": "Number of Brokers",
        "description": "Number of Brokers in the Kafka Cluster",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{brokers}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_cluster_bytesinpersec_count",
        "kind": "metric",
        "displayName": "Aggregate Incoming Bytes per Minute",
        "description": "Aggregate Incoming Bytes per Minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "By/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_cluster_bytesoutpersec_count",
        "kind": "metric",
        "displayName": "Aggregate Outgoing Bytes per Minute",
        "description": "Aggregate Outgoing Bytes per Minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "By/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_cluster_messagesinpersec_count",
        "kind": "metric",
        "displayName": "Aggregate Incoming Messages per Minute",
        "description": "Aggregate Incoming Messages per Minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{messages}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_consumergroup_current_offset_sum",
        "kind": "metric",
        "displayName": "Sum of Consumer Group Current Offset",
        "description": "Current Offset of a ConsumerGroup at Topic for all partitions",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{offset}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_consumergroup_lag_sum",
        "kind": "metric",
        "displayName": "Sum of Consumer Group Lag",
        "description": "Current Approximate Lag of a ConsumerGroup at Topic for all partitions",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{events}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_consumergroup_members",
        "kind": "metric",
        "displayName": "Number of Consumer Group Members",
        "description": "Amount of members in a consumer group",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{members}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_controller_controllerstats_leaderelectionrateandtimems_count",
        "kind": "metric",
        "displayName": "Leader Election Rate",
        "description": "Leader election rate and latency",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{elections}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_controller_controllerstats_uncleanleaderelectionspersec_count",
        "kind": "metric",
        "displayName": "Number of Unclean Elections per Minute",
        "description": "Number of unclean elections per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{elections}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_controller_kafkacontroller_activecontrollercount_value",
        "kind": "metric",
        "displayName": "Number of Active Controllers in Cluster",
        "description": "Number of active controllers in cluster",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{controllers}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_controller_kafkacontroller_offlinepartitionscount_value",
        "kind": "metric",
        "displayName": "Number of Offline Partitions",
        "description": "Number of offline partitions",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{partitions}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_log_logflushstats_logflushrateandtimems_count",
        "kind": "metric",
        "displayName": "Log Flush Rate",
        "description": "Log flush rate and time",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{counts}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_log_log_size",
        "kind": "metric",
        "displayName": "Size of a Partition on Disk",
        "description": "The size of a partition on disk, measured in bytes.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_network_requestmetrics_requestspersec_count",
        "kind": "metric",
        "displayName": "Number of (Producer|Consumer|Follower) Requests per Minute",
        "description": "Number of (Producer|Consumer|Follower) requests per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{requests}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_network_requestmetrics_totaltimems_fetchconsumer_count",
        "kind": "metric",
        "displayName": "Time to Serve Fetch Consumer Request per Minute",
        "description": "Total time in ms to serve the fetch consumer request",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "ms",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_network_requestmetrics_totaltimems_fetchfollower_count",
        "kind": "metric",
        "displayName": "Time to Serve Fetch Follower Request per Minute",
        "description": "Total time in ms to serve the fetch follower request",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "ms",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_network_requestmetrics_totaltimems_produce_count",
        "kind": "metric",
        "displayName": "Time to Serve Produce Request per Minute",
        "description": "Total time to serve the produce request",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "ms",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_bytesinpersec_count",
        "kind": "metric",
        "displayName": "Incoming Bytes per Minute by Topic",
        "description": "Incoming byte rate by topic",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "By/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_bytesoutpersec_count",
        "kind": "metric",
        "displayName": "Outgoing Bytes per Minute by Topic",
        "description": "Outgoing byte rate by topic",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "By/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_failedfetchrequestspersec_count",
        "kind": "metric",
        "displayName": "Failed Fetch Requests per Minute",
        "description": "Failed Fetch request (from clients or followers) rate",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{requests}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_failedproducerequestspersec_count",
        "kind": "metric",
        "displayName": "Failed Produce Requests per Minute",
        "description": "Failed Produce request rate",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{requests}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_messagesinpersec_count",
        "kind": "metric",
        "displayName": "Incoming Messages per Minute by Topic",
        "description": "Incoming message rate by topic",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{messages}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_total_bytesinpersec_count",
        "kind": "metric",
        "displayName": "Aggregate Incoming Bytes per Minute",
        "description": "Aggregate incoming byte rate",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "By/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_total_bytesoutpersec_count",
        "kind": "metric",
        "displayName": "Aggregate Outgoing Bytes per Minute",
        "description": "Aggregate outgoing byte rate",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "By/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_totalfetchrequestspersec_count",
        "kind": "metric",
        "displayName": "Fetch Requests per Minute by Topic",
        "description": "Fetch request rate by topic",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{requests}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_total_messagesinpersec_count",
        "kind": "metric",
        "displayName": "Aggregate Incoming Messages per Minute",
        "description": "Aggregate incoming message rate",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{messages}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_brokertopicmetrics_totalproducerequestspersec_count",
        "kind": "metric",
        "displayName": "Produce Requests per Minute by Topic",
        "description": "Produce request rate by topic",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{requests}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_delayedoperationpurgatory_purgatorysize_fetch_value",
        "kind": "metric",
        "displayName": "Number of Requests Waiting in Fetch Purgatory",
        "description": "Number of requests waiting in fetch purgatory",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{requests}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_delayedoperationpurgatory_purgatorysize_produce_value",
        "kind": "metric",
        "displayName": "Number of Requests Waiting in Producer Purgatory",
        "description": "Number of requests waiting in producer purgatory",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{requests}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_kafkaserver_total_brokerstate_value",
        "kind": "metric",
        "displayName": "Number of Brokers",
        "description": "Number of Brokers",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{brokers}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_replicamanager_total_isrexpandspersec_count",
        "kind": "metric",
        "displayName": "In-sync Replicas (ISRs) Expands per Minute",
        "description": "Rate at which the pool of in-sync replicas (ISRs) expands",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{replicas}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_replicamanager_total_isrshrinkspersec_count",
        "kind": "metric",
        "displayName": "In-sync Replicas (ISRs) Shrinks per Minute",
        "description": "Rate at which the pool of in-sync replicas (ISRs) shrinks",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{replicas}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_replicamanager_total_leadercount_value",
        "kind": "metric",
        "displayName": "Leader Partition Counts",
        "description": "Leader Partition counts",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{partitions}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_replicamanager_total_partitioncount_value",
        "kind": "metric",
        "displayName": "Partition Counts",
        "description": "Partition counts",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{partitions}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_replicamanager_total_underreplicatedpartitions_value",
        "kind": "metric",
        "displayName": "Number of Unreplicated Partitions",
        "description": "Number of unreplicated partitions",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{partitions}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_zookeeperdisconnectspersec",
        "kind": "metric",
        "displayName": "Zookeeper Disconnects per Minute",
        "description": "ZooKeeper client disconnects per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{connections}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_zookeeperexpirespersec",
        "kind": "metric",
        "displayName": "Zookeeper Expires per Minute",
        "description": "ZooKeeper client session expiration per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{expires}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_zookeeperreadonlyconnectspersec",
        "kind": "metric",
        "displayName": "Zookeeper Read-only Connects per Minute",
        "description": "ZooKeeper client read-only connects per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{connections}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_server_zookeepersyncconnectspersec",
        "kind": "metric",
        "displayName": "Zookeeper Sync Connects per Minute",
        "description": "ZooKeeper client sync per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{connections}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_topic_partition_replicas",
        "kind": "metric",
        "displayName": "Number of Replicas for this Topic/Partition",
        "description": "Number of Replicas for this Topic/Partition",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{replicas}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_topic_partitions",
        "kind": "metric",
        "displayName": "Number of Partitions by Topic",
        "description": "Number of partitions for this Topic",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{partitions}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "kafka",
          "version": 1
        },
        "name": "kafka_topic_partition_under_replicated_partition",
        "kind": "metric",
        "displayName": "Topic/Partition is Under Replicated",
        "description": "1 if Topic/Partition is under Replicated",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "logs",
          "version": 1
        },
        "name": "log_records",
        "kind": "metric",
        "displayName": "A number of log records",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "delta",
        "isMonotonic": true,
        "type": "long",
        "unit": "{logs}"
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_blocked_clients",
        "kind": "metric",
        "displayName": "Number of Blocked Clients",
        "description": "Number of clients pending on a blocking call",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{clients}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_commands_duration_seconds_total",
        "kind": "metric",
        "displayName": "Total Command Duration per Minute",
        "description": "Amount of time spent by a command per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{duration}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_commands_processed_total",
        "kind": "metric",
        "displayName": "Total Commands Processed per Minute",
        "description": "Number of commands processed by the instance per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{commands}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_commands_total",
        "kind": "metric",
        "displayName": "Total Calls by Command per Minute",
        "description": "Number of calls by a command per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{calls}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_config_maxclients",
        "kind": "metric",
        "displayName": "Maximum Number of Clients",
        "description": "Value of the maxclients configuration directive",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{clients}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_connected_clients",
        "kind": "metric",
        "displayName": "Number of Connected Clients",
        "description": "Number of client connections to the specific shard",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{connections}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_connected_slave_lag_seconds",
        "kind": "metric",
        "displayName": "Connected Replica Lag",
        "description": "Lag of connected replica",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_connected_slave_offset_bytes",
        "kind": "metric",
        "displayName": "Connected Replica Offset",
        "description": "Offset of connected replica",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_connected_slaves",
        "kind": "metric",
        "displayName": "Number of Connected Replicas",
        "description": "Number of connected replicas",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{replicas}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_connections_received_total",
        "kind": "metric",
        "displayName": "Total Connections Received per Minute",
        "description": "Number of connections accepted by the server per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{connections}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_cpu_sys_children_seconds_total",
        "kind": "metric",
        "displayName": "System CPU Used by Children per Minute",
        "description": "System CPU consumed per minute by the background processes",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_cpu_sys_seconds_total",
        "kind": "metric",
        "displayName": "System CPU Used by Instance per Minute",
        "description": "System CPU consumed per minute by the Redis instance, which is the sum of system CPU consumed by all threads of the server process",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_cpu_user_children_seconds_total",
        "kind": "metric",
        "displayName": "User CPU Used by Children per Minute",
        "description": "User CPU consumed per minute by the background processes",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_cpu_user_seconds_total",
        "kind": "metric",
        "displayName": "User CPU Used by Instance per Minute",
        "description": "User CPU consumed per minute by the Redis instance, which is the sum of user CPU consumed by all threads of the server process",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_db_avg_ttl_seconds",
        "kind": "metric",
        "displayName": "Avg TTL per DB",
        "description": "Avg TTL per DB",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_db_keys",
        "kind": "metric",
        "displayName": "Number of Keys per DB",
        "description": "Total number of keys per DB",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{keys}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_db_keys_expiring",
        "kind": "metric",
        "displayName": "Number of Expiring Keys per DB",
        "description": "Total number of expiring keys per DB",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{keys}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_evicted_keys_total",
        "kind": "metric",
        "displayName": "Total Evicted Keys per Minute",
        "description": "Keys evicted per minute (since restart)",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{keys}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_expired_keys_total",
        "kind": "metric",
        "displayName": "Total Expired Keys per Minute",
        "description": "Keys expired per minute (since restart)",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{keys}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_instance_info",
        "kind": "metric",
        "displayName": "Redis Instance Information",
        "description": "Information about the Redis instance",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_keyspace_hits_total",
        "kind": "metric",
        "displayName": "Total Keyspace Hits per Minute",
        "description": "Number of successful lookups of keys in the main dictionary per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{hits}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_keyspace_misses_total",
        "kind": "metric",
        "displayName": "Total Keyspace Misses per Minute",
        "description": "Number of failed lookups of keys in the main dictionary per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{misses}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_master_last_io_seconds_ago",
        "kind": "metric",
        "displayName": "Last IO with Primary",
        "description": "Number of seconds since the last interaction with the primary",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_master_link_up",
        "kind": "metric",
        "displayName": "Primary Link Up",
        "description": "Status of the link with the primary (up/down)",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_master_sync_in_progress",
        "kind": "metric",
        "displayName": "Primary Sync in Progress",
        "description": "Indicates if the primary is syncing to the replica",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_mem_fragmentation_ratio",
        "kind": "metric",
        "displayName": "Memory Fragmentation Ratio",
        "description": "Memory fragmentation ratio",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_memory_max_bytes",
        "kind": "metric",
        "displayName": "Maximum Memory Limit",
        "description": "Current memory limit configured by redis_mgr according to db memory limits",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_memory_used_bytes",
        "kind": "metric",
        "displayName": "Total Memory Used",
        "description": "Total memory used",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_memory_used_dataset_bytes",
        "kind": "metric",
        "displayName": "Dataset Memory Used",
        "description": "Size of the dataset",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_memory_used_lua_bytes",
        "kind": "metric",
        "displayName": "Lua Engine Memory Used",
        "description": "Number of bytes used by the Lua engine",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_memory_used_overhead_bytes",
        "kind": "metric",
        "displayName": "Overhead Memory Used",
        "description": "Sum of all overheads that the server allocated for managing its internal data structures",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_memory_used_scripts_bytes",
        "kind": "metric",
        "displayName": "Lua Scripts Memory Used",
        "description": "Number of bytes used by cached Lua scripts",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_net_input_bytes_total",
        "kind": "metric",
        "displayName": "Total Network Input per Minute",
        "description": "Number of bytes read by the shard per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "By/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_net_output_bytes_total",
        "kind": "metric",
        "displayName": "Total Network Output per Minute",
        "description": "Number of bytes written by the shard per minute",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "By/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_pubsub_channels",
        "kind": "metric",
        "displayName": "Number of Pub/Sub Channels",
        "description": "Global number of pub/sub channels with client subscriptions",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{channels}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_pubsub_patterns",
        "kind": "metric",
        "displayName": "Number of Pub/Sub Patterns",
        "description": "Global number of pub/sub patterns with client subscriptions",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{patterns}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_rdb_changes_since_last_save",
        "kind": "metric",
        "displayName": "Changes Since Last Save",
        "description": "Number of changes since the last dump",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{changes}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_rdb_last_save_timestamp_seconds",
        "kind": "metric",
        "displayName": "Timestamp of Last Save",
        "description": "Timestamp of last successful RDB save",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_rejected_connections_total",
        "kind": "metric",
        "displayName": "Total Rejected Connections per Minute",
        "description": "Number of connections rejected per minute because of maxclients limit",
        "category": "sum",
        "contentType": "sum",
        "aggregationTemporality": "cumulative",
        "isMonotonic": true,
        "type": "double",
        "unit": "{connections}/min",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_slave_info",
        "kind": "metric",
        "displayName": "Replica Information",
        "description": "Information about the Redis replica",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_slowlog_length",
        "kind": "metric",
        "displayName": "Slow Log Length",
        "description": "Number of entries in the slow log",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{entries}",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_up",
        "kind": "metric",
        "displayName": "Instance Up Information",
        "description": "Information about if the Redis instance is up and running",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "redis",
          "version": 1
        },
        "name": "redis_uptime_in_seconds",
        "kind": "metric",
        "displayName": "Instance Uptime",
        "description": "Number of seconds since Redis instance start",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "s",
        "ingestGranularities": [
          60
        ]
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "ootelcol_exporter_queue_size",
        "kind": "metric",
        "displayName": "Exporters queue size",
        "description": "Current size of the retry queue (in batches).",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{batches}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_enqueue_failed_log_records",
        "kind": "metric",
        "displayName": "Exporters enqueue failed log records",
        "description": "Number of log records failed to be added to the sending queue.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{log_records}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_enqueue_failed_metric_points",
        "kind": "metric",
        "displayName": "Exporters enqueue failed metric points",
        "description": "Number of metric points failed to be added to the sending queue.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{metric_points}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_enqueue_failed_spans",
        "kind": "metric",
        "displayName": "Exporters enqueue failed spans",
        "description": "Number of spans failed to be added to the sending queue.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{spans}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_send_failed_log_records",
        "kind": "metric",
        "displayName": "Exporters failed sent log records",
        "description": "Number of log records in failed attempts to send to destination.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{log_records}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_send_failed_metric_points",
        "kind": "metric",
        "displayName": "Exporters failed send metric points",
        "description": "Number of metric points in failed attempts to send to destination.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{metric_points}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_send_failed_requests",
        "kind": "metric",
        "displayName": "Exporters failed requests",
        "description": "Number of times exporters failed to send requests to the destination.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{requests}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_send_failed_spans",
        "kind": "metric",
        "displayName": "Exporters failed send spans",
        "description": "Number of spans in failed attempts to send to destination.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{spans}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_sent_log_records",
        "kind": "metric",
        "displayName": "Exporters sent log records",
        "description": "Number of log record successfully sent to destination.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{log_records}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_sent_metric_points",
        "kind": "metric",
        "displayName": "Exporters sent metric points",
        "description": "Number of metric points successfully sent to destination.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{metric_points}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_exporter_sent_spans",
        "kind": "metric",
        "displayName": "Exporters sent spans",
        "description": "Number of spans successfully sent to destination.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{spans}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_process_cpu_seconds",
        "kind": "metric",
        "displayName": "Process cpu seconds",
        "description": "Total CPU user and system time in seconds.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_process_memory_rss",
        "kind": "metric",
        "displayName": "Process Memory RSS",
        "description": "Total physical memory (resident set size).",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_accepted_log_records",
        "kind": "metric",
        "displayName": "Processor accepted log records",
        "description": "Number of log records successfully pushed into the next component in the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{log_records}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_accepted_metric_points",
        "kind": "metric",
        "displayName": "Processor accepted metric points",
        "description": "Number of metric points successfully pushed into the next component in the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{metric_points}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_accepted_spans",
        "kind": "metric",
        "displayName": "Processor accepted spans",
        "description": "Number of spans successfully pushed into the next component in the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{spans}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_batch_batch_size_trigger_send",
        "kind": "metric",
        "displayName": "Batches sent trigger by size",
        "description": "Number of times the batch was sent due to a size trigger.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{batches}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_batch_timeout_trigger_send",
        "kind": "metric",
        "displayName": "Batches sent trigger by timeout",
        "description": "Number of times the batch was sent due to a timeout trigger.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{batches}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_dropped_log_records",
        "kind": "metric",
        "displayName": "Processor dropped log records",
        "description": "Number of log records that were dropped.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{log_records}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_dropped_metric_points",
        "kind": "metric",
        "displayName": "Processor dropped metric points",
        "description": "Number of metric points that were dropped.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{metric_points}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_dropped_spans",
        "kind": "metric",
        "displayName": "Processor dropped spans",
        "description": "Number of spans that were dropped.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{spans}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_refused_log_records",
        "kind": "metric",
        "displayName": "Processor refused log records",
        "description": "Number of log records that were rejected by the next component in the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{log_records}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_refused_metric_points",
        "kind": "metric",
        "displayName": "Processor refused metric points",
        "description": "Number of metric points that were rejected by the next component in the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{metric_points}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_processor_refused_spans",
        "kind": "metric",
        "displayName": "Processor refused spans",
        "description": "Number of spans that were rejected by the next component in the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{spans}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_process_runtime_heap_alloc_bytes",
        "kind": "metric",
        "displayName": "Process runtime heap allocated",
        "description": "Bytes of allocated heap objects (see 'go doc runtime.MemStats.HeapAlloc').",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_process_runtime_total_alloc_bytes",
        "kind": "metric",
        "displayName": "Process runtime totoal allocated bytes",
        "description": "Cumulative bytes allocated for heap objects (see 'go doc runtime.MemStats.TotalAlloc').",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_process_runtime_total_sys_memory_bytes",
        "kind": "metric",
        "displayName": "Process runtime totoal system memory",
        "description": "Total bytes of memory obtained from the OS (see 'go doc runtime.MemStats.Sys').",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "By"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_process_uptime",
        "kind": "metric",
        "displayName": "Process Uptime",
        "description": "Uptime of the process in seconds.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "s"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_receiver_accepted_log_records",
        "kind": "metric",
        "displayName": "Receiver accepted log records",
        "description": "Number of log records successfully pushed into the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{log_records}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_receiver_accepted_metric_points",
        "kind": "metric",
        "displayName": "Receiver accepted metric points",
        "description": "Number of metric points successfully pushed into the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{metric_points}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_receiver_accepted_spans",
        "kind": "metric",
        "displayName": "Receiver accepted spans",
        "description": "Number of spans successfully pushed into the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{spans}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_receiver_refused_log_records",
        "kind": "metric",
        "displayName": "Receiver refused log records",
        "description": "Number of log records that could not be pushed into the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{log_records}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_receiver_refused_metric_points",
        "kind": "metric",
        "displayName": "Receiver refused metric points",
        "description": "Number of metric points that could not be pushed into the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{metric_points}"
      },
      {
        "namespace": {
          "name": "self_telemetry",
          "version": 1
        },
        "name": "otelcol_receiver_refused_spans",
        "kind": "metric",
        "displayName": "Receiver refused spans",
        "description": "Number of spans that could not be pushed into the pipeline.",
        "category": "current",
        "contentType": "gauge",
        "aggregationTemporality": "unspecified",
        "isMonotonic": false,
        "type": "double",
        "unit": "{spans}"
      },
      {
        "namespace": {
          "name": "sum",
          "version": 1
        },
        "name": "average_download_time_per_resource",
        "kind": "metric",
        "displayName": "Average Download Time for Resource",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "sum",
          "version": 1
        },
        "name": "average_duration_per_job",
        "kind": "metric",
        "displayName": "Average Duration per Job",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "sum",
          "version": 1
        },
        "name": "average_vct_per_page",
        "kind": "metric",
        "displayName": "Average visual complete time per page",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "ms"
      },
      {
        "namespace": {
          "name": "troubleshooting",
          "version": 1
        },
        "name": "anomaly_health",
        "kind": "metric",
        "displayName": "AD Health Status",
        "category": "average",
        "contentType": "distribution",
        "aggregationTemporality": "delta",
        "isMonotonic": false,
        "type": "double",
        "unit": "",
        "ingestGranularities": [
          60
        ]
      }
    ]
  }
]