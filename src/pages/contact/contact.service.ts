import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

    getContactList(): any[] {
        return [
      {
        "empDesignation" : "Project Manager",
        "empEducation" : "B.Sc",
        "empExperience" : "5 Years",
        "empName" : "Contact1",
        "empid" : "contact1"
      }, 
      {
        "empDesignation" : "Senior Project Engineer",
        "empEducation" : "B.E",
        "empExperience" : "6 Years",
        "empName" : "Contact2",
        "empid" : "contact2"
      }, 
      {
        "empDesignation" : "Project Engineer",
        "empEducation" : "B.E",
        "empExperience" : "7 Years",
        "empName" : "Contact3",
        "empid" : "contact3"
      }, 
      {
        "empDesignation" : "Engineer",
        "empEducation" : "B.E",
        "empExperience" : "1 Years",
        "empName" : "Contact4",
        "empid" : "contact4"
      }, 
      {
        "empDesignation" : "Engineer",
        "empEducation" : "B.Sc",
        "empExperience" : "2 Years",
        "empName" : "Contact5",
        "empid" : "contact5"
      }, 
      {
        "empDesignation" : "Project Manager",
        "empEducation" : "M.E",
        "empExperience" : "10 Years",
        "empName" : "Contact6",
        "empid" : "contact6"
      }
        ];
    }

}