import { Injectable } from '@angular/core';

import { Tool } from '../../../shared/interfaces/tools';


@Injectable()
export class ToolsJsonParserService {

  constructor() { }

  getSingToolFromJson(toolJson): Tool{
    return new Tool(
      toolJson.title,
      toolJson.link,
      toolJson.description,
      toolJson.tags,
      toolJson.id,
    )
  }

  getToolsArrayFromToolsJsonArray(toolsJson: any): Tool[]{
    return toolsJson.map(toolJson => this.getSingToolFromJson(toolJson))
  }

  getToolReturnedFromToolPostJson(toolJson: any): Tool{
    return this.getSingToolFromJson(toolJson);
  }
}
