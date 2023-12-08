import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HeroComponent } from './hero/hero.component';
import { ListaComponent } from './list/lista.component';


@NgModule({
    declarations:[
        HeroComponent,
        ListaComponent
    ],
    exports:[
        HeroComponent,
        ListaComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}