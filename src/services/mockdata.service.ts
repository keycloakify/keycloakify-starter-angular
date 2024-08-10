// src/app/services/mock-data.service.ts
import { Injectable } from '@angular/core';
import * as mockData from '../assets/mockdata.json';
import { KcContext } from 'keycloakify/login/KcContext/KcContext';
@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private data: any = mockData;

  getData(pageId: string): KcContext {
    const clonedData = { ...this.data };
    clonedData.pageId = pageId; 
    return clonedData;
  }
}
