export interface SearchNumResponse {
    "provider": string,
    "CurrentStatus": {
        "state": string,
        "timestamp": Date,
    },
    "PromisedDate": Date,
    "TrackingNumber": string,
    "TrackingURL": string,
    "SupportPhoneNumbers": [
        string
    ],
    "TransitEvents": Array<{
        "state": string,
        "timestamp": Date,
        "hub": string,
        reason: string
    }>,
    "CreateDate": Date
}