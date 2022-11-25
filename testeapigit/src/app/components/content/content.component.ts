import { Component, OnInit } from '@angular/core';
import { Octokit } from '@octokit/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  issueGit = [];
  repoGit = [];
  constructor() {
    this.loadIssue();
    this.loadRepo();
  }

  loadIssue = async () => {
    const octokit = new Octokit({
      auth: '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'
    })
    
    const res = await octokit.request('GET /repos/macieleustaquio/pizza/issues', {
        owner: 'OWNER',
        repo: 'REPO'
      })
    console.log(res);
    this.issueGit = res.data;
    console.log(this.issueGit);
  }

  loadRepo = async () => {
    const octokit = new Octokit({
      auth: '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'
    })
    
    const res = await octokit.request('GET /users/macieleustaquio/repos', {
        owner: 'OWNER',
        repo: 'REPO'
      })
    console.log(res);
    this.repoGit = res.data;
    console.log(this.repoGit);
  }

  ngOnInit(): void {
  }

}
