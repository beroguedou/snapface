import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Ninie',
            description: 'Le magnifique doudou de Duna !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createDate: new Date(),
            snaps: 120,
            location: 'Paris'
        },
  
        {
            id: 2,
            title: 'Fifie',
            description: 'Le magnifique doudou de Duna !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createDate: new Date(),
            snaps: 233
        },
  
        {   
            id: 3,
            title: 'Ninie',
            description: 'Le magnifique doudou de Duna !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createDate: new Date(),
            snaps: 6,
            location: 'Paris'
        },
  
        {
            id: 4,
            title: 'Fifie',
            description: 'Le magnifique doudou de Duna !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createDate: new Date(),
            snaps: 10
        }
      ];


    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    getAllFaceSnaps():  FaceSnap[] {
        return this.faceSnaps;
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType == 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

    }
        

}