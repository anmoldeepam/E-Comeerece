import { Route, Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";

export const routes:Route[] =[
    {
        path:'',
    component:ProductComponent,
    children:[
        {
            path:'product',
            loadChildren:() => import('./product/product.module').then((m)=>m.ProductModule)
        }
    ]
}
]