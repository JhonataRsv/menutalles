import { Tarefa } from './Tarefa.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://localhost:8080/tarefas';

  httpOptions = {
    headers: new HttpHeaders({
     'Contet-Type': 'application/json' 
    })
  }

  constructor(
    private http: HttpClient
  ) { }


  read(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.url);
  }

  readById(id: string): Observable<Tarefa>{
    const newUrl = `${this.url}/${id}`
    console.log(newUrl)
    return this.http.get<Tarefa>(newUrl)
  }
  create(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.post<Tarefa>(this.url, tarefa)
  }

  update(tarefa: Tarefa): Observable<Tarefa>{
    const newUrl = `${this.url}/update/${tarefa.id}`
    return this.http.put<Tarefa>(newUrl, tarefa)
  }
}
