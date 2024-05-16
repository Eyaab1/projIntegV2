import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from '../classes/enseignant';
const baseUrl='';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http:HttpClient) { }

  getEnseiggnant():Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(`${baseUrl}`);

  }

  addEnseignant(newEns: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(baseUrl, newEns);

  }
  getEnseignantById(EnsId: number):Observable<Enseignant>{
    return this.http.get<Enseignant>(`${baseUrl}/${EnsId}`);
  }
  UpdateEnseignant(id: number, data: any): Observable<Enseignant> {
    return this.http.put<Enseignant>(baseUrl + "/" + id, data);
  }
  deleteEnseignant(commId:Number):Observable<Enseignant>{
    return this.http.delete<Enseignant>(baseUrl + "/" + commId);
  }
}

