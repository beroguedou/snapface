import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap

  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService,
              private router: Router) {}

  ngOnInit() {
    this.buttonText = 'Oh snap !';
  }

  onClickSnap() {
    if (this.buttonText === 'Oh snap !') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Ooops, unSnap !'

    } else {
      this.buttonText = 'Oh snap !';
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');

    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }
}
