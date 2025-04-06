export interface Product{
    description:string;
    price: number;
}

const phone: Product = {
    description: 'Nokia',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalulationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalulationOptions): [number, number]{
    const {tax, products} = options;
//function taxCalculation({tax, products}: TaxCalulationOptions): [number, number]{
    let total = 0;

    //options.products.forEach( product => {
        products.forEach( ({price}) => {
        total += price;
    });
    return [total, total * tax]; 
}

const shopingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shopingCart,
    tax
});


//console.log('total ', total);
//console.log('tax ', taxTotal);