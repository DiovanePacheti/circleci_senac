/**
*A quantidade vendida pode ser de um ou mais unidades 
* --> Se estoque ficar negativo uma exception deve ser lançada
* --> valor de venda nao pode ser maior do que o valor de compra
*@param 
*/
//import Product from '../model/product';

export default function sellProduct(product, amount){
	product.stock -= 1;
	return product;
}