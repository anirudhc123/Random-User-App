# Vercel Error Codes Reference

This guide provides solutions and insights for common Vercel errors. These errors may occur during application development, deployment, or when using platform features.

## Application Errors

### Function Errors (500-504)

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| BODY_NOT_A_STRING_FROM_FUNCTION | 502 | Function response body is not a string |
| MIDDLEWARE_INVOCATION_FAILED | 500 | Middleware execution failed |
| MIDDLEWARE_INVOCATION_TIMEOUT | 504 | Middleware execution timed out |
| EDGE_FUNCTION_INVOCATION_FAILED | 500 | Edge function execution failed |
| EDGE_FUNCTION_INVOCATION_TIMEOUT | 504 | Edge function execution timed out |
| FUNCTION_INVOCATION_FAILED | 500 | Serverless function execution failed |
| FUNCTION_INVOCATION_TIMEOUT | 504 | Serverless function execution timed out |
| FUNCTION_PAYLOAD_TOO_LARGE | 413 | Request payload exceeds size limit |
| FUNCTION_RESPONSE_PAYLOAD_TOO_LARGE | 500 | Response payload exceeds size limit |
| FUNCTION_THROTTLED | 503 | Function execution rate limited |
| NO_RESPONSE_FROM_FUNCTION | 502 | Function did not return a response |
| MICROFRONTENDS_MIDDLEWARE_ERROR | 500 | Error in microfrontends middleware |

### Deployment Errors (400-410)

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| DEPLOYMENT_BLOCKED | 403 | Deployment access denied |
| DEPLOYMENT_PAUSED | 503 | Deployment temporarily paused |
| DEPLOYMENT_DISABLED | 402 | Deployment disabled (payment required) |
| DEPLOYMENT_NOT_FOUND | 404 | Deployment not found |
| NOT_FOUND | 404 | Resource not found |
| DEPLOYMENT_DELETED | 410 | Deployment has been deleted |
| DEPLOYMENT_NOT_READY_REDIRECTING | 303 | Deployment in progress |

### DNS Errors

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| DNS_HOSTNAME_EMPTY | 502 | Empty hostname provided |
| DNS_HOSTNAME_NOT_FOUND | 502 | Hostname not found |
| DNS_HOSTNAME_RESOLVE_FAILED | 502 | Failed to resolve hostname |
| DNS_HOSTNAME_RESOLVED_PRIVATE | 404 | Hostname resolves to private IP |
| DNS_HOSTNAME_SERVER_ERROR | 502 | DNS server error |

### Routing Errors

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| TOO_MANY_FORKS | 502 | Exceeded maximum number of route forks |
| TOO_MANY_FILESYSTEM_CHECKS | 502 | Exceeded filesystem check limit |
| ROUTER_CANNOT_MATCH | 502 | Unable to match route |
| ROUTER_EXTERNAL_TARGET_CONNECTION_ERROR | 502 | Failed to connect to external target |
| ROUTER_EXTERNAL_TARGET_ERROR | 502 | External target error |
| ROUTER_TOO_MANY_HAS_SELECTIONS | 502 | Exceeded route selections limit |
| ROUTER_EXTERNAL_TARGET_HANDSHAKE_ERROR | 502 | External target handshake failed |

### Request Errors (400-431)

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| INVALID_REQUEST_METHOD | 405 | Method not allowed |
| MALFORMED_REQUEST_HEADER | 400 | Invalid request header |
| REQUEST_HEADER_TOO_LARGE | 431 | Request header size too large |
| RESOURCE_NOT_FOUND | 404 | Requested resource not found |
| URL_TOO_LONG | 414 | URL exceeds length limit |

### Image Optimization Errors

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| INVALID_IMAGE_OPTIMIZE_REQUEST | 400 | Invalid image optimization request |
| OPTIMIZED_EXTERNAL_IMAGE_REQUEST_FAILED | 502 | External image optimization failed |
| OPTIMIZED_EXTERNAL_IMAGE_REQUEST_INVALID | 502 | Invalid external image request |
| OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED | 502 | Unauthorized external image request |
| OPTIMIZED_EXTERNAL_IMAGE_TOO_MANY_REDIRECTS | 502 | Too many redirects for external image |

## Platform Errors

These errors are related to the Vercel platform infrastructure. If encountered, contact Vercel support.

### Internal Errors (500)

| Error Code | Description |
|------------|-------------|
| INTERNAL_EDGE_FUNCTION_INVOCATION_FAILED | Edge function internal error |
| INTERNAL_EDGE_FUNCTION_INVOCATION_TIMEOUT | Edge function internal timeout |
| INTERNAL_FUNCTION_INVOCATION_FAILED | Function internal error |
| INTERNAL_FUNCTION_INVOCATION_TIMEOUT | Function internal timeout |
| INTERNAL_FUNCTION_NOT_FOUND | Function not found internally |
| INTERNAL_FUNCTION_NOT_READY | Function not ready |
| INTERNAL_DEPLOYMENT_FETCH_FAILED | Deployment fetch failed |
| INTERNAL_UNARCHIVE_FAILED | Unarchive operation failed |
| INTERNAL_UNEXPECTED_ERROR | Unexpected platform error |
| INTERNAL_ROUTER_CANNOT_PARSE_PATH | Router path parsing error |
| INTERNAL_STATIC_REQUEST_FAILED | Static asset request failed |
| INTERNAL_OPTIMIZED_IMAGE_REQUEST_FAILED | Image optimization failed |
| INTERNAL_CACHE_ERROR | Cache operation error |
| INTERNAL_CACHE_KEY_TOO_LONG | Cache key length exceeded |
| INTERNAL_CACHE_LOCK_FULL | Cache lock capacity reached |
| INTERNAL_CACHE_LOCK_TIMEOUT | Cache lock timeout |
| INTERNAL_MISSING_RESPONSE_FROM_CACHE | Missing cache response |
| INTERNAL_FUNCTION_SERVICE_UNAVAILABLE | Function service unavailable |
| INTERNAL_MICROFRONTENDS_INVALID_CONFIGURATION_ERROR | Invalid microfrontends config |
| INTERNAL_MICROFRONTENDS_BUILD_ERROR | Microfrontends build error |
| INTERNAL_MICROFRONTENDS_UNEXPECTED_ERROR | Unexpected microfrontends error |

---
Last updated: March 12, 2025 