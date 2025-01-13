import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private dataSubject = new Subject();

  constructor(private http: HttpClient) {
    this.LoadAllPhotos();
   }

   private url = 'http://localhost:3000/photo/';

   LoadAllPhotos() {
     this.http.get(this.url).subscribe((photos) => {
       this.dataSubject.next(photos);
     });
   }

   getAllPhotos() {
     return this.dataSubject
   }

   getPhotosById(id: number) {
     return this.http.get(this.url + id).forEach(()=>this.LoadAllPhotos());
  }


  createPhoto(photo: any) {
    return this.http.post(this.url, photo).forEach(() => this.LoadAllPhotos());
  }

  updatePhoto(photo: any) {
    return this.http.put(this.url + photo.id, photo).forEach(() => this.LoadAllPhotos());
  }

  deletePhoto(id: number) {
    return this.http.delete(this.url + id).forEach(() => this.LoadAllPhotos());
  }

  patchPhoto(id: number, photo: any) {
    return this.http.patch(this.url + id, photo).forEach(() => this.LoadAllPhotos());
  }
}
