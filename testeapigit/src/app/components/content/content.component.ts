import { Component, OnInit } from '@angular/core';
import { Octokit } from '@octokit/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    const octokit = new Octokit({
      auth: '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'
    })
    
    const res = async () => {
      await octokit.request('GET /repos/macieleustaquio/pizza/issues?milestone,state,assignee,creator,mentioned,labels,sort,direction,since,per_page,page', {
        owner: 'OWNER',
        repo: 'REPO'
      })
    }
  }

}
