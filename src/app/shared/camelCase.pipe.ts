import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'camelCase'
})
export class CamelCase implements PipeTransform{
    transform(value:any){  
        let camelCase = value.toLowerCase().split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
        return camelCase
    }
    
}