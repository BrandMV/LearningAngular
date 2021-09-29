import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from 'src/app/modelo/config.model';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})

export class ConfigComponent implements OnInit {

  allowRegister = false

  constructor(private router: Router, private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe(
      (config: Config) =>{
        //@ts-ignore
        this.allowRegister = config.allowRegister
      }
    )
  }

  save(): void{
    let config = {allowRegister: this.allowRegister}
    this.configService.modifyConfig(config)
    this.router.navigate(['/'])
  }

}
