import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RSVService } from 'src/app/rsv.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  policyList: any;
  policyMap: any;
  employeeOptions: any;
  entry: any;
  id: any;
  constructor(private rsv: RSVService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.GetPolicyList();
    this.GetEmployee();
  }
  GetPolicyList() {
    this.rsv.GetPolicyList().subscribe(data => {
      if (data) {
        this.policyList = data['Data'];
        console.log(this.policyList)
      }
      console.log(data);
    });
  }
  GetEmployee() {
    this.rsv.GetEmployeeList().subscribe(data => {
      if (data) {
        this.employeeOptions = data['Data'];
        console.log(this.employeeOptions);

        this.policyMap = {};
        this.employeeOptions.forEach(policy => {

          this.policyMap[policy.EmployeeId] = `${policy.FirstName} ${policy.MiddleName || ''} ${policy.LastName}`.trim();
        });
        console.log(this.policyMap);
      }
    });
  }

  onEdit(PolicyId: number) {
    console.log(`Navigating to submit-policy with ID: ${PolicyId}`);
    this.router.navigate(['/submit-policy', PolicyId]);
  }
  delete(PolicyId: number) {
    this.rsv.DeletePolicy(PolicyId).subscribe(data => {
      console.log(data);
      this.GetPolicyList();
    });
  }
  onBack() {
    this.router.navigate(['/submit-policy']);
  }
}


