import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  userData!: any;
  api: string = 'http://localhost:8080/users.php';


  constructor(private http:HttpClient) { }


  public adduser(userData: any){
    return this.http.post<User>(this.api, userData).subscribe((res) =>  {
      this.getusers();
    });
  }

  public getusers(): Observable<User>{
    return this.http.get<User>(this.api);
  }
}
