import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects=[
   
    {
    title:"Social Med",
    image:"social med.png",
    info:"Visit Social Med",
    link:"https://social-med.vercel.app/"
  },
  {
    title:"AR CAR",
    image:"arcar.png",
    info: "Watch Video ",
    link:"https://twitter.com/amanyddv_/status/1605168551295586305?s=20&t=7Cj3lEQPFobZEHmhsMFXZw"
  },
  {
    title:"Music Player",
    image:"music player.png",
    info: "Download",
    link:"https://oealfnepepsbsdmsnqkq.supabase.co/storage/v1/object/public/opop/main.exe?t=2023-01-31T21%3A07%3A58.608Z"

  }
 ]

}
