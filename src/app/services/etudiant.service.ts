import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../classes/etudiant';
const baseUrl='http://localhost:8000/etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }

  getEtudiant():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(`${baseUrl}`);
  }
  addEtudiant(newEtud: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(baseUrl, newEtud);
  }
  getEtudiantById(etudiantID: number):Observable<Etudiant>{
    return this.http.get<Etudiant>(`${baseUrl}/${etudiantID}`);
  }
  UpdateEtudiant(id: number, data: any): Observable<Etudiant> {
    return this.http.put<Etudiant>(baseUrl + "/" + id, data);
  }
  deleteEtudiant(idEtud:Number):Observable<Etudiant>{
    return this.http.delete<Etudiant>(baseUrl + "/" + idEtud);
  }
  
}
