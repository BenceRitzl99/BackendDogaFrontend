import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  photos:any

  columns = [
    {key: 'id', text:'#', type: 'plain'}, 
    {key: 'title', text:'title', type: 'text'},
    {key: 'artist', text:'artist', type: 'text'},
    {key: 'year', text:'year', type: 'text'},
    {key: 'type', text:'type', type: 'text'},
    {key: 'image_url', text:'image', type: 'url'}
  ]
  newPhoto:any =[]
  constructor(private base:BaseService){
    this.base.getAllPhotos().subscribe(
      (photos) => this.photos = photos
    );
  }

  addPhoto(){
    this.base.createPhoto(this.newPhoto)
    this.newPhoto = {}
  }

  editPhoto(photo:any){
    this.base.updatePhoto(photo.id)
  }

  deletePhoto(id:number){
    this.base.deletePhoto(id)
  }
}
