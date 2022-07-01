import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/shared/services/backend.service';
import { RoverPhotosResponseModel } from '../models/RoverPhotosResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RoverService {

  constructor(private backendService: BackendService) { }

  getAllPhotosFromCuriosity(): Observable<RoverPhotosResponseModel[]>{
    return this.backendService.GETRequest(`v1/rovers/curiosity/photos?sol=1000&api_key=o1aKYV1jBJgbgMcBpfiAnsuPNx8L9FtzL1SW4TRa`);

  }


}