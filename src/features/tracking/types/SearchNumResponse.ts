import {TransitEvents} from "@/features/tracking/types/TransitEvents";

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
    "TransitEvents": Array<TransitEvents>,
    "CreateDate": Date
}