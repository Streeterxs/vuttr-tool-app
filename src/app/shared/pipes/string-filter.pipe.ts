import { Pipe, PipeTransform } from '@angular/core';
import { Tool } from '../interfaces/tools';

@Pipe({
  name: 'stringToolsFilter'
})
export class StringToolsFilterPipe implements PipeTransform {

  transform(items: Tool[], value: any): any {

    if(!items){
      return null;
    }
    if (!value){
      return items;
    }
    
    return items.filter(singItem => 
        (singItem.getTitle.toLowerCase().includes(value.toLowerCase())) 
        || (singItem.getDescription.toLowerCase().includes(value.toLowerCase()))
        || this.checkTagsToFilter(singItem.getTags, value.toLowerCase())
    );
  }
  checkTagsToFilter(tags: string[], value){
    let hasTag = false;
    tags.forEach(tag => {
        if(tag.toLowerCase().includes(value)){
            hasTag = true
        }
    })
    return hasTag;
  }
}