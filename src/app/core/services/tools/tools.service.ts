import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tool } from '../../../shared/interfaces/tools';
import { ToolsJsonParserService } from './tools-json-parser.service';


@Injectable()
export class ToolsService {
  endpoint = "http://localhost:3000/tools";
  toolList: Subject<Tool[]> = new Subject()

  constructor(private _http: HttpClient, private _toolsJsonParserService: ToolsJsonParserService) {}

  getAllToolsFromJsonParser(): Observable<Tool[]>{
    return this._http.get<Tool[]>(this.endpoint, {
      headers: {'Content-Type':'application/json'}
   }).pipe(map(setJson =>
      this._toolsJsonParserService.getToolsArrayFromToolsJsonArray(setJson)
    ));
  }

  getToolsSearchedFromJsonParser(key: string): Observable<Tool[]>{
    return this._http.get<Tool[]>(this.endpoint+"?q="+key, {
      headers: {'Content-Type':'application/json'}
   }).pipe(map(setJson =>
      this._toolsJsonParserService.getToolsArrayFromToolsJsonArray(setJson)
    ));
  }

  getToolsTagSearchedFromJsonParser(tag: string): Observable<Tool[]>{
    return this._http.get<Tool[]>(this.endpoint+"?tags_like="+tag, {
      headers: {'Content-Type':'application/json'}
   }).pipe(map(setJson =>
      this._toolsJsonParserService.getToolsArrayFromToolsJsonArray(setJson)
    ));
  }

  postToolAndGet(toolToPost: Tool): Observable<Tool>{
    return this._http.post<Tool>(this.endpoint, toolToPost, {
      headers: {'Content-Type':'application/json'}
   }).pipe(map(setJson =>
      this._toolsJsonParserService.getToolReturnedFromToolPostJson(setJson)
    ));
  }

  deleteTool(id: number): Observable<Object>{
    return this._http.delete(this.endpoint+"/"+id, {
      headers: {'Content-Type':'application/json'}
   });
  }
}