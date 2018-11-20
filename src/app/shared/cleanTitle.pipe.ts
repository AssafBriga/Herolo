import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'cleanTitle'
})
export class CleanTitle implements PipeTransform{
    transform(value:any){  
        let cleanValue = value.replace(/[^a-z\s]/gi, '')
        return cleanValue
    }
    
}