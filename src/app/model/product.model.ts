export class Product{
    public sku:string;
    public name:string;
    public imgUrl:string;
    public department:string[];
    public price:number;

    constructor(sku:string,name:string,imgUrl:string,department:string[],price:number){
        this.sku=sku;
        this.name=name;
        this.imgUrl=imgUrl;
        this.department=department;
        this.price=price;
    }
}