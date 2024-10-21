import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RSVService } from 'src/app/rsv.service';

@Component({
  selector: 'app-submit-policy',
  templateUrl: './submit-policy.component.html',
  styleUrls: ['./submit-policy.component.css']
})
export class SubmitPolicyComponent implements OnInit {
  policyForm: FormGroup;
  currentDate: any;
  departmentOptions: any[] = [];
  folderOptions: any[] = [];
  getSubFolderOptions: any[] = [];
  FolderId: any;
  getSubFolder: any[];
  employeeOptions: any;
  regulationByOptions: any;
  Policydata: any;
  PolicyId: any;
  data: any;
  constructor(private fb: FormBuilder, private rsv: RSVService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.policyForm = this.fb.group({
      PolicyId: 0,
      ReferenceNo: [{ value: '', disabled: true }],
      PolicyName: ['', Validators.required],
      Description: ['', Validators.required],
      DepartmentId: ['', Validators.required],
      FolderId: ['', Validators.required],
      SubFolderId: ['', Validators.required],
      ReviewerId: ['', Validators.required],
      CreatedDate: ['', Validators.required],
      RegulationById: ['', Validators.required],
      PolicyWrittenBy: ['', Validators.required]
    });
    this.GetDepartment();
    this.GetFolder();
    this.GetSubFolder();
    this.GetEmployee();
    this.GetRegulation();
    this.route.params.subscribe(param => {
      console.log(param)
      if (param.id) {
        this.PolicyId = param.id;
        this.Policy();
      } else {
        this.Policydata = null;
      }
    }
    )
  }

  Policy() {
    this.rsv.getpolicybyid(this.PolicyId).subscribe(data => {
      this.Policydata = data['Data'];
      let date_only = this.Policydata.CreatedDate.split('T')[0]
      // this.policyForm.get('CreatedDate').patchValue(date_only)
      console.log(date_only)
      console.log(this.Policydata)
      if (this.Policydata) {
        this.policyForm.patchValue({
          PolicyId: this.Policydata.PolicyId,
          PolicyName: this.Policydata.PolicyName,
          Description: this.Policydata.Description,
          DepartmentId: this.Policydata.DepartmentId,
          FolderId: this.Policydata.FolderId,
          SubFolderId: this.Policydata.SubFolderId,
          ReviewerId: this.Policydata.ReviewerId,
          CreatedDate: date_only,
          RegulationById: this.Policydata.RegulationById,
          PolicyWrittenBy: this.Policydata.PolicyWrittenBy,
        });
      }
      this.onFolderChange();
    });
  }
  Cancel() {
    this.policyForm.reset();
  }
  goBack() {
    window.history.back();
  }
  GetDepartment() {
    this.rsv.GetDepartmentList().subscribe(data => {
      this.departmentOptions = data['Data'];
      console.log(this.departmentOptions);
    })
  }
  GetFolder() {
    this.rsv.GetFolderList().subscribe(data => {
      this.folderOptions = data['Data'];
    })
  }
  GetSubFolder() {
    this.rsv.GetSubFolderList().subscribe(data => {
      this.getSubFolderOptions = data['Data'];
    })

  }
  onFolderChange() {
    const SelectedFolderId = this.policyForm.get('FolderId').value;
    if (SelectedFolderId) {
      this.getSubFolder = this.getSubFolderOptions.filter(subFolder => subFolder.FolderId == SelectedFolderId);
    }
  }
  GetEmployee() {
    this.rsv.GetEmployeeList().subscribe(data => {
      this.employeeOptions = data['Data'];

    })
  }
  GetRegulation() {
    this.rsv.GetRegulationList().subscribe(data => {
      this.regulationByOptions = data['Data'];

    })
  }
  OnSubmit() {
    if (this.policyForm.valid && !this.PolicyId) {
      this.rsv.savePolicy(this.policyForm.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['/PolicyList']);
      })
      this.policyForm.reset();
    } else {
      this.rsv.UpdatePolicy(this.PolicyId, this.policyForm.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['/PolicyList']);
      })
      this.policyForm.reset();
    }

  }
}









