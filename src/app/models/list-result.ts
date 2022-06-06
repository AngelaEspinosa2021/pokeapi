import { Result } from "./result";

export interface ListResult {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}