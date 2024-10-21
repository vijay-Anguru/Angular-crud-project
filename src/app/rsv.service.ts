import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://localhost:44369/api/'
@Injectable({
  providedIn: 'root'
})
export class RSVService {

  constructor(public http: HttpClient) { }
  saveLogin(data) {
    return this.http.post(url + 'lg/Login', data);
  }
  Updatelogin(id, data) {
    return this.http.put(url + 'lg/Monika/' + id, data);
  }
  LoginList(data: any) {
    return this.http.get(url + 'lg/Monika');
  }
  deleteLogin(id) {
    return this.http.delete(url + 'lg/Monika/' + id);
  }
  getloginbyid(id) {
    return this.http.get(`${url}/lg/Monika/${id}`);
  }
  saveEvent(data) {
    return this.http.post(url + 'event', data);
  }
  GetEventList() {
    return this.http.get(url + 'event');
  }
  GetSessionList() {
    return this.http.get(url + 'session');
  }
  GetSpeakerList() {
    return this.http.get(url + 'speaker');
  }
  saveSession(data) {
    return this.http.post(url + 'session', data);
  }
  saveSpeaker(data) {
    return this.http.post(url + 'speaker', data);
  }
  UpdateEvent(id, data) {
    return this.http.put(url + 'event/update/' + id, data);
  }
  UpdateSession(id, data) {
    return this.http.put(url + 'session/update/' + id, data);
  }
  UpdateSpeaker(id, data) {
    return this.http.put(url + 'speaker/update/' + id, data);
  }
  deleteEvent(id) {
    return this.http.delete(url + 'event/' + id);
  }
  deleteSession(id) {
    return this.http.delete(url + 'session/' + id);
  }
  deleteSpeaker(id) {
    return this.http.delete(url + 'speaker/' + id);
  }
  geteventbyid(id) {
    return this.http.get(url + `event/${id}`);
  }
  getsessionbyid(id) {
    return this.http.get(url + `session/${id}`);
  }
  getspeakerbyid(id) {
    return this.http.get(url + `speaker/${id}`);
  }
  GetDepartmentList() {
    return this.http.get(url + 'master/department');
  }
  GetFolderList() {
    return this.http.get(url + 'master/folder');
  }
  GetSubFolderList() {
    return this.http.get(url + 'master/subfolder');
  }
  GetEmployeeList() {
    return this.http.get(url + 'master/employee');
  }
  GetRegulationList() {
    return this.http.get(url + 'master/regulation');
  }
  savePolicy(data) {
    return this.http.post(url + 'master', data);
  }
  UpdatePolicy(id, data) {
    return this.http.put(url + 'master/update/' + id, data);
  }
  GetPolicyList() {
    return this.http.get(url + 'master/policy');
  }
  getpolicybyid(id) {
    return this.http.get(url + `master/${id}`);
  }
  DeletePolicy(id) {
    return this.http.delete(url + 'master/' + id);
  }
}

