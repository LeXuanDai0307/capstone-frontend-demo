// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "SchemaDefinition",
      "operationTypes": [
        {
          "kind": "OperationTypeDefinition",
          "operation": "query",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Query"
            }
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "enum"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "value"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "ENUM_VALUE"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "globalOptions"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sourceName"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "endpoint"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "operationHeaders"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryStringOptions"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryParams"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "OBJECT"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "httpOperation"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "path"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "operationSpecificHeaders"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "httpMethod"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "HTTPMethod"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isBinary"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "requestBaseBody"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryParamArgMap"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryStringOptionsByParam"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Query"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find administrative divisions, filtering by optional criteria. If no criteria are set, you will get back all\nknown divisions.\n"
          },
          "name": {
            "kind": "Name",
            "value": "findAdminDivisionsUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places near this location. Latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD"
              },
              "name": {
                "kind": "Name",
                "value": "location"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The location radius within which to find places"
              },
              "name": {
                "kind": "Name",
                "value": "radius"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The unit of distance: MI | KM"
              },
              "name": {
                "kind": "Name",
                "value": "distanceUnit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "MI"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "countryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places NOT in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "excludedCountryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having at least this population"
              },
              "name": {
                "kind": "Name",
                "value": "minPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having no more than this population"
              },
              "name": {
                "kind": "Name",
                "value": "maxPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these time-zones (comma-delimited)"
              },
              "name": {
                "kind": "Name",
                "value": "timeZoneIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort places. \nFormat: ±SORT_FIELD,±SORT_FIELD \nwhere SORT_FIELD = countryCode | elevation | name | population"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE"
              },
              "name": {
                "kind": "Name",
                "value": "includeDeleted"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "NONE"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Places_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/adminDivisions"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"location\":\"location\",\"radius\":\"radius\",\"distanceUnit\":\"distanceUnit\",\"countryIds\":\"countryIds\",\"excludedCountryIds\":\"excludedCountryIds\",\"minPopulation\":\"minPopulation\",\"maxPopulation\":\"maxPopulation\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"timeZoneIds\":\"timeZoneIds\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\",\"includeDeleted\":\"includeDeleted\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get the details for a specific administrative division, including location coordinates, population, and\nelevation above sea-level (if available).\n"
          },
          "name": {
            "kind": "Name",
            "value": "getAdminDivisionUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An admin-division id (either native 'id' or 'wikiDataId')"
              },
              "name": {
                "kind": "Name",
                "value": "divisionId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Place_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/adminDivisions/{args.divisionId}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"asciiMode\":\"asciiMode\",\"languageCode\":\"languageCode\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find cities near the given administrative division, filtering by optional criteria. If no criteria are set, you\nwill get back all known cities.\n"
          },
          "name": {
            "kind": "Name",
            "value": "findCitiesNearAdminDivisionUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An admin-division id (either native 'id' or 'wikiDataId')"
              },
              "name": {
                "kind": "Name",
                "value": "divisionId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The location radius within which to find places"
              },
              "name": {
                "kind": "Name",
                "value": "radius"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The unit of distance: MI | KM"
              },
              "name": {
                "kind": "Name",
                "value": "distanceUnit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "MI"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "countryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places NOT in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "excludedCountryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having at least this population"
              },
              "name": {
                "kind": "Name",
                "value": "minPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having no more than this population"
              },
              "name": {
                "kind": "Name",
                "value": "maxPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these time-zones (comma-delimited)"
              },
              "name": {
                "kind": "Name",
                "value": "timeZoneIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places for these types (comma-delimited): CITY | ADM2"
              },
              "name": {
                "kind": "Name",
                "value": "types"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort places. \nFormat: ±SORT_FIELD,±SORT_FIELD \nwhere SORT_FIELD = countryCode | elevation | name | population"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE"
              },
              "name": {
                "kind": "Name",
                "value": "includeDeleted"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "NONE"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Places_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/adminDivisions/{args.divisionId}/nearbyCities"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"radius\":\"radius\",\"distanceUnit\":\"distanceUnit\",\"countryIds\":\"countryIds\",\"excludedCountryIds\":\"excludedCountryIds\",\"minPopulation\":\"minPopulation\",\"maxPopulation\":\"maxPopulation\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"timeZoneIds\":\"timeZoneIds\",\"types\":\"types\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\",\"includeDeleted\":\"includeDeleted\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find administrative divisions near the given origin division, filtering by optional criteria. If no criteria\nare set, you will get back all known divisions.\n"
          },
          "name": {
            "kind": "Name",
            "value": "findDivisionsNearAdminDivisionUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An admin-division id (either native 'id' or 'wikiDataId')"
              },
              "name": {
                "kind": "Name",
                "value": "divisionId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The location radius within which to find places"
              },
              "name": {
                "kind": "Name",
                "value": "radius"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The unit of distance: MI | KM"
              },
              "name": {
                "kind": "Name",
                "value": "distanceUnit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "MI"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "countryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places NOT in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "excludedCountryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having at least this population"
              },
              "name": {
                "kind": "Name",
                "value": "minPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having no more than this population"
              },
              "name": {
                "kind": "Name",
                "value": "maxPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these time-zones (comma-delimited)"
              },
              "name": {
                "kind": "Name",
                "value": "timeZoneIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort places. \nFormat: ±SORT_FIELD,±SORT_FIELD \nwhere SORT_FIELD = countryCode | elevation | name | population"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE"
              },
              "name": {
                "kind": "Name",
                "value": "includeDeleted"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "NONE"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Places_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/adminDivisions/{args.divisionId}/nearbyDivisions"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"radius\":\"radius\",\"distanceUnit\":\"distanceUnit\",\"countryIds\":\"countryIds\",\"excludedCountryIds\":\"excludedCountryIds\",\"minPopulation\":\"minPopulation\",\"maxPopulation\":\"maxPopulation\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"timeZoneIds\":\"timeZoneIds\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\",\"includeDeleted\":\"includeDeleted\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.\n"
          },
          "name": {
            "kind": "Name",
            "value": "findCitiesUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places near this location. Latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD"
              },
              "name": {
                "kind": "Name",
                "value": "location"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The location radius within which to find places"
              },
              "name": {
                "kind": "Name",
                "value": "radius"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The unit of distance: MI | KM"
              },
              "name": {
                "kind": "Name",
                "value": "distanceUnit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "MI"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "countryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places NOT in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "excludedCountryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having at least this population"
              },
              "name": {
                "kind": "Name",
                "value": "minPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having no more than this population"
              },
              "name": {
                "kind": "Name",
                "value": "maxPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these time-zones (comma-delimited)"
              },
              "name": {
                "kind": "Name",
                "value": "timeZoneIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places for these types (comma-delimited): CITY | ADM2"
              },
              "name": {
                "kind": "Name",
                "value": "types"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort places. \nFormat: ±SORT_FIELD,±SORT_FIELD \nwhere SORT_FIELD = countryCode | elevation | name | population"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE"
              },
              "name": {
                "kind": "Name",
                "value": "includeDeleted"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "NONE"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Places_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/cities"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"location\":\"location\",\"radius\":\"radius\",\"distanceUnit\":\"distanceUnit\",\"countryIds\":\"countryIds\",\"excludedCountryIds\":\"excludedCountryIds\",\"minPopulation\":\"minPopulation\",\"maxPopulation\":\"maxPopulation\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"timeZoneIds\":\"timeZoneIds\",\"types\":\"types\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\",\"includeDeleted\":\"includeDeleted\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get the details for a specific city, including location coordinates, population, and elevation above sea-level\n(if available).\n"
          },
          "name": {
            "kind": "Name",
            "value": "getCityUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A city id (either native 'id' or 'wikiDataId')"
              },
              "name": {
                "kind": "Name",
                "value": "cityId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Place_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/cities/{args.cityId}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"asciiMode\":\"asciiMode\",\"languageCode\":\"languageCode\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get city date-time"
          },
          "name": {
            "kind": "Name",
            "value": "getCityDateTimeUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A city id (either native 'id' or 'wikiDataId')"
              },
              "name": {
                "kind": "Name",
                "value": "cityId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Date_Time_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/cities/{args.cityId}/dateTime"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get distance from the given city"
          },
          "name": {
            "kind": "Name",
            "value": "getCityDistanceUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A city id (either native 'id' or 'wikiDataId')"
              },
              "name": {
                "kind": "Name",
                "value": "cityId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Distance to this city"
              },
              "name": {
                "kind": "Name",
                "value": "toCityId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The unit of distance: MI | KM"
              },
              "name": {
                "kind": "Name",
                "value": "distanceUnit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "MI"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Distance_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/cities/{args.cityId}/distance"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"toCityId\":\"toCityId\",\"distanceUnit\":\"distanceUnit\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level\n(if available).\n"
          },
          "name": {
            "kind": "Name",
            "value": "getCityLocatedInUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A city id (either native 'id' or 'wikiDataId')"
              },
              "name": {
                "kind": "Name",
                "value": "cityId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Place_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/cities/{args.cityId}/locatedIn"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"asciiMode\":\"asciiMode\",\"languageCode\":\"languageCode\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find cities near the given origin city, filtering by optional criteria. If no criteria are set, you will get\nback all known cities.\n"
          },
          "name": {
            "kind": "Name",
            "value": "findCitiesNearCityUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A city id (either native 'id' or 'wikiDataId')"
              },
              "name": {
                "kind": "Name",
                "value": "cityId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The location radius within which to find places"
              },
              "name": {
                "kind": "Name",
                "value": "radius"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The unit of distance: MI | KM"
              },
              "name": {
                "kind": "Name",
                "value": "distanceUnit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "MI"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "countryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places NOT in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "excludedCountryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having at least this population"
              },
              "name": {
                "kind": "Name",
                "value": "minPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having no more than this population"
              },
              "name": {
                "kind": "Name",
                "value": "maxPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these time-zones (comma-delimited)"
              },
              "name": {
                "kind": "Name",
                "value": "timeZoneIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places for these types (comma-delimited): CITY | ADM2"
              },
              "name": {
                "kind": "Name",
                "value": "types"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort places. \nFormat: ±SORT_FIELD,±SORT_FIELD \nwhere SORT_FIELD = countryCode | elevation | name | population"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE"
              },
              "name": {
                "kind": "Name",
                "value": "includeDeleted"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "NONE"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Places_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/cities/{args.cityId}/nearbyCities"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"radius\":\"radius\",\"distanceUnit\":\"distanceUnit\",\"countryIds\":\"countryIds\",\"excludedCountryIds\":\"excludedCountryIds\",\"minPopulation\":\"minPopulation\",\"maxPopulation\":\"maxPopulation\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"timeZoneIds\":\"timeZoneIds\",\"types\":\"types\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\",\"includeDeleted\":\"includeDeleted\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get city time"
          },
          "name": {
            "kind": "Name",
            "value": "getCityTimeUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A city id (either native 'id' or 'wikiDataId')"
              },
              "name": {
                "kind": "Name",
                "value": "cityId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Time_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/cities/{args.cityId}/time"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.\n"
          },
          "name": {
            "kind": "Name",
            "value": "getCountriesUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only countries supporting this currency"
              },
              "name": {
                "kind": "Name",
                "value": "currencyCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort countries. \nFormat: ±SORT_FIELD \nwhere SORT_FIELD = code | name"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Countries_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/countries"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"currencyCode\":\"currencyCode\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get the details for a specific country, including number of regions."
          },
          "name": {
            "kind": "Name",
            "value": "getCountryUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An ISO-3166 country code or WikiData id"
              },
              "name": {
                "kind": "Name",
                "value": "countryId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Country_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/countries/{args.countryId}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"asciiMode\":\"asciiMode\",\"languageCode\":\"languageCode\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get all regions in a specific country. These could be states, provinces, districts, or otherwise major\npolitical divisions.\n"
          },
          "name": {
            "kind": "Name",
            "value": "getRegionsUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An ISO-3166 country code or WikiData id"
              },
              "name": {
                "kind": "Name",
                "value": "countryId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort regions. \nFormat: ±SORT_FIELD \nwhere SORT_FIELD = fipsCode | isoCode | name"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Country_Regions_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/countries/{args.countryId}/regions"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get the details of a specific country region, including number of cities."
          },
          "name": {
            "kind": "Name",
            "value": "getRegionUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An ISO-3166 country code or WikiData id"
              },
              "name": {
                "kind": "Name",
                "value": "countryId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An ISO-3166 or FIPS region code"
              },
              "name": {
                "kind": "Name",
                "value": "regionCode"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Country_Region_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/countries/{args.countryId}/regions/{args.regionCode}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"asciiMode\":\"asciiMode\",\"languageCode\":\"languageCode\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get the administrative divisions in a specific country region. The country and region info is omitted in the\nresponse.\n"
          },
          "name": {
            "kind": "Name",
            "value": "findRegionDivisionsUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An ISO-3166 country code or WikiData id"
              },
              "name": {
                "kind": "Name",
                "value": "countryId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An ISO-3166 or FIPS region code"
              },
              "name": {
                "kind": "Name",
                "value": "regionCode"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having at least this population"
              },
              "name": {
                "kind": "Name",
                "value": "minPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having no more than this population"
              },
              "name": {
                "kind": "Name",
                "value": "maxPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these time-zones (comma-delimited)"
              },
              "name": {
                "kind": "Name",
                "value": "timeZoneIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort place results. \n'Format: ±SORT_FIELD,±SORT_FIELD' \nwhere SORT_FIELD = elevation | name | population"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE"
              },
              "name": {
                "kind": "Name",
                "value": "includeDeleted"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "NONE"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Places_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/countries/{args.countryId}/regions/{args.regionCode}/adminDivisions"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"minPopulation\":\"minPopulation\",\"maxPopulation\":\"maxPopulation\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"timeZoneIds\":\"timeZoneIds\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\",\"includeDeleted\":\"includeDeleted\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get the cities in a specific country region. The country and region info is omitted in the response.\n"
          },
          "name": {
            "kind": "Name",
            "value": "findRegionCitiesUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An ISO-3166 country code or WikiData id"
              },
              "name": {
                "kind": "Name",
                "value": "countryId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "An ISO-3166 or FIPS region code"
              },
              "name": {
                "kind": "Name",
                "value": "regionCode"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having at least this population"
              },
              "name": {
                "kind": "Name",
                "value": "minPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having no more than this population"
              },
              "name": {
                "kind": "Name",
                "value": "maxPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these time-zones (comma-delimited)"
              },
              "name": {
                "kind": "Name",
                "value": "timeZoneIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places for these types (comma-delimited): CITY | ADM2"
              },
              "name": {
                "kind": "Name",
                "value": "types"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort place results. \n'Format: ±SORT_FIELD,±SORT_FIELD' \nwhere SORT_FIELD = elevation | name | population"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE"
              },
              "name": {
                "kind": "Name",
                "value": "includeDeleted"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "NONE"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Places_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/countries/{args.countryId}/regions/{args.regionCode}/cities"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"minPopulation\":\"minPopulation\",\"maxPopulation\":\"maxPopulation\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"timeZoneIds\":\"timeZoneIds\",\"types\":\"types\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\",\"includeDeleted\":\"includeDeleted\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back\nall known cities.\n"
          },
          "name": {
            "kind": "Name",
            "value": "findCitiesNearLocationUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD"
              },
              "name": {
                "kind": "Name",
                "value": "locationId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The location radius within which to find places"
              },
              "name": {
                "kind": "Name",
                "value": "radius"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The unit of distance: MI | KM"
              },
              "name": {
                "kind": "Name",
                "value": "distanceUnit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "MI"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "countryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places NOT in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "excludedCountryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having at least this population"
              },
              "name": {
                "kind": "Name",
                "value": "minPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having no more than this population"
              },
              "name": {
                "kind": "Name",
                "value": "maxPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these time-zones (comma-delimited)"
              },
              "name": {
                "kind": "Name",
                "value": "timeZoneIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places for these types (comma-delimited): CITY | ADM2"
              },
              "name": {
                "kind": "Name",
                "value": "types"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort places. \nFormat: ±SORT_FIELD,±SORT_FIELD \nwhere SORT_FIELD = countryCode | elevation | name | population"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE"
              },
              "name": {
                "kind": "Name",
                "value": "includeDeleted"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "NONE"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Places_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/locations/{args.locationId}/nearbyCities"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"radius\":\"radius\",\"distanceUnit\":\"distanceUnit\",\"countryIds\":\"countryIds\",\"excludedCountryIds\":\"excludedCountryIds\",\"minPopulation\":\"minPopulation\",\"maxPopulation\":\"maxPopulation\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"timeZoneIds\":\"timeZoneIds\",\"types\":\"types\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\",\"includeDeleted\":\"includeDeleted\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find administrative divisions near the given location, filtering by optional criteria. If no criteria are set,\nyou will get back all known divisions.\n"
          },
          "name": {
            "kind": "Name",
            "value": "findDivisionsNearLocationUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD"
              },
              "name": {
                "kind": "Name",
                "value": "locationId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The location radius within which to find places"
              },
              "name": {
                "kind": "Name",
                "value": "radius"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The unit of distance: MI | KM"
              },
              "name": {
                "kind": "Name",
                "value": "distanceUnit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "MI"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "countryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places NOT in these countries (comma-delimited country codes or WikiData ids)"
              },
              "name": {
                "kind": "Name",
                "value": "excludedCountryIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having at least this population"
              },
              "name": {
                "kind": "Name",
                "value": "minPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places having no more than this population"
              },
              "name": {
                "kind": "Name",
                "value": "maxPopulation"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only entities whose names start with this prefix. If languageCode is set, the prefix will be matched on the name\nas it appears in that language."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefix"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "When name-prefix matching, whether or not to match on names in the default language if a non-default languageCode is set."
              },
              "name": {
                "kind": "Name",
                "value": "namePrefixDefaultLangResults"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Only places in these time-zones (comma-delimited)"
              },
              "name": {
                "kind": "Name",
                "value": "timeZoneIds"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results using ASCII characters"
              },
              "name": {
                "kind": "Name",
                "value": "asciiMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Display results in this language"
              },
              "name": {
                "kind": "Name",
                "value": "languageCode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "How to sort places. \nFormat: ±SORT_FIELD,±SORT_FIELD \nwhere SORT_FIELD = countryCode | elevation | name | population"
              },
              "name": {
                "kind": "Name",
                "value": "sort"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE"
              },
              "name": {
                "kind": "Name",
                "value": "includeDeleted"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "defaultValue": {
                "kind": "StringValue",
                "value": "NONE"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Places_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/geo/locations/{args.locationId}/nearbyDivisions"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"radius\":\"radius\",\"distanceUnit\":\"distanceUnit\",\"countryIds\":\"countryIds\",\"excludedCountryIds\":\"excludedCountryIds\",\"minPopulation\":\"minPopulation\",\"maxPopulation\":\"maxPopulation\",\"namePrefix\":\"namePrefix\",\"namePrefixDefaultLangResults\":\"namePrefixDefaultLangResults\",\"timeZoneIds\":\"timeZoneIds\",\"asciiMode\":\"asciiMode\",\"hateoasMode\":\"hateoasMode\",\"languageCode\":\"languageCode\",\"limit\":\"limit\",\"offset\":\"offset\",\"sort\":\"sort\",\"includeDeleted\":\"includeDeleted\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies."
          },
          "name": {
            "kind": "Name",
            "value": "getCurrenciesUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Currencies for this country id"
              },
              "name": {
                "kind": "Name",
                "value": "countryId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Currencies_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/locale/currencies"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"countryId\":\"countryId\",\"hateoasMode\":\"hateoasMode\",\"limit\":\"limit\",\"offset\":\"offset\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get all supported languages"
          },
          "name": {
            "kind": "Name",
            "value": "getLanguagesUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Languages_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/locale/languages"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"hateoasMode\":\"hateoasMode\",\"limit\":\"limit\",\"offset\":\"offset\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get all known locales"
          },
          "name": {
            "kind": "Name",
            "value": "getLocalesUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Locales_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/locale/locales"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"hateoasMode\":\"hateoasMode\",\"limit\":\"limit\",\"offset\":\"offset\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get all known time-zones"
          },
          "name": {
            "kind": "Name",
            "value": "getTimezonesUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Include HATEOAS-style links in results"
              },
              "name": {
                "kind": "Name",
                "value": "hateoasMode"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "defaultValue": {
                "kind": "BooleanValue",
                "value": true
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The maximum number of results to retrieve"
              },
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "10"
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "The zero-ary offset index into the results"
              },
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Time_Zones_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/locale/timezones"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"hateoasMode\":\"hateoasMode\",\"limit\":\"limit\",\"offset\":\"offset\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get time-zone"
          },
          "name": {
            "kind": "Name",
            "value": "getTimeZoneUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A time-zone id"
              },
              "name": {
                "kind": "Name",
                "value": "zoneId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Time_Zone_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/locale/timezones/{args.zoneId}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get time-zone date-time"
          },
          "name": {
            "kind": "Name",
            "value": "getTimeZoneDateTimeUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A time-zone id"
              },
              "name": {
                "kind": "Name",
                "value": "zoneId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Date_Time_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/locale/timezones/{args.zoneId}/dateTime"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Get time-zone time"
          },
          "name": {
            "kind": "Name",
            "value": "getTimeZoneTimeUsingGET"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "A time-zone id"
              },
              "name": {
                "kind": "Name",
                "value": "zoneId"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Time_Response"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/locale/timezones/{args.zoneId}/time"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "operationSpecificHeaders"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json\"}"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                }
              ]
            }
          ]
        }
      ],
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "globalOptions"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "sourceName"
              },
              "value": {
                "kind": "StringValue",
                "value": "Cities"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "endpoint"
              },
              "value": {
                "kind": "StringValue",
                "value": "https://wft-geo-db.p.rapidapi.com/v1"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "operationHeaders"
              },
              "value": {
                "kind": "StringValue",
                "value": "{\"X-RapidAPI-Key\":\"f93d3b393dmsh13fea7cb6981b2ep1dba0ajsn654ffeb48c26\"}"
              }
            }
          ]
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A list of populated places"
      },
      "name": {
        "kind": "Name",
        "value": "Populated_Places_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "links"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Link"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Metadata"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "PopulatedPlaceSummary"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "An error that occurred processing the request"
      },
      "name": {
        "kind": "Name",
        "value": "Error"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ErrorCode"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "message"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "One of a set of enumerated error codes representing the types of errors that can occur processing a\nrequest"
      },
      "name": {
        "kind": "Name",
        "value": "ErrorCode"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ACCESS_DENIED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ENTITY_NOT_FOUND"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "INCOMPATIBLE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PARAM_INVALID"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PARAMS_MUTUALLY_EXCLUSIVE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "REQUEST_UNPROCESSABLE"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A HATEAOS link"
      },
      "name": {
        "kind": "Name",
        "value": "Link"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "href"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "rel"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Result metadata (currently only associated with collection results)"
      },
      "name": {
        "kind": "Name",
        "value": "Metadata"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The zero-ary offset into the results (0 is the first result)"
          },
          "name": {
            "kind": "Name",
            "value": "currentOffset"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "BigInt"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total number of results across pages"
          },
          "name": {
            "kind": "Name",
            "value": "totalCount"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "BigInt"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The `BigInt` scalar type represents non-fractional signed whole numeric values."
      },
      "name": {
        "kind": "Name",
        "value": "BigInt"
      },
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Minimal populated-place info"
      },
      "name": {
        "kind": "Name",
        "value": "PopulatedPlaceSummary"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The country name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "country"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ISO-3166 country code"
          },
          "name": {
            "kind": "Name",
            "value": "countryCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Included if this is the result of a distance query"
          },
          "name": {
            "kind": "Name",
            "value": "distance"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place GeoDB native id"
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place latittude (-90.0 to 90.0)"
          },
          "name": {
            "kind": "Name",
            "value": "latitude"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place longitude (-180.0 to 180.0)"
          },
          "name": {
            "kind": "Name",
            "value": "longitude"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place population"
          },
          "name": {
            "kind": "Name",
            "value": "population"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The region name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "region"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ISO or FIPS region code"
          },
          "name": {
            "kind": "Name",
            "value": "regionCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PopulatedPlaceType"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place WikiData id"
          },
          "name": {
            "kind": "Name",
            "value": "wikiDataId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "One of a set of enumerated populated-place types known by the service (currently only level-2 admin divisions and\ncities)"
      },
      "name": {
        "kind": "Name",
        "value": "PopulatedPlaceType"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ADM2"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CITY"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Populated-place details response"
      },
      "name": {
        "kind": "Name",
        "value": "Populated_Place_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Populated_Place_Details"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Full populated-place details"
      },
      "name": {
        "kind": "Name",
        "value": "Populated_Place_Details"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The country name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "country"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ISO-3166 country code"
          },
          "name": {
            "kind": "Name",
            "value": "countryCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "If this place has been soft-deleted"
          },
          "name": {
            "kind": "Name",
            "value": "deleted"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place elevation (meters) above sea level"
          },
          "name": {
            "kind": "Name",
            "value": "elevationMeters"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place GeoDB native id"
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place latittude (-90.0 to 90.0)"
          },
          "name": {
            "kind": "Name",
            "value": "latitude"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place longitude (-180.0 to 180.0)"
          },
          "name": {
            "kind": "Name",
            "value": "longitude"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place population"
          },
          "name": {
            "kind": "Name",
            "value": "population"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The region name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "region"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ISO or FIPS region code"
          },
          "name": {
            "kind": "Name",
            "value": "regionCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place timezone id"
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "PopulatedPlaceType"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The place WikiData id"
          },
          "name": {
            "kind": "Name",
            "value": "wikiDataId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "An ISO-6801 date-time response"
      },
      "name": {
        "kind": "Name",
        "value": "Date_Time_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date-time in ISO-6801 format: yyyyMMdd'T'HHmmssZ"
          },
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DateTime"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."
      },
      "name": {
        "kind": "Name",
        "value": "DateTime"
      },
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A decimal distance (in miles or kilometers)"
      },
      "name": {
        "kind": "Name",
        "value": "Distance_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The distance in units as set by the distanceUnit param (defaults to miles)"
          },
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "An ISO-8601 time response"
      },
      "name": {
        "kind": "Name",
        "value": "Time_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The time in ISO-8601 format: HHmmss.SSSZ"
          },
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A list of countries"
      },
      "name": {
        "kind": "Name",
        "value": "Countries_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "links"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Link"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Metadata"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Country_Summary"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Minimal country info"
      },
      "name": {
        "kind": "Name",
        "value": "Country_Summary"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ISO-3166 country code"
          },
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of supported ISO-4217 currency codes"
          },
          "name": {
            "kind": "Name",
            "value": "currencyCodes"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The country name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The country WikiData id"
          },
          "name": {
            "kind": "Name",
            "value": "wikiDataId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Country details response"
      },
      "name": {
        "kind": "Name",
        "value": "Country_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Country_Details"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Full country details"
      },
      "name": {
        "kind": "Name",
        "value": "Country_Details"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The country dialing prefix"
          },
          "name": {
            "kind": "Name",
            "value": "callingCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ISO-3166 country code"
          },
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of supported ISO-4217 currency codes"
          },
          "name": {
            "kind": "Name",
            "value": "currencyCodes"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The country flag image"
          },
          "name": {
            "kind": "Name",
            "value": "flagImageUri"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The country name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of regions in this country"
          },
          "name": {
            "kind": "Name",
            "value": "numRegions"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The country WikiData id"
          },
          "name": {
            "kind": "Name",
            "value": "wikiDataId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A list of country regions"
      },
      "name": {
        "kind": "Name",
        "value": "Country_Regions_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "links"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Link"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Metadata"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of RegionSummaries"
          },
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Country_Region_Summary"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Minimal country region info"
      },
      "name": {
        "kind": "Name",
        "value": "Country_Region_Summary"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "An ISO-3166 country code"
          },
          "name": {
            "kind": "Name",
            "value": "countryCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The FIPS 10-4 region code"
          },
          "name": {
            "kind": "Name",
            "value": "fipsCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ISO region code"
          },
          "name": {
            "kind": "Name",
            "value": "isoCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The region name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The region WikiData id"
          },
          "name": {
            "kind": "Name",
            "value": "wikiDataId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Country region details response"
      },
      "name": {
        "kind": "Name",
        "value": "Country_Region_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Country_Region_Details"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Full country region details"
      },
      "name": {
        "kind": "Name",
        "value": "Country_Region_Details"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The region's capital city (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "capital"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "An ISO-3166 country code"
          },
          "name": {
            "kind": "Name",
            "value": "countryCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The FIPS 10-4 region code"
          },
          "name": {
            "kind": "Name",
            "value": "fipsCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ISO region code"
          },
          "name": {
            "kind": "Name",
            "value": "isoCode"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The region name (varies by languageCode)"
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of cities in this region"
          },
          "name": {
            "kind": "Name",
            "value": "numCities"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The region WikiData id"
          },
          "name": {
            "kind": "Name",
            "value": "wikiDataId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A list of currencies"
      },
      "name": {
        "kind": "Name",
        "value": "Currencies_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "links"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Link"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Metadata"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Currency"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Currency info"
      },
      "name": {
        "kind": "Name",
        "value": "Currency"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ISO-4217 currency code"
          },
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A list of ISO-3166 country codes of countries supporting this currency"
          },
          "name": {
            "kind": "Name",
            "value": "countryCodes"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The currency symbol"
          },
          "name": {
            "kind": "Name",
            "value": "symbol"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A list of languages supported by the system"
      },
      "name": {
        "kind": "Name",
        "value": "Languages_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "links"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Link"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Metadata"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Language"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A language supported by the service"
      },
      "name": {
        "kind": "Name",
        "value": "Language"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "query_getLanguagesUsingGET_allOf_1_data_items_code"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "query_getLanguagesUsingGET_allOf_1_data_items_code"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "undefined"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "aa"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ab"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ae"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "af"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ak"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "am"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "an"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ar"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "as"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "av"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ay"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "az"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ba"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "be"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bm"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bn"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bo"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "br"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ca"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ce"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ch"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "co"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cy"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "da"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "de"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "dv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "dz"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ee"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "el"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "en"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "eo"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "es"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "et"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "eu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fa"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ff"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fj"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fo"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fy"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ga"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "gd"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "gl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "gn"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "gu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "gv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ha"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "he"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ho"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ht"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hy"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hz"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ia"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ie"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ig"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ii"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ik"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "io"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "it"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "iu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ja"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "jv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ka"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ki"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kj"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "km"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kn"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ko"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ks"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ku"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ky"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "la"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "lb"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "lg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "li"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ln"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "lo"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "lt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "lu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "lv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "mg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "mh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "mi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "mk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ml"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "mn"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "mr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ms"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "mt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "my"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "na"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nb"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nd"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ne"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ng"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nn"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "no"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ny"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "oc"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "oj"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "om"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "or"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "os"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pa"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ps"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "qu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "rm"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "rn"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ro"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ru"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "rw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sa"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sc"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sd"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "se"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "si"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sm"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sn"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "so"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sq"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ss"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "st"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "su"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ta"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "te"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "th"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ti"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tn"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "to"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ts"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ty"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ug"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "uk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ur"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "uz"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ve"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "vi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "vo"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "wa"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "wo"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "xh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "yi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "yo"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "za"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zu"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A list of locales"
      },
      "name": {
        "kind": "Name",
        "value": "Locales_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "links"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Link"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Metadata"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Locale"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A locale representing a language/region combination"
      },
      "name": {
        "kind": "Name",
        "value": "Locale"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The locale code"
          },
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A list of time-zones"
      },
      "name": {
        "kind": "Name",
        "value": "Time_Zones_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "links"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Link"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Metadata"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Time_Zone"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A time-zone"
      },
      "name": {
        "kind": "Name",
        "value": "Time_Zone"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The time-zone id"
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The time-zone name"
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of hours this time-zone is offset from UTC"
          },
          "name": {
            "kind": "Name",
            "value": "rawUtcOffsetHours"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A time-zone"
      },
      "name": {
        "kind": "Name",
        "value": "Time_Zone_Response"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "errors"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Error"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The time-zone id"
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The time-zone name"
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of hours this time-zone is offset from UTC"
          },
          "name": {
            "kind": "Name",
            "value": "rawUtcOffsetHours"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ObjMap"
      },
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HTTPMethod"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GET"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "HEAD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "POST"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PUT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "DELETE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CONNECT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "OPTIONS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TRACE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PATCH"
          },
          "directives": []
        }
      ],
      "directives": []
    }
  ]
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true
});